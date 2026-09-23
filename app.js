import { getProducts } from "./api.js";

async function loadProducts() {
  const products = await getProducts();
  const box = document.getElementById("products");

  products.slice(0,6).forEach((p)=>{
    box.innerHTML += `
      <div class="card">
        <h3>${p.title}</h3>
        <p>₹ ${p.price}</p>
      </div>`;
  });
}

loadProducts();