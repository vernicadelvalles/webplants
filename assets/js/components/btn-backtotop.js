import variables from '../variables.js';

const backToTop = () => {
  const {btnBackToTop} = variables();

  btnBackToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  window.addEventListener('scroll', () => {
    window.scrollY > 250 ? btnBackToTop.classList.add('visible') : btnBackToTop.classList.remove('visible');
  });
}

export default backToTop;