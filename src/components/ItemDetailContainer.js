// ItemDetailContainer.js
import React, { useState, useEffect } from 'react';

const ItemDetailContainer = ({ match }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Lógica para cargar y mostrar detalles del producto correspondiente a itemId
    const mockProducts = [
      { id: 1, name: 'Producto 1', category: 1 },
      { id: 2, name: 'Producto 2', category: 2 },
      { id: 3, name: 'Producto 3', category: 1 },
    ];

    // Obtén el itemId de los parámetros de la URL
    const itemIdFromParams = match.params.id;

    // Encuentra el producto correspondiente al itemId
    const product = mockProducts.find((p) => p.id === itemIdFromParams);

    setSelectedProduct(product);
  }, [match.params.id]);

  return (
    <div className="container">
      {selectedProduct ? (
        <div>
          <h2>Detalles del Producto</h2>
          <p>ID: {selectedProduct.id}</p>
          <p>Nombre: {selectedProduct.name}</p>
          
        </div>
      ) : (
        <p>No se encontró el producto</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
