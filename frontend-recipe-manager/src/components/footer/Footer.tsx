import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-light bg-top bg-cover flex flex-col md:flex-row justify-between p-20 lg:px-20 absolute w-screen">
      <div className="grid gap-24 grid-cols-2 pb-10 md:grid-cols-3">
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
