import Discover from "./discover/Discover";
import Hero from "./hero/Hero";
import Suggest from "./suggest/Suggest";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="h-80 md:h-96 bg-algeria bg-cover bg-[bottom] bg-no-repeat text-white font-bold flex justify-center items-center text-2xl">
        Discover Algeria through the taste of its recipes.
      </div>
      <Discover />
      <Suggest />
    </>
  );
};

export default Home;
