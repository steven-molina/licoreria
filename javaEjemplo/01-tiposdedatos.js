function redondearPrecios(productos) {
    const productosRedondeados = productos.map(producto => {
      if (producto.valor < 500) {
        producto.valor = producto.valor; // Si el valor es menor a 500, se ajusta a cero.
      } else {
        const centenas = Math.floor(producto.valor / 100) % 10;
        if (centenas >= 5) {
          // Redondear al mil más cercano si la centena es 500 o más.
          producto.valor = Math.ceil(producto.valor / 1000) * 1000;
        } else {
          producto.valor = Math.floor(producto.valor / 1000) * 1000;
        }
      }
      return producto;
    });
  
    return productosRedondeados;
  }
  
  const productos = [
    {'prod':"TV Samsung 50pulg 2023", valor: 414},
    {'prod':"TV LG 70pulg 2023", valor: 2671514},
    {'prod':"Equipo Sonido Sonic 50pulg 2023", valor: 1890910},
    {'prod':"Portatil ACER 15p 12RAM Proc CoreI510Gen", valor: 31367724},
  ];
  
  const productosRedondeados = redondearPrecios(productos);
  console.log(productosRedondeados);
  