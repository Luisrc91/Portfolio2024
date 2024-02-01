// ContactMe.js
import React from 'react';
// import './ContactMe.css'; // Import the CSS file
import GitHubLink from './GitHubLink';
import LinkedinLink from './LinkedinLink';
import GmailLink from './GmailLink';

const ContactMe = () => {
    // const email = 'Luisrcal100@gmail.com';
    return (
        <section className="contact-me-section">
            <div className="contact-me-content">
                <h2>Contact Me</h2>
                <p>
                    Feel free to reach out to me through the following:
                </p>
                <ul>
                <GmailLink />

                {/* <li>Email: <a href={`mailto:${email}`}>{email}</a></li> */}
                    <LinkedinLink />
                    <GitHubLink username="Luisrc91" />
                </ul>
            </div>
        </section>
    );
}

export default ContactMe;
