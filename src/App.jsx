import CommentsSection from "./components/CommentsSection/ImageSlider";
import SliderPage from "./components/CommentsSection/SliderPage";
import FaqAccordion from "./components/FaqAccordion/FaqAccordion";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { NutritionCards } from "./components/NutritionCards/NutritionCards";
import { RewardsSection } from "./components/RewardsSection/RewardsSection";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <div id="depoimentos">
        <Testimonials />
      </div>
      <SliderPage />
      <RewardsSection />
      <div id="cursos">
        <NutritionCards />
      </div>
      <div id="dúvidas">
        <FaqAccordion />
      </div>
      <Footer />
    </>
  );
}

export default App;
