import React from 'react'
import '../css/adoptionReview.css'
import { AiOutlineComment } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';

const AdoptionReview = () => {

    const reviews = [
        {
            id: 1,
            url: '/img/review_puppy1.png',
            title: '오디',
            cont: '오디를 만나서 너무 행복해요 감사합니다'
        },
        {
            id: 2,
            url: '/img/review_puppy2.png',
            title: '뭉치',
            cont: '뭉치와 함께하는 시간이 제 삶의 활력소가 되었어요!'
        },
        {
            id: 3,
            url: '/img/review_puppy3.png',
            title: '코코',
            cont: '코코 덕분에 집이 너무 활기차고 즐거워졌습니다.'
        },
        {
            id: 4,
            url: '/img/review_puppy4.png',
            title: '보리',
            cont: '보리가 가족이 된 후로 매일 웃을 일이 많아졌어요.'
        },
        {
            id: 5,
            url: '/img/review_puppy5.png',
            title: '초코',
            cont: '초코와의 산책 시간이 제일 행복한 시간이에요!'
        },
        {
            id: 6,
            url: '/img/review_puppy6.png',
            title: '몽이',
            cont: '몽이와 함께하는 순간들이 너무 소중합니다.'
        },
        {
            id: 7,
            url: '/img/review_puppy7.png',
            title: '루비',
            cont: '루비가 우리 집의 귀염둥이로 자리 잡았어요.'
        },
        {
            id: 8,
            url: '/img/review_puppy8.png',
            title: '흰둥이',
            cont: '흰둥이 덕분에 매일매일이 행복 그 자체입니다!'
        },
    ];


    return (
        <div className='adoptionReviewCont'>
            <h3>PawPrints 입양후기</h3>
            <p>새로운 가족을 맞이한 따뜻한 이야기들을 만나보세요. <br />
                사랑과 행복이 가득한 후기를 확인해보세요! 🐾
            </p>
            <div className='adoptionReviewWrapper'>
                {reviews.map((index) => (
                    <div className="reviews" key={index.id}>
                        <img src={index.url} alt="review" />
                        <h3>{index.title}</h3>
                        <p>{index.cont}</p>
                        <div className='reviewIconbox'>
                            <FaHeart className='icon' style={{ marginRight: '2rem' }} />
                            <AiOutlineComment className='icon' />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AdoptionReview;

