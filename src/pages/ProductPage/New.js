import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from "./../../components/PayModal";
import axios from "axios";
import { useCookies } from "react-cookie";

const New = () => {

  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cookies] = useCookies(["accessToken"]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);

    if (typeof cookies.accessToken !== "string") {
      alert("로그인이 필요합니다");
      return;
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios
      .get("/categories/1/items", {
        headers: {
          accept: "*/*",
          // Authorization: `Bearer ${cookies.accessToken}`, // 필요하면 사용
        },
      })
      .then((response) => {
        // 서버에서 상품 목록 받아서 상태에 저장
        setProducts(response.data.result || []);
      })
      .catch((err) => {
        console.log("CATEGORY API 요청 실패", err);
      });
  }, []); // 컴포넌트 처음 마운트될 때 한 번만 실행

  return (
    <div>
      <Banner title="New" imagePath={"/banner_perfume.jpg"} />
      <div className="product-container">
        <div className="product-grid">
          {products.length === 0 ? (
            <p>상품이 없습니다.</p>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleCardClick(product)}
              />
            ))
          )}
        </div>
      </div>

      {isModalOpen && (
        <PayModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default New;
