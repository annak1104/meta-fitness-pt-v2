import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useRef, useState } from "react";
import rainbowL from "../../assets/r1.webp";
import rainbowR from "../../assets/r2.webp";

import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import money from "../../assets/money BR 2.png";
import "../CommentsSection/big-slider.css";

const testimonials = [
  {
    name: "Fernanda, 27 anos",
    text: "Achava que não tinha tempo nem dinheiro para comer de forma saudável. Com o Metafitness, preparo refeições nutritivas em só 10 minutos. Me sinto mais disposta e ainda paguei o curso só compartilhando com meus amigos. Vale muito a pena!",
  },
  {
    name: "Lucas, 32 anos",
    text: "Esse curso no Telegram é realmente muito prático. As dicas são fáceis de seguir, as porções são ideais e minha energia melhorou bastante. Agora estou mais animado no trabalho e nos treinos.",
  },
  {
    name: "Carla, 24 anos",
    text: "Eu comia besteira toda vez que ficava entediada e acabava ganhando peso. Depois que entrei no Metafitness, aprendi a controlar a vontade de beliscar e a preparar minhas próprias refeições saudáveis. Hoje sinto menos fome, me sinto mais leve e o melhor: minhas amigas entraram também, então estamos juntas nessa!",
  },
  {
    name: "Diego, 30 anos",
    text: "O que mais gosto no Metafitness é a simplicidade. Não preciso me estressar contando calorias, é só seguir o passo a passo. Me sinto mais confiante e minha família também saiu ganhando, já que agora cozinho refeições mais saudáveis em casa.",
  },
  {
    name: "Aline, 34 anos",
    text: "Nunca imaginei que aprenderia tanto sobre o meu corpo pelo Telegram. As lições são fáceis de acompanhar, mesmo com a rotina corrida. E ainda ganho benefícios extras quando indico para amigos!",
  },
];

export default function CommentsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section
      className="w-full mx-auto rounded-3xl px-6 py-12 relative overflow-hidden"
      style={{
        backgroundImage: `url(${rainbowL}), url(${rainbowR})`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "14% 48%, 95% 86%",
        backgroundSize: "67% auto, 27% auto",
      }}
    >
      <section className="px-6 pb-12 flex flex-col items-center">
        <img src={money} alt="App screenshots" className="w-[198px]" />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] lg:gap-16 gap-8 items-center relative z-10">
        {/* Права колонка (desktop кнопки) */}
        <div className="flex flex-col justify-between h-auto lg:w-[374px] w-[300px] lg:h-[288px] order-1 lg:order-2">
          <h3 className="text-[32px] font-bold w-80 m-auto text-center text-[#454545]">
            O que dizem nossos usuários
          </h3>
          <div className="hidden lg:flex gap-14 mt-6 lg:mt-0 self-end">
            <button
              className="custom-swiper-button-prev lg:w-14 w-11 lg:h-14 h-11 cursor-pointer rounded-full flex justify-center items-center"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src={arrowLeft} alt="Prev" className="w-5 h-8" />
            </button>
            <button
              className="custom-swiper-button-next lg:w-14 w-11 lg:h-14 h-11 cursor-pointer rounded-full flex justify-center items-center"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src={arrowRight} alt="Next" className="w-5 h-8" />
            </button>
          </div>
        </div>

        {/* Ліва колонка (слайдер з мобільними кнопками) */}
        <div className="order-2 lg:order-1 relative z-10">
          <div className="relative w-full">
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              loop={true}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: ".custom-swiper-button-prev",
                nextEl: ".custom-swiper-button-next",
              }}
              modules={[Navigation, Pagination]}
              centeredSlides={false}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              breakpoints={{
                0: { slidesPerView: 1, centeredSlides: true },
                1024: { slidesPerView: 3, centeredSlides: false },
              }}
              className="w-full"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setActiveIndex(swiper.realIndex);
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="flex flex-col justify-center p-6 rounded-2xl w-[288px] sm:w-[328px] h-[380px] relative bg-white text-[#404040] shadow-lg">
                    <h4 className="font-bold text-left text-[#FF7E05] text-2xl">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-left mt-3">“{testimonial.text}”</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Мобільні кнопки (центровані по висоті) */}
            <button
              className="custom-swiper-button-prev absolute top-1/2 -translate-y-1/2 -left-2 lg:hidden z-20"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src={arrowLeft} alt="Prev" className="w-5 h-8" />
            </button>
            <button
              className="custom-swiper-button-next absolute top-1/2 -translate-y-1/2 -right-2 lg:hidden z-20"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src={arrowRight} alt="Next" className="w-5 h-8" />
            </button>
          </div>
        </div>
      </div>

      <p className="text-black text-xs text-center mt-8 m-auto w-46">
        Aviso legal: Os resultados podem variar de acordo com o esforço
        individual e outros fatores.
      </p>
      <p className="text-[#FF7E05] text-center m-auto text-xl w-72 mt-7">
        Passe de iniciante a alguém que prepara refeições saudáveis com confiança
        Tudo em uma só tarde.
      </p>
    </section>
  );
}
