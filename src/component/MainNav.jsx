import React, { useState } from 'react'
import '../css/mainNav.css';
import { Link } from 'react-router-dom';

const MainNav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='mainnav_cont'>
            <div className='mainnavBox'>
                <div className='logoBox'>
                    <h1><Link to="/">PawPrints</Link></h1>
                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <span>☰</span>
                </div>
                <div className={`menuBox ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/promotio">홍보</Link></li>
                        <li><Link to="/ListDog">입양</Link></li>
                        <li><Link to="/walking">산책</Link></li>
                        <li><Link to="/products">상품</Link></li>
                        <li><Link to="/community">커뮤니티</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MainNav;
