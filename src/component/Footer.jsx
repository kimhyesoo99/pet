import React from 'react'
import '../css/footer.css'
import { AiFillFacebook, AiFillInstagram, AiFillPinterest } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div className='footerCont'>

            <div className='footerLogoBox'>
                <h2>PawPrints</h2>
            </div>

            <div className='footerMenu'>
                <ul>
                    <li><Link to="/promotio">홍보</Link></li>
                    <li><Link to="/ListDog">입양</Link></li>
                    <li><Link to="/walking">산책</Link></li>
                    <li><Link to="/products">상품</Link></li>
                    <li><Link to="/community">커뮤니티</Link></li>
                </ul>
            </div>

            <div className='snsIconbox'>
                <AiFillInstagram style={{ width: '30px', height: '30px', color: 'white' }} />
                <AiFillFacebook style={{ width: '30px', height: '30px', color: 'white' }} />
                <AiFillPinterest style={{ width: '30px', height: '30px', color: 'white' }} />
            </div>

        </div>
    )
}

export default Footer;