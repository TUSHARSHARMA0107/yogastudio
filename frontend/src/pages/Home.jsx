import Hero from "../components/home/video/HeroRoot";
import Navbar from "../components/Navbar/Navbar";
import HeroCards from "../components/home/cards/HeroCards";
import AboutBusiness from "../components/home/description/BusinessStory";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO (UNCHANGED) */}
      <div className="hero-video">
      <Hero />
</div>
      {/* 👇 HERO END SENTINEL (KEY LINE) */}
      <div id="hero-break" className="h-[1px] w-full" />
        <HeroCards />
                <AboutBusiness />
    

      <Footer />
    </>
  );
}