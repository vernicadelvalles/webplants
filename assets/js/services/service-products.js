const apiFetchProducts = async () => {
  try {
    const response = await fetch('assets/js/api/products.json');
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};

export default apiFetchProducts;