import YogaHero from "../components/yogastudio/YogaHero";
import YogaPhilosophy from "../components/yogastudio/YogaPhilosophy";
import YogaExperienceFlow from "../components/yogastudio/YogaExperienceFlow";
import YogaStudioDetails from "../components/yogastudio/YogaStudioDetails";
import YogaTestimonials from "../components/yogastudio/YogaTestimonials";
import YogaCTA from "../components/yogastudio/YogaCTA";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const YogaStudioExperience = () => {
  return (
    <>
      <YogaHero />
      <YogaPhilosophy />
      <YogaExperienceFlow />
      <YogaStudioDetails />
      <YogaTestimonials />
      <YogaCTA />
      <Footer/>
    </>
  );
};

export default YogaStudioExperience;