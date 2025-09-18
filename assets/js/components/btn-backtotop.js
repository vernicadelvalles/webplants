import variables from '../variables.js';

const backToTop = () => {
  const {btnBackToTop, viewportHaight} = variables();

  btnBackToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  window.addEventListener('scroll', () => {
    window.scrollY > viewportHaight ? btnBackToTop.classList.add('visible') : btnBackToTop.classList.remove('visible');
  });
}

export default backToTop;