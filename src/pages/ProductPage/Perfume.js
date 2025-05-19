import React, { useState } from "react";
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
      isNew: false,
    },
    {
      id: 2,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_2.png",
      isNew: false,
    },
    {
      id: 3,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_3.png",
      isNew: false,
    },
    {
      id: 4,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_4.png",
      isNew: false,
    },
    {
      id: 5,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_5.png",
      isNew: false,
    },
    {
      id: 6,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_6.png",
      isNew: false,
    },
    {
      id: 7,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_7.png",
      isNew: false,
    },
    {
      id: 8,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_8.png",
      isNew: false,
    },
    {
      id: 9,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_9.png",
      isNew: false,
    },
    {
      id: 10,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_10.png",
      isNew: false,
    },
    {
      id: 11,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_11.png",
      isNew: false,
    },
    {
      id: 12,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_12.png",
      isNew: false,
    },
    {
      id: 13,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_13.png",
      isNew: false,
    },
    {
      id: 14,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_14.png",
      isNew: false,
    },
    {
      id: 15,
      name: "시레나 오 드 퍼퓸",
      brand: "플로리스 런던",
      price: 297000,
      imagePath: "/img/perfume_15.png",
      isNew: false,
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // 페이징용 상태
  const itemsPerPage = 5; // 페이지당 15개 상품

  // 페이징 로직
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handleCardClick = (product) => {
    console.log("handleCardClick called:", product); // 디버깅 로그
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("handleCloseModal called"); // 디버깅 로그
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handlePageChange = (pageNumber) => {
    console.log("Page changed to:", pageNumber); // 디버깅 로그
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Banner title="Perfume" imagePath={"/banner_perfume.jpg"} />
      <div className="product-container">
        <div className="product-grid">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleCardClick(product)}
            />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <PayModal product={selectedProduct} onClose={handleCloseModal} />
      )}
      {/* 페이징 버튼 */}
      <div className="paging">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="paging-button"
          >
            Prev
          </button>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`paging-button ${currentPage === pageNumber ? "active" : ""}`}
          >
            {pageNumber}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="paging-button"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Perfume;