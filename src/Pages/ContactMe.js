import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import GitHubLink from "./GitHubLink";
import LinkedinLink from "./LinkedinLink";
import GmailLink from "./GmailLink";

const ContactMe = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatusMessage("Email sent successfully!");
        },
        (error) => {
          setStatusMessage("Failed to send email. Error: " + error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="scroll-smooth min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="contact-me-content max-w-lg mx-auto">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 inline-block mb-6">Contact Me</h2>
        <p className="text-center mb-6">
          Feel free to reach out to me through the following:
        </p>
        <ul className="flex space-x-10 justify-center mb-6">
          <GmailLink />
          <LinkedinLink />
          <GitHubLink username="Luisrc91" />
        </ul>
        <p className="text-white flex items-center justify-center px-4">or</p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name" 
              required
              className="w-full border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-800 text-white placeholder-gray-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-800 text-white placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block" htmlFor="note">
              Note
            </label>
            <textarea
              id="note"
              name="note" 
              required
              className="w-full border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-800 text-white placeholder-gray-400"
              rows="4"
              placeholder="Enter your message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-br from-orange-500 to-pink-500 text-white py-2 rounded-lg hover:bg-opacity-90 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {statusMessage && <p className="mt-4 text-center">{statusMessage}</p>}
      </div>
    </div>
  );
};

export default ContactMe;
