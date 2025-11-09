import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-[500px] md:h-[650px] overflow-hidden"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full overflow-hidden">
            <img
              src="https://validthemes.net/themeforest/wp/agrul/wp-content/uploads/2022/11/1.jpg"
              alt="banner1"
              className="w-full h-full object-cover animate-zoomOut"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Centered Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-3xl md:text-7xl font-bold mb-4 leading-tight">
                Empowering Modern <br /> Agriculture
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6">
                Connecting farmers, traders, and technology to build a
                sustainable future.
              </p>
              <button className="bg-[#EFB940] hover:bg-[#d4a130] text-black font-semibold px-6 py-3 rounded-full shadow-md transition cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full overflow-hidden">
            <img
              src="https://validthemes.net/themeforest/wp/agrul/wp-content/uploads/2022/11/v1.jpg"
              alt="banner2"
              className="w-full h-full object-cover animate-zoomOut"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-3xl md:text-7xl font-bold mb-4 leading-tight">
                Grow Together With <br /> AgroNet
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6">
                Discover a platform built to connect and uplift every part of
                the agriculture chain.
              </p>
              <button className="bg-[#EFB940] hover:bg-[#d4a130] text-black font-semibold px-6 py-3 rounded-full shadow-md transition cursor-pointer">
                Join Us
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full overflow-hidden">
            <img
              src="https://validthemes.net/themeforest/wp/agrul/wp-content/uploads/2022/10/3.jpg"
              alt="banner3"
              className="w-full h-full object-cover animate-zoomOut"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-3xl md:text-7xl font-bold mb-4 leading-tight">
                Innovative Solutions <br /> for Farmers
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6">
                Explore modern techniques, tools, and insights for a more
                productive harvest.
              </p>
              <button className="bg-[#EFB940] hover:bg-[#d4a130] text-black font-semibold px-6 py-3 rounded-full shadow-md transition cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
