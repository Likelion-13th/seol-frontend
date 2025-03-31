import React from 'react';
import '../styles/Footer.css';
const Footer = () =>{
    return(
        <div>
            < div className="Footer-container">
                <div>
                    <div className="Footer-section">
                    <div className="Footer-title">LIKELION PROCESS</div> 
                    <div subname="Footer-subtitle">
                    멋쟁이사자처럼은 창업동아리이므로 실제 상품을 판매하지 않으며 연출된 페이지 입니다</div>
                    </div>
                </div>
                <div className='Line1'>
                    <div className="info-text-wrapper">
                        <div className="info-text-1">상호명</div>
                        <div className="info-text-2">멋쟁이사자처럼</div>
                    </div>
                    <div className="info-text-wrapper">
                        <div className="info-text-1">대표</div>
                        <div className="info-text-2">seol</div>
                    </div>
                    <div className="info-text-wrapper">
                        <div className="info-text-1">사업자등록번호</div>
                        <div className="info-text-2">123-456-789</div>
                    </div>
                    <div className="info-text-wrapper">
                        <div className="info-text-1">위치</div>
                        <div className="info-text-2">경기도 고양시 덕양구 한국항공대학교</div>
                    </div>

                </div>
                <div className='Line2'>
                    <div className="info-text-wrapper">
                        <div className="info-text-1">전화번호</div>
                        <div className="info-text-2">010-0000-0000</div>
                    </div>
                    <div className="info-text-wrapper">
                        <div className="info-text-1">개인정보보호책임자자</div>
                        <div className="info-text-2">seol</div>
                    </div>
                    <div className="info-text-wrapper">
                        <div className="info-text-1">임금계좌</div>
                        <div className="info-text-2">123-456-789</div>
                    </div>
                    

                </div>
             </div>
            
        </div>
        
        
        

    );
};
export default Footer;