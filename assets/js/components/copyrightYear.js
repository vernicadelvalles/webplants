import variables from '../variables.js';

const copyRightYear = () => {
  const {spanYear} = variables();
  const newDate = new Date();
  const year = newDate.getFullYear();

  spanYear.textContent = year;
}

export default copyRightYear;