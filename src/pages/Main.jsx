import React from 'react'
import MainNav from '../component/MainNav'
import MainSlide from '../component/MainSlide'
import SiteIntroduction from '../component/SiteIntroduction'
import Puppy from '../component/Puppy'
import WalkTracker from '../component/WalkTracker'
import Products from '../component/Products'
import AbandonedDogService from '../component/AbandonedDogService'
import ActivityIntro from '../component/ActivityIntro'
import AdoptionReview from '../component/AdoptionReview'
import Footer from '../component/Footer'
import BackToTopButton from '../component/BackToTopButton'


const Main = () => {
    return (
        <div>
            <MainNav />
            <MainSlide />
            <SiteIntroduction />
            <Puppy />
            <AbandonedDogService />
            <WalkTracker />
            <Products />
            <ActivityIntro />
            <AdoptionReview />
            <BackToTopButton/>
            <Footer />
        </div>
    )
}

export default Main