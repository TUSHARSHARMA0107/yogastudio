import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowUpRight,
  ArrowDownRight,
  Briefcase,
  Users,
  Globe,
} from "lucide-react";
import VideoHero from "../../components/program/VideoHero";
import ProgramDetails from "../../components/program/ProgramDetails";
import FAQSection from "../../components/program/FAQSection";

const CorporateBooking = () => {

const benefits = [
{
title:"Reduced Workplace Stress",
desc:"Structured breathwork and mobility sessions reduce mental fatigue."
},
{
title:"Sharper Cognitive Output",
desc:"Mind-body integration improves focus and executive clarity."
},
{
title:"Higher Team Alignment",
desc:"Shared wellness rituals enhance team cohesion."
},
{
title:"Sustainable Performance",
desc:"Frameworks supporting long-term nervous system balance."
}
]

const reveal = {
initial:{opacity:0,y:30},
whileInView:{opacity:1,y:0},
viewport:{once:true},
transition:{duration:0.7}
}

return (

<main className="bg-[#FDFCFB] text-stone-900 overflow-x-hidden">

{/* ================= HERO ================= */}

<VideoHero
title="Corporate Wellness Systems"
subtitle="Executive-grade wellness designed for modern organizations."
videoSrc="https://cdn.coverr.co/videos/coverr-team-yoga-session-5177/1080p.mp4"
whatsappMessage="Hello I want to discuss Corporate Wellness"
/>


{/* ================= KPI STRIP ================= */}

<section className="relative -mt-20 z-20 px-6">

<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

{[
{label:"Stress Reduction",val:"30%",icon:<ArrowDownRight/>},
{label:"Productivity Boost",val:"20%",icon:<ArrowUpRight/>},
{label:"Engagement Rise",val:"25%",icon:<ArrowUpRight/>},
{label:"Burnout Risk ↓",val:"22%",icon:<ArrowDownRight/>},
].map((item,i)=>(

<motion.div
key={i}
{...reveal}
transition={{delay:i*0.1}}
className="bg-white border border-stone-100 p-8 rounded-[2rem] shadow-lg text-center"
>

<div className="flex justify-center items-center gap-2 mb-2 text-emerald-600">
<span className="text-3xl font-semibold">{item.val}</span>
{item.icon}
</div>

<p className="text-xs uppercase tracking-[0.25em] text-stone-400">
{item.label}
</p>

</motion.div>

))}

</div>

</section>


{/* ================= STRATEGY ================= */}

<section className="py-32 px-6">

<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

<motion.div {...reveal}>

<span className="text-[10px] uppercase tracking-[0.4em] text-emerald-600 font-bold">
Enterprise Strategy
</span>

<h2 className="text-5xl font-serif font-light mt-6 mb-8 leading-tight">
Wellness for a <span className="italic text-stone-400">Performance Culture</span>
</h2>

<p className="text-lg text-stone-500 leading-relaxed mb-10">
Our systems integrate seamlessly into corporate ecosystems —
combining breath science, neuroscience and movement
to optimize cognitive and physiological performance.
</p>

<div className="flex gap-8 text-sm text-stone-500">

<div className="flex items-center gap-2">
<Briefcase size={18} className="text-emerald-600"/>
Onsite
</div>

<div className="flex items-center gap-2">
<Globe size={18} className="text-emerald-600"/>
Virtual
</div>

<div className="flex items-center gap-2">
<Users size={18} className="text-emerald-600"/>
Hybrid
</div>

</div>

</motion.div>


<motion.div
{...reveal}
className="relative rounded-[3rem] overflow-hidden shadow-xl"
>

<img
src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400"
className="w-full h-[500px] object-cover"
/>

</motion.div>

</div>

</section>


{/* ================= BENEFITS GRID ================= */}

<section className="py-32 bg-white">

<div className="max-w-6xl mx-auto px-6">

<h3 className="text-4xl font-serif font-light text-center mb-20">
Organizational Impact
</h3>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

{benefits.map((item,i)=>(
<motion.div
key={i}
{...reveal}
transition={{delay:i*0.1}}
className="p-10 rounded-[2rem] bg-[#FDFCFB] border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition"
>

<h4 className="text-xl font-medium mb-4">
{item.title}
</h4>

<p className="text-stone-500 text-sm leading-relaxed">
{item.desc}
</p>

</motion.div>
))}

</div>

</div>

</section>


{/* ================= IMAGE GRID ================= */}

<section className="py-32 px-6 bg-[#F7F6F3]">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

{[
"https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1200",
"https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200",
"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200",
"https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200"
].map((src,i)=>(
<motion.div
key={i}
{...reveal}
className="rounded-[2rem] overflow-hidden shadow-xl"
>

<img
src={src}
className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
/>

</motion.div>
))}

</div>

</section>


{/* ================= PROGRAM DETAILS ================= */}

<section className="py-32 px-6 bg-white">

<motion.div {...reveal} className="max-w-5xl mx-auto">

<ProgramDetails
title="Corporate Formats"
description="Flexible wellness systems adaptable to enterprise structures."
levels={[
"Weekly Corporate Sessions",
"Leadership Retreats",
"Corporate Wellness Days"
]}
/>

</motion.div>

</section>


{/* ================= CTA ================= */}

<section className="py-40 px-6 text-center bg-[#FDFCFB]">

<motion.div {...reveal} className="max-w-3xl mx-auto">

<h3 className="text-5xl font-serif font-light mb-10">
Elevate Your <span className="italic text-stone-400">Human Capital</span>
</h3>

<a
href="https://wa.me/919800000000?text=Hello%20I%20want%20to%20discuss%20corporate%20wellness"
target="_blank"
className="inline-flex items-center gap-4 px-14 py-6 bg-stone-900 text-white rounded-full text-xs tracking-widest uppercase hover:bg-emerald-600 transition"
>

Initiate Partnership
<ArrowUpRight/>

</a>

</motion.div>

</section>


{/* ================= FAQ ================= */}

<section className="py-24 bg-white border-t">

<div className="max-w-4xl mx-auto px-6">

<FAQSection
faqs={[
{
q:"Can this integrate into HR strategy?",
a:"Yes, programs align with corporate wellbeing KPIs."
},
{
q:"Delivery flexibility?",
a:"Onsite, virtual or hybrid sessions are available."
}
]}
/>

</div>

</section>


</main>

)

}

export default CorporateBooking