import React from "react";
import "../../styles/ProductPage.css";

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card">
      {product.isNew && <div className="new-badge">New</div>}
      <img
        src={product.imagePath}
        alt={product.name}
        className="product-image"
        onClick={onClick} // 이미지 클릭 시 onClick 호출
        style={{ cursor: "pointer" }} // 클릭 가능 표시
      />
      <div className="product-name">{product.name}</div>
      <div className="product-brand">{product.brand}</div>
      <div className="product-price">{product.price.toLocaleString()} 원</div>
    </div>
  );
};

export default ProductCard;