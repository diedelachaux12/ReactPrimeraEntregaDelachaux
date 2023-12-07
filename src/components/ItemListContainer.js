// ItemListContainer.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Lógica para cargar y mostrar productos correspondientes a la categoría
    const mockProducts = [
      { id: 1, name: 'Jordan 1 Low', category: 'Jordan 1', image: './img/Jordan 1 Low.webp', description: '¿Negro clásico o negro siempre impecable? Con este AJ1 de perfil bajo no tienes por qué elegir. Los paneles contrastantes hacen que estos calzados se destaquen y demuestran que cada lado es tu lado bueno.' },
      { id: 2, name: 'Air Force 1 Premium', category: 'Air Force', image: './public/img/Air Force 1 Premium.webp', description: 'Para celebrar 40 años de expansión de los límites del deporte y la moda, este AF1 combina elementos de lanzamientos entrañables para destacar el lugar de este diseño atemporal en la historia del calzado.' },
      { id: 3, name: 'Air Jordan 1 Mid SE', category: 'Jordan 1', image: './public/img/Air Jordan 1 Mid SE.webp', description: 'Con este AJ1 de perfil medio, no tienes que elegir un color favorito. Los paneles contrastantes hacen que estos calzados se destaquen y demuestran que cada lado es tu lado bueno.' },
      { id: 4, name: 'Dunk Low Retro "Panda"', category: 'Dunk Low', image: './public/img/Dunk Low Panda.png', description: 'Con un estilo hogareño y mucha frescura, esta versión alegre del Dunk Low es la combinación perfecta de mejillas sonrosadas, los primeros copos de nieve y tu bebida invernal favorita.' },
    ];

    // Filtra los productos según la categoría 
    const filteredProducts = id
      ? mockProducts.filter((product) => product.category === id)
      : [];

    setProducts(filteredProducts);
  }, [id]);

  return (
    <div className="container">
      <h2>Productos de la Categoría {id}</h2>
      <div className="productos">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
