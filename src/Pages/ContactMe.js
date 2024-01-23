// ContactMe.js
import React from 'react';
import './ContactMe.css'; // Import the CSS file
import GitHubLink from './GitHubLink';
import LinkedinLink from './LinkedinLink';

const ContactMe = () => {
    const email = 'Luisrcal100@gmail.com';
    return (
        <section className="contact-me-section">
            <div className="contact-me-content">
                <h2>Contact Me</h2>
                <p>
                    Feel free to reach out to me through the following:
                </p>
                <ul>
                <li>Email: <a href={`mailto:${email}`}>{email}</a></li>
                    <GitHubLink username="Luisrc91" />
                    <LinkedinLink />
                </ul>
            </div>
        </section>
    );
}

export default ContactMe;
