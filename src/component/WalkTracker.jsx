import React, { useState, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../css/walkTracker.css';
import {key} from '../api/Api.js'

const containerStyle = {
    width: '85%',
    height: '400px',
};

const center = {
    lat: 37.5665, // 서울의 위도
    lng: 126.9780, // 서울의 경도
};

const WalkTracker = () => {
    const [path, setPath] = useState([]); // 산책 경로
    const [photo, setPhoto] = useState(null); // 업로드된 사진
    const [walkLog, setWalkLog] = useState(''); // 산책 일지
    const mapRef = useRef(null);

    // 산책 경로 저장하기
    const handleMapClick = (e) => {
        // 기존 경로를 덮어쓰지 않고 새로운 경로를 추가
        const newPath = [...path, e.latLng];
        setPath(newPath);
    };

    // 사진 업로드 핸들러
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // 산책 일지 핸들러
    const handleWalkLogChange = (e) => {
        setWalkLog(e.target.value);
    };

    return (
        <div className='walkTrackerCont'>
            <div className='walkTrackerWrapper'>
                <div className='walkTrackerheader'>
                    <h2>반려동물과 함께하는 서울 산책 코스</h2>
                </div>
                <div className='walkTrackerCourse'>
                    <div className='walkTrackerMap'>
                        {/* 지도 */}
                        <LoadScript googleMapsApiKey={key}>
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center} // 서울을 중심으로 설정
                                zoom={14}
                                onClick={handleMapClick}
                                onLoad={(map) => (mapRef.current = map)}
                            >
                                {/* 클릭한 지점에 마커만 표시 */}
                                {path.map((position, index) => (
                                    <Marker key={index} position={position} />
                                ))}
                            </GoogleMap>
                        </LoadScript>
                    </div>
                    <div className="uploadSection">
                        {/* 사진 업로드 */}
                        <div>
                            <h3>산책 사진 업로드</h3>
                            <input type="file" accept="image/*" onChange={handlePhotoChange} />
                            {photo && <img src={photo} alt="Uploaded walk photo" style={{ width: '200px', marginTop: '10px' }} />}
                        </div>
                        {/* 산책 일지 작성 */}
                        <div>
                            <h3>산책 일지 작성</h3>
                            <textarea
                                value={walkLog}
                                onChange={handleWalkLogChange}
                                placeholder="산책 중 느낀 점을 작성해 보세요."
                                rows="4"
                                cols="50"
                            />
                        </div>
                        {/* 일지와 사진 저장 버튼 */}
                        <button className="saveLogButton" onClick={() => alert('산책 코스가 저장되었습니다!')}>산책 기록 저장</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalkTracker;
