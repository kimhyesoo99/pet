import React from 'react';
import '../css/puppy.css';
import { Link } from 'react-router-dom';

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
                    <h3>새로운 가족을 만나다</h3>
                    <p>입양을 통해 귀여운 강아지들에게 새로운 시작을 선물하고,</p>
                    <p>특별한 인연을 만들어보세요.</p>
                </div>
                <div className='puppyImgWrapper'>
                    {puppys.map((puppy) => (
                        <div className="puppysbox" key={puppy.id}>
                            <img src={puppy.url} alt={puppy.name} />
                            <h4>{puppy.name}</h4>
                            <button><Link to="/ListDog">{puppy.button}</Link></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Puppy;