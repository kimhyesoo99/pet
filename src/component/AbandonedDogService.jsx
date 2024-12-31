import React from 'react'
import '../css/abandonedDogService.css'

const AbandonedDogService = () => {

    return (
        <div className='abandonedDogServiceCont'>

            <div className="puppyVideobox">
                <video autoPlay muted loop>
                    <source src="/img/135025-760679997_tiny.mp4" type="video/mp4" />
                    <p>비디오를 재생할 수 없습니다. 브라우저를 확인해주세요.</p>
                </video>
            </div>
            <div className='puppyabandonedDogTextBox'>
                <h3>함께 손을 모아 따듯한 세상을 만들어주세요</h3>
                <p>
                    저희 PawPrints에서는 봉사자분들을 환영합니다! <br />
                    청소, 산책, 급식 등 다양한 활동을 통해 보호소의 일원으로 함께할 수 있습니다. <br />
                    소중한 시간과 따뜻한 마음으로 반려동물들과 특별한 추억을 만들어 보세요.
                </p>
                <h5>📅 봉사 일정 확인하기</h5>
                <p>아래의 버튼을 클릭하여 봉사 가능한 날짜와 시간을 확인하고 신청해주세요.</p>
                <button>봉사 일정 확인 및 신청하기</button>
            </div>

        </div >
    )
}

export default AbandonedDogService;


