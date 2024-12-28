import React from 'react'
import '../css/activityIntro.css';
import { Link } from 'react-router-dom';

const ActivityIntro = () => {
    return (
        <div className='activityIntroCont'>
            <h3>PawPrints 주요 활동</h3>
            <p>따뜻한 가족을 찾아주는 입양, 자연 속 즐거운 산책 코스 추천, 그리고 강아지를 위한 필수 아이템 쇼핑까지 한곳에서 만나보세요!</p>
            <div className='ActivityWrapper'>
                <div className='ActivityBox'>
                    <div className='Activityflex1'>
                        <div>
                            <img src="/img/unsplash_JmCSdHGXnsU.png" alt="강아지1" />
                            <div className='ActivityTextBox'>
                                <h5>새로운 가족을 찾아보세요!</h5>
                                <p>따뜻한 마음으로 새로운 가족을 </p>
                                <p>맞이할 준비가 되셨나요?</p>
                                <p>지금 바로 가족이 되어주세요!</p>
                                <button><Link to="/ListDog">보호동물 보기</Link></button>
                            </div>
                        </div>
                        <div>
                            <img src="/img/unsplash_e9ZJpC8P0UY.png" alt="강아지2" />
                            <div className='ActivityTextBox'>
                                <h5>즐거운 산책, 강아지와 함께!</h5>
                                <p>반려견과 함께 걷기 좋은 산책로를 소개합니다!</p>
                                <p>자연 속에서 즐기는 산책은 강아지와 보호자 모두에게 행복한 시간을 선물합니다.</p>
                                <button><Link to="/">추천 산책 코스 보기</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className='Activityflex2'>
                        <img src="/img/unsplash_VDrErQEF9e4.png" alt="강아지3" />
                        <div className='ActivityTextBox'>
                            <h5>강아지를 위한 필수 아이템</h5>
                            <p>강아지와 함께하는 생활을 더욱 편리하고 행복하게 만들어줄 상품들을 만나보세요.</p>
                            <p>지금 필요한 모든 것을 한눈에 확인할 수 있습니다!</p>
                            <button><Link to="/">강아지 용품 쇼핑하기</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityIntro