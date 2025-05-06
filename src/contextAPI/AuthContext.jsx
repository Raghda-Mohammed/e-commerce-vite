
import React, { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  // استعادة بيانات المستخدم عند تحميل التطبيق
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // تحديث بيانات المستخدمين عند تغيير `users`
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // تحديث بيانات المستخدم الحالي عند تغييره
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  // وظيفة تسجيل المستخدم الجديد
  const registerUser = (newUser) => {
    const emailExists = users.some((user) => user.email === newUser.email);
    if (emailExists) {
      setErrorMessage("This email is already registered!");
      return false;
    }
    if (newUser.password !== newUser.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return false;
    }
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setErrorMessage(null);
    return true;
  };

  // وظيفة تسجيل الدخول
  const logIn = (email, password) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setCurrentUser(user);
      setErrorMessage(null);
      return true;
    }
    setErrorMessage("Invalid email or password!");
    return false;
  };

  // وظيفة تسجيل الخروج
  const logOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const isLoggedIn = !!currentUser; // يستخدم للتحقق من حالة تسجيل الدخول

  return (
    <AuthContext.Provider
      value={{ users, currentUser, isLoggedIn, logIn, registerUser,  logOut, errorMessage, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);





























// import React, { createContext, useState, useContext, useEffect } from "react";

// export const AuthContext = createContext();


// export const AuthProvider = ({ children }) => {
//   const [users, setUsers] = useState(() => {
//     const savedUsers = localStorage.getItem("users");
//     return savedUsers ? JSON.parse(savedUsers) : [];
//   });

//   const [currentUser, setCurrentUser] = useState(() => {
//     const savedUser = localStorage.getItem("currentUser");
//     return savedUser ? JSON.parse(savedUser) : null;
//   });

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const savedUser = localStorage.getItem("currentUser");
//     console.log("Saved User:", savedUser); // تحقق من البيانات
//     if (savedUser) {
//       setCurrentUser(JSON.parse(savedUser));
//     }
//     setLoading(false);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("users", JSON.stringify(users));
//   }, [users]);

//   useEffect(() => {
//     if (currentUser) {
//       localStorage.setItem("currentUser", JSON.stringify(currentUser));
//     } else {
//       localStorage.removeItem("currentUser");
//     }
//   }, [currentUser]);

//   const registerUser = (newUser) => {
//     const emailExists = users.some((user) => user.email === newUser.email);
//     if (emailExists) {
//       alert("This email is already registered!");
//       return false;
//     }
//     if (newUser.password !== newUser.confirmPassword) {
//       alert("Passwords do not match!");
//       return false;
//     }
//     setUsers((prevUsers) => [...prevUsers, newUser]);
//     return true;
//   };

//   const logIn = (email, password) => {
//     const user = users.find(
//       (user) => user.email === email && user.password === password
//     );
//     if (user) {
//       setCurrentUser(user);
//       return true;
//     }
//     return false;
//   };

//   const logOut = () => {
//     setCurrentUser(null);
//     localStorage.removeItem("currentUser");
//   };
//   const loggedIn = !!currentUser; // يعتمد على حالة currentUser


//   return (
//     <AuthContext.Provider
//       value={{ users, currentUser, loggedIn, registerUser, logIn, logOut }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
