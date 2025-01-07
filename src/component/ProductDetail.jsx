import React, { useState } from 'react'
import '../css/productsList.css'
import BackToTopButton from './BackToTopButton';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const ProductDetail = () => {

    const [quantity, setQuantity] = useState(1);
    const unitPrice = 2900;
    const [modal, setModal] = useState(false);

    const modalOpen = () => {
        setModal(true);
    };

    const modalClose = () => {
        setModal(false);
    };


    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleAddToCart = () => {
        alert(`장바구니에 ${quantity}개가 추가되었습니다!`);
    };

    const cartData = [
        { id: 1, imgurl: '/img/cart_modal_img.png', name: '강아지 간식', price: '5000원' },
        { id: 2, imgurl: '/img/cart_modal_img.png', name: '강아지 간식', price: '5000원' },
        { id: 3, imgurl: '/img/cart_modal_img.png', name: '강아지 간식', price: '5000원' },
        { id: 4, imgurl: '/img/cart_modal_img.png', name: '강아지 간식', price: '5000원' }
    ]


    return (
        <>
            <BackToTopButton />
            <div className='productDetailCont'>
                <div className='subMenu'>
                    <ul>
                        <li><Link to={"/"} style={{ color: 'black', marginRight: '0.5rem' }}>HOME</Link></li>
                        <li><p style={{ color: 'black', marginRight: '0.5rem' }}>&gt;</p></li>
                        <li><Link to={"/"} style={{ color: 'black', marginRight: '0.5rem' }}>SHOP</Link></li>
                        <li><p style={{ color: 'black', marginRight: '0.5rem' }}>&gt;</p></li>
                        <li><Link to={"/"} style={{ color: '#dd952f' }}>PRODUCT</Link></li>
                    </ul>
                </div>
                <div>
                    <div className='productDetailImgBox'>
                        <img src="/img/product_detail_image.png" alt="디테일 이미지" />
                    </div>
                    <div className='productDetailTextBox'>
                        <h5>PawPrints products</h5>
                        <h3>저칼로리 건강 간식</h3>
                        <p>건강과 맛을 모두 챙긴 저칼로리 간식! 바쁜 일상 속에서도 <br />
                            가볍고 맛있게 즐길 수 있는 완벽한 선택입니다. <br />
                            이 간식은 낮은 칼로리와 풍부한 영양소를 자랑하며,<br />
                            체중 관리를 고민하는 분들에게 적합합니다.</p>
                        <div className='pricebox'>
                            <h3>{quantity * unitPrice}원</h3>
                            <p>(100g 기준)</p>
                        </div>
                        <div className="quantitySelector">
                            <button className="quantityButton" onClick={decreaseQuantity}>
                                -
                            </button>
                            <span className="quantityDisplay">{quantity}</span>
                            <button className="quantityButton" onClick={increaseQuantity}>
                                +
                            </button>
                        </div>

                        <div className='productDetailButBox'>
                            <button className='addToCartBut' onClick={handleAddToCart}>구매하기</button>
                            <button className='cartBut' onClick={modalOpen}>장바구니</button>
                        </div>

                        {modal && (
                            <div className='productDetailModalCont'>
                                <div className='productDetailModalBox'>
                                    <div className='productDetailModalwrapper'>
                                        <div className='productDetailModalHead'>
                                            <h3>CART</h3>
                                            <h3 onClick={modalClose}>X</h3>
                                        </div>
                                        <div className='productDetailModalBody'>
                                            {cartData.map((index) => (
                                                <div className="productDetails" key={index.id}>
                                                    <div>
                                                        <img src={index.imgurl} alt={"상품모달이미지"} />
                                                    </div>
                                                    <div>
                                                        <h3>{index.name}</h3>
                                                        <h5>{index.price}</h5>
                                                        <div className="modlaQuantitySelector">
                                                            <button className="modalQuantityButton" onClick={decreaseQuantity}>
                                                                -
                                                            </button>
                                                            <span className="modalQuantityDisplay">{quantity}</span>
                                                            <button className="modalQuantityButton" onClick={increaseQuantity}>
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='productDetailModalFooter'>
                                            <div>
                                                <h3>TOTAL</h3>
                                                <h3 >12,000원</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail