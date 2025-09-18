import variables from '../variables.js';

const blog = (data) => {
  const {blogs} = variables();

  const containerBlog = document.createElement('div');
  blogs.appendChild(containerBlog);

  containerBlog.classList.add('container-blog');
  containerBlog.id = data.id;
  blogs.appendChild(containerBlog);

  const containerImage = document.createElement('div');
  containerImage.classList.add('blog-img');
  containerBlog.appendChild(containerImage);

  const blogImage = document.createElement('img');
  blogImage.src = data.image;
  blogImage.alt = data.imageAlt;
  blogImage.loading = 'lazy'
  containerImage.appendChild(blogImage);
  
  const containerInfoBlog = document.createElement('div');
  containerInfoBlog.classList.add('blog-info');
  containerBlog.appendChild(containerInfoBlog);

  const h2Blog = document.createElement('h2');
  h2Blog.textContent = data.heading;
  containerInfoBlog.appendChild(h2Blog);

  const pBlog = document.createElement('p');
  pBlog.textContent = data.description;
  containerInfoBlog.appendChild(pBlog);

  const containerBtnBlog = document.createElement('div');
  containerBtnBlog.classList.add('btn-section', 'btn-blog')
  containerInfoBlog.appendChild(containerBtnBlog);

  const aBlog = document.createElement('a');
  aBlog.href = data.url;
  aBlog.setAttribute('aria-label', 'Botón que direcciona a nuestro blog.');
  aBlog.textContent = 'Ir al blog'
  containerBtnBlog.appendChild(aBlog);
}

export default blog;


/*
<div class="container-blog" id="12">
  <div class="blog-img">
    <img src="./assets/image/blog.jpg" alt="Mujer roc nbiando plantas con un pulverizador" loading="lazy">
  </div>

  <div class="blog-info">
    <h2>Hogar con vida</h2>
    <p>Las plantas de interior son gran complemento para cualquier hogar. Ayudan a crear un ambiente más
      acogedor, mejoran el estado de animo y reducen el estrés. Descubre algunos consejos para cuidar tus
      plantas de interior favoritas.
    </p>

    <div class="btn-section btn-blog">
      <a href="#blog" aria-label="Botón que direcciona a nuestro blog">
        ver blog
      </a>
    </div>
  </div>
</div>



*/