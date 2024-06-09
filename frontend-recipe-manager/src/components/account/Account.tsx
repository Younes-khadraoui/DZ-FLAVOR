import { useState, useEffect } from "react";
import axios from "axios";
import users from "../../assets/user.png";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [user, setUser] = useState({ email: "", profilePic: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          "http://localhost:5000/api/auth/account",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUser({ email: "", profilePic: "" });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <a className="absolute top-6 left-4" href="/">
        <div className="font-extrabold cursor-pointer">DZ FLAVOR</div>
      </a>
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Account</h1>
        <p className="mb-4">
          <span className="font-bold">Email:</span> {user.email}
        </p>
        <div className="mb-4">
          <img
            src={user.profilePic || users}
            alt="Profile"
            className="rounded-full"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
        <p className="text-sm text-gray-600">Some additional text</p>
        <Button variant="destructive" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Account;
