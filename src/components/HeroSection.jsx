import video1 from "../assets/video1.gif";
import video2 from "../assets/video2.gif";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualHq
        <h2 className="bg-gradient-to-r from-green-300 to-green-800 text-transparent bg-clip-text">
          Your Interactive Virtual Workspace
        </h2>
      </h1>
      <p className="mt-10 text-lg text-center text-white-500 max-w-4xl">
        Transform the Way You Connect: Build and Explore Virtual Spaces for Work, Play, and Collaboration with VirtualHQ!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-teal-500  to-teal-800 py-3 px-4 mx-3 rounded-md"
        >
          Start your Free Trial
        </a>
        <a href="#" className="bg-gradient-to-r from-teal-500  to-teal-800 py-3 px-4 mx-3 rounded-md ">
          Have a Tour
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        <img
          src={video1}
          alt="Animated GIF"
          className="w-full sm:w-1/2 lg:w-1/3 rounded-lg"
        />
        <img
          src={video2}
          alt="Animated GIF"
          className="w-full sm:w-1/2 lg:w-1/3 rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;