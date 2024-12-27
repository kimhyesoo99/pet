import React from 'react';
import { MdOutlinePets } from 'react-icons/md';

const BackToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <button className='topbut'
                style={{ width: '75px', height: '75px', borderRadius: '50%', border: 'none', marginBottom: '1rem' }}
                onClick={scrollToTop}
            >
                <MdOutlinePets style={{ width: '70px', height: '70px', color: '#DD952F' }} />
            </button>
        </div>);
}

export default BackToTopButton;
