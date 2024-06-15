import veggies from "@/assets/veggies.png";

const Suggest = () => {
  return (
    <div className="pb-20 ">
      <div className="flex items-center gap-10 pb-5 p-10">
        <h2 className="text-3xl font-bold">Suggest a Recipe</h2>
        <a href="/suggestions" className="text-green-600 font-semibold text-lg">
          Click here &gt;
        </a>
      </div>
      <div className="h-60 p-10 flex flex-col md:flex-row justify-between ">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <p className="text-xl">
            If you know or have an Algerian recipe and want to suggest it, we
            would be happy to add it to our collection. Your contributions help
            us celebrate the rich and diverse culinary traditions of Algeria.
            <br /> <br />
            By sharing your recipes, you can help others discover new flavors
            and cooking techniques, and you may even see your recipe featured on
            our website!
            <br />
          </p>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <a href="/suggestions">
            <img className="h-96" src={veggies} alt="vegetables image" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Suggest;
