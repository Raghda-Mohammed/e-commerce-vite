import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { useContact } from "../contextAPI/ContactContext";
const Contact = () => {
  const { formData, handleChange, sendMessage, status } = useContact();
 
  return (
    <div className="container mx-auto ml-8 mt-8 mb-16">
      <div className="">
        <div className="flex ml-4 mb-8">
          <a href="/">Home</a>
          <h6 className="ml-2 mt-1">/</h6>
          <h6 className="ml-2 mt-1">Contact</h6>
        </div>
        <div className="grid-cols-1 lg:flex lg:grid-cols-2 gap-6 ml-4">
          <div className="grid gap-8 shadow border-gray-300 rounded p-12 mb-4 lg:w-[40%]">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="text-white rounded-full p-2 bg-red-500 hover:bg-red-600 transition duration-300">
                  <BsTelephone />
                </div>
                <span className="font-bold">Call To Us</span>
              </div>
              <div className="mt-3 text-nowrap">
                We are available 24/7, 7 days a week.
              </div>
              <div>Phone: +8801611112222</div>
              <div className="border-b-2 border-gray-300"></div>
            </div>

            <div>
              <div className="flex gap-2">
                <div className="text-white rounded-full p-2 bg-red-500 hover:bg-red-600 transition duration-300">
                  <AiOutlineMail />
                </div>
                <div className="font-bold">Write To US</div>
              </div>
              <div className="mt-3 text-wrap">
                Fill out our form and we will contact you within 24 hours.
              </div>
              <div className="mt-3">Emails: customer@exclusive.com</div>
              <div className="mt-3">Emails: support@exclusive.com</div>
            </div>
          </div>
          {/* ************************************************ */}
          <div className="contact-form w-full">
            <form className="grid grid-cols-3 gap-6 p-8 bg-white shadow rounded-md"
               onSubmit={(e) => {
                e.preventDefault(); // منع إعادة تحميل الصفحة
                sendMessage(); // استدعاء الدالة لإرسال الرسالة
              }}
      
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold text-gray-700"
                >
                  Your Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div className="col-span-3">
              <div className="mt-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-end mt-6">
              <button 
              type="submit"
              className="bg-red-500 text-white font-bold py-4 px-8 rounded hover:bg-red-600 focus:ring-2 focus:ring-red-400 transition duration-300">
                Send Message
              </button>
              </div>
              </div>
            </form>
            {status === "success" && <p className="text-green-500 mt-4">Message sent successfully!</p>}
            {status === "error" && <p className="text-red-500 mt-4">Failed to send message. Try again.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
