import React, { useEffect, useState } from 'react';
import '../css/listDogs.css';
import axios from 'axios';
import BackToTopButton from '../component/BackToTopButton.jsx';
import Footer from '../component/Footer.jsx';

const ListDogs = () => {

    const [animalPhotos, setAnimalPhotos] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [genderFilter, setGenderFilter] = useState("전체");

    useEffect(() => {
        const fetchAnimalPhotos = async () => {

            const listDogs = process.env.REACT_APP_DOG_LIST_API_KEY;
            const listcontDogs = process.env.REACT_APP_DOG_LIST_CONT_API_KEY;
            const proxyUrl = 'https://paw-prints-ten.vercel.app/api/proxy';
            const url = `${proxyUrl}?url=http://openapi.seoul.go.kr:8088/${listDogs}/xml/TbAdpWaitAnimalPhotoView/1/300/`;
            const contUrl = `${proxyUrl}?url=http://openapi.seoul.go.kr:8088/${listcontDogs}/xml/TbAdpWaitAnimalView/1/300/`;

            try {
                const [photoResponse, detailsResponse] = await Promise.all([
                    axios.get(url),
                    axios.get(contUrl),
                ]);

                const photoXml = new DOMParser().parseFromString(photoResponse.data, "application/xml");
                const detailsXml = new DOMParser().parseFromString(detailsResponse.data, "application/xml");

                const photoItems = Array.from(photoXml.getElementsByTagName("row")).map((item) => {
                    const animalNo = item.querySelector("ANIMAL_NO")?.textContent || "알 수 없음";
                    const photoUrl = item.querySelector("PHOTO_URL")?.textContent || "";

                    const fullPhotoUrl = photoUrl.startsWith("http") ? photoUrl : `https://${photoUrl}`;

                    return {
                        animalNo,
                        photoUrl: fullPhotoUrl,
                    };
                });

                const detailItems = Array.from(detailsXml.getElementsByTagName("row")).map((item) => {
                    const animalNo = item.querySelector("ANIMAL_NO")?.textContent || "알 수 없음";
                    const name = item.querySelector("NM")?.textContent || "알 수 없음";
                    const sex = item.querySelector("SEXDSTN")?.textContent || "알 수 없음";
                    const genderText = sex === "M" ? "수컷" : sex === "W" ? "암컷" : "알 수 없음";
                    return {
                        animalNo,
                        name,
                        sex: genderText,
                    };
                });

                const mergedData = detailItems.map((detail) => {
                    const photo = photoItems.find((p) => p.animalNo === detail.animalNo);
                    return {
                        ...detail,
                        photoUrl: photo?.photoUrl || "",
                    };
                });

                const uniqueAnimals = Array.from(new Set(mergedData.map((animal) => animal.animalNo)))
                    .map((animalNo) => mergedData.find((animal) => animal.animalNo === animalNo));

                console.log("Merged Data with Photos and Details:", uniqueAnimals);

                setAnimalPhotos(uniqueAnimals);
                setFilteredData(uniqueAnimals);

            } catch (err) {
                console.error("Error fetching animal data:", err);
            }
        };

        fetchAnimalPhotos();
    }, []);

    const filterByGender = (gender) => {
        if (gender === "전체") {
            setFilteredData(animalPhotos);
        } else {
            const filtered = animalPhotos.filter((animal) => animal.sex === gender);
            setFilteredData(filtered);
        }
        setGenderFilter(gender);
    };

    return (
        <>
            <div className='listDogcont'>
                <BackToTopButton />
                <div className='listDogHead'>
                    <h3>보호동물</h3>
                    <div className="filter-buttons">
                        <button onClick={() => filterByGender("전체")}>전체</button>
                        <button onClick={() => filterByGender("암컷")}>여자</button>
                        <button onClick={() => filterByGender("수컷")}>남자</button>
                    </div>
                </div>
                <div className='listDogWrapper'>
                    {filteredData.map((animal) => (
                        <div key={animal.animalNo}>
                            {animal.photoUrl ? (
                                <img src={animal.photoUrl} alt={`동물 번호 ${animal.animalNo}`} width="300" height="250" />
                            ) : (
                                <p>사진 없음</p>
                            )}
                            <h3>이름: <span>{animal.name}</span></h3>
                            <p>성별: <span>{animal.sex}</span></p>
                            <button><a href="https://animal.seoul.go.kr/index" target="_blank" rel="noopener noreferrer">더보기</a></button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ListDogs;
