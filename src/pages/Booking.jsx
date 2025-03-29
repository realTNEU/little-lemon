import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Booking = () => {
  const today = new Date().toISOString().split("T")[0]; 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
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
    console.log("Form submitted", formData); 
    toast.success("Table booked successfully!"); 

    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: 1,
    });
  };

  const formVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const timeOptions = [
    "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM",
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
    "9:00 PM", "9:30 PM", "10:00 PM"
  ];

  return (
    <section className="bg-[#F8ED8C] p-8 min-h-screen flex flex-col items-center justify-center">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-[#89AC46] mb-6"
        variants={formVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        🍋Book a Table🍋
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#89AC46] p-6 rounded shadow-lg"
        variants={formVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-[#D3E671] mb-2 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#FF8989]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-[#D3E671] mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#FF8989]"
            required
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="date" className="block text-[#D3E671] mb-2 font-medium">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#FF8989]"
              required
              min={today}
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="time" className="block text-[#D3E671] mb-2 font-medium">
              Time
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#FF8989]"
              required
            >
              <option value="">Select time</option>
              {timeOptions.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="guests" className="block text-[#D3E671] mb-2 font-medium">
            Number of Guests
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#FF8989]"
            required
            min="1"
          />
        </div>
        <motion.button
          type="submit"
          className="w-full bg-[#FF8989] hover:bg-[#FF6B6B] text-white p-3 rounded transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Booking;
