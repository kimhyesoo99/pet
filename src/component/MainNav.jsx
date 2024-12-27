import React from 'react'
import '../css/mainNav.css';

const MainNav = () => {

    return (
        <nav className='mainnav_cont'>
            <div className='mainnavBox'>
                <div className='logoBox'>
                    <h1>PawPrints</h1>
                </div>
                <div className='menuBox'>
                    <ul>
                        <li><a href="#promotio">홍보</a></li>
                        <li><a href="#adoption">입양</a></li>
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