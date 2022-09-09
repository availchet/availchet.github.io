import React from 'react';

import { ReactComponent as TwitterIcon } from '../assets/icons/twitter.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg';
import { ReactComponent as MailIcon } from '../assets/icons/mail.svg';
import { ReactComponent as WhatsAppIcon } from '../assets/icons/whatsapp.svg';
import { ReactComponent as ResumeIcon } from '../assets/icons/resume.svg';

export default function Header() {
    return (
        <footer className="footer clearfix">
            <div className="footer-social-links">
                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="Twitter"
                    href="https://twitter.com/availchet"
                >
                    <TwitterIcon className="social-link-icon" aria-label="Twitter" />
                </a>
                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="LinkedIn"
                    href="https://www.linkedin.com/in/chetanya-kandhari"
                >
                    <LinkedInIcon className="social-link-icon" aria-label="LinkedIn" />
                </a>
                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="GitHub"
                    href="https://github.com/availchet"
                >
                    <GitHubIcon className="social-link-icon" aria-label="GitHub" />
                </a>
                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="E-mail"
                    href="mailto:availchet@gmail.com"
                >
                    <MailIcon
                        className="social-link-icon"
                        viewBox="0 0 512 512"
                        aria-label="E-mail"
                    />
                </a>
                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="WhatsApp"
                    href="https://wa.me/353899776356"
                >
                    <WhatsAppIcon
                        className="social-link-icon"
                        viewBox="0 0 308 308"
                        aria-label="WhatsApp"
                    />
                </a>

                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="Résumé"
                    href="/assets/ChetanyaKandhariResume.pdf"
                >
                    <ResumeIcon
                        className="social-link-icon"
                        viewBox="0 0 512 512"
                        aria-label="Résumé"
                    />
                </a>
            </div>
        </footer>
    );
}
