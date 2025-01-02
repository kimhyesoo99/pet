import { useLocation, useParams } from 'react-router-dom';
import '../css/listDogs.css';
import BackToTopButton from './BackToTopButton';
import Footer from './Footer';

const removeHTMLTags = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || "";
};

const DogDetail = () => {
    const { animalNo } = useParams();
    const location = useLocation();
    const { animalPhotos } = location.state;

    const animal = animalPhotos.find((animal) => animal.animalNo === animalNo);

    if (!animal) return <p>동물 정보를 찾을 수 없습니다.</p>;

    const interactionContent = removeHTMLTags(animal.interactionContent);
    const temporaryParticipationContent = removeHTMLTags(animal.temporaryParticipationContent);

    return (
        <>
            <BackToTopButton />
            <div>
                <h2>동물 상세 정보</h2>
                <img src={animal.photoUrl} alt={animal.name} />
                <h3>이름: {animal.name}</h3>
                <p>성별: {animal.sex}</p>
                <p>입소일: {animal.entranceDate}</p>
                <p>품종: {animal.breed}</p>
                <p>나이: {animal.age}</p>
                <p>몸무게: {animal.weight}</p>
                <p>입양 상태: {animal.adoptionStatus}</p>
                <p>임시보호: {animal.temporaryParticipationStatus}</p>
                <p>상호작용 내용: {interactionContent}</p>
                <p>임시참여 내용: {temporaryParticipationContent}</p>
                <video src={animal.interactionMoveUrl}></video>
            </div>
            <Footer />
        </>
    );
};

export default DogDetail;
