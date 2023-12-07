// ProductCard.js
import React from 'react';
import './EstilosTarjetas.css';

const ProductCard = ({ product }) => {
  return (
    <div className="tarjeta">
      <img src={`./img/${product.image}`} alt={product.name} className="imagentarjeta" />
      <h5 className="titulo-tarjeta">{product.name}</h5>
      <p className="descripcion-producto">{product.description}</p>
      <button className="boton-comprar">Comprar</button>
    </div>
  );
};

export default ProductCard;
