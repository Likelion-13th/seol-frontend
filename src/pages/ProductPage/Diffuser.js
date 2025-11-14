import React, { useState, useEffect } from "react"; // useState 임포트 추가
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from "./../../components/PayModal";
import axios from "axios";
import { useCookies } from "react-cookie";

const Diffuser = () => {

  


  const [products, setProducts]= useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[cookies] = useCookies(["accessToken"]);
  
  
  const handleCardClick = (product) => {
    setSelectedProduct(product);
    
    if(typeof cookies.accessToken !== "string"){
      alert("로그인이 필요합니다");
      return;
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  useEffect(()=> {
        axios
      .get("/categories/2/items",{
        headers:{
          accept:"*/*",
          
        },
      })
	    .then((response) => {
	      setProducts(response.data.result);  
	    })  
      .catch((err)=>{
        console.log("CATEGORORY API 요청 실패",err);
      });
  },[])

  return (
    <div>
      <Banner title="Diffuser" imagePath={"/banner_diffuser.jpg"} />
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

export default Diffuser;