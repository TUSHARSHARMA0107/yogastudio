import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Program from "./pages/program";
import YogaStudioExperience from "./pages/YogaStudioExperience";
import AboutTrainer from "./pages/AboutTrainer";
import Content from "./pages/SocialMedia";
import Studioview from "./pages/StudioView";
import ReviewsPage from "./pages/Review";



import AerialYoga from "./pages/yoga/AerialYoga";
import Meditation from "./pages/yoga/Meditation";
import SoundHealing from "./pages/yoga/SoundHealing ";
import CorporateBooking from "./pages/yoga/CorporateBooking";
import Yoga from "./pages/yoga/Yoga";
import CommercialBooking from "./pages/yoga/CommercialBooking";
import Pranayama from "./pages/yoga/Pranayama";
import Contact from "./pages/ContactUs";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program/>}/>
        <Route path="/studio-experience" element={<YogaStudioExperience/>}/>
        <Route path="/about-trainer" element={<AboutTrainer/>}/>
        <Route path ="/social" element={<Content/>}/>
        <Route path="/studioview" element={<Studioview/>}/>
        <Route path="/review" element={<ReviewsPage/>}/>
        <Route path="/contact" element={<Contact/>}/>




        {/* program list*/}
        <Route path="/program/aerial-yoga" element={<AerialYoga />} />
        <Route path="/program/commercial" element={<CommercialBooking/>}/>
      <Route path="/program/meditation" element={<Meditation/>} />
      <Route path="/program/sound-healing" element={<SoundHealing />} />
      <Route path="/program/corporate-booking" element={<CorporateBooking />} />
      <Route path="/program/pranayama" element={<Pranayama/>}/>
      <Route path="/program/yoga" element={<Yoga/>} />

        
  
      </Routes>

      <Footer />
    </>
  );
}