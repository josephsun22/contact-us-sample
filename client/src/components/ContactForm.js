import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "Joseph",
    lastName: "Sun",
    email: "j.sun@gmail.com",
    phone: "0412345678",
    message: "I would like to know more about your services.",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit the form data to the server
    try {
      const response = await fetch("http://localhost:4000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (!response.ok) {
        throw new Error("Server failed to save data, try again later");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const inputClass =
    "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 sm:text-sm";

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      {submitted ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Thank You</h1>
          <p>Thank you for your feedback. We'll be in touch shortly.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-100 p-6 rounded-lg"
        >
          <p>
            Fill in your details and we'll be in touch right away. Or if you
            prefer, call us on 13 24 34
          </p>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={inputClass}
            placeholder="First name"
            required={true}
          />

          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={inputClass}
            placeholder="Last name"
            required={true}
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="Email address"
            required={true}
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="Phone number"
            required={true}
          />

          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={inputClass}
            placeholder="What do you want to speak to us about"
            required={true}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            SEND MESSAGE
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
      )}
    </div>
  );
}
