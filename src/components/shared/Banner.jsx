import banner from "../../assets/banner/banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Banner = () => {
  return (
    <div
      data-aos="fade-in"
      style={{
        background: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full md:h-[82vh]"
    >
      <div className="w-full md:w-[60%] p-10 xl:p-32">
        <h1 className=" text-5xl font-semibold mb-5 text-[#FF0000] opacity-80">
          Pick the best Toy
          <br />
          for your kid
        </h1>
        <p className=" font-medium text-gray-500">
          Welcome to our magical toy store! Discover a world of wonder and
          imagination with a vast selection of toys that spark joy and inspire
          creativity. From classic favorites to the latest trends, our friendly
          staff is ready to assist you in finding the perfect toy for every
          child. Safety and satisfaction guaranteed!
        </p>
        <button className="font-bold px-12 py-4 mt-10 bg-[#FF5200] text-white rounded-lg hover:bg-[#ff0000] ">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
