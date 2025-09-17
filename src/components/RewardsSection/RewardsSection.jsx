import diet from "../../assets/diet.svg";
import goal from "../../assets/goal.svg";
import app1 from "../../assets/mobiles.webp";
import money from "../../assets/money.svg";
import partners from "../../assets/partners.svg";
import stopwatch from "../../assets/stopwatch.svg";
import { useOfferLink } from "../../hooks/useOfferLink.jsx";

export const RewardsSection = () => {
  const offerLink = useOfferLink();

  return (
    <div className="w-full min-w-[375px] bg-[#F3F0E7]">
      {/* Заголовок */}
      <section className="px-6 py-10 text-center">
        <h3 className="text-[32px] font-bold mb-10 text-[#454545]">
          Metafitness <br /> transforma sua vida
        </h3>

        {/* Іконки з текстом (вертикально) */}
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center text-center max-w-[220px]">
            <img src={goal} alt="goal-icon" className="w-[74px] mb-4" />
            <p className="text-xl font-bold text-[#454545]">
              Alcance sua meta de saúde com facilidade
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-[220px]">
            <img src={stopwatch} alt="stopwatch-icon" className="w-[74px] mb-4" />
            <p className="text-xl font-bold text-[#454545]">
              Cozinhe refeições rápidas, saudáveis e super saborosas
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-[220px]">
            <img src={diet} alt="diet-icon" className="w-[74px] mb-4" />
            <p className="text-xl font-bold text-[#454545]">
              Crie hábitos que realmente duram no dia a dia
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-[220px]">
            <img src={money} alt="money-icon" className="w-[74px] mb-4" />
            <p className="text-xl font-bold text-[#454545]">
              Acesso ao programma de indicação (25% de comissão por venda)
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-[220px]">
            <img src={partners} alt="partners-icon" className="w-[74px] mb-4" />
            <p className="text-xl font-bold text-[#454545]">
              Acesso a uma comunidade de apoio no Telegram
            </p>
          </div>
        </div>
      </section>

      {/* Скріншоти застосунку */}
      <section className="px-6 pb-12 flex flex-col items-center">
        <img
          src={app1}
          alt="App screenshots"
          className="w-[280px] rounded-[36px] shadow-md"
        />
      </section>
    </div>
  );
};
