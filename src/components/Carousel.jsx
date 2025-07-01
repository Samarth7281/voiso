import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarouselSection = ({ carousels }) => {
  if (!carousels || !Array.isArray(carousels)) return null;
  return (
    <div className="w-full flex justify-center py-12 px-4">
      <div className="relative w-full max-w-[1300px] lg:h-[531.2px]">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={50}
          speed={800}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            renderBullet: (index, className) =>
              `<span class="${className} !w-6 !h-[3px] bg-gray-400 rounded-full inline-block mx-1"></span>`,
          }}
          navigation={false} // Hide default arrows
          className="w-full h-full"
        >
          {carousels.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full flex flex-col lg:flex-row rounded-3xl lg:rounded-[55px] overflow-hidden shadow-md"
                style={{ backgroundColor: slide.bgColor }}
              >
                {/* Left HTML content */}
                <div
                  className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col justify-center order-2 lg:order-1"
                  style={{ color: slide.textColor }}
                >
                  <div className="mb-2">
                    <span
                      className="text-xs md:text-sm font-normal uppercase tracking-wide border border-opacity-50 text-opacity-80 px-3 py-1 md:px-4 md:py-2 rounded-2xl inline-block"
                      style={{
                        color: slide.textColor,
                        borderColor: slide.textColor,
                        opacity: 0.8,
                      }}
                    >
                      {slide.badge}
                    </span>
                  </div>

                  <h2
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
                    style={{ color: slide.textColor }}
                  >
                    {slide.title}
                  </h2>
                  <p
                    className="text-sm md:text-base lg:text-lg mb-6"
                    style={{ color: slide.textColor, opacity: 0.7 }}
                  >
                    {slide.description}
                  </p>
                  <button
                    className="w-max font-semibold px-6 py-2 rounded-full hover:opacity-100 transition"
                    style={{
                      backgroundColor: slide.textColor,
                      color: slide.bgColor,
                      opacity: 0.9,
                    }}
                  >
                    {slide.buttonText}
                  </button>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2 h-64 lg:h-full order-1 lg:order-2">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`w-full h-full ${
                      index === 0 || index === 3
                        ? "object-contain p-8"
                        : "object-cover"
                    }`}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="swiper-pagination absolute !bottom-6 lg:!bottom-4 left-1/2 transform -translate-x-1/2 z-10"></div>
      </div>
    </div>
  );
};

export default CarouselSection;
