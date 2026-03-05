import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Target, BarChart3, Layers, ArrowRight, Plus } from "lucide-react";
import VideoHero from "../../components/program/VideoHero";
import ImageCarousel from "../../components/program/ImageCarousel";
import ProgramDetails from "../../components/program/ProgramDetails";
import FAQSection from "../../components/program/FAQSection";

const CommercialBooking = () => {

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress,[0,1],[1,1.05]);

  const commercialBenefits = [
    {
      title:"Brand Integration",
      desc:"Wellness experiences structured to align with brand identity.",
      icon:<Target strokeWidth={1.5}/>
    },
    {
      title:"Operational Precision",
      desc:"Clear timelines and professional facilitation.",
      icon:<Zap strokeWidth={1.5}/>
    },
    {
      title:"Scalable Formats",
      desc:"Designed for both intimate events and large audiences.",
      icon:<Layers strokeWidth={1.5}/>
    },
    {
      title:"Audience Engagement",
      desc:"Experiences that increase dwell time and emotional recall.",
      icon:<BarChart3 strokeWidth={1.5}/>
    }
  ];

  const commercialFAQ = [
    {q:"Is this suitable for non-yoga audiences?",a:"Yes. Sessions are inclusive and accessible for all participants."},
    {q:"Can sessions adapt to tight schedules?",a:"Absolutely. Formats are modular and flexible."},
    {q:"Do you collaborate with event agencies?",a:"Yes, we frequently partner with agencies and production teams."}
  ];

  const reveal = {
    initial:{opacity:0,y:40},
    whileInView:{opacity:1,y:0},
    viewport:{once:true},
    transition:{duration:0.9}
  }

  return (

<main className="bg-[#FDFCFB] text-stone-900 overflow-x-hidden">


{/* ================= HERO ================= */}

<VideoHero
variant="commercial"
title="Commercial Wellness"
subtitle="Curating immersive wellness experiences for brands and events."
videoSrc="https://cdn.coverr.co/videos/coverr-aerial-yoga-practice-1603/1080p.mp4"
whatsappMessage="Hello! I'd like to discuss a commercial wellness collaboration."
/>


{/* ================= TICKER ================= */}

<section className="py-10">

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-3 gap-6 text-center">

{["Brand Focused","Production Ready","Audience Engagement"].map((text,i)=>(
<div key={i} className="bg-white border border-stone-100 py-6 rounded-full text-xs uppercase tracking-[0.3em] text-stone-500">
{text}
</div>
))}

</div>

</div>

</section>


{/* ================= BENEFITS ================= */}

<section className="py-32">

<div className="max-w-7xl mx-auto px-6">

<motion.div {...reveal} className="max-w-2xl mb-20">

<h2 className="text-4xl md:text-6xl font-serif font-light leading-tight">
Where <span className="italic text-stone-400">Scale</span> meets <span className="italic text-amber-600">Experience</span>
</h2>

<p className="mt-6 text-stone-500 text-lg">
We design immersive wellness experiences that connect brands with audiences through meaningful interaction.
</p>

</motion.div>


<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

{commercialBenefits.map((benefit,i)=>(
<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.1}}
className="bg-white border border-stone-100 p-10 rounded-[2rem] hover:shadow-xl transition"
>

<div className="w-12 h-12 flex items-center justify-center bg-stone-100 rounded-xl mb-6">
{benefit.icon}
</div>

<h3 className="text-lg font-medium mb-3">
{benefit.title}
</h3>

<p className="text-stone-500 text-sm">
{benefit.desc}
</p>

</motion.div>
))}

</div>

</div>

</section>


{/* ================= SHOWCASE ================= */}

<section className="py-32 bg-white">

<div className="max-w-screen-xl mx-auto px-6">

<motion.div style={{scale}} className="rounded-[3rem] overflow-hidden shadow-xl">

<ImageCarousel
images={[
"https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200",
"https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1200",
"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200"
]}
/>

</motion.div>

</div>

</section>


{/* ================= PROGRAM ================= */}

<section className="py-32">

<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

<motion.div {...reveal} className="bg-white border border-stone-100 rounded-[3rem] p-16">

<ProgramDetails
title="Event Formats"
description="Flexible wellness formats for events and brand activations."
levels={[
"Guided Event Yoga",
"Corporate Wellness Sessions",
"Sound Bath Installations"
]}
/>

</motion.div>

<motion.div {...reveal}>

<img
src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1400"
className="rounded-[3rem] w-full h-full object-cover"
/>

</motion.div>

</div>

</section>


{/* ================= FAQ ================= */}

<section className="py-32 border-t border-stone-200">

<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20">

<div className="lg:col-span-4">

<span className="text-[10px] uppercase tracking-[0.4em] text-stone-400">
Support
</span>

<h3 className="mt-6 text-4xl font-light">
Frequently Asked
</h3>

</div>

<div className="lg:col-span-8">

<FAQSection faqs={commercialFAQ}/>

</div>

</div>

</section>


{/* ================= CTA ================= */}

<section className="py-40 text-center bg-white">

<motion.div {...reveal} className="max-w-3xl mx-auto">

<h3 className="text-5xl md:text-7xl font-serif font-light">
Let's <span className="italic text-stone-400">Collaborate</span>
</h3>

<p className="mt-6 text-stone-500 text-lg">
Start a conversation about your next wellness activation.
</p>

<a
href="https://wa.me/919800000000?text=Hi%20I%20want%20to%20discuss%20a%20commercial%20wellness%20event"
className="inline-flex items-center gap-4 mt-12 px-12 py-5 bg-stone-900 text-white rounded-full text-xs tracking-widest uppercase"
>

Start Collaboration
<ArrowRight size={16}/>

</a>

</motion.div>

</section>

</main>
  )
}

export default CommercialBooking