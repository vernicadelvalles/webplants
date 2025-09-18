import variables from '../variables.js';

const shadow = () => {
  window.addEventListener('scroll', () => {
    const {header, viewportHaight} = variables();
    
    if (window.scrollY > viewportHaight) {
      header.classList.add('shadow');
    } else {
      header.classList.remove('shadow');
    }
  });
}

export default shadow;