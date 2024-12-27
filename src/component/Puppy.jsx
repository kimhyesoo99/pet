import React from 'react';
import '../css/puppy.css';

const Puppy = () => {
    const puppys = [
        { id: 1, url: '/img/unsplash_uge9QXIreS4.png', name: '하늘이', button: '더보기' },
        { id: 2, url: '/img/unsplash_Qb7D1xw28Co.png', name: '오디', button: '더보기' },
        { id: 3, url: '/img/unsplash_HlOLcjp4AEM.png', name: '미니', button: '더보기' },
        { id: 4, url: '/img/unsplash_9M0tSjb-cpA.png', name: '콩순이', button: '더보기' },
    ];

    return (
        <div className='puppyCont'>
            <div className='puppyWrapper'>
                <div className='puppyTextBox'>
                    <h3>새로운 가족을 만나다: 입양으로 강아지에게 사랑을 주세요!</h3>
                    <p>귀여운 강아지들이 새로운 가족을 기다리고 있어요. 입양을 통해 생명을 구하고, 사랑을 나누는 기쁨을 함께 해보세요. <br />
                        입양은 강아지에게 새로운 시작을 선물하고, 당신에게도 특별한 인연을 만들어줍니다.</p>
                </div>
                <div className='puppyImgWrapper'>
                    {puppys.map((puppy) => (
                        <div className="puppysbox" key={puppy.id}>
                            <img src={puppy.url} alt={puppy.name} />
                            <h4>{puppy.name}</h4>
                            <button>{puppy.button}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Puppy;