import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contextAPI/AuthContext"; // الوصول إلى السياق الخاص بالمصادقة

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth(); // التحقق من حالة تسجيل الدخول

  if (!currentUser) {
    // إعادة التوجيه إذا لم يكن المستخدم مسجل الدخول
    return <Navigate to="/login" />;
  }

  return children; // عرض المحتوى إذا كان المستخدم مسجل الدخول
};

export default ProtectedRoute;












// import { Navigate } from "react-router-dom";
// import { useAuth } from "../contextAPI/AuthContext";

// const ProtectedRoute = ({ children }) => {
//   const { currentUser } = useAuth(); // الوصول إلى حالة تسجيل الدخول

//   if (!currentUser) {
//     // إعادة التوجيه إلى صفحة تسجيل الدخول
//     return <Navigate to="/login" />;
//   }

//   return children; // عرض المحتوى إذا كان المستخدم مسجلاً الدخول
// };

// export default ProtectedRoute;