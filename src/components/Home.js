import React from 'react';

import ProfilePictureIcon from '../assets/images/profile.jpeg';

export default function Home() {
    return (
        <div className="home-page-container">
            <div className="home-container__center home-container__animated">
                <img className="home-profile-pic" alt="Profile" src={ProfilePictureIcon} />
                <h1 className="home-title">Chetanya Kandhari</h1>
                <h2 className="home-description">
                    <span className="skills">Software Engineer</span>
                    &nbsp;|&nbsp;
                    <span className="skills">Tech Enthusiast</span>
                </h2>
            </div>
        </div>
    );
}
