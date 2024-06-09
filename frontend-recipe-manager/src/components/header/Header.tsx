import Search from "./Search";
import { ShoppingCart } from "lucide-react";
import user from "../../assets/user.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between p-4 items-center">
      <div className="font-extrabold cursor-pointer">DZ FLAVOR</div>
      <Search />
      <div className="flex gap-4 justify-center items-center">
        <ShoppingCart width={32} className="cursor-pointer" />
        <div className="bg-white border-black border-2 rounded-full w-10 h-10 cursor-pointer">
          <img
            className="rounded-full w-full h-full object-cover"
            src={user}
            alt="user image placeholder"
            onClick={() => {
              navigate("/account");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
