import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-light bg-top bg-cover flex mt-20 justify-between p-20 lg:px-20">
      <div className="flex gap-24">
        <div>
          <p className="pb-6 font-semibold text-gray-500">Recipes</p>
          <p>Best</p>
          <p>Diets</p>
          <p>Cuisines</p>
          <p>Easy</p>
        </div>
        <div>
          <p className="pb-6 font-semibold text-gray-500">Recipes</p>
          <p>Best</p>
          <p>Diets</p>
          <p>Cuisines</p>
          <p>Easy</p>
        </div>
        <div>
          <p className="pb-6 font-semibold text-gray-500">Recipes</p>
          <p>Best</p>
          <p>Diets</p>
          <p>Cuisines</p>
          <p>Easy</p>
        </div>
      </div>
      <div>
        <p className="uppercase font-semibold">Connect with us</p>
        <div className="flex p-4 gap-10">
          <Facebook className="cursor-pointer" />
          <Instagram className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
