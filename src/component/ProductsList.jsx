import React, { useState } from 'react';
import '../css/productsList.css';
import BackToTopButton from './BackToTopButton';
import Footer from './Footer';

const ProductsList = () => {

    const [filter, setFilter] = useState('');

    const product = [
        { id: 1, url: '/img/Rectangle 117.png', product: '고급 강아지사료', category: '사료', price: '3000원', cont: '고품질 원료로 만든 프리미엄 사료입니다.' },
        { id: 2, url: '/img/Rectangle 117.png', product: '일반 강아지사료', category: '사료', price: '1000원', cont: '영양가 높은 강아지 사료입니다.' },
        { id: 3, url: '/img/Rectangle 119.png', product: '맛있는 간식', category: '간식', price: '2000원', cont: '강아지가 좋아하는 닭고기 간식입니다.' },
        { id: 4, url: '/img/Rectangle 119.png', product: '저칼로리 간식', category: '간식', price: '1500원', cont: '다이어트에 적합한 저칼로리 간식입니다.' },
        { id: 5, url: '/img/Rectangle 127.png', product: '강아지 뽀솔 수건', category: '수건', price: '2500원', cont: '물기 좋은 고무 장난감입니다.' },
        { id: 6, url: '/img/Rectangle 121.png', product: '강아지 튼튼한 리드줄', category: '리드줄', price: '3000원', cont: '튼튼한 강아지 로프 장난감입니다.' },
        { id: 7, url: '/img/Rectangle 123.png', product: '편안한 강아지 침대', category: '침대', price: '5000원', cont: '강아지의 숙면을 위한 침대입니다.' },
        { id: 8, url: '/img/Rectangle 125.png', product: '기능성 강아지 샴푸', category: '샴푸', price: '2500원', cont: '피부와 모발을 부드럽게 해주는 샴푸입니다.' },
        { id: 9, url: '/img/Rectangle 117.png', product: '고급 강아지사료', category: '사료', price: '3000원', cont: '고품질 원료로 만든 프리미엄 사료입니다.' },
        { id: 10, url: '/img/Rectangle 117.png', product: '일반 강아지사료', category: '사료', price: '1000원', cont: '영양가 높은 강아지 사료입니다.' },
        { id: 11, url: '/img/Rectangle 119.png', product: '맛있는 간식', category: '간식', price: '2000원', cont: '강아지가 좋아하는 닭고기 간식입니다.' },
        { id: 12, url: '/img/Rectangle 119.png', product: '저칼로리 간식', category: '간식', price: '1500원', cont: '다이어트에 적합한 저칼로리 간식입니다.' },
        { id: 13, url: '/img/Rectangle 127.png', product: '강아지 뽀솔 수건', category: '수건', price: '2500원', cont: '물기 좋은 고무 장난감입니다.' },
        { id: 14, url: '/img/Rectangle 121.png', product: '강아지 튼튼한 리드줄', category: '리드줄', price: '3000원', cont: '튼튼한 강아지 로프 장난감입니다.' },
        { id: 15, url: '/img/Rectangle 123.png', product: '편안한 강아지 침대', category: '침대', price: '5000원', cont: '강아지의 숙면을 위한 침대입니다.' },
        { id: 16, url: '/img/Rectangle 125.png', product: '기능성 강아지 샴푸', category: '샴푸', price: '2500원', cont: '피부와 모발을 부드럽게 해주는 샴푸입니다.' },
        { id: 17, url: '/img/Rectangle 119.png', product: '맛있는 간식', category: '간식', price: '2000원', cont: '강아지가 좋아하는 닭고기 간식입니다.' },
        { id: 18, url: '/img/Rectangle 119.png', product: '저칼로리 간식', category: '간식', price: '1500원', cont: '다이어트에 적합한 저칼로리 간식입니다.' },
    ];


    const filteredProducts = filter
        ? product.filter((item) => item.category === filter)
        : product;

    const categories = ['전체', ...new Set(product.map((item) => item.category))];

    return (
        <>
            <div className='productsListCont'>
                <BackToTopButton />
                <h3>Prdducts</h3>
                <div className="filterListButtons">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category === '전체' ? '' : category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="productsListWrapper">
                    {filteredProducts.map((item) => (
                        <div className="productsListCard" key={item.id}>
                            <img src={item.url} alt={item.product} />
                            <div>
                                <h5>{item.product}</h5>
                                <p>{item.price}</p>
                            </div>
                            <p>{item.cont}</p>
                            <button>{item.category}</button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>

    );
};

export default ProductsList;
