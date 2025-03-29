import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const formVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#F8ED8C] min-h-screen flex flex-col items-center justify-center p-8">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#89AC46] mb-6"
        variants={formVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        🍋Contact Us🍋
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        className="bg-[#89AC46] p-6 rounded shadow-lg max-w-md w-full"
        variants={formVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-[#D3E671] mb-2 font-medium">
            🍋Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#D3E671]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-[#D3E671] mb-2 font-medium">
            🍋Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#D3E671]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-[#D3E671] mb-2 font-medium">
            🍋Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#D3E671]"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-[#D3E671] mb-2 font-medium">
            🍋Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#D3E671]"
            required
          />
        </div>
        <motion.button
          type="submit"
          className="w-full bg-[#FF8989] hover:bg-[#FF6B6B] text-white p-3 rounded transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
