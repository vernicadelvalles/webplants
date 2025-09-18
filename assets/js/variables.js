const variables = () => {
  const btnMenuBar = document.getElementById('btnMenuBar');
  const menu = document.getElementById('menu');
  const btnClose = document.getElementById('btnClose');
  const btnBackToTop = document.getElementById('btnBackToTop');
  const header = document.querySelector('header');
  const viewportHaight = window.innerHeight - (7 * parseFloat(getComputedStyle(document.documentElement).fontSize));
  const productsCards = document.getElementById('productsCards');
  const blogs = document.getElementById('blogs');
  const spanYear = document.getElementById('spanYear');

  return {
    btnMenuBar,
    menu,
    btnClose,
    btnBackToTop,
    header,
    viewportHaight,
    productsCards, 
    blogs,
    spanYear
  }
}

export default variables;