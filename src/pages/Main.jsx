import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNav from "../component/MainNav";
import MainSlide from "../component/MainSlide";
import SiteIntroduction from "../component/SiteIntroduction";
import Puppy from "../component/Puppy";
import WalkTracker from "../component/WalkTracker";
import Products from "../component/Products";
import AbandonedDogService from "../component/AbandonedDogService";
import ActivityIntro from "../component/ActivityIntro";
import AdoptionReview from "../component/AdoptionReview";
import Footer from "../component/Footer";
import BackToTopButton from "../component/BackToTopButton";
import ListDog from "../component/ListDog"; // 입양 컴포넌트 추가

const Main = () => {
    return (
        <Router>
            <MainNav />
            <Routes>
                <Route path="/" element={
                    <>
                        <MainSlide />
                        <SiteIntroduction />
                        <Puppy />
                        <AbandonedDogService />
                        <WalkTracker />
                        <Products />
                        <ActivityIntro />
                        <AdoptionReview />
                        <BackToTopButton />
                        <Footer />
                    </>
                } />
                <Route path="/ListDog" element={<ListDog />} />
            </Routes>
        </Router>
    );
};

export default Main;
