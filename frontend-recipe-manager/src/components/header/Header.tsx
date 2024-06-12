import { Heart, ShoppingCart } from "lucide-react";
import user from "../../assets/user.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between p-6 items-center px-10 bg-light">
      <svg
        className="absolute top-0 lg:-top-36 left-0 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,192L40,192C80,192,160,192,240,181.3C320,171,400,149,480,160C560,171,640,213,720,218.7C800,224,880,192,960,181.3C1040,171,1120,181,1200,197.3C1280,213,1360,235,1400,245.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <div className="font-extrabold cursor-pointer lg:text-2xl z-10">
        <a href="/">DZ FLAVOR</a>
      </div>
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
        <Heart
          className="cursor-pointer"
          onClick={() => {
            navigate("/favourites");
          }}
        />
        <ShoppingCart
          width={32}
          className="cursor-pointer"
          onClick={() => {
            navigate("/cart");
          }}
        />
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

export default Header;
