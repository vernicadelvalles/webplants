import variables from '../variables.js';

const menuBar = () => {
  const {btnMenuBar, menu, btnClose} = variables();

  btnMenuBar.addEventListener('click', () => {
    menu.classList.toggle('active');

    btnClose.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
}

export default menuBar;