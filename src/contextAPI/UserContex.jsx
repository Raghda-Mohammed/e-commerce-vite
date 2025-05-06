import React from 'react'

const UserContex = () => {
  return (
    <div>UserContex</div>
  )
}

export default UserContex








// import React, { createContext, useState } from "react";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [users, setUsers] = useState([]);

//   const registerUser = (newUser) => {
//     const isEmailTaken = users.some((user) => user.email === newUser.email);
//     if (isEmailTaken) {
//       alert("This email is already registered!");
//       return false;
//     }

//     setUsers((prevUsers) => [...prevUsers, newUser]);
//     setCurrentUser(newUser);
//     console.log("New User Registered:", newUser);
//     alert("User registered successfully!");
//     return true;
//   };

//   const logOut = () => {
//     setCurrentUser(null);
//     console.log("User logged out");
//   };

//   return (
//     <UserContext.Provider value={{ currentUser, users, registerUser, logOut }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
