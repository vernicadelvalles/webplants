const btnMenuBar = document.getElementById('btnMenuBar');
const menu = document.getElementById('menu');

btnMenuBar.addEventListener('click', () => {
  menu.classList.toggle('active');

  const btnClose = document.getElementById('btnClose');

  btnClose.addEventListener('click', () => {
    menu.classList.remove('active');
  });

});

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !btnMenuBar.contains(e.target)) {
    menu.classList.remove('active');
  }
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  
  const viewportHaight = window.innerHeight - (7 * parseFloat(getComputedStyle(document.documentElement).fontSize));
  
  if (window.scrollY > viewportHaight) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
});
