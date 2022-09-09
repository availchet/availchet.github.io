import React from 'react';

export default function Contact() {
    return (
        <div className="contact-container">
            <article>
                <h2 className="contact-header">Contact Me</h2>
                <p className="contact-text">
                    If you are interested in teaming up with me for a hackathon, start-up
                    consulting, or even for a cup of coffee - you can reach me at my email or
                </p>
                <form>
                    <div className="contact-form-container">
                        <div className="contact-form-name">
                            <input
                                className="contact-message-form-field"
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Name"
                            />
                        </div>
                        <div className="contact-form-email">
                            <input
                                className="contact-message-form-field"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="clearfix">
                            <textarea
                                className="contact-message-form-field contact-message-textarea"
                                id="message"
                                name="message"
                                placeholder="Message"
                                spellCheck="false"
                                defaultValue=""
                                rows={5}
                                maxLength={2000}
                            />
                        </div>
                        <div className="clearfix">
                            <input
                                type="button"
                                id="send"
                                defaultValue="Submit"
                                className="contact-submit-btn"
                            />
                        </div>
                    </div>
                </form>
            </article>
        </div>
    );
}
