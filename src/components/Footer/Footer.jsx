import instagram from "../../assets/instagram.svg";
import mainLogo from "../../assets/logo-small.svg";
import pix from "../../assets/pix.svg";
import telegram from "../../assets/telegram.svg";
import tiktok from "../../assets/tiktok.svg";
import { CreditCardIcon } from "../../icons/CreditCardIcon.jsx";
import { LockIcon } from "../../icons/Lock.jsx";
import { MastercardIcon } from "../../icons/MastercardIcon.jsx";
import { PayPalIcon } from "../../icons/PayPalIcon.jsx";
import { ShieldIcon } from "../../icons/ShieldIcon.jsx";
import { VisaIcon } from "../../icons/VisaIcon.jsx";

const Footer = () => {
  return (
    <div className="min-w-[375px] flex flex-col items-center bg-[#f5f2eb]">
      {/* Соцмережі */}
      <div className="w-full flex flex-col rounded items-center py-10 bg-[#F3F0E7]">
        <h2 className="text-[#493F3B] text-2xl font-medium mb-6">
          Siga-nos no
        </h2>
        <div className="flex flex-col gap-6 items-center">
          <a href="https://www.instagram.com/metafitness_brazil/"><img src={instagram} alt="instagram" className="w-14 h-14" /></a>
          <a href="https://www.tiktok.com/@metafitness.brazil"><img src={tiktok} alt="tiktok" className="w-14 h-14" /></a>
          <a href="https://t.me/c/2637134006/1"><img src={telegram} alt="telegram" className="w-14 h-14" /></a>
        </div>
      </div>

      {/* Логотип і платіжки */}
      <div className="bg-white w-full flex flex-col items-center py-10">
        <img src={mainLogo} alt="logo" className="w-60 h-16" />
        <img src={pix} alt="pix" className="h-8 mt-8" />
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <VisaIcon />
          <MastercardIcon />
          <PayPalIcon />
        </div>

        <div className="flex justify-center items-center gap-8 mt-8">
          <CreditCardIcon />
          <LockIcon />
          <ShieldIcon />
        </div>
      </div>

      {/* Нижній блок */}
      <div className="w-full border-t border-black text-center py-6 bg-white">
        <a href="https://www.metafitness.vip/terms.html"><p className="text-base font-medium mb-6">Termos e condições</p></a>
        <p className="text-sm text-[#333]">
          2025 MetaFitness. <br /> Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
