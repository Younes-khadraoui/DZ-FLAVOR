import { Heart, ShoppingCart } from "lucide-react";
import user from "../../assets/user.webp";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const HeaderSearch = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between p-6 items-center px-10 bg-[#">
      <div className="font-extrabold cursor-pointer lg:text-2xl z-10">
        <a href="/">DZ FLAVOR</a>
      </div>
      <Search />
      <div className="flex gap-4 justify-center items-center z-10">
        <p
          className="font-semibold cursor-pointer pr-4"
          onClick={() => {
            navigate("/recipes");
          }}
        >
          Explore Recipes
        </p>
        <p
          className="font-semibold cursor-pointer pr-4"
          onClick={() => {
            navigate("/suggestions");
          }}
        >
          Suggest Recipe
        </p>
        <Heart className="cursor-pointer" />
        <ShoppingCart width={32} className="cursor-pointer" />
        <div className="bg-white rounded-full w-10 h-10 cursor-pointer">
          <img
            className="rounded-full w-full h-full object-cover font-semibold"
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

export default HeaderSearch;
