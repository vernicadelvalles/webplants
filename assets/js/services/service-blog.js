const apiFetchBlog = async () => {
  try {
    const response = await fetch('assets/js/api/blog.json');
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data);
    
    return data;

  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};

export default apiFetchBlog;