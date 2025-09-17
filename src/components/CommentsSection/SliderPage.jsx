import after1 from "../../assets/cooking-after-3.webp";
import before1 from "../../assets/cooking-before-3.webp";
import after2 from "../../assets/fatigue-after-3.webp";
import before2 from "../../assets/fatigue-before-3.webp";
import after3 from "../../assets/food-after-3.webp";
import before3 from "../../assets/food-before-3.webp";
import { useOfferLink } from "../../hooks/useOfferLink";
import ImageSlider from "./ImageSlider";

export default function SliderPage() {
const offerLink = useOfferLink();
  return (
    <div className="bg-[#F3F0E7] min-h-screen flex flex-col items-center">
        <h3 className="text-[32px] font-bold w-2xs text-center text-[#454545]">
          Imagine a versão mais saudável de você.
        </h3>
      <ImageSlider
        title="Cozinha"
        subtitle="rápido e fácil"
        slides={[before1, after1]}
      />
      <ImageSlider
        title="Com mais"
        subtitle="energia"
        slides={[before2, after2]}
      />
      <ImageSlider
        title="Hábitos mais "
        subtitle="saudáveis!"
        slides={[before3, after3]}
      />

      {/* === Текстовий блок з картинки === */}
      <div className="max-w-2xl text-center px-6 py-12">
        <p className="text-lg mb-4">
          Imagine acordar cheio(a) de energia, se sentindo orgulhoso(a) do que
          vê no espelho, sem aquele cansaço à tarde e com refeições tão gostosas
          que você mal pode esperar pela próxima.
        </p>
        <p className="text-lg mb-4">
          Sem contar calorias, sem salada sem graça. Apenas lições rápidas de
          nutrição e receitas práticas e deliciosas que se encaixam nos seus
          objetivos!
        </p>

        <ul className="text-left inline-block text-lg space-y-4 mb-6">
          <li>
            ✅ Preparar uma semana inteira de refeições em menos de 30 minutos
          </li>
          <li>
            ✅ Comer de forma prazerosa e se sentir satisfeito(a) por horas
          </li>
          <li>
            ✅ Criar hábitos saudáveis que realmente duram – até nos dias
            corridos ou durante viagens!
          </li>
        </ul>

        <p className="text-lg mb-6">E o melhor de tudo?</p>
        <p className="text-lg mb-8">
          Você ainda ganha dinheiro compartilhando o que aprendeu.
        </p>

        <a href={offerLink}>
          <button className="bg-[#FF7E05] text-white font-semibold shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-full px-8 py-3">
            Assine agora
          </button>
        </a>
      </div>
    </div>
  );
}
