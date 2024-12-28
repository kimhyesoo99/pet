import React from 'react'
import '../css/mainNav.css';
import { Link } from 'react-router-dom';

const MainNav = () => {

    return (
        <nav className='mainnav_cont'>
            <div className='mainnavBox'>
                <div className='logoBox'>
                    <h1><Link to="/">PawPrints</Link></h1>
                </div>
                <div className='menuBox'>
                    <ul>
                        <li><a href="#promotio">홍보</a></li>
                        <li><Link to="/ListDog">입양</Link></li>
                        <li><a href="#walking">산책</a></li>
                        <li><a href="#products">상품</a></li>
                        <li><a href="#community">커뮤니티</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MainNav