import React, { useState } from "react";
import GitHubLink from "./GitHubLink";
import LinkedinLink from "./LinkedinLink";
import GmailLink from "./GmailLink";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, note });
  };

  return (
    <div className=" min-h-screen contact-me-section bg-black text-white px-4 py-8">
      <div className="contact-me-content max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
        <p className="text-center mb-6">
          Feel free to reach out to me through the following:
        </p>
        <ul className="flex space-x-10  justify-center mb-6">
          <GmailLink />
          <LinkedinLink />
          <GitHubLink username="Luisrc91" />
        </ul>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={note}
              onChange={(e) => setNote(e.target.value)}
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
      </div>
    </div>
  );
};

export default ContactMe;
