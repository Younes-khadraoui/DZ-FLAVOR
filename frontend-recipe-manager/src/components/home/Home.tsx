import Discover from "./discover/Discover";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="h-80 md:h-96 bg-algeria bg-cover bg-[bottom] bg-no-repeat"></div>
      <Discover />
    </div>
  );
};

export default Home;
