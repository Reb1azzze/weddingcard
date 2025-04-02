import React from 'react';
import PhotoUs from "../assets/jpg/photoUs.jpg";
import PhotoLoc1 from "../assets/jpg/photoLocation2.jpg";
import PhotoLoc2 from "../assets/jpg/photoLocation.jpg";
import PhotoTiming from "../assets/jpg/photoTiming.jpg";
import PhotoDetails from "../assets/jpg/photoDetails.jpg";
import DressCode from "../assets/jpg/dressCode.jpg";
import girlsDressed from "../assets/jpg/girlsDressed.jpg";
import InvitationSection from "../components/InvitationSection/InvitationSection";
import LocationSection from "../components/LocationSection/LocationSection";
import TimingSection from "../components/TimingSection/TimingSection";
import DressCodeSection from "../components/DressCodeSection/DressCodeSection";
import DetailsSection from "../components/DetailsSection/DetailsSection";
import "./MainPage.css";




const MainPage = () => {
    return (
        <div className='mainPage'>
            <div className="nameContainer">
                <div className='names'>
                    <span className='names-text'>Iskander &</span>
                    <span className='names-text'>Darya</span>
                </div>
                <span className='data-text'>25.07.25</span>
            </div>
            <div className="page-container">
                <img alt={'wefwef4s'} style={{borderRadius: "40px 40px 0 0"}} className={'photo-component'} src={PhotoUs}/>
                <InvitationSection/>
                <img alt={'wefwef'} className={'photo-component'} src={PhotoLoc1}/>
                <LocationSection/>
                <img alt={'wefwef4'} className={'photo-component'} src={PhotoLoc2}/>
                <TimingSection/>
                <img alt={'wefwef'} className={'photo-component'} src={PhotoTiming}/>
                <DressCodeSection/>
                <img src={DressCode} className={'photo-component'} style={{marginBottom: '20px'}} alt='1'/>
                <img src={girlsDressed} className={'photo-component'} alt='1'/>
                <DetailsSection/>
                <img alt={'wefwef'} style={{borderRadius: "0 0 40px 40px"}} className={'photo-component'} src={PhotoDetails}/>
            </div>
        </div>
    );
};

export default MainPage;