import couscous from "@/assets/couscous.webp";
import image1 from "@/assets/hero/image1.webp";
import image2 from "@/assets/hero/image2.webp";
import image3 from "@/assets/hero/image3.webp";
import image4 from "@/assets/hero/image4.webp";
import image5 from "@/assets/hero/image5.webp";
import { InfiniteMovingCards } from "./ImageSlider";

const Hero = () => {
  const images = [image1, image2, image3, image4, image5];
  return (
    <div className="flex flex-col justify-between bg-[#f4f2f0] z-20">
      <div className="flex flex-wrap justify-center gap-10 items-center ">
        <img
          style={{ width: "600px", height: "auto" }}
          src={couscous}
          alt="Couscous"
        />
        <div className="flex flex-col items-center justify-center  text-center lg:text-start">
          <h1 className="font-bold text-4xl lg:text-5xl">
            Welcome to Algerian Gourmet
          </h1>
          <p className="text-gray-500 pt-2 text-sm md:text-lg  w-full">
            Discover the Rich Flavors of Algeria <br /> with Our Authentic Recipes
          </p>
        </div>
      </div>
      <InfiniteMovingCards images={images}/>
    </div>
  );
};

export default Hero;
