import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const carousels = [
  {
    badge: "Embrace AI",
    title: "Elevate engagement with AI-powered tools",
    description:
      "Boost call volume by 400% with our AI Predictive Dialer and gain deep insights with speech analytics, transcriptions, sentiment analysis, summaries, and more — all available in 10+ languages.",
    buttonText: "Explore",
    image: "carousel1.png",
    bgColor: "#073469",
    textColor: "#c8e0fc",
  },
  {
    badge: "Intelligent workflows",
    title: "Smarter flows,faster resolutions",
    description:
      "Build and automate interaction flows with Voiso’s no-code interface. Set up IVR menus, intelligent routing, and chatbot interactions to ensure fast, seamless customer support.",
    buttonText: "Explore",
    image: "carousel2.png",
    bgColor: "#088569",
    textColor: "#a3ffd2",
  },
  {
    badge: "Constant awareness",
    title: "Track performance in real time",
    description:
      "Monitor agent activity, call volumes, and queue statuses with customizable dashboards. Get instant insights to optimize workflows, improve efficiency, and make data-driven decisions.",
    buttonText: "Explore",
    image: "carousel3.png",
    bgColor: "#ffd4c2",
    textColor: "#d64000",
  },
  {
    badge: "CRM integrations",
    title: "Sync contacts and track interactions",
    description:
      "Connect Voiso with HubSpot, Salesforce, Zoho and more to automate workflows, sync customer data, and enhance productivity. Reduce manual tasks and ensure a smooth, connected experience for your team.",
    buttonText: "Learn more",
    image: "carousel4.png",
    bgColor: "#000000",
    textColor: "#ffffff",
  },
];

const CarouselSection = () => {
  return (
    <div className="w-full flex justify-center py-12">
      <div className="relative w-[1300px] h-[531.2px]">
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
                className="w-full h-full flex flex-col lg:flex-row rounded-[55px] overflow-hidden shadow-md"
                style={{ backgroundColor: slide.bgColor }}
              >
                {/* Left HTML content */}
                <div
                  className="w-full lg:w-1/2 p-8 flex flex-col justify-center"
                  style={{ color: slide.textColor }}
                >
                  <div className="mb-2">
                    <span
                      className="text-sm font-normal uppercase tracking-wide border border-opacity-50 text-opacity-80 px-4 py-2 rounded-2xl inline-block"
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
                    className="text-3xl lg:text-4xl font-bold mb-4"
                    style={{ color: slide.textColor }}
                  >
                    {slide.title}
                  </h2>
                  <p
                    className="text-base lg:text-lg mb-6"
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
                <div className="w-full lg:w-1/2 h-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`w-full h-full ${
                      index === 3 ? "object-contain p-8" : "object-cover"
                    }`}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"></div>
      </div>
    </div>
  );
};

export default CarouselSection;
