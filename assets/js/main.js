import menuBar from './components/btn-menubar.js';
import backToTop from './components/btn-backtotop.js';
import shadow from './components/shadow.js';
import cards from './components/cards.js';
import apiFetchProducts from './services/service-products.js';
import blog from './components/blog.js';
import apiFetchBlog from './services/service-blog.js';
import copyRightYear from './components/copyrightYear.js';

document.addEventListener('DOMContentLoaded', () => {
  menuBar();
  backToTop();
  shadow();
  
  apiFetchProducts().then(data => {
    if (data && data.products) {
      cards(data.products);
    }
  });

  apiFetchBlog().then(data => {
    blog(data);
  });

  copyRightYear();
});