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
