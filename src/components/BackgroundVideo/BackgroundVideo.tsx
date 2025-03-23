import React from "react";
import {useIsMobile} from "../../hooks/useIsMobile";
import "./BackgroundVideo.css";

const BackgroundVideo: React.FC = () => {

    const isMobile = useIsMobile();
    return (
        <div className="video-container">
            <video autoPlay muted loop className="background-video">
                {isMobile ? <source src="/mp4/natureBack.mp4" type="video/mp4" /> :
                    <source src="/mp4/natureBack.mp4" type="video/mp4" />}
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <h1>Welcome to My Website</h1>
            </div>
        </div>
    );
};

export default BackgroundVideo;
