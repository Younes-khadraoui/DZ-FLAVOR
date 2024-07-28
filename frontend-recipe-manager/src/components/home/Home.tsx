import Discover from "./discover/Discover";
import Hero from "./hero/Hero";
import Suggest from "./suggest/Suggest";

const Home = () => {
  return (
    <>
      <Hero />
      <Discover />
      <Suggest />
    </>
  );
};

export default Home;
