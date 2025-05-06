import React from "react";
import { useAuth } from "../contextAPI/AuthContext";

const UserList = () => {
  const { users } = useAuth();

  return (
    <div className="container mx-auto mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Registered Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email} - {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
