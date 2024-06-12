import users from "../../assets/user.png";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserProvider";

const Account = () => {
  const { user, setUser } = useUser();
  console.log(user);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUser({ email: "", profilePic: "", admin: false });
    navigate("/");
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-[#f4f2f0]">
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
        <div className="flex gap-4 pt-10">
          <Button variant="destructive" onClick={handleLogout}>
            Logout
          </Button>
          {user.admin && (
            <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
