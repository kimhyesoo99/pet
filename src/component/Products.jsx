import React, { useRef } from 'react';
import '../css/products.css';

const Products = () => {
    const productsWrapperRef = useRef(null);

    const prdduct = [
        { id: 1, url: '/img/Rectangle 85.png', name: 'PawPrints', product: '강아지사료', price: '1000원' },
        { id: 2, url: '/img/Rectangle 85.png', name: 'PawPrints', product: '강아지 간식', price: '2000원' },
        { id: 3, url: '/img/Rectangle 85.png', name: 'PawPrints', product: '강아지 장난감', price: '1500원' },
        { id: 4, url: '/img/Rectangle 85.png', name: 'PawPrints', product: '강아지 목줄', price: '3000원' },
        { id: 5, url: '/img/Rectangle 85.png', name: 'PawPrints', product: '강아지 샴푸', price: '2500원' },
        { id: 6, url: '/img/Rectangle 85.png', name: 'PawPrints', product: '강아지 침대', price: '5000원' }
    ];

    const slideLeft = () => {
        productsWrapperRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const slideRight = () => {
        productsWrapperRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className='productsCont'>
            <h3>PawPrints Prdducts</h3>
            <div className='productsWrapper' ref={productsWrapperRef}>
                {prdduct.map((item) => (
                    <div className="prdducts" key={item.id}>
                        <img src={item.url} alt={item.product} />
                        <p>{item.name}</p>
                        <h5>{item.product}</h5>
                        <h2>{item.price}</h2>
                    </div>
                ))}
            </div>
            <div className='sliderButtons'>
                <button onClick={slideLeft} className="slideleftButton">{"<"}</button>
                <button onClick={slideRight} className="sliderigtButton">{">"}</button>
            </div>
        </div>
    );
};

export default Products;
