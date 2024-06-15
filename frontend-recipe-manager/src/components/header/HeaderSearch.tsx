import { Heart, ShoppingCart } from "lucide-react";
import user from "../../assets/user.webp";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const HeaderSearch = () => {
  const navigate = useNavigate();

  return (
    <div className="justify-between p-6 items-center px-10 grid grid-cols-2 md:grid-cols-3">
      <div className="font-extrabold cursor-pointer lg:text-2xl z-10">
        <a href="/">DZ FLAVOR</a>
      </div>
      <div className="order-3 md:order-2 col-span-2 md:col-span-1 pt-4 md:pt-0">
        <Search />
      </div>
      <div className="flex gap-4 justify-center items-center z-10 order-2">
        <p
          className="font-semibold cursor-pointer pr-4 hidden md:block"
          onClick={() => {
            navigate("/recipes");
          }}
        >
          Explore Recipes
        </p>
        <p
          className="font-semibold cursor-pointer pr-4 hidden md:block"
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
