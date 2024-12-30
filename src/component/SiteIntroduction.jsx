import React from 'react';
import '../css/siteIntroduction.css';
import { Link } from 'react-router-dom';

export const SiteIntroduction = () => {
    return (
        <div className='siteItroCont'>
            <div className='siteItroWrapper'>
                <div className='siteItroImgbox'>
                    <img src="/img/unsplash_fliwkBbS7oM.png" alt="유기견 이미지" />
                </div>
                <div className='siteItroTextbox'>
                    <h3>책임감 있는 반려동물 가족을 찾습니다</h3>
                    <p>
                        유기견 입양은 작은 선택이 큰 책임으로 이어지는 과정입니다. <br />
                        우리는 반려동물에게 평생의 헌신과 사랑을 줄 수 있는 책임감 있는 가족을 기다리고 있습니다. <br />
                        함께하는 동안 반려동물과의 깊은 유대감은 여러분을 더 나은 사람으로 만들어 줄 것입니다.
                    </p>
                    <button><Link to="/ListDog">더보기</Link></button>
                </div>
            </div>
        </div>
    );
};

export default SiteIntroduction;



