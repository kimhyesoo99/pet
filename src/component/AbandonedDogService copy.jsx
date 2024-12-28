import React, { useState, useEffect } from 'react';
import '../css/abandonedDogService.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const AbandonedDogService = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedEvent(null);
    };

    useEffect(() => {
        const exampleEvents = [
            {
                id: 0,
                title: '봉사 일정 1',
                start: new Date(2024, 11, 28, 10, 0),
                end: new Date(2024, 11, 28, 12, 0),
                description: '봉사 일정 1에 대한 상세 설명입니다.',
            },
            {
                id: 1,
                title: '봉사 일정 2',
                start: new Date(2024, 11, 29, 10, 0),
                end: new Date(2024, 11, 29, 12, 0),
                description: '봉사 일정 2에 대한 상세 설명입니다.',
            },
        ];

        setEvents(exampleEvents);
    }, []);

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
    };

    return (
        <div className='abandonedDogServiceCont'>
            <div className="puppyVideobox">
                <video autoPlay muted loop>
                    <source src="/img/135025-760679997_tiny.mp4" type="video/mp4" />
                    <p>비디오를 재생할 수 없습니다. 브라우저를 확인해주세요.</p>
                </video>
            </div>
            <div className='puppyabandonedDogTextBox'>
                <h3>함께 손을 모아주세요, 따뜻한 세상을 만듭니다</h3>
                <p>반려동물들에게 더 나은 환경을 만들어주고 싶으신가요?</p>
                <p>작은 관심과 행동이 위기에 처한 반려동물들에게 큰 희망이 됩니다.</p>
                <p>저희 보호소에서는 봉사자분들을 환영합니다!</p>
                <p>청소, 산책, 급식 등 다양한 활동을 통해 보호소의 일원으로 함께할 수 있습니다.</p>
                <p>소중한 시간과 따뜻한 마음으로 반려동물들과 특별한 추억을 만들어 보세요.</p>
                <h5>📅 봉사 일정 확인하기</h5>
                <p>아래의 버튼을 클릭하여 봉사 가능한 날짜와 시간을 확인하고 신청해주세요.</p>
                <button onClick={openModal}>봉사 일정 확인 및 신청하기</button>
                {modalIsOpen && (
                    <div className='abandonedDogModalCont'>
                        <div className='abandonedDogModalBox'>
                            <div className='abandonedDogCalendarBox' >
                                <h2>봉사 일정 캘린더</h2>
                                <h4 onClick={closeModal} style={{ cursor: 'pointer' }}>X</h4>
                            </div>
                            <div className='abandonedDogCalendarCo'>
                                <div>
                                    <Calendar
                                        localizer={localizer}
                                        events={events}
                                        startAccessor="start"
                                        endAccessor="end"
                                        style={{ height: 500, width: 700, margin: '50px' }}
                                        selectable
                                        onSelectEvent={handleSelectEvent} // 이벤트 선택 시 처리
                                        onSelectSlot={(slotInfo) =>
                                            alert(
                                                `선택한 날짜: ${slotInfo.start.toLocaleString()} - ${slotInfo.end.toLocaleString()}`
                                            )
                                        }
                                    />
                                    <div style={{ padding: '20px', borderLeft: '1px solid #ccc' }}>
                                        {selectedEvent ? (
                                            <div>
                                                <h3>상세 내역</h3>
                                                <p><strong>제목:</strong> {selectedEvent.title}</p>
                                                <p><strong>시작:</strong> {selectedEvent.start.toLocaleString()}</p>
                                                <p><strong>종료:</strong> {selectedEvent.end.toLocaleString()}</p>
                                                <p><strong>설명:</strong> {selectedEvent.description}</p>
                                            </div>
                                        ) : (
                                            <p>이벤트를 선택하세요.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AbandonedDogService;
