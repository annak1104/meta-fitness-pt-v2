import { useState } from "react";

import mainImg from "../../assets/bg-main.webp";
import burgerMenu from "../../assets/burger-menu.svg";
import check from "../../assets/checkmark-r.svg";
import closeIcon from "../../assets/close.svg";
import logoSmall from "../../assets/logo-small.svg";
import price from "../../assets/price.png";
import { useOfferLink } from "../../hooks/useOfferLink.jsx";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const offerLink = useOfferLink();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { label: "Cursos", href: "cursos" },
    { label: "Depoimentos", href: "depoimentos" },
    { label: "Dúvidas", href: "dúvidas" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-w-[375px] relative">
      {/* Header */}
      <div className="pt-[24px] pb-[24px] flex justify-between items-center px-4 bg-white">
        <img src={burgerMenu} onClick={toggleMenu} className="cursor-pointer" />
        <img src={logoSmall} alt="logo-small" className="ml-auto" />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-90 z-50 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ transitionDuration: "0.5s" }}
      >
        <div className="h-full mt-[12px] px-4">
          <div className="flex justify-between">
            <img
              src={closeIcon}
              onClick={toggleMenu}
              className="cursor-pointer ml-3"
            />
            <img src={logoSmall} alt="logo-small" />
          </div>
          <div className="flex flex-col items-start">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  handleScroll(item.href);
                  toggleMenu();
                }}
                className="text-black py-4 text-xl"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section with background */}
      <section
        className="relative w-full h-[434px] text-center text-white px-6 py-16"
        style={{
          backgroundImage: `url(${mainImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-4xl font-bold leading-snug mb-6">
          Fique em forma, <br />
          ganhe recompensas <br />e transforme sua saúde!
        </h2>

        {/* CTA Button */}
        <a href={offerLink}>
          <button className="bg-[#FF7E05] text-white font-semibold rounded-full px-8 py-3 shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
            Assine agora
          </button>
        </a>
      </section>

      {/* White content section */}
      <section className="bg-white px-6 py-10 text-[#454545]">
        <p className="text-xl font-bold mb-6">
          Seu coach de nutrição com refeições inteligentes, hábitos e resultados
          duradouros.
        </p>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          <li className="flex items-center gap-2">
            <img src={check} alt="check" />
            <span>Entenda o que seu corpo precisa</span>
          </li>
          <li className="flex items-center gap-2">
            <img src={check} alt="check" />
            <span>Alcance suas metas de saude</span>
          </li>
          <li className="flex items-center gap-2">
            <img src={check} alt="check" />
            <span>Compartilhe e ganhe recompensas</span>
          </li>
          <li className="flex items-center gap-2">
            <img src={check} alt="check" />
            <span>Receitas rápidas, saudáveis, deliciosas</span>
          </li>
          <li className="flex items-center gap-2">
            <img src={check} alt="check" />
            <span>Habitos que resistem a tentações</span>
          </li>
        </ul>

        {/* Promo */}
        <div className="text-center flex items-center flex-col">
          <img src={price} alt="price" className="mb-6" />
          <a href={offerLink}>
            <button className="bg-[#FF7E05] text-white font-semibold rounded-full px-6 py-2 shadow-[0_4px_6px_rgba(0,0,0,0.3)] mb-4">
              Gratis se você <br /> indicar 4 amigos!
            </button>
          </a>
          <p className="text-sm text-center w-[288px] text-[#454545]">
            Ganhe 25% por cada amigo que entrar com o seu link, o valor é pago
            diretamente para você.
          </p>
        </div>
      </section>
    </div>
  );
};
