import "./hero.css";
const Hero = ({ isLogin }) => {
  return (
    <main className="hero__section container mx-auto mt-8 md:mt-16 p-5">
      <h1 className="leading-[110%] font-bold capitalize w-[104%] md:w-[80%]">
        Revolutionizing communication with advanced brain-to-text technology
      </h1>
      <p className="text-[1.125rem] font-medium leading-[140%] tracking-[0.01rem] mt-[10px]">
        Turn Thoughts into Words with Our AI-Powered Neurotech Innovation.
      </p>
      <button className="capitalize bg-black text-white font-bold py-2 px-7 rounded-full transition-all hover:opacity-60 duration-300 mt-4">
        {isLogin ? "Get Started Free" : "start your free trial"}
      </button>
    </main>
  );
};

export default Hero;
