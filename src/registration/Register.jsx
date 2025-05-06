import React, { useState } from "react";
import { useAuth } from "../contextAPI/AuthContext";
import { useNavigate } from "react-router-dom";
import { beatsnoop } from "../assets";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { registerUser } = useAuth(); // استدعاء registerUser من AuthContext
  const navigate = useNavigate(); // ا��تدعا�� navigate من useNavigate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const success = registerUser(formData); // تسجيل المستخدم
    if (success) {
      setFormData({ name: "", email: "", password: "", confirmPassword: "" }); // إعادة تعيين الحقول
      alert("User registered successfully!");
      navigate("/login");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="lg:flex gap-8">
        <div className="lg:w-1/2 ">
          <img src={beatsnoop} alt="" />
        </div>
        <div className="sm:mt-20 lg:mt-0 lg:ml-28">
          <form className="form" onSubmit={handleSubmit}>
            <div className="place-content-start">
              <div className="block gap-8">
                <h1 className="text-5xl font-medium">Create an account</h1>
                <div className="mt-8">
                  <h6 className="">Enter your details below</h6>
                </div>
              </div>
              <div className="border-b-1 border-b-neutral-400 mb-3 mt-8">
                <input
                  className="pb-2 focus:outline-none"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="border-b-1 border-b-neutral-400 mb-3">
                <input
                  className="pb-2 focus:outline-none"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Or Phone Number"
                  required
                />
              </div>
              <div className="border-b-1 border-b-neutral-400 mb-3">
                <input
                  className="pb-2 focus:outline-none"
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  minLength={6}
                  required
                />
              </div>
              <div className="border-b-1 border-b-neutral-400 mb-3">
                <input
                  className="pb-2 focus:outline-none"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  minLength={6}
                  required
                />
              </div>
              <div className=" block mt-8">
                <button
                  className=" bg-red-400 text-white w-full rounded text-lg px-6 py-2 hover:bg-red-500"
                  type="submit"
                >
                  Create Account
                </button>
                <button
                  className="flex gap-2 border px-8 py-2 w-full text-lg mt-4"
                  type="button"
                >
                  <FcGoogle className="w-6 h-6" />
                  Sign up with Google
                </button>
                <div className="flex gap-3 mt-3 ml-1 text-lg text-neutral-500">
                  <h6 className="text-lg mt-1">Already have account?</h6>
                  <a
                    href="/login"
                    className="text-secondary text-decoration-none border-b-2"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
