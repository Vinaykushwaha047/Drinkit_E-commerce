const express = require('express');
const path = require('path');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;
const dbDirectory = path.join(__dirname, 'data');
const dbPath = path.join(dbDirectory, 'drinkit.db');

fs.mkdirSync(dbDirectory, { recursive: true });

const db = new sqlite3.Database(dbPath, (error) => {
  if (error) {
    console.error('Error opening SQLite database:', error.message);
    process.exit(1);
  }
  console.log('SQLite database ready at', dbPath);
});

function initializeDatabase() {
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        phone TEXT UNIQUE NOT NULL,
        full_name TEXT,
        email TEXT,
        otp_code TEXT,
        otp_expires_at TEXT,
        is_verified INTEGER DEFAULT 0,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
        last_login_at TEXT
      )
    `);
  });
}

app.use(express.json({ limit: '1mb' }));
app.use(express.static(__dirname));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Drinkit auth server is running' });
});

app.post('/api/auth/request-otp', (req, res) => {
  const phone = String(req.body.phone || '').replace(/\D/g, '');

  if (!/^\d{10}$/.test(phone)) {
    return res.status(400).json({
      success: false,
      message: 'Enter a valid 10-digit mobile number.'
    });
  }

  const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString();

  db.run(
    `
      INSERT INTO users (phone, otp_code, otp_expires_at, is_verified, created_at, updated_at)
      VALUES (?, ?, ?, 0, datetime('now'), datetime('now'))
      ON CONFLICT(phone)
      DO UPDATE SET
        otp_code = excluded.otp_code,
        otp_expires_at = excluded.otp_expires_at,
        is_verified = 0,
        updated_at = datetime('now')
    `,
    [phone, otpCode, otpExpiresAt],
    (error) => {
      if (error) {
        console.error('Error saving OTP for user:', error.message);
        return res.status(500).json({
          success: false,
          message: 'Unable to generate OTP. Please try again.'
        });
      }

      return res.json({
        success: true,
        message: 'OTP sent successfully.',
        phone,
        demoOtp: otpCode
      });
    }
  );
});

app.post('/api/auth/verify-otp', (req, res) => {
  const phone = String(req.body.phone || '').replace(/\D/g, '');
  const otpCode = String(req.body.otp || '').trim();
  const fullName = String(req.body.full_name || '').trim();

  if (!/^\d{10}$/.test(phone)) {
    return res.status(400).json({
      success: false,
      message: 'Phone number is invalid.'
    });
  }

  if (!/^\d{6}$/.test(otpCode)) {
    return res.status(400).json({
      success: false,
      message: 'Enter the 6-digit OTP.'
    });
  }

  db.get(
    'SELECT * FROM users WHERE phone = ?',
    [phone],
    (fetchError, user) => {
      if (fetchError) {
        return res.status(500).json({
          success: false,
          message: 'Database error while verifying OTP.'
        });
      }

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'No account found for this mobile number.'
        });
      }

      if (!user.otp_code || !user.otp_expires_at) {
        return res.status(400).json({
          success: false,
          message: 'OTP was not generated for this account.'
        });
      }

      const expiresAt = new Date(user.otp_expires_at).getTime();
      const isExpired = Date.now() > expiresAt;

      if (isExpired) {
        return res.status(400).json({
          success: false,
          message: 'OTP has expired. Please request a new one.'
        });
      }

      if (String(user.otp_code) !== otpCode) {
        return res.status(401).json({
          success: false,
          message: 'Invalid OTP. Please check the code and try again.'
        });
      }

      db.run(
        `
          UPDATE users
          SET is_verified = 1,
              last_login_at = datetime('now'),
              updated_at = datetime('now'),
              full_name = COALESCE(?, full_name, ?)
          WHERE phone = ?
        `,
        [fullName || null, `User ${phone.slice(-4)}`, phone],
        (updateError) => {
          if (updateError) {
            console.error('Error verifying OTP:', updateError.message);
            return res.status(500).json({
              success: false,
              message: 'Unable to complete login.'
            });
          }

          const responseUser = {
            id: user.id,
            phone: user.phone,
            full_name: fullName || user.full_name || `User ${phone.slice(-4)}`,
            is_verified: 1,
            created_at: user.created_at,
            last_login_at: new Date().toISOString()
          };

          return res.json({
            success: true,
            message: 'OTP verified successfully.',
            user: responseUser
          });
        }
      );
    }
  );
});

app.get('/api/users', (req, res) => {
  db.all('SELECT id, phone, full_name, email, is_verified, created_at, last_login_at FROM users ORDER BY created_at DESC', (error, rows) => {
    if (error) {
      return res.status(500).json({ success: false, message: 'Unable to fetch users.' });
    }

    return res.json({ success: true, users: rows });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

initializeDatabase();

app.listen(PORT, () => {
  console.log(`Drinkit app running at http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
  db.close();
  process.exit(0);
});
