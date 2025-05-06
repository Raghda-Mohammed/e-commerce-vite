import React, { useState } from "react";
import { useAuth } from "../contextAPI/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { currentUser, logOut } = useAuth(); // جلب بيانات المستخدم الحالي من AuthContext
  const [formData, setFormData] = useState(currentUser || {}); // تعبئة الحقول من currentUser
  const navigate = useNavigate();


  const handleLogOut = () => {
    logOut(); // استدعاء دالة logOut
    navigate("/login"); // الانتقال إلى صفحة تسجيل الدخول
  };

  if (!currentUser) {
    return <p>You are not logged in.</p>; // تحقق إذا لم يكن المستخدم مسجل الدخول
  }


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Changes saved successfully!");
    // هنا يمكنك إرسال البيانات المحدثة إلى الخادم (API)
  };

  const handleCancel = () => {
    setFormData(currentUser); // إعادة تعيين الحقول إلى البيانات الأصلية
  };

  if (!currentUser) {
    return <p className="text-center mt-4">You are not logged in.</p>;
  }

  return (
    <div className="flex container mx-auto mt-8">
      {/* الشريط الجانبي */}
      <div className="w-1/4 p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Manage My Account</h2>
        <ul className="space-y-2">
          <li className="font-medium text-blue-500 cursor-pointer">My Profile</li>
          <li className="text-gray-600 cursor-pointer">Address Book</li>
          <li className="text-gray-600 cursor-pointer">My Payment Options</li>
        </ul>
        <h2 className="text-lg font-bold mt-6 mb-4">My Orders</h2>
        <ul className="space-y-2">
          <li className="text-gray-600 cursor-pointer">My Returns</li>
          <li className="text-gray-600 cursor-pointer">My Cancellations</li>
        </ul>
        <h2 className="text-lg font-bold mt-6 mb-4">My Wishlist</h2>
        <ul>
          <li className="text-gray-600 cursor-pointer">Wishlist</li>
        </ul>


        <button
        onClick={handleLogOut} // زر تسجيل الخروج
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
      >
        Log Out
      </button>

      </div>

      {/* واجهة التحرير */}
      <div className="w-3/4 p-6 bg-white rounded-lg shadow-md ml-4">
        <h2 className="text-2xl font-bold mb-6">Edit Your Profile</h2>
        <form onSubmit={handleSave}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName || ""}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName || ""}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block font-medium mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mt-4">
            <label className="block font-medium mb-2">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Password Changes</h3>
            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-2">Current Password:</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword || ""}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">New Password:</label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword || ""}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Confirm New Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword || ""}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6 space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

