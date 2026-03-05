import React from "react";
import { motion } from "framer-motion";
import VideoHero from "../../components/program/VideoHero";
import ImageCarousel from "../../components/program/ImageCarousel";
import ProgramDetails from "../../components/program/ProgramDetails";
import FAQSection from "../../components/program/FAQSection";

const Meditation = () => {

const meditationFAQ = [
{
q:"Is meditation suitable for beginners?",
a:"Yes. Sessions are guided slowly and require no prior experience."
},
{
q:"How long is a session?",
a:"Sessions typically last between 30 and 45 minutes."
},
{
q:"Is meditation religious?",
a:"No. Our approach is secular, mindfulness-based and accessible to everyone."
}
]

const reveal = {
initial:{opacity:0,y:30},
whileInView:{opacity:1,y:0},
viewport:{once:true},
transition:{duration:0.8}
}

return (

<main className="bg-[#FDFCFB] text-stone-900 overflow-x-hidden">

{/* ================= HERO ================= */}

<VideoHero
title="Guided Meditation"
subtitle="A quiet sanctuary for awareness, clarity and inner balance."
videoSrc="https://cdn.coverr.co/videos/coverr-meditating-on-a-rock-1564/1080p.mp4"
whatsappMessage="Hello I want to book a Meditation session"
/>


{/* ================= INTRO ================= */}

<section className="py-32 px-6">

<motion.div
{...reveal}
className="max-w-3xl mx-auto text-center bg-white border border-stone-100 rounded-[3rem] p-16 shadow-sm"
>

<span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 block mb-8">
Presence
</span>

<h2 className="text-4xl md:text-5xl font-serif font-light mb-8">
Meditation for the <span className="italic text-stone-400">Modern Mind</span>
</h2>

<p className="text-stone-500 text-lg leading-relaxed">
Our sessions help you slow down without disconnecting from the world.
Through breath awareness and gentle observation,
you learn to rest the mind while remaining fully present.
</p>

</motion.div>

</section>


{/* ================= BREATH EXPERIENCE ================= */}

<section className="py-28 bg-white rounded-[3rem] mx-4 md:mx-10 border border-stone-100">

<div className="max-w-md mx-auto text-center space-y-16">

<div className="relative w-64 h-64 mx-auto flex items-center justify-center">

<motion.div
animate={{scale:[1,1.3,1],opacity:[0.4,0.1,0.4]}}
transition={{duration:8,repeat:Infinity}}
className="absolute inset-0 border border-stone-200 rounded-full"
/>

<motion.div
animate={{scale:[1,1.15,1]}}
transition={{duration:8,repeat:Infinity}}
className="w-40 h-40 rounded-full bg-stone-100 shadow-inner"
/>

<motion.span
animate={{opacity:[1,0,1]}}
transition={{duration:8,repeat:Infinity}}
className="absolute text-xs tracking-[0.4em] uppercase text-stone-400"
>
Inhale
</motion.span>

</div>

<p className="text-xs tracking-[0.3em] uppercase text-stone-300">
Synchronize Your Breath
</p>

</div>

</section>


{/* ================= PRACTICE STEPS ================= */}

<section className="py-40 px-6">

<div className="max-w-4xl mx-auto">

<motion.div {...reveal} className="text-center mb-24">

<span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 block mb-6">
The Practice
</span>

<h2 className="text-4xl md:text-6xl font-serif font-light">
A Simple Meditation Method
</h2>

</motion.div>

<div className="space-y-24">

{[
{
step:"01",
title:"Sit Comfortably",
desc:"Sit upright on a chair or cushion and allow the body to relax naturally."
},
{
step:"02",
title:"Observe the Breath",
desc:"Notice the natural rhythm of your breathing without forcing or controlling it."
},
{
step:"03",
title:"Return with Kindness",
desc:"When the mind wanders, gently bring attention back to the breath."
}
].map((item,i)=>(
<motion.div key={i} {...reveal} className="text-center">

<span className="text-[10px] tracking-[0.4em] text-stone-300 block mb-4">
PHASE {item.step}
</span>

<h3 className="text-2xl font-medium mb-4">
{item.title}
</h3>

<p className="text-stone-500 max-w-xl mx-auto">
{item.desc}
</p>

</motion.div>
))}

</div>

</div>

</section>


{/* ================= PROGRAM DETAILS ================= */}

<section className="py-32 bg-stone-900 text-white rounded-[3rem] mx-4 md:mx-10">

<motion.div {...reveal} className="max-w-4xl mx-auto px-6">

<ProgramDetails
title="Session Structure"
description="Each meditation session unfolds gradually allowing the mind and body to settle naturally."
levels={[
"Breath Awareness",
"Body Scan Relaxation",
"Silent Mindfulness Sitting"
]}
/>

</motion.div>

</section>


{/* ================= GALLERY ================= */}

<section className="py-32 bg-white">

<motion.div {...reveal} className="text-center mb-20">

<span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 block mb-4">
Atmosphere
</span>

<h2 className="text-3xl font-serif italic">
The Visual Silence
</h2>

</motion.div>

<div className="max-w-6xl mx-auto px-6">

<div className="rounded-[3rem] overflow-hidden shadow-xl bg-white p-2">

<ImageCarousel
images={[
"https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200",
"https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1200",
"https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200",
"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200",
"https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200"
]}
/>

</div>

</div>

</section>


{/* ================= FAQ ================= */}

<section className="py-32">

<motion.div {...reveal} className="max-w-3xl mx-auto px-6">

<FAQSection faqs={meditationFAQ}/>

</motion.div>

</section>


{/* ================= CTA ================= */}

<section className="py-40 text-center">

<motion.div {...reveal} className="max-w-3xl mx-auto px-6">

<h3 className="text-5xl md:text-7xl font-serif font-light mb-10">
Find Your <span className="italic text-stone-400">Stillness</span>
</h3>

<a
href="https://wa.me/919800000000?text=Hello%20I%20want%20to%20book%20a%20meditation%20session"
target="_blank"
className="inline-flex items-center px-12 py-5 bg-stone-900 text-white rounded-full text-xs tracking-widest uppercase hover:bg-stone-700 transition"
>
Book Meditation Session
</a>

</motion.div>

</section>

</main>

)

}

export default Meditation