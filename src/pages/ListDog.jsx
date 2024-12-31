import React, { useEffect, useState } from 'react';
import '../css/listDogs.css';
import axios from 'axios';
import BackToTopButton from '../component/BackToTopButton.jsx';


const ListDogs = () => {

    const [animalPhotos, setAnimalPhotos] = useState([]);

    useEffect(() => {
        const fetchAnimalPhotos = async () => {
            const listDogs = process.env.REACT_APP_DOG_LIST_API_KEY;
            const proxyUrl = 'https://paw-prints-ten.vercel.app/api/proxy';
            const url = `${proxyUrl}?url=http://openapi.seoul.go.kr:8088/76685a67416b737931303352774c6f6f/xml/TbAdpWaitAnimalPhotoView/1/300/`;
            console.log(url)
            console.log(listDogs)
            try {
                const response = await axios.get(url);
                const xmlText = response.data;
                // XML 파싱
                const xml = new DOMParser().parseFromString(xmlText, "application/xml");
                const items = Array.from(xml.getElementsByTagName("row")).map((item) => {
                    const animalNo = item.querySelector("ANIMAL_NO")?.textContent || "알 수 없음";
                    const photoUrl = item.querySelector("PHOTO_URL")?.textContent || "";
                    // URL에 프로토콜 추가
                    const fullPhotoUrl = photoUrl.startsWith("http") ? photoUrl : `https://${photoUrl}`;
                    return {
                        animalNo,
                        photoUrl: fullPhotoUrl,
                    };
                });
                // 동물 번호를 기준으로 중복 제거
                const uniqueAnimals = Array.from(new Set(items.map(animal => animal.animalNo)))
                    .map(animalNo => {
                        return items.find(item => item.animalNo === animalNo);
                    });
                setAnimalPhotos(uniqueAnimals);
            } catch (err) {
                console.error(err);
            }
        };
        fetchAnimalPhotos();
    }, []);


    return (
        <div className='listDogcont'>
            <BackToTopButton />
            <div className='listDogHead'>
                <h3>보호동물</h3>
            </div>
            <div className='listDogWrapper'>
                {animalPhotos.map((animal, index) => (
                    <div key={index}>
                        {animal.photoUrl ? (
                            <img src={animal.photoUrl} alt={`동물 번호 ${animal.animalNo}`} width="300" height="250" />
                        ) : (
                            <p>사진 없음</p>
                        )}
                        <h3>동물 번호 : <span>{animal.animalNo}</span></h3>
                        <p>자세한 정보는 아래 버튼을 누른 후 확인 부탁드립니다</p>
                        <h5><a href="https://animal.seoul.go.kr/index">더보기</a></h5>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ListDogs;
