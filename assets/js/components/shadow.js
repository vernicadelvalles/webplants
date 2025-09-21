import variables from '../variables.js';

const shadow = () => {
  window.addEventListener('scroll', () => {
    const {header} = variables();
    
    window.scrollY > 70 ? header.classList.add('shadow') : header.classList.remove('shadow');
  });
}

export default shadow;