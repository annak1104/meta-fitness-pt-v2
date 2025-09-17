import checkIcon from "../../assets/checkmark.svg";
import img3 from "../../assets/energy.webp";
import img2 from "../../assets/muscle.webp";
import img1 from "../../assets/weight-loss.webp";
import { useOfferLink } from "../../hooks/useOfferLink";

const cards = [
  {
    id: "01",
    title: "Perca peso com uma alimentação saudável",
    points: [
      "Reduza calorias com receitas rápidas e deliciosas, adaptadas ao seu corpo",
      "Entenda o balanço energético e o metabolismo",
      "Use técnicas de alimentação para controlar a vontade de comer, e aproveitar a comida sem culpa",
    ],
    img: img1,
  },
  {
    id: "02",
    title: "Ganhe músculos e força com a nutrição certa",
    points: [
      "Aprenda a equilibrar proteínas, carboidratos e gorduras",
      "Receitas que alimentam seus treinos e aceleram a recuperação",
      "Uso seguro e eficaz de suplementação para apoiar seus objetivos",
    ],
    img: img2,
  },
  {
    id: "03",
    title: "Melhore sua energia, foco e saúde com a nutrição certa",
    points: [
      "Construa hábitos alimentares sustentáveis que melhoram sua energia, imunidade e bem-estar geral",
      "Planeje e prepare refeições saudáveis e saborosas mesmo em dias corridos",
      "Decifre conselhos de nutrição e tome decisões mais inteligentes no dia a dia",
    ],
    img: img3,
  },
];

export const NutritionCards = () => {
  const offerLink = useOfferLink();
  return (
    <div className="w-full min-w-[375px] px-4 py-8 flex flex-col gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-gradient-to-b from-[#FF7E05] from-100% via-[#FB8C00] via-76% to-[#FB8C00] to-46% rounded-3xl overflow-hidden text-white shadow-md"
        >
          <div className="p-5">
            <p className="text-sm font-medium mb-2">{card.id}</p>
            <h2 className="text-xl font-bold mb-4 leading-snug">
              {card.title}
            </h2>
            <ul className="space-y-3">
              {card.points.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <img src={checkIcon} alt="check" className="w-5 h-5 mt-1" />
                  <span className="text-sm leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-5 pb-5">
            <img
              src={card.img}
              alt={card.title}
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      ))}
      <div className="flex flex-col items-center">
        <h2 className="text-black text-center text-3xl font-semibold mt-14 mb-6">
          Agora é a sua vez!
        </h2>
        <a href={offerLink}>
          <button className="bg-[#FF7E05] text-white font-semibold shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-full px-8 py-3">
            Assine agora
          </button>
        </a>
      </div>
    </div>
  );
};
