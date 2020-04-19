import React from 'react';

import LinkedInIcon from 'assets/linkedin.svg';
import GitHubIcon from 'assets/github.svg';
import MailIcon from 'assets/mail.svg';

import './App.css';

function App() {
    return (
        <div className="wrapper-normal">
            <div className="page home">
                <header className="header-home animated">
                    <span className="link">
                        <div className="profile-image-container selfie" />
                    </span>
                    <h1 className="title">Chetanya Kandhari</h1>
                    <h2 className="description">
                        <span className="skills">Designer</span>
                        <span className="skills"> - Developer </span>
                        <span className="skills"> - Thinker</span>
                        <span className="skills"> - Learner</span>
                    </h2>
                    <div className="connect-links">
                        <a
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-title="linkedin.com/in/chetanya-kandhari"
                            href="https://www.linkedin.com/in/chetanya-kandhari/"
                        >
                            <LinkedInIcon className="icon" />
                        </a>
                        <a
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-title="github.com/availchet"
                            href="https://github.com/availchet"
                        >
                            <GitHubIcon className="icon" />
                        </a>
                        <a
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-title="availchet@gmail.com"
                            href="mailto:availchet@gmail.com"
                        >
                            <MailIcon className="icon" viewBox="0 0 512 512" />
                        </a>
                    </div>
                </header>
                <nav className="nav-home">
                    <a
                        className="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="/assets/resume.pdf"
                    >
                        Résumé
                    </a>
                </nav>
                <footer className="footer-main">
                    Made with &#9829; by{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                        href="http://availchet.github.io"
                    >
                        Chetanya Kandhari
                    </a>
                </footer>
            </div>
        </div>
    );
}

export default App;
