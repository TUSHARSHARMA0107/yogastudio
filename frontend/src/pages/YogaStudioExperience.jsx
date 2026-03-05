import YogaHero from "../components/yogastudio/YogaHero";
import YogaPhilosophy from "../components/yogastudio/YogaPhilosophy";
import YogaExperienceFlow from "../components/yogastudio/YogaExperienceFlow";
import YogaStudioDetails from "../components/yogastudio/YogaStudioDetails";
import YogaTestimonials from "../components/yogastudio/YogaTestimonials";
import YogaCTA from "../components/yogastudio/YogaCTA";


const YogaStudioExperience = () => {
  return (
    <>
      
      <main className="relative">
        {/* Hero Section - Often full height */}
        <section className="relative overflow-hidden">
          <YogaHero />
        </section>

        {/* Content Sections with consistent vertical rhythm */}
        <div className="space-y-24 py-16 md:py-32">
          
          <section className="container mx-auto px-6 lg:px-12">
            <YogaPhilosophy />
          </section>

          {/* Flow section often looks best with a subtle background shift */}
          <section className="bg-[#f2f0eb] py-24 px-6 lg:px-12">
            <div className="container mx-auto">
              <YogaExperienceFlow />
            </div>
          </section>

          <section className="container mx-auto px-6 lg:px-12">
            <YogaStudioDetails />
          </section>

          {/* Testimonials in a clean, focused container */}
          <section className="container mx-auto px-6 lg:px-12">
            <div className="rounded-3xl bg-white p-8 md:p-16 shadow-sm border border-stone-100">
              <YogaTestimonials />
            </div>
          </section>

          {/* Final Call to Action */}
          <section className="container mx-auto px-6 lg:px-12 pb-12">
             <YogaCTA />
          </section>
          
        </div>
      </main>

    
    </>
  );
};

export default YogaStudioExperience;
