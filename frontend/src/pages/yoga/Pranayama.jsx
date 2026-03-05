import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import VideoHero from "../../components/program/VideoHero";
import ImageCarousel from "../../components/program/ImageCarousel";
import ProgramDetails from "../../components/program/ProgramDetails";
import BenefitsSection from "../../components/program/BenefitsSection";
import FAQSection from "../../components/program/FAQSection";
import DynamicBreath from "../../components/program/DynamicBreath";

const Pranayama = () => {

const { scrollYProgress } = useScroll();
const scaleX = useSpring(scrollYProgress,{stiffness:100,damping:30})

const benefits = [
{
title:"Nervous System Regulation",
desc:"Breath patterns directly influence the parasympathetic nervous system helping reduce stress instantly."
},
{
title:"Improved Lung Capacity",
desc:"Controlled breathing improves oxygen intake and strengthens respiratory muscles."
},
{
title:"Mental Clarity",
desc:"Focused breathing stabilizes attention and reduces cognitive overload."
},
{
title:"Energy Balance",
desc:"Pranayama harmonizes internal energy flow improving vitality and focus."
}
]

const faqs = [
{
q:"Is Pranayama suitable for beginners?",
a:"Yes. We start with natural breath awareness before introducing advanced techniques."
},
{
q:"Can this be practiced online?",
a:"Yes. Our guided sessions are effective both in studio and via online classes."
},
{
q:"How often should I practice?",
a:"Even 10–15 minutes daily can significantly improve focus and calmness."
}
]

const reveal = {
initial:{opacity:0,y:30},
whileInView:{opacity:1,y:0},
viewport:{once:true},
transition:{duration:0.8}
}

return(

<main className="bg-[#FDFCFB] text-stone-900 overflow-x-hidden">

{/* PROGRESS INDICATOR */}

<motion.div
className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-stone-300 to-stone-500 z-50 origin-left"
style={{scaleX}}
/>


{/* HERO */}

<VideoHero
title="Pranayama"
subtitle="The ancient science of conscious breathing connecting body, mind and awareness."
videoSrc="https://cdn.coverr.co/videos/coverr-breathing-exercise-5192/1080p.mp4"
whatsappMessage="Hello I want to explore Pranayama sessions"
/>


{/* INTRO */}

<section className="py-32 px-6">

<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<motion.div {...reveal}>

<span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 block mb-8">
The Science
</span>

<h2 className="text-5xl md:text-7xl font-serif font-light leading-tight mb-8">
Where Breath <br/>
<span className="italic text-stone-400">Meets Awareness</span>
</h2>

<p className="text-lg text-stone-500 leading-relaxed max-w-xl">
Pranayama is the practice of consciously regulating the breath.
Through rhythm and awareness it helps balance the nervous system,
increase oxygen efficiency and cultivate mental clarity.
</p>

</motion.div>


<motion.div {...reveal} className="rounded-[2.5rem] overflow-hidden shadow-xl">

<img
src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1400"
className="w-full h-[500px] object-cover"
/>

</motion.div>

</div>

</section>


{/* BREATH VISUALIZER */}

<section className="py-24 px-6">

<motion.div
initial={{opacity:0,scale:0.95}}
whileInView={{opacity:1,scale:1}}
transition={{duration:1}}
className="max-w-5xl mx-auto bg-white rounded-[3rem] p-16 border border-stone-100 shadow-sm text-center"
>

<h3 className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-12">
Breath Rhythm
</h3>

<DynamicBreath/>

<p className="text-xs text-stone-400 uppercase tracking-widest mt-10">
Inhale • Hold • Exhale
</p>

</motion.div>

</section>


{/* BENEFITS */}

<section className="bg-white py-32">

<BenefitsSection
heading="Benefits of Pranayama"
benefits={benefits}
/>

</section>


{/* PROGRAM STRUCTURE */}

<section className="py-32 px-6">

<motion.div {...reveal} className="max-w-5xl mx-auto">

<div className="bg-stone-900 text-white rounded-[3rem] p-16">

<ProgramDetails
title="Practice Structure"
description="Each session gradually builds breath awareness and control."
levels={[
"Foundational Breath Awareness",
"Rhythmic Breathing Patterns",
"Advanced Cleansing Techniques"
]}
/>

</div>

</motion.div>

</section>


{/* GALLERY */}

<section className="py-32 bg-white">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-3xl font-serif italic mb-16 text-center">
Studio Practice
</h2>

<div className="rounded-[3rem] overflow-hidden shadow-xl bg-white p-2">

<ImageCarousel
images={[
"https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1400",
"https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1400",
"https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1400",
"https://images.unsplash.com/photo-1599447421387-2bde1c0d6d8d?q=80&w=1400"
]}
/>

</div>

</div>

</section>


{/* FAQ */}

<section className="py-32 bg-[#FAFAFA]">

<div className="max-w-4xl mx-auto px-6">

<FAQSection faqs={faqs}/>

</div>

</section>


{/* CTA */}

<section className="py-40 text-center">

<motion.div {...reveal} className="max-w-3xl mx-auto px-6">

<h3 className="text-5xl md:text-7xl font-serif font-light mb-10">
Begin Your <span className="italic text-stone-400">Breath Journey</span>
</h3>

<a
href="https://wa.me/919800000000?text=Hello%20I%20want%20to%20book%20a%20Pranayama%20session"
className="inline-flex items-center px-14 py-6 bg-stone-900 text-white rounded-full text-xs uppercase tracking-[0.4em] hover:bg-stone-700 transition"
>
Book Session
</a>

</motion.div>

</section>

</main>

)

}

export default Pranayama;