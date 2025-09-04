const containerCards = document.getElementById('cards');

const apiFetch = async () => {
  try {
    const response = await fetch('assets/js/api.json');
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};

const renderCards = (cards) => {
  containerCards.innerHTML = '';

  cards.forEach(card => {
    const article = document.createElement('article');
    article.dataset.id = card.id;
    article.classList.add('card');
    containerCards.appendChild(article);

    if (card.discount != null) {
      const discounted = document.createElement('div');
      discounted.classList.add('discount');
      discounted.textContent = `-${card.discount}%`;

      article.appendChild(discounted);
    }

    const imageProduct = document.createElement('div');
    const image = document.createElement('img');
    imageProduct.classList.add('image');
    image.src = card.image;
    image.alt = card.alt;
    image.setAttribute('loading', 'lazy');
    
    article.appendChild(imageProduct);
    imageProduct.appendChild(image);

    const productInfo = document.createElement('div');
    const h4 = document.createElement('h4');
    productInfo.classList.add('product-info');
    h4.textContent = card.name;

    article.appendChild(productInfo);
    productInfo.appendChild(h4);

    const discountedProduct = document.createElement('div');
    const total = document.createElement('span');
    discountedProduct.classList.add('discounted-product');
    total.classList.add('total');
    total.textContent = `$${card.price.current.toLocaleString('es-CL')}`;

    productInfo.appendChild(discountedProduct);
    discountedProduct.appendChild(total);

    if (card.price.previous != null) {
      const previousPrice = document.createElement('span');
      previousPrice.classList.add('previous-price');
      previousPrice.textContent = `$${card.price.previous.toLocaleString('es-CL')}`;
      discountedProduct.appendChild(previousPrice);
    }
  });
}

apiFetch().then(data => {
  if (data && data.products) {
    renderCards(data.products);
  }
});