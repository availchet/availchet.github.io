import React from 'react';

import Image500 from 'assets/icons/oh_snap.jpg';

function Error() {
    return (
        <section className="lost-container">
            <div className="link">
                <img className="selfie" alt="" src={Image500} />
            </div>
            <h1>Oh Snap!</h1>
            <p className="not-found-description">
                Looks like we&#39;re experiencing some technical shenanigans (Sorry about that), try
                refreshing the page or hit the button below to go back.
            </p>
            <a href="/" className="link-button">
                Go back
            </a>
        </section>
    );
}

export default Error;
