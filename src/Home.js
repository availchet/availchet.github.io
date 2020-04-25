import React from 'react';

import ProfileImage from 'assets/profile.jpeg';
import LinkedInIcon from 'assets/linkedin.svg';
import GitHubIcon from 'assets/github.svg';
import MailIcon from 'assets/mail.svg';
import ResumeIcon from 'assets/resume.svg';
import HeartIcon from 'assets/heart.svg';

function App() {
    return (
        <div className="wrapper-normal">
            <div className="page home">
                <header className="header-home animated">
                    <a className="link" href="https://github.com/availchet">
                        <img className="selfie" alt="Chetanya Kandhari" src={ProfileImage} />
                    </a>
                    <h1 className="title">Chetanya Kandhari</h1>
                    <h2 className="description">
                        <span className="skills">Developer</span>
                        <span className="skills"> - Designer </span>
                        <span className="skills"> - Thinker</span>
                        <span className="skills"> - Learner</span>
                    </h2>
                    <div className="connect-links">
                        <a
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-title="LinkedIn"
                            href="https://www.linkedin.com/in/chetanya-kandhari/"
                        >
                            <LinkedInIcon className="icon" />
                        </a>
                        <a
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-title="GitHub"
                            href="https://github.com/availchet"
                        >
                            <GitHubIcon className="icon" />
                        </a>
                        <a
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-title="E-mail"
                            href="mailto:availchet@gmail.com"
                        >
                            <MailIcon className="icon" viewBox="0 0 512 512" />
                        </a>
                        <a
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-title="Résumé"
                            href="/assets/resume.pdf"
                        >
                            <ResumeIcon className="icon" viewBox="0 0 512 512" />
                        </a>
                    </div>
                </header>
                <footer className="footer-main">
                    Made with <HeartIcon className="heart" /> by &nbsp;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="author-link"
                        href="http://github.com/availchet"
                    >
                        Chetanya Kandhari
                    </a>
                </footer>
            </div>
        </div>
    );
}

export default App;
