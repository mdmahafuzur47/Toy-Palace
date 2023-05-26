import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto border shadow-sm my-5">
      <h1 className=" text-5xl font-semibold mb-5 text-[#FF0000] opacity-80 mt-10 text-center">
        Gallery off Our Toy Palace
      </h1>
      <p className="text-gray-500 md:w-1/2 mx-auto text-center p-4">
        Toy Gallery, where imagination comes to life! Step into a world of
        wonder and joy as you explore our collection of whimsical and
        captivating toys. From classic teddy bears to interactive robots, our
        gallery showcases a diverse range of playthings that ignite the
        imaginations of children and adults alike. Marvel at the vibrant colors,
        intricate designs, and meticulous craftsmanship that make each toy a
        work of art. Let your inner child run wild as you discover endless
        possibilities and relish in the pure delight of play.{" "}
      </p>
      <Swiper
      data-aos="fade-up"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-full rounded-md"
            src="https://www.picturethemagic.com/wp-content/uploads/2019/12/marvel-toys-featured-image.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full rounded-md"
            src="https://i0.wp.com/batman-news.com/wp-content/uploads/2020/02/DC-Collectibles-Toy-Fair-2020-Official-Images-Featured-01.jpg?fit=1600%2C900&quality=80&strip=info&ssl=1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full rounded-md"
            src="https://m.media-amazon.com/images/I/81HW6+jsn2L.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full rounded-md"
            src="https://i.toynewsi.com/g/generated/McFarlane%20Toys/DC-Multiverse-Superboy-Gladiator/Gladiator-Batman-00__scaled_800.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full rounded-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZh3PJxdzdjWm4fmaBqYM3fJhG8OA9ieqCg&usqp=CAU"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full rounded-md"
            src="https://m.media-amazon.com/images/I/71WvpSwN5fL._AC_SL1500_.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full rounded-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgddwkgNGELulkwXZnW18anP-6M4H95axerA&usqp=CAU"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full rounded-md"
            src="https://helios-i.mashable.com/imagery/articles/055NlcJrCPhCpzJp1MymLRr/hero-image.fill.size_1200x675.v1614274331.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full rounded-md"
            src="https://m.media-amazon.com/images/I/81wOFhwiChL.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
