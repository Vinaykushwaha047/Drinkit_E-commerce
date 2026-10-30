// Data Models
const originalDrinkImages = {
  Beer: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
  BeerBottle1: "./Images/Kingfisher_Strong.jpg",
  BeerBottle2: "./Images/Kingfisher_Premium.jpg",
  BeerBottle3: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  BeerBottle4: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2e6?auto=format&fit=crop&w=800&q=80",
  BeerBottle5: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
  BeerBottle6: "https://images.unsplash.com/photo-1547595628-c61b4d96f3bd?auto=format&fit=crop&w=800&q=80",
  Wine: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
  Rum: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2e6?auto=format&fit=crop&w=800&q=80",
  Whisky: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  Vodka: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80",
  Cabernet: "https://images.unsplash.com/photo-1547595628-c61b4d96f3bd?auto=format&fit=crop&w=900&q=80",
  Merlot: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=900&q=80",
  Pinot: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=900&q=80",
  Chardonnay: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80",
  Rosé: "https://images.unsplash.com/photo-1532635241-0f8f5d25f1e1?auto=format&fit=crop&w=900&q=80",
  Sparkling: "https://images.unsplash.com/photo-1499636136210-6d8479053b3d?auto=format&fit=crop&w=900&q=80",
  Sula: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
  Grover: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=800&q=80",
  Fratelli: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
  Jacob: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
  Beringer: "https://images.unsplash.com/photo-1547595628-c61b4d96f3bd?auto=format&fit=crop&w=800&q=80",
  Kingfisher: "https://images.unsplash.com/photo-1532635241-0f8f5d25f1e1?auto=format&fit=crop&w=600&q=80",
  Bira: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
  Heineken: "https://images.unsplash.com/photo-1575444758702-4a6b922e1e7e?auto=format&fit=crop&w=600&q=80"
};

const allCategories = [
  { name: "Beer", icon: originalDrinkImages.Beer, link: "#" },
  { name: "Wine", icon: originalDrinkImages.Wine, link: "#" },
  { name: "Rum", icon: originalDrinkImages.Rum, link: "#" },
  { name: "Whisky", icon: originalDrinkImages.Whisky, link: "#" },
  { name: "Vodka", icon: originalDrinkImages.Vodka, link: "#" },
  { name: "Kingfisher Premium", icon: "./Images/kingfisher.jpg", link:"https://blinkit.com/cn/null/cid/229/1982"},
  { name: "Kingfisher Strong", icon: "./Images/kingfisherstrong.jpg", link: "https://blinkit.com/cn/null/cid/14/922"},
  { name: "Hunter", icon: "./Images/hunter.jpg", link: "https://blinkit.com/cn/null/cid/1487/1489"},
  { name: "Kingfisher 500ml", icon: "./Images/kingfishercan.jpg", link: "https://blinkit.com/cn/null/cid/332/1102" },
  { name: "Tuborg 650ml", icon: "./Images/tuborg.jpg", link: "https://blinkit.com/cn/null/cid/1237/940"},
  { name: "Lemount 650ml", icon: "./Images/lemount.jpg", link: "https://blinkit.com/cn/null/cid/15/954"},
  { name: "Hunter 500ml", icon: "./Images/huntercan.jpg", link: "https://blinkit.com/cn/null/cid/9/944"},
  { name: "Haywards 5000 650ml", icon: "./Images/hayward.jpg", link: "https://blinkit.com/cn/null/cid/888/28"},
  { name: "Boult 650ml", icon: "./Images/boult.jpg", link: "https://blinkit.com/cn/null/cid/12/957"},
  { name: "Mounts 500ml", icon: "./Images/mountcan.jpg", link: "https://blinkit.com/cn/null/cid/16/1165"},
  { name: "Mounts 650ml", icon: "./Images/mount5000.jpg", link: "https://blinkit.com/cn/null/cid/1557/50"}
];

const productCatalog = [
  { id: 1, name: "Kingfisher Strong", weight: "650 ml", price: 190, mrp: 220, category: "Beer", image: originalDrinkImages.BeerBottle1 },
  { id: 2, name: "Kingfisher Premium Malt Strong", weight: "650 ml", price: 210, mrp: 240, category: "Beer", image: originalDrinkImages.BeerBottle2 },
  { id: 3, name: "Budweiser Magnum", weight: "650 ml", price: 260, mrp: 300, category: "Beer", image: originalDrinkImages.BeerBottle3 },
  { id: 4, name: "BOLT Extra Premium Strong", weight: "650 ml", price: 230, mrp: 270, category: "Beer", image: originalDrinkImages.BeerBottle4 },
  { id: 5, name: "Haywards 5000", weight: "650 ml", price: 240, mrp: 280, category: "Beer", image: originalDrinkImages.BeerBottle5 },
  { id: 6, name: "Hunter Strong", weight: "650 ml", price: 220, mrp: 260, category: "Beer", image: originalDrinkImages.BeerBottle6 },
  { id: 7, name: "President 5000", weight: "500 ml", price: 230, mrp: 270, category: "Beer", image: originalDrinkImages.BeerBottle1 },
  { id: 8, name: "Power 10000", weight: "500 ml", price: 260, mrp: 300, category: "Beer", image: originalDrinkImages.BeerBottle2 },
  { id: 9, name: "Lemount Strong", weight: "650 ml", price: 210, mrp: 245, category: "Beer", image: originalDrinkImages.BeerBottle3 },
  { id: 10, name: "Mount 6000", weight: "650 ml", price: 220, mrp: 260, category: "Beer", image: originalDrinkImages.BeerBottle4 },
  { id: 11, name: "Black Fort", weight: "650 ml", price: 240, mrp: 275, category: "Beer", image: originalDrinkImages.BeerBottle5 },
  { id: 12, name: "Dabang", weight: "650 ml", price: 220, mrp: 250, category: "Beer", image: originalDrinkImages.BeerBottle6 },
  { id: 13, name: "Baba 10000", weight: "650 ml", price: 250, mrp: 290, category: "Beer", image: originalDrinkImages.BeerBottle1 },
  { id: 14, name: "Maharani Blue Label", weight: "650 ml", price: 270, mrp: 310, category: "Beer", image: originalDrinkImages.BeerBottle2 },
  { id: 15, name: "Kingfisher Ultra Max", weight: "650 ml", price: 230, mrp: 265, category: "Beer", image: originalDrinkImages.BeerBottle3 },
  { id: 16, name: "Kingfisher Premium Lager", weight: "650 ml", price: 170, mrp: 200, category: "Beer", image: originalDrinkImages.BeerBottle4 },
  { id: 17, name: "Kingfisher Ultra", weight: "330 ml", price: 150, mrp: 185, category: "Beer", image: originalDrinkImages.BeerBottle5 },
  { id: 18, name: "Kingfisher Light", weight: "330 ml", price: 145, mrp: 175, category: "Beer", image: originalDrinkImages.BeerBottle6 },
  { id: 19, name: "Heineken", weight: "330 ml", price: 210, mrp: 240, category: "Beer", image: originalDrinkImages.BeerBottle1 },
  { id: 20, name: "Budweiser", weight: "330 ml", price: 190, mrp: 225, category: "Beer", image: originalDrinkImages.BeerBottle2 },
  { id: 21, name: "Corona Extra", weight: "330 ml", price: 260, mrp: 290, category: "Beer", image: originalDrinkImages.BeerBottle3 },
  { id: 22, name: "Peroni Nastro Azzurro", weight: "330 ml", price: 260, mrp: 300, category: "Beer", image: originalDrinkImages.BeerBottle4 },
  { id: 23, name: "Kirin Ichiban", weight: "330 ml", price: 240, mrp: 280, category: "Beer", image: originalDrinkImages.BeerBottle5 },
  { id: 24, name: "STOK Lager", weight: "330 ml", price: 180, mrp: 210, category: "Beer", image: originalDrinkImages.BeerBottle6 },
  { id: 25, name: "Hunter Refreshing Strong Natural Wheat Beer", weight: "650 ml", price: 260, mrp: 310, category: "Beer", image: originalDrinkImages.BeerBottle1 },
  { id: 26, name: "Woodpecker Natural Wheat Beer", weight: "500 ml", price: 250, mrp: 290, category: "Beer", image: originalDrinkImages.BeerBottle2 },
  { id: 27, name: "Hoegaarden Belgian Witbier", weight: "330 ml", price: 360, mrp: 420, category: "Beer", image: originalDrinkImages.BeerBottle3 },
  { id: 28, name: "Bira 91 Blonde Summer Lager", weight: "330 ml", price: 220, mrp: 250, category: "Beer", image: originalDrinkImages.BeerBottle4 },
  { id: 29, name: "Simba", weight: "330 ml", price: 170, mrp: 200, category: "Beer", image: originalDrinkImages.BeerBottle5 },
  { id: 30, name: "Tuborg", weight: "330 ml", price: 165, mrp: 190, category: "Beer", image: originalDrinkImages.BeerBottle6 },
  { id: 31, name: "Carlsberg", weight: "330 ml", price: 180, mrp: 205, category: "Beer", image: originalDrinkImages.BeerBottle1 },
  { id: 32, name: "Foster's", weight: "330 ml", price: 190, mrp: 220, category: "Beer", image: originalDrinkImages.BeerBottle2 },
  { id: 33, name: "Royal Challenge Premium", weight: "500 ml", price: 200, mrp: 235, category: "Beer", image: originalDrinkImages.BeerBottle3 },
  { id: 34, name: "Knock Out", weight: "650 ml", price: 240, mrp: 280, category: "Beer", image: originalDrinkImages.BeerBottle4 },
  { id: 35, name: "Godfather", weight: "650 ml", price: 230, mrp: 270, category: "Beer", image: originalDrinkImages.BeerBottle5 },
  { id: 36, name: "White Rhino", weight: "500 ml", price: 220, mrp: 260, category: "Beer", image: originalDrinkImages.BeerBottle6 },
  { id: 37, name: "BeeYoung", weight: "330 ml", price: 160, mrp: 190, category: "Beer", image: originalDrinkImages.BeerBottle1 },
  { id: 38, name: "Sula Cabernet Shiraz", weight: "750 ml", price: 620, mrp: 700, category: "Wine", image: originalDrinkImages.Sula },
  { id: 39, name: "Sula Reserve Merlot", weight: "750 ml", price: 680, mrp: 760, category: "Wine", image: originalDrinkImages.Sula },
  { id: 40, name: "Grover Zampa La Reserve", weight: "750 ml", price: 710, mrp: 790, category: "Wine", image: originalDrinkImages.Grover },
  { id: 41, name: "Fratelli Sangiovese", weight: "750 ml", price: 760, mrp: 840, category: "Wine", image: originalDrinkImages.Fratelli },
  { id: 42, name: "Jacob's Creek Shiraz", weight: "750 ml", price: 650, mrp: 720, category: "Wine", image: originalDrinkImages.Jacob },
  { id: 43, name: "Beringer Sparkling", weight: "750 ml", price: 760, mrp: 840, category: "Wine", image: originalDrinkImages.Beringer },
  { id: 44, name: "Sula Rosé", weight: "750 ml", price: 590, mrp: 660, category: "Wine", image: originalDrinkImages.Rosé },
  { id: 45, name: "Sula Brut", weight: "750 ml", price: 790, mrp: 880, category: "Wine", image: originalDrinkImages.Sparkling },
  { id: 52, name: "Smirnoff Red", weight: "180 ml", price: 360, mrp: 410, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 53, name: "Absolut Blue", weight: "180 ml", price: 430, mrp: 490, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 54, name: "Grey Goose", weight: "180 ml", price: 980, mrp: 1100, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 55, name: "Magic Moments", weight: "180 ml", price: 220, mrp: 260, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 56, name: "Smirnoff", weight: "180 ml", price: 360, mrp: 410, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 57, name: "White Mischief", weight: "180 ml", price: 210, mrp: 250, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 58, name: "White Fox", weight: "180 ml", price: 230, mrp: 270, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 59, name: "Romanov", weight: "180 ml", price: 190, mrp: 230, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 60, name: "Absolut", weight: "750 ml", price: 2400, mrp: 2700, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 61, name: "Grey Goose", weight: "750 ml", price: 4800, mrp: 5200, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 62, name: "Cîroc", weight: "750 ml", price: 4200, mrp: 4600, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 63, name: "Belvedere", weight: "750 ml", price: 4500, mrp: 4900, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 64, name: "Russian Standard", weight: "750 ml", price: 2200, mrp: 2500, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 65, name: "Finlandia", weight: "750 ml", price: 2100, mrp: 2400, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 66, name: "Skyy Vodka", weight: "750 ml", price: 1900, mrp: 2200, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 67, name: "Ketel One", weight: "750 ml", price: 3400, mrp: 3800, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 68, name: "Tito’s Handmade Vodka", weight: "750 ml", price: 3200, mrp: 3600, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 69, name: "Beluga", weight: "750 ml", price: 5200, mrp: 5600, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 70, name: "M2 Magic Moments", weight: "180 ml", price: 250, mrp: 290, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 71, name: "V21", weight: "180 ml", price: 240, mrp: 280, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 72, name: "Mikhail", weight: "180 ml", price: 200, mrp: 240, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 73, name: "Milestone", weight: "180 ml", price: 210, mrp: 250, category: "Vodka", image: originalDrinkImages.Vodka },
  { id: 74, name: "Stolichnaya (Stoli)", weight: "750 ml", price: 3200, mrp: 3600, category: "Vodka", image: originalDrinkImages.Vodka }
];

function makeVodkaBottleImage(volume, labelColor) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <rect width="200" height="200" rx="12" fill="#f8f9fb"/>
      <ellipse cx="100" cy="174" rx="43" ry="8" fill="#dfe3e8"/>
      <path d="M87 24h26v25l12 14v92a12 12 0 0 1-12 12H87a12 12 0 0 1-12-12V63l12-14z" fill="#dce8ee" stroke="#9aaab2" stroke-width="2"/>
      <path d="M87 24h26v13H87z" fill="${labelColor}"/>
      <rect x="77" y="78" width="46" height="57" rx="4" fill="${labelColor}"/>
      <text x="100" y="108" text-anchor="middle" font-family="Arial,sans-serif" font-size="9" font-weight="700" fill="#fff">${volume}</text>
      <path d="M91 49h18" stroke="#fff" stroke-width="3" opacity=".75"/>
    </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const vodkaLabelColors = ["#234d72", "#b51f35", "#54717a", "#173d69", "#b3262e", "#174887", "#30405e", "#1d4d78"];
productCatalog
  .filter(product => product.category === "Vodka")
  .forEach((product, index) => {
    product.image = makeVodkaBottleImage(
      product.weight,
      vodkaLabelColors[index % vodkaLabelColors.length]
    );
  });

const whiskyBrands = [
  ["Royal Stag", "180 ml", 340, 390],
  ["Imperial Blue", "180 ml", 320, 370],
  ["Blenders Pride", "180 ml", 440, 500],
  ["McDowell’s No.1", "180 ml", 300, 350],
  ["Signature", "180 ml", 390, 450],
  ["Officer’s Choice", "180 ml", 280, 330],
  ["Royal Challenge", "180 ml", 360, 420],
  ["8 PM", "180 ml", 290, 340],
  ["Bagpiper", "180 ml", 270, 320],
  ["Sterling Reserve", "180 ml", 410, 470],
  ["Rockford", "180 ml", 430, 490],
  ["Original Choice", "180 ml", 260, 310],
  ["After Dark", "180 ml", 380, 440],
  ["DSP Black", "180 ml", 400, 460],
  ["All Seasons", "180 ml", 350, 410],
  ["100 Pipers", "180 ml", 650, 740],
  ["Blenders Pride Reserve Collection", "180 ml", 520, 600],
  ["Antiquity Blue", "180 ml", 560, 640],
  ["Signature Premier", "180 ml", 460, 530],
  ["Royal Stag Barrel Select", "180 ml", 420, 480],
  ["Oaksmith", "180 ml", 480, 550],
  ["Indri", "180 ml", 900, 1020],
  ["Amrut", "180 ml", 1100, 1240],
  ["Rampur", "180 ml", 1300, 1460],
  ["Paul John", "180 ml", 1200, 1360],
  ["Godawan", "180 ml", 1000, 1140],
  ["Longitude 77", "180 ml", 850, 970],
  ["Johnnie Walker Red Label", "750 ml", 2200, 2500],
  ["Johnnie Walker Black Label", "750 ml", 4200, 4700],
  ["Chivas Regal", "750 ml", 3900, 4400],
  ["Ballantine’s", "750 ml", 2600, 3000],
  ["Grant’s", "750 ml", 2100, 2450],
  ["Teacher’s", "750 ml", 2300, 2650],
  ["Black & White", "750 ml", 2000, 2350],
  ["Dewar’s", "750 ml", 2800, 3200],
  ["Jack Daniel’s", "750 ml", 3600, 4100],
  ["Jim Beam", "750 ml", 3000, 3450],
  ["Jameson", "750 ml", 3400, 3900],
  ["The Glenlivet", "750 ml", 5200, 5900],
  ["Glenfiddich", "750 ml", 5600, 6300],
  ["Monkey Shoulder", "750 ml", 4700, 5300],
  ["The Macallan", "750 ml", 9500, 10800]
];

const whiskyLabelColors = ["#8b5e24", "#274b37", "#7b3429", "#a37b36", "#384d36", "#7d4b29"];
whiskyBrands.forEach(([name, weight, price, mrp], index) => {
  productCatalog.push({
    id: 75 + index,
    name,
    weight,
    price,
    mrp,
    category: "Whisky",
    image: makeVodkaBottleImage(weight, whiskyLabelColors[index % whiskyLabelColors.length])
  });
});

const rumBrands = [
  ["Old Monk", "180 ml", 300, 350],
  ["McDowell’s No.1 Celebration Rum", "180 ml", 280, 330],
  ["Contessa Rum", "180 ml", 270, 320],
  ["Hercules XXX Rum", "180 ml", 260, 310],
  ["Sea Pirate Rum", "180 ml", 250, 300],
  ["Old Port Rum", "180 ml", 270, 320],
  ["Two Indies Rum", "180 ml", 450, 520],
  ["Old Monk XXX", "180 ml", 320, 370],
  ["Old Monk Gold Reserve", "180 ml", 360, 420],
  ["Old Monk Supreme", "180 ml", 380, 440],
  ["Old Monk Legend", "180 ml", 400, 460],
  ["Old Monk Amber", "180 ml", 350, 410],
  ["Bacardi Black", "180 ml", 400, 460],
  ["Captain Morgan Original Dark", "180 ml", 420, 480],
  ["Kraken Black Spiced Rum", "750 ml", 3200, 3600],
  ["Goslings Black Seal", "750 ml", 2900, 3300],
  ["Bacardi Carta Blanca", "180 ml", 380, 440],
  ["Bacardi Limon", "180 ml", 390, 450],
  ["Havana Club 3 Años", "750 ml", 2400, 2800],
  ["Malibu", "750 ml", 2700, 3100],
  ["Captain Morgan White Rum", "180 ml", 420, 480],
  ["Bacardi", "750 ml", 1800, 2100],
  ["Captain Morgan", "750 ml", 2200, 2550],
  ["Havana Club", "750 ml", 2500, 2900],
  ["Appleton Estate", "750 ml", 3400, 3900],
  ["Mount Gay", "750 ml", 3600, 4100],
  ["Flor de Caña", "750 ml", 3100, 3600],
  ["Diplomatico", "750 ml", 4200, 4800],
  ["Zacapa", "750 ml", 4800, 5500],
  ["Planteray (Plantation)", "750 ml", 3900, 4500],
  ["Don Q", "750 ml", 2800, 3250]
];

const rumLabelColors = ["#6b351f", "#8a4b2b", "#3d5638", "#9b6b2e", "#55372c", "#7c542c"];
rumBrands.forEach(([name, weight, price, mrp], index) => {
  productCatalog.push({
    id: 117 + index,
    name,
    weight,
    price,
    mrp,
    category: "Rum",
    image: makeVodkaBottleImage(weight, rumLabelColors[index % rumLabelColors.length])
  });
});

let selectedCategory = "Beer";
const expandedProductSections = {};
let productSearchQuery = "";
let cart = {}; // { id: count }

// Search Placeholder Animation
const searchTerms = ["beer", "vodka", "rum", "whiskey", "cigrate", "soda"];
let termIndex = 0;
const searchInput = document.getElementById("globalSearchInput");

setInterval(() => {
  termIndex = (termIndex + 1) % searchTerms.length;
  if (searchInput) {
    searchInput.placeholder = `Search "${searchTerms[termIndex]}"`;
  }
}, 2500);

// Render Category Boxes
function renderCategories() {
  const grid = document.getElementById("categoryGrid");
  if (!grid) return;

  grid.innerHTML = allCategories.map(cat => {
    const isActive = cat.name === selectedCategory ? "active" : "";
    const hasLink = !!cat.link;

    if (hasLink) {
      // Agar link hai to <a> tag banaye
      return `
        <a class="category-box ${isActive}" 
           href="${cat.link}" 
           target="_self" 
           rel="noopener noreferrer"
           data-category="${cat.name}">
          <div class="category-thumb">
            <img src="${cat.icon}" alt="${cat.name}" 
                 class="category-thumb-img"
                 style="object-fit: cover; height:100%; width:100%">
          </div>

          <div class="category-name">
            ${cat.name}
          </div>
        </a>
      `;
    } else {
      // Agar link nahi hai to normal <div> hi rahega (internal filter)
      return `
        <div class="category-box ${isActive}" 
             data-category="${cat.name}">
          <div class="category-thumb">
            <img src="${cat.icon}" alt="${cat.name}" 
                 class="category-thumb-img"
                 style="object-fit: cover; height:100%; width:100%">
          </div>

          <div class="category-name">
            ${cat.name}
          </div>
        </div>
      `;
    }
  }).join("");

  // Sirf un boxes par click listener lagaye jinke paas link NAHI hai
  document.querySelectorAll(".category-box").forEach(box => {
    // Agar <a> tag hai aur usme real link hai, to default behavior mat roko
    if (box.tagName === "A" && box.getAttribute("href") !== "#") {
      return;
    }

    box.addEventListener("click", () => {
      filterByCategory(box.dataset.category);
    });
  });
}

// Filter and Render Products
function filterByCategory(categoryName) {
  productSearchQuery = "";
  if (searchInput) searchInput.value = "";
  selectedCategory = categoryName;
  expandedProductSections[categoryName] = false;
  const heading = document.getElementById("currentCategoryHeading");
  if (heading) heading.innerText = categoryName;

  updateSeeAllButton();
  renderCategories();
  renderProducts();
}

function renderProducts() {
  const pGrid = document.getElementById("productsGrid");
  const vodkaGrid = document.getElementById("vodkaProductsGrid");
  const whiskyGrid = document.getElementById("whiskyProductsGrid");
  const rumGrid = document.getElementById("rumProductsGrid");
  const vodkaSection = document.querySelector(".vodka-section");
  const whiskySection = document.querySelector(".whisky-section");
  const rumSection = document.querySelector(".rum-section");
  const query = productSearchQuery.trim().toLocaleLowerCase();

  if (query) {
    const matches = productCatalog.filter(product =>
      `${product.name} ${product.category} ${product.weight}`.toLocaleLowerCase().includes(query)
    );
    if (pGrid) renderProductGrid(pGrid, selectedCategory, true, matches);
    if (vodkaSection) vodkaSection.hidden = true;
    if (whiskySection) whiskySection.hidden = true;
    if (rumSection) rumSection.hidden = true;
    const heading = document.getElementById("currentCategoryHeading");
    if (heading) heading.textContent = `Search results (${matches.length})`;
    updateSeeAllButton();
    return;
  }

  if (pGrid) renderProductGrid(pGrid, selectedCategory, expandedProductSections[selectedCategory]);
  if (vodkaGrid) renderProductGrid(vodkaGrid, "Vodka", expandedProductSections.Vodka);
  if (whiskyGrid) renderProductGrid(whiskyGrid, "Whisky", expandedProductSections.Whisky);
  if (rumGrid) renderProductGrid(rumGrid, "Rum", expandedProductSections.Rum);
  if (vodkaSection) vodkaSection.hidden = selectedCategory === "Vodka";
  if (whiskySection) whiskySection.hidden = selectedCategory === "Whisky";
  if (rumSection) rumSection.hidden = selectedCategory === "Rum";
  const heading = document.getElementById("currentCategoryHeading");
  if (heading) heading.textContent = selectedCategory;
  updateSeeAllButton();
}

function renderProductGrid(pGrid, category, expanded = false, productList = null) {
  const products = productList || productCatalog.filter(p => p.category === category);
  const columns = getProductGridColumnCount(pGrid);
  const filtered = expanded ? products : products.slice(0, columns);

  if (filtered.length === 0) {
    const emptyMessage = productList
      ? "No products match your search."
      : "No products found in this category.";
    pGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-muted);">${emptyMessage}</p>`;
    return;
  }

  pGrid.innerHTML = filtered.map(p => {
    const qty = cart[p.id] || 0;
    return `
      <div class="product-card">
        <div>
          <div class="eta-badge">⏱ 8 MINS</div>
          <div class="product-img-box">
            <img class="product-thumb-img" src="${p.image || p.icon}" alt="${p.name} ${p.weight}" />
          </div>
          <div class="product-name">${p.name}</div>
          <div class="product-weight">${p.weight}</div>
        </div>
        <div class="product-action-row">
          <div class="price-col">
            <span class="price-now">₹${p.price}</span>
            ${p.mrp > p.price ? `<span class="price-old">₹${p.mrp}</span>` : ""}
          </div>
          ${qty === 0 
            ? `<button class="btn-add-item" data-id="${p.id}" data-change="1">ADD</button>`
            : `<div class="qty-counter">
                <button data-id="${p.id}" data-change="-1">-</button>
                <span>${qty}</span>
                <button data-id="${p.id}" data-change="1">+</button>
               </div>`
          }
        </div>
      </div>
    `;
  }).join("");

  // Attach listeners for ADD & quantity buttons
  pGrid.querySelectorAll("button[data-id]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.dataset.id);
      const change = parseInt(e.target.dataset.change);
      updateCart(id, change);
    });
  });
}

function getProductGridColumnCount(grid) {
  const columns = window.getComputedStyle(grid).gridTemplateColumns;
  return columns.split(" ").filter(Boolean).length || 1;
}

function updateSeeAllButton() {
  const heading = document.getElementById("currentCategoryHeading");
  const isSearching = Boolean(productSearchQuery.trim());
  document.querySelectorAll(".see-all-btn[data-category]").forEach(button => {
    const category = button.dataset.category;
    const expanded = Boolean(expandedProductSections[category]);
    button.textContent = expanded ? "Back" : "See all";
    button.setAttribute("aria-pressed", String(expanded));
    button.hidden = isSearching;
  });
  if (heading && !isSearching) heading.textContent = selectedCategory;
}

document.querySelectorAll(".see-all-btn[data-category]").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    expandedProductSections[category] = !expandedProductSections[category];
    updateSeeAllButton();
    renderProducts();
  });
});

let productGridResizeTimer;
window.addEventListener("resize", () => {
  window.clearTimeout(productGridResizeTimer);
  productGridResizeTimer = window.setTimeout(renderProducts, 100);
});

searchInput?.addEventListener("input", () => {
  productSearchQuery = searchInput.value;
  renderProducts();
});

// Cart State & Drawer Updates
function updateCart(productId, change) {
  const currentQty = cart[productId] || 0;
  const newQty = currentQty + change;

  if (newQty <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = newQty;
  }

  renderProducts();
  updateCartUI();
}

function updateCartUI() {
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const navLabel = document.getElementById("navCartLabel");
  const drawerQty = document.getElementById("cartDrawerQty");
  const drawerBody = document.getElementById("cartDrawerBody");
  const drawerFooter = document.getElementById("cartDrawerFooter");
  const totalPay = document.getElementById("cartTotalPay");

  if (navLabel) navLabel.innerText = totalItems > 0 ? `${totalItems} items` : "My Cart";
  if (drawerQty) drawerQty.innerText = totalItems;

  if (totalItems === 0) {
    drawerBody.innerHTML = `
      <div style="text-align: center; margin-top: 60px;">
        <div style="font-size: 60px;">🛒</div>
        <h3 style="font-size: 18px; margin-top: 10px;">Your cart is empty</h3>
        <p style="font-size: 13px; color: var(--text-muted); margin-top: 6px;">Add items to start shopping</p>
      </div>`;
    if (drawerFooter) drawerFooter.style.display = "none";
    return;
  }

  let subtotal = 0;
  let itemsHTML = "";

  Object.keys(cart).forEach(id => {
    const p = productCatalog.find(item => item.id == id);
    if (p) {
      const itemTotal = p.price * cart[id];
      subtotal += itemTotal;
      itemsHTML += `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <div>
            <div style="font-size: 13px; font-weight: 600;">${p.name}</div>
            <div style="font-size: 12px; color: var(--text-muted);">₹${p.price} × ${cart[id]}</div>
          </div>
          <div style="font-weight: 800; font-size: 14px;">₹${itemTotal}</div>
        </div>
      `;
    }
  });

  const deliveryFee = subtotal > 199 ? 0 : 15;
  const grandTotal = subtotal + deliveryFee;

  drawerBody.innerHTML = `
    ${itemsHTML}
    <div class="bill-card">
      <h4>Bill Details</h4>
      <div class="bill-item-row">
        <span>Items subtotal</span>
        <span>₹${subtotal}</span>
      </div>
      <div class="bill-item-row">
        <span>Delivery charge</span>
        <span>${deliveryFee === 0 ? '<span style="color:var(--brand-green)">FREE</span>' : `₹${deliveryFee}`}</span>
      </div>
      <div class="bill-item-row grand">
        <span>Grand Total</span>
        <span>₹${grandTotal}</span>
      </div>
    </div>
  `;

  if (drawerFooter) drawerFooter.style.display = "block";
  if (totalPay) totalPay.innerText = `₹${grandTotal}`;
}

// Modal and Drawer Toggles
const loginModal = document.getElementById("loginModalBackdrop");
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const paymentModal = document.getElementById("paymentModalBackdrop");
const paymentOptions = document.querySelectorAll(".payment-option");
const paymentTotalLabel = document.getElementById("paymentTotalLabel");
const upiQrBox = document.getElementById("upiQrBox");
const upiQrImage = document.getElementById("upiQrImage");
const phoneStep = document.getElementById("phoneStep");
const otpStep = document.getElementById("otpStep");
const phoneInput = document.getElementById("phoneNumberInput");
const otpInput = document.getElementById("otpCodeInput");
const fullNameInput = document.getElementById("fullNameInput");
const otpPhoneLabel = document.getElementById("otpPhoneLabel");
const authStatus = document.getElementById("authStatus");
const loginButton = document.getElementById("openLoginBtn");
const accountMenu = document.getElementById("accountMenu");
const changeNameBtn = document.getElementById("changeNameBtn");
const logoutBtn = document.getElementById("logoutBtn");
const authState = {
  currentPhone: "",
  user: null
};

async function parseJsonResponse(response) {
  const text = await response.text();

  if (!text) {
    throw new Error('Server returned an empty response. Please try again.');
  }

  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error('The server returned an invalid response. Please try again.');
  }
}

function setAuthStatus(message, type = "") {
  if (!authStatus) return;
  authStatus.textContent = message || "";
  authStatus.className = "auth-status";
  if (type) {
    authStatus.classList.add(type);
  }
}

function toggleAccountMenu(forceOpen) {
  if (!accountMenu) return;
  const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : accountMenu.classList.contains('hidden');
  accountMenu.classList.toggle('hidden', !shouldOpen);
}

function updateLoginButton(user) {
  if (!loginButton) return;
  if (user) {
    const displayName = user.full_name || user.name || "User";
    loginButton.textContent = `Hi, ${displayName}`;
    loginButton.title = `Logged in as ${displayName}`;
    toggleAccountMenu(false);
    return;
  }

  loginButton.textContent = "Login";
  loginButton.title = "Login";
  toggleAccountMenu(false);
}

function resetAuthFlow() {
  if (phoneStep) phoneStep.classList.remove("hidden");
  if (otpStep) otpStep.classList.add("hidden");
  if (phoneInput) {
    phoneInput.value = authState.currentPhone || "";
  }
  if (otpInput) otpInput.value = "";
  if (fullNameInput) fullNameInput.value = "";
  setAuthStatus("");
}

function openLoginModal() {
  loginModal?.classList.add("active");
  resetAuthFlow();
  setTimeout(() => phoneInput?.focus(), 100);
}

function closeLoginModal() {
  loginModal?.classList.remove("active");
  resetAuthFlow();
}

async function requestOtp() {
  const rawPhone = phoneInput?.value.trim() || "";
  const phone = rawPhone.replace(/\D/g, "");

  if (!/^\d{10}$/.test(phone)) {
    setAuthStatus("Enter a valid 10-digit mobile number.", "error");
    phoneInput?.focus();
    return;
  }

  setAuthStatus("Sending OTP...", "");

  try {
    const response = await fetch('/api/auth/request-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone })
    });

    const data = await parseJsonResponse(response);

    if (!response.ok || !data.success) {
      throw new Error(data.message || 'Unable to send OTP.');
    }

    authState.currentPhone = phone;
    if (otpPhoneLabel) otpPhoneLabel.textContent = `+91 ${phone}`;
    if (otpStep) otpStep.classList.remove('hidden');
    if (phoneStep) phoneStep.classList.add('hidden');

    const otpMessage = data.demoOtp ? `Demo OTP: ${data.demoOtp}. Use it to complete verification.` : 'OTP sent successfully.';
    setAuthStatus(otpMessage, "success");
    otpInput?.focus();
  } catch (error) {
    setAuthStatus(error.message || 'Unable to send OTP.', 'error');
  }
}

async function verifyOtp() {
  const phone = authState.currentPhone || phoneInput?.value.trim().replace(/\D/g, "") || "";
  const otp = otpInput?.value.trim() || "";
  const fullName = (fullNameInput?.value || '').trim();

  if (!/^\d{10}$/.test(phone)) {
    setAuthStatus('Please enter a valid mobile number first.', 'error');
    resetAuthFlow();
    phoneInput?.focus();
    return;
  }

  if (!/^\d{6}$/.test(otp)) {
    setAuthStatus('Enter the 6-digit OTP sent to your phone.', 'error');
    otpInput?.focus();
    return;
  }

  setAuthStatus('Verifying OTP...', '');

  try {
    const response = await fetch('/api/auth/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, otp, full_name: fullName || undefined })
    });

    const data = await parseJsonResponse(response);

    if (!response.ok || !data.success) {
      throw new Error(data.message || 'OTP verification failed.');
    }

    authState.user = data.user;
    localStorage.setItem('drinkitUser', JSON.stringify(data.user));
    updateLoginButton(data.user);
    setAuthStatus('Login successful! Redirecting to your cart...', 'success');
    setTimeout(() => {
      closeLoginModal();
    }, 700);
  } catch (error) {
    setAuthStatus(error.message || 'OTP verification failed.', 'error');
  }
}

const savedUser = (() => {
  try {
    return JSON.parse(localStorage.getItem('drinkitUser') || 'null');
  } catch (error) {
    return null;
  }
})();

if (savedUser) {
  authState.user = savedUser;
  updateLoginButton(savedUser);
}

document.getElementById("openLoginBtn")?.addEventListener("click", () => {
  if (authState.user) {
    toggleAccountMenu();
    return;
  }
  openLoginModal();
});

changeNameBtn?.addEventListener("click", () => {
  if (!authState.user) return;
  const enteredName = window.prompt('Enter your new name:', authState.user.full_name || '');
  if (!enteredName) return;

  const trimmedName = enteredName.trim();
  if (!trimmedName) {
    setAuthStatus('Name cannot be empty.', 'error');
    return;
  }

  authState.user.full_name = trimmedName;
  localStorage.setItem('drinkitUser', JSON.stringify(authState.user));
  updateLoginButton(authState.user);
  setAuthStatus('Name updated successfully.', 'success');
  toggleAccountMenu(false);
});

logoutBtn?.addEventListener("click", () => {
  authState.user = null;
  localStorage.removeItem('drinkitUser');
  updateLoginButton(null);
  setAuthStatus('You have been logged out.', 'success');
  toggleAccountMenu(false);
});

document.getElementById("closeLoginBtn")?.addEventListener("click", closeLoginModal);
document.getElementById("continueLoginBtn")?.addEventListener("click", requestOtp);
document.getElementById("verifyOtpBtn")?.addEventListener("click", verifyOtp);
document.getElementById("resendOtpBtn")?.addEventListener("click", requestOtp);
phoneInput?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') requestOtp();
});
otpInput?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') verifyOtp();
});

document.getElementById("openCartBtn")?.addEventListener("click", () => {
  cartDrawer?.classList.add("active");
  cartBackdrop?.classList.add("active");
});

function closeCart() {
  cartDrawer?.classList.remove("active");
  cartBackdrop?.classList.remove("active");
}

function openPaymentModal() {
  const subtotal = Object.keys(cart).reduce((sum, id) => {
    const p = productCatalog.find(item => item.id == id);
    return p ? sum + p.price * cart[id] : sum;
  }, 0);

  const deliveryFee = subtotal > 199 ? 0 : 15;
  const grandTotal = subtotal + deliveryFee;

  if (paymentTotalLabel) paymentTotalLabel.textContent = `₹${grandTotal}`;
  if (upiQrBox && document.querySelector('.payment-option.active')?.dataset.method === 'UPI') {
    renderUpiQr();
  }
  paymentModal?.classList.add('active');
}

function closePaymentModal() {
  paymentModal?.classList.remove('active');
}

function renderUpiQr() {
  if (upiQrImage) {
    upiQrImage.src = './images/QR.jpg';
  }
  if (upiQrBox) upiQrBox.classList.toggle('visible', true);
}

paymentOptions.forEach((option) => {
  option.addEventListener('click', () => {
    paymentOptions.forEach(item => item.classList.toggle('active', item === option));

    if (option.dataset.method === 'UPI') {
      renderUpiQr();
      if (upiQrBox) upiQrBox.classList.add('visible');
    } else if (upiQrBox) {
      upiQrBox.classList.remove('visible');
    }
  });
});

document.getElementById("closePaymentBtn")?.addEventListener("click", closePaymentModal);
paymentModal?.addEventListener("click", (event) => {
  if (event.target === paymentModal) closePaymentModal();
});

document.getElementById("payNowBtn")?.addEventListener("click", () => {
  if (Object.keys(cart).length === 0) {
    alert("Your cart is empty!");
    return;
  }
  openPaymentModal();
});

document.getElementById("confirmPaymentBtn")?.addEventListener("click", () => {
  const selectedMethod = document.querySelector('.payment-option.active')?.dataset.method || 'UPI';

  if (selectedMethod === 'UPI') {
    alert('UPI QR payment is enabled. Please scan the QR code and pay.');
    return;
  }

  alert(`Order placed successfully via ${selectedMethod}! 🚀`);
  cart = {};
  updateCartUI();
  renderProducts();
  closePaymentModal();
  closeCart();
});

document.getElementById("closeCartBtn")?.addEventListener("click", closeCart);
cartBackdrop?.addEventListener("click", closeCart);

document.getElementById("deliveryWidget")?.addEventListener("click", () => {
  alert("Address selector feature opened!");
});

document.getElementById("brandLogo")?.addEventListener("click", (e) => {
  e.preventDefault();
  filterByCategory("Dairy, Bread & Eggs");
});

document.getElementById("heroShopBtn")?.addEventListener("click", () => {
  filterByCategory("Fruits & Vegetables");
});

// Initialize App
window.addEventListener("DOMContentLoaded", () => {
  updateSeeAllButton();
  renderCategories();
  renderProducts();
  updateCartUI();
  updateLoginButton(authState.user);
});