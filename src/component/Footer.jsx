import React from 'react'
import '../css/footer.css'
import { AiFillFacebook, AiFillInstagram, AiFillPinterest } from 'react-icons/ai';

const Footer = () => {
    return (

        <div className='footerCont'>

            <div className='footerLogoBox'>
                <h2>PawPrints</h2>
            </div>

            <div className='footerMenu'>
                <ul>
                    <li><a href="#promotio">홍보</a></li>
                    <li><a href="#adoption">입양</a></li>
                    <li><a href="#walking">산책</a></li>
                    <li><a href="#products">상품</a></li>
                    <li><a href="#community">커뮤니티</a></li>
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