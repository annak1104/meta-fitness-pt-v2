import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useId, useRef } from "react";

import arrowRight from "../../assets/arrow-5.png";
import arrowLeft from "../../assets/arrow-7.png";

export default function ImageSlider({ title, subtitle, slides }) {
  const swiperRef = useRef(null);
  const id = useId().replace(/:/g, "");

  return (
    <section className="w-full flex flex-col items-center justify-center px-4 py-12">
      {/* Заголовок */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-[#454545]">{title}</h2>
        <p className="text-2xl font-semibold text-[#FF7E05]">{subtitle}</p>
      </div>

      {/* Кнопки */}
      <div className="flex gap-10 mb-6">
        <button
          className={`prev-${id} w-11 h-11 flex items-center justify-center rounded-full bg-[#8C8C8C]`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img src={arrowLeft} alt="Prev" className="w-6 h-4" />
        </button>
        <button
          className={`next-${id} w-11 h-11 flex items-center justify-center rounded-full bg-[#FF7E05]/50`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img src={arrowRight} alt="Next" className="w-6 h-4" />
        </button>
      </div>

      {/* Слайдер */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: `.prev-${id}`,
          nextEl: `.next-${id}`,
        }}
        modules={[Navigation]}
        className="w-[192px]"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
