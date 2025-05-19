import React, { useState } from "react"; // useState 임포트 추가
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from "./../../components/PayModal";

const Perfume = () => {
  const products = [
    {
      id: 1,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_1.png",
      isNew: true,
    },
    {
      id: 2,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_2.png",
      isNew: true,
    },
    {
      id: 3,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_3.png",
      isNew: true,
    },
    {
      id: 4,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_4.png",
      isNew: true,
    },
    {
      id: 5,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_5.png",
      isNew: true,
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Banner title="New" imagePath={"/banner_diffuser.jpg"} />
      <div className="product-container">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleCardClick(product)} // onClick 추가
            />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <PayModal product={selectedProduct} onClose={handleCloseModal} /> // PayModal 추가
      )}
    </div>
  );
};

export default Perfume;