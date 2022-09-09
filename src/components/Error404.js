import React from 'react';

import Image404 from 'assets/icons/oh_snap_404.jpg';

function Error404() {
    return (
        <section className="lost-container">
            <div className="link">
                <img className="selfie" alt="" src={Image404} />
            </div>
            <h1>Not found</h1>
            <p className="not-found-description">
                Sorry it looks like we couldn&#39;t find the what you&#39;re looking for. Click the
                button below to go back.
            </p>
            <a href="/" className="link-button">
                Return to the app
            </a>
        </section>
    );
}

export default Error404;
