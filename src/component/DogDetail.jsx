import { Link, useLocation, useParams } from 'react-router-dom';
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
            <div className='dogDetailPageCont'>
                <div className='dogDetailPageSubMenu'>
                    <ul>
                        <li><Link to={"/"} style={{ color: 'black', marginRight: '0.5rem' }}>HOME</Link></li>
                        <li><p style={{ color: 'black', marginRight: '0.5rem' }}>&gt;</p></li>
                        <li><Link to={"/ListDog"} style={{ color: 'black', marginRight: '0.5rem' }}>DOG</Link></li>
                        <li><p style={{ color: 'black', marginRight: '0.5rem' }}>&gt;</p></li>
                        <li><Link to={"/ProductDetail"} style={{ color: '#dd952f' }}>INTRODUCTION</Link></li>
                    </ul>
                </div>
                <div className='dogDetailPageWrappr'>
                    <div className='dogDetailPageAbotMe'>
                        <div className='dogDetailInro'>
                            <div>
                                <p>안녕 나는 <span>{animal.name}</span></p>
                                <p>나의 가족이 되어주라 🐾</p>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className='dogDetailImgBox'>
                            <img src={animal.photoUrl} alt="공공데이터 보호동물 이미지" />
                        </div>
                        <div className='dogDetailTextBox'>
                            <div>
                                <h5>성별</h5>
                                <p>{animal.sex}</p>
                            </div>
                            <div>
                                <h5>나이</h5>
                                <p>{animal.age}</p>
                            </div>
                            {/* <div>
                                <h5>몸무게</h5>
                                <p>{animal.weigh}</p>
                            </div> */}
                            <div>
                                <h5>품종</h5>
                                <p>{animal.breed}</p>
                            </div>
                            <div>
                                <h5>입소일</h5>
                                <p>{animal.entranceDate}</p>
                            </div>
                        </div>
                    </div>
                    <div className='dogDetailPageIntroduction'>
                        <div>
                            <h5>저를 소개합니다!🐾</h5>
                        </div>
                        <div>
                            <p>{interactionContent}</p>
                        </div>
                    </div>
                    <div className='dogDetailPageButton'>
                        <button>입양문의</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DogDetail;
