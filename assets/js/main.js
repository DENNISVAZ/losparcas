const products = [
  { id: "desert", name: "DESERT", country: "الإمارات العربية المتحدة / United Arab Emirates", flag: "", category: "All Over Deo Body Spray", image: "assets/images/emiradosarabes.jpg" },
  { id: "horizon", name: "HORIZON", country: "Uruguay / Uruguay", flag: "", category: "All Over Deo Body Spray", image: "assets/images/uruguai.jpg" },
  { id: "legend", name: "LEGEND", country: "Brasil / Brazil", flag: "", category: "All Over Deo Body Spray", image: "assets/images/brasil.jpg" },
  { id: "frost", name: "FROST", country: "Schweiz / Switzerland", flag: "", category: "All Over Deo Body Spray", image: "assets/images/suica.jpg" },  
  { id: "wild", name: "WILD", country: "France / France", flag: "", category: "All Over Deo Body Spray", image: "assets/images/franca.jpg" },
  { id: "gold", name: "GOLD", country: "United States / United States", flag: "", category: "All Over Deo Body Spray", image: "assets/images/estadosunidos.jpg" },
  { id: "royal", name: "ROYAL", country: "England / England", flag: "", category: "All Over Deo Body Spray", image: "assets/images/inglaterra.jpg" },
  { id: "urban", name: "URBAN", country: "Deutschland / Germany", flag: "", category: "All Over Deo Body Spray", image: "assets/images/alemanha.jpg" },
  { id: "prime", name: "PRIME", country: "Portugal / Portugal", flag: "", category: "All Over Deo Body Spray", image: "assets/images/portugal.jpg" },
  { id: "victory", name: "VICTORY", country: "Ελλάδα  / Greece", flag: "", category: "All Over Deo Body Spray", image: "assets/images/grecia.jpg" },
  { id: "night", name: "NIGHT", country: "España / Spain", flag: "", category: "All Over Deo Body Spray", image: "assets/images/espanha.jpg" },
  { id: "deep", name: "DEEP", country: "Argentina / Argentina", flag: "", category: "All Over Deo Body Spray", image: "assets/images/argentina.jpg" },
  { id: "icon", name: "ICON", country: "Italia / Italy", flag: "", category: "All Over Deo Body Spray", image: "assets/images/italia.jpg" }
];

function renderProducts() {
  const container = document.getElementById('products-grid');
  container.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name} <span style="font-size:1.4rem">${product.flag}</span></h3>
        <p class="country">${product.country || 'Brasil'}</p>
        <p><strong>${product.category}</strong></p>
        <!--button class="btn-buy" onclick="viewProduct('${product.id}')">Ver Produto</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function viewProduct(id) {
  window.location.href = `produtos/${id}.html`;
}

window.onload = renderProducts;
