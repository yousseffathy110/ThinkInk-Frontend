import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="presentation hidden lg:block w-1/2 h-[calc(100vh-6rem)]">
      <Swiper
        modules={[A11y, Autoplay]}
        loop={true}
        autoplay={{ delay: 2700, disableOnInteraction: false }}
        speed={1200}
        spaceBetween={50}
        slidesPerView={1}
        className="w-full h-full"
      >
        <SwiperSlide className="w-full h-full">
          <div className="relative flex flex-col justify-center w-full h-full bg-gradient-to-b from-white to-green-400 rounded-[20px]">
            <img
              src="https://i.postimg.cc/JhgB3Cgh/dubbing-studio.png"
              alt="coming soon slider image"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <div className="flex items-start justify-center absolute bottom-[7%]">
              <p className="text-white text-[1.625rem] leading-[2.225rem] tracking-wide font-semibold max-w-[90%]">
                <span className="text-[0.75rem] border rounded-xl py-[3px] px-[9px] bg-white/20 backdrop-blur-md">
                  Pro Tip
                </span>
                <br />
                Use the Dubbing editor to preserve expression and dub in 32
                languages using AI
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <div className=" relative flex flex-col justify-center items-center w-full h-full bg-gradient-to-b from-white to-teal-400 rounded-[20px]">
            <img
              src="https://i.postimg.cc/QMVTWdfP/reader-app.png"
              alt="coming soon slider image"
              loading="lazy"
              className="w-1/2 h-auto object-cover"
            />
            <div className="items-start justify-center absolute bottom-[7%] left-[6%]">
              <p className="text-white text-[1.625rem] leading-[2.225rem] tracking-wide font-semibold max-w-[90%]">
                <span className="text-[0.75rem] border rounded-xl py-[3px] px-[9px] bg-white/20 backdrop-blur-md">
                  Pro Tip
                </span>
                <br />
                Explore our expansive library of community generated AI sound
                effects
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <div className="relative flex flex-col items-center justify-center w-full h-full bg-gradient-to-b from-white to-gray-300 rounded-[20px]">
            <img
              src="https://i.postimg.cc/3JFWq906/sound-effects.png"
              alt="coming soon slider image"
              loading="lazy"
              className="w-1/2 h-auto object-cover"
            />
            <div className="absolute bottom-[7%] left-[6%] items-start justify-center">
              <p className="text-white text-[1.625rem] leading-[2.225rem] tracking-wide font-semibold max-w-[90%]">
                <span className="text-[0.75rem] border rounded-xl py-[3px] px-[9px] bg-white/20 backdrop-blur-md">
                  Pro Tip
                </span>
                <br />
                Transform your voice using Speech to Speech and become as many
                characters as you can imagine
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <div className="relative flex flex-col justify-center w-full h-full bg-gradient-to-b from-[wheat] to-pink-300 rounded-[20px]">
            <img
              src="https://i.postimg.cc/T3tbwDJg/speech-to-speech.png"
              alt="coming soon slider image"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-[7%] left-[6%] items-start justify-center">
              <p className="text-white text-[1.625rem] leading-[2.225rem] tracking-wide font-semibold max-w-[90%]">
                <span className="text-[0.75rem] border rounded-xl py-[3px] px-[9px] bg-white/20 backdrop-blur-md">
                  Pro Tip
                </span>
                <br />
                Simply choose a voice from our expansive library, upload your
                content, and listen on the go.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <div className="relative flex items-center flex-col justify-center w-full h-full bg-gradient-to-b from-white to-blue-400 rounded-[20px]">
            <img
              src="https://i.postimg.cc/KzM3JsSD/voices.png"
              alt="coming soon slider image"
              loading="lazy"
              className="w-2/3 h-auto object-cover"
            />
            <div className="absolute bottom-[7%] left-[6%] items-start justify-center">
              <p className="text-white text-[1.625rem] leading-[2.225rem] tracking-wide font-semibold max-w-[90%]">
                <span className="text-[0.75rem] border rounded-xl py-[3px] px-[9px] bg-white/20 backdrop-blur-md">
                  Pro Tip
                </span>
                <br />
                Browse the Voice Library and discover AI voices perfect for any
                use-case you can imagine
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
