import Footer from "../components/Footer/Footer";
import AerialYoga from "./yoga/AerialYoga";
import CommercialBooking from "./yoga/CommercialBooking";
import CorporateBooking from "./yoga/CorporateBooking";
import Meditation from "./yoga/Meditation";
import Pranayama from "./yoga/Pranayama";
import SoundHealing from "./yoga/SoundHealing ";
///import

const Program = () => {
  return (
    <>
     <AerialYoga/> 
     <CommercialBooking/>
     <CorporateBooking/>
     <Meditation/>
     <Pranayama/>
     <SoundHealing/>
     {/* <Yoga/>  */}
       <Footer/> 
    </>
  );
};

export default Program;