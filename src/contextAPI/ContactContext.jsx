import React, { createContext, useContext, useState } from "react";

const ContactContext = createContext();
export const ContactProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendMessage = async () => {
    try {
      // JSONPlaceholder : فهو Mock API فقط ولا يخزن البيانات فعليًا.
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Response:", await response.json());
        setStatus("success");
        alert("Message sent successfully!");
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      setStatus("error");
      alert("Failed to send message. Try again later.");
    }
  };

  // وظيفة لإرسال البيانات
  //   const sendContactForm = () => {
  //     if (formData.name && formData.email && formData.phone && formData.message) {
  //       console.log("Form Submitted:", formData); // يمكنك استبدال هذا بتنفيذ API
  //       alert("Message sent successfully!");
  //       // إعادة تعيين الحقول
  //       setFormData({ name: "", email: "", phone: "", message: "" });
  //     } else {
  //       alert("Please fill in all fields.");
  //     }
  //   };

  return (
    <ContactContext.Provider
      value={{ formData, handleChange, sendMessage, status }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
