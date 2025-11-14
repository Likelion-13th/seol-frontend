import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from "./../../components/PayModal";
import axios from "axios";
import { useCookies } from "react-cookie";

const Perfume = () => {

  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // 페이징용 상태
  const itemsPerPage = 5; // 페이지당 5개 상품

  const [cookies] = useCookies(["accessToken"]);

  // 페이징 로직
  const totalPages = Math.max(1, Math.ceil(products.length / itemsPerPage)); 
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handleCardClick = (product) => {
    setSelectedProduct(product);

    if (typeof cookies.accessToken !== "string") {
      alert("로그인이 필요합니다");
      return;
    }
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

  useEffect(() => {
    axios
      // (1) 왜 수정? : "/categories/1 /items"에 공백이 있어서 잘못된 URL
      // (2) 안 고치면? : 404 또는 라우팅 에러 발생 가능
      .get("/categories/3/items", {
        headers: {
          accept: "*/*",
          // Authorization: `Bearer ${cookies.accessToken}`,  // 토큰 필요하면 나중에 추가
        },
      })
      .then((response) => {
        // (1) 왜 필요? : 서버에서 받은 데이터를 products 상태에 저장해서 렌더링에 사용
        // (2) 없으면? : products는 계속 빈 배열이라 화면에 아무것도 안 뜸
        setProducts(response.data.result || []);
      })
      .catch((err) => {
        console.log("CATEGORY API 요청 실패", err);
      });
  }, []); // 최초 렌더링 시 한 번만 호출

  return (
    <div>
      <Banner title="Perfume" imagePath={"/banner_perfume.jpg"} />
      <div className="product-container">
        <div className="product-grid">
          {currentProducts.length === 0 ? (
            <p>상품이 없습니다.</p>
          ) : (
            currentProducts.map((product) => (
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

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`paging-button ${
                currentPage === pageNumber ? "active" : ""
              }`}
            >
              {pageNumber}
            </button>
          )
        )}

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
