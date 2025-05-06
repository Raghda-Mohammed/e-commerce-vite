
import React, { useState } from "react";
import { useAuth } from "../contextAPI/AuthContext";
import { useNavigate } from "react-router-dom";
import { beatsnoop } from "../assets";

const LogIn = () => {
  const { logIn } = useAuth(); // استدعاء logIn من AuthContext
  const navigate = useNavigate(); // استخدام navigate للتوجيه بين الصفحات

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // تحديث بيانات النموذج عند إدخال المستخدم
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // إرسال النموذج عند النقر على زر تسجيل الدخول
  const handleSubmit = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    const success = logIn(formData.email, formData.password); // استدعاء logIn من AuthContext
    if (!success) {
      setError("Invalid email or password"); // عرض رسالة خطأ إذا فشل تسجيل الدخول
    } else {
      setError(""); // مسح رسالة الخطأ عند النجاح
      navigate("/"); // التوجيه إلى الصفحة الرئيسية
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="lg:flex gap-8">
        <div className="lg:w-1/2 ">
          <img src={beatsnoop} alt="" />
        </div>
        <div className="sm:mt-20 lg:mt-10 lg:ml-28">
          <form className="form" onSubmit={handleSubmit}>
            <div className="">
              <div className="block gap-8">
                <h1 className="lg:text-5xl font-medium">Log in to Exclusive</h1>
                <div className="mt-2">
                  <h6 className="">Enter your details below</h6>
                </div>
              </div>

              <div className="border-b-1 border-b-neutral-400 mb-3 mt-8">
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
              {error && <div className="text-red-500">{error}</div>}

              <div className="flex gap-4 mt-8">
                <button className="bg-red-400 text-white rounded px-8 h-12 hover:bg-red-500"
                  type="submit"
                >
                  Log in
                </button>
                <button
                  className="flex gap-2 px-8 py-2 text-lg text-neutral-600 hover:text-black"
                  type="button"
                >
                  Forget Password?
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
























// import React, { useState } from "react";
// import { useAuth } from "../contextAPI/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { beatsnoop } from "../assets";

// const LogIn = () => {
//   const { isLoggedIn } = useAuth(); // استدعاء logIn من AuthContext
//   const navigate = useNavigate(); // استخدام navigate للانتقال بين الصفحات

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   // تحديث بيانات النموذج عند إدخال المستخدم
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // إرسال النموذج عند النقر على "Log in"
//   const handleSubmit = (e) => {
//     e.preventDefault(); // منع إعادة تحميل الصفحة
//     const success = isLoggedIn(formData.email, formData.password); // استخدام logIn
//     if (!success) {
//       setError("Invalid email or password"); // عرض رسالة خطأ
//     } else {
//       setError(""); // مسح الخطأ
//       navigate("/"); // التوجيه إلى الصفحة الرئيسية
//     }
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <div className="lg:flex gap-8">
//         <div className="lg:w-1/2 ">
//           <img src={beatsnoop} alt="" />
//         </div>
//         <div className="sm:mt-20 lg:mt-10 lg:ml-28">
//           <form className="form" onSubmit={handleSubmit}>
//             <div className="">
//               <div className="block gap-8">
//                 <h1 className="lg:text-5xl font-medium">Log in to Exclusive</h1>
//                 <div className="mt-2">
//                   <h6 className="">Enter your details below</h6>
//                 </div>
//               </div>

//               <div className="border-b-1 border-b-neutral-400 mb-3 mt-8">
//                 <input
//                   className="pb-2 focus:outline-none"
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email Or Phone Number"
//                   required
//                 />
//               </div>
//               <div className="border-b-1 border-b-neutral-400 mb-3">
//                 <input
//                   className="pb-2 focus:outline-none"
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Password"
//                   minLength={6}
//                   required
//                 />
//               </div>
//               {error && <div className="text-red-500">{error}</div>}

//               <div className="flex gap-4 mt-8">
//                 <button
//                   className="bg-red-400 text-white rounded px-8 h-12 hover:bg-red-500"
//                   type="submit"
//                 >
//                   Log in
//                 </button>
//                 <button
//                   className="flex gap-2 px-8 py-2 text-lg text-neutral-600 hover:text-black"
//                   type="button"
//                 >
//                   Forget Password?
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogIn;


































// import React, { useState} from "react";
// import { useAuth } from "../contextAPI/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { beatsnoop } from "../assets";

// const LogIn = () => {
//   const { isLoggedIn } = useAuth(); // استدعاء logIn من AuthContext

//  const navigate = useNavigate(); // ا��تدعا�� navigate من useNavigate
  
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   //تحديث البيانات عند الكتابه
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

// //ارسال البيانات عند الضغط على زر تسجيل الدخول 
// const handleSubmit = (e) => {
//   e.preventDefault();
//   const success = LogIn(formData.email, formData.password);
//   if (!success) {
//     setError("Invalid email or password"); // عرض رسالة خطأ إذا فشل تسجيل الدخول
//   } else {
//     setError("");
//     navigate("/"); // الانتقال إلى الصفحة الرئيسية
//   }
// };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const success = loggIn(formData.email, formData.password); // تمرير formData
//   //   if (!success) {
//   //     setError("Invalid email or password");//عرض رسالة خطأ اذا فشل تسجيل الدخول
//   //   } else {
//   //     setError("");
//   //     // alert("Login successful!");

//   //     navigate("/"); // الانتقال إلى صفحة Home

//   //   }
//   // };
  

//   return (
//     <div className="container mx-auto mt-8">
//       <div className="lg:flex gap-8">
//         <div className="lg:w-1/2 ">
//           <img src={beatsnoop} alt="" />
//         </div>
//         <div className="sm:mt-20 lg:mt-10 lg:ml-28">
//           <form className="form" onSubmit={handleSubmit}>
//             <div className="">
//               <div className="block gap-8">
//                 <h1 className="lg:text-5xl font-medium">Log in to Exclusive</h1>
//                 <div className="mt-2">
//                   <h6 className="">Enter your details below</h6>
//                 </div>
//               </div>

//               <div className="border-b-1 border-b-neutral-400 mb-3 mt-8">
//                 <input
//                   className="pb-2 focus:outline-none"
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email Or Phone Number"
//                   required
//                 />
//               </div>
//               <div className="border-b-1 border-b-neutral-400 mb-3">
//                 <input
//                   className="pb-2 focus:outline-none"
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Password"
//                   minLength={6}
//                   required
//                 />
//               </div>
//               {error && <div className="text-red-500">{error}</div>}

//               <div className=" flex gap-4 mt-8">
//                 <button
//                   className=" bg-red-400 text-white rounded px-8 h-12  hover:bg-red-500"
//                   type="submit"
//                 >
//                   Log in
//                 </button>
//                 <button
//                   className="flex gap-2 px-8 py-2 text-lg text-neutral-600 place-self-end justify-end hover:text-black"
//                   type="button"
//                 >
//                   Forget Password ?
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogIn;
