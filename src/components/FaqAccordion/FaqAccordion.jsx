import React, { useEffect, useRef, useState } from "react";

import { useOfferLink } from "../../hooks/useOfferLink.jsx";
import { CloseIcon } from "../../icons/CloseIcon.jsx";

const FAQS = [
  {
    q: "Preciso instalar algum aplicativo?",
    a: "Nada disso! Funciona diretamente nas conversas do Telegram.",
  },
  {
    q: "Como eu ganho dinheiro?",
    a: "Você recebe um link de indicação. Quando seus amigos comprarem um curso, você ganha 25% de comissão.",
  },
  {
    q: "O Metafitness é para iniciantes?",
    a: "Com certeza! Cada curso foi pensado para te levar do básico até estratégias mais avançadas. Tanto iniciantes quanto pessoas com mais experiência conseguem acompanhar sem dificuldades.",
  },
  {
    q: "E se eu tiver restrições alimentares ou condições de saúde específicas?",
    a: "Nossos cursos oferecem guias e receitas flexíveis, com substituições para diferentes tipos de dieta (vegana, sem glúten etc.). Sempre recomendamos consultar um profissional de saúde para orientações personalizadas.",
  },
];

function AccordionItem({ index, item, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [maxH, setMaxH] = useState("0px");

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      setMaxH(isOpen ? `${el.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  useEffect(() => {
    function handleResize() {
      const el = contentRef.current;
      if (el && isOpen) {
        setMaxH(`${el.scrollHeight}px`);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <article className="w-full">
      {/* wrapper with smooth border-radius transition */}
      <div
        className="bg-[#FF7E05] overflow-hidden transition-all duration-300"
        style={{
          borderRadius: "1rem",
          transition: "border-radius 300ms ease",
        }}
      >
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${index}`}
          onClick={() => onToggle(index)}
          className="w-full flex items-center justify-between
            px-6 py-4 md:px-8 md:py-5
            text-left
            hover:shadow-lg transition-shadow duration-200
            focus:outline-none"
        >
          <h3
            className={`text-lg md:text-xl font-medium transition-colors duration-200 ${
              isOpen ? "text-[#493F3B]" : "text-white"
            }`}
          >
            {item.q}
          </h3>

          <span
            className="ml-4 flex-shrink-0 text-white/70 bg-transparent cursor-pointer rounded-full p-2"
            aria-hidden
          >
            <CloseIcon open={isOpen} />
          </span>
        </button>

        {/* panel */}
        <div
          id={`faq-panel-${index}`}
          ref={contentRef}
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: maxH }}
        >
          <div className="px-6 py-4 text-white">
            <p className="text-sm leading-relaxed">{item.a}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const offerLink = useOfferLink();

  function toggle(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section
      aria-labelledby="faq-title"
      className="relative bg-[#493F3B] text-white py-16 md:py-20"
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1
            id="faq-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold"
          >
            Perguntas frequentes
          </h1>
        </header>

        <div className="space-y-6">
          {FAQS.map((item, idx) => (
            <AccordionItem
              key={idx}
              index={idx}
              item={item}
              isOpen={openIndex === idx}
              onToggle={toggle}
            />
          ))}
        </div>

        {/* bottom contact section */}
        <div className="mt-12 text-center">
          <h2 className="text-base md:text-lg font-semibold">
            Ainda tem dúvidas?
          </h2>
          <p className="mt-3 text-sm m-auto w-[320px] md:w-[380px] md:text-base text-white">
            Estamos prontos para ajudar você a esclarecer qualquer pergunta.
            <span className="block text-center">
              Entre em{" "}
              <a href={offerLink} className="no-underline">
                contato conosco.
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
