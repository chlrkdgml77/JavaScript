const products = {
  productList: [
    {
      title: "messi",
      imageUrl: "../../자료/messi2.jpg",
      price: 20,
      discription: "barcelona"
    },
    {
      title: "messi",
      imageUrl: "../../자료/messi2.jpg",
      price: 20,
      discription: "barcelona"
    }
  ],

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.productList) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
          <img src=${prod.imageUrl}>
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.discription}</p>
            <button>Add</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

products.render();