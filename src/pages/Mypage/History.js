import React from 'react';

const History =() =>{
    const oncancel =() => {
        alert("취소");
    }
    return (
    <div className='history-container-wrap'>
       <div className='history-title'>나의 쇼핑내역</div>
       <div className='history-container'>
            <table className='history-table' cellPadding="10" cellSpacing="0">
                <thead>
                    <th>주문일자</th>
                    <th>상품 정보</th>
                    <th>수량</th>
                    <th>구매 금액</th>
                    <th>상태</th>
                    <th>주문 취소</th>
                </thead>
                <tbody>
                    <td>20205-05-01</td>
                    <td>
                        <div className='product-info'>
                            <img src="/img/historyimg.jpg" alt="조던" className='product-image' />
                            <div className='product-text'>
                                조던
                                <div className='history-subtitle'>레트로 하이 OG</div>
                            </div>
                        </div>
                    </td>
                    <td>1</td>
                    <td>135,000</td>
                    <td>배송중</td>
                    <td>
                        <div className='history-cancel'>
                        <div className='history-cancel-button'
                        onClick={oncancel}>취소</div>
                        </div>
                    </td>
                </tbody>
                <tbody>
                    <td>20205-05-01</td>
                    <td>
                        <div className='product-info'>
                            <img src="/img/historyimg.jpg" alt="조던" className='product-image' />
                            <div className='product-text'>
                                조던
                                <div className='history-subtitle'>레트로 하이 OG</div>
                            </div>
                        </div>
                    </td>
                    <td>1</td>
                    <td>135,000</td>
                    <td>배송중</td>
                    <td>
                        <div className='history-cancel'>
                        <div className='history-cancel-button'
                        onClick={oncancel}>취소</div>
                        </div>
                    </td>
                </tbody>
                <tbody>
                    <td>20205-05-01</td>
                    <td>
                        <div className='product-info'>
                            <img src="/img/historyimg.jpg" alt="조던" className='product-image' />
                            <div className='product-text'>
                                조던
                                <div className='history-subtitle'>레트로 하이 OG</div>
                            </div>
                        </div>
                    </td>
                    <td>1</td>
                    <td>135,000</td>
                    <td>배송중</td>
                    <td>
                        <div className='history-cancel'>
                        <div className='history-cancel-button'
                        onClick={oncancel}>취소</div>
                        </div>
                    </td>
                </tbody>    
            </table>
       </div>
    </div>);
};

export default History;