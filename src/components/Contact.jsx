import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_7hhpo4r",
        "template_5lop3rk",
        formData,
        "LksJ0DPBwy4_n2LCG"
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("Failed to send message. Try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-[#f8f7f4] min-h-screen flex justify-center items-center px-6 py-20">

      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl">

        <h1 className="font-[DMSerif] text-6xl text-center mb-8">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mb-8 leading-relaxed">
          If you have any enquiries, feel free to contact us.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl h-40 resize-none focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition text-lg disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

        {status && (
          <p className="text-center mt-6 font-medium text-gray-700">
            {status}
          </p>
        )}

      </div>
    </div>
  );
};

export default Contact;