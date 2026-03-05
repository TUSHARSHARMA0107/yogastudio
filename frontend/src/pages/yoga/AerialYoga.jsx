import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Wind, Cloud, Anchor, Sun, ArrowRight } from "lucide-react";

const AerialYoga = () => {

  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress,[0.3,0.6],[0,-80]);

  const benefits = [
    {
      title:"Spinal Decompression",
      desc:"Zero-compression inversions gently lengthen the spine.",
      icon:<Wind size={20}/>
    },
    {
      title:"Deep Core Strength",
      desc:"Suspension activates stabilizing muscles.",
      icon:<Anchor size={20}/>
    },
    {
      title:"Enhanced Flexibility",
      desc:"Silks allow deeper stretches safely.",
      icon:<Cloud size={20}/>
    },
    {
      title:"Nervous System Reset",
      desc:"Floating postures calm the mind.",
      icon:<Sun size={20}/>
    }
  ]

  return (
    <main className="bg-[#FDFCFB] text-stone-900 overflow-x-hidden">

{/* ================= HERO ================= */}

<section className="relative h-[90vh] flex items-center justify-center overflow-hidden">

<video
autoPlay
loop
muted
playsInline
className="absolute inset-0 w-full h-full object-cover"
>
<source src="https://cdn.coverr.co/videos/coverr-aerial-yoga-practice-1603/1080p.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-black/40"/>

<div className="relative z-10 text-center px-6 text-white">

<span className="text-[10px] tracking-[0.4em] uppercase text-white/70">
Aerial Yoga
</span>

<h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.05]">
Elevate <br/>
<span className="italic text-stone-200">Your Practice</span>
</h1>

<p className="mt-6 text-white/80 max-w-xl mx-auto text-lg">
Defy gravity. Decompress the spine. Discover movement in a new dimension.
</p>

<a
href="https://wa.me/919800000000?text=Hi%20I%20want%20to%20book%20an%20Aerial%20Yoga%20session"
className="inline-flex items-center gap-3 mt-10 px-10 py-4 bg-white text-black rounded-full text-sm tracking-widest uppercase"
>
Book on WhatsApp
<ArrowRight size={16}/>
</a>

</div>

</section>


{/* ================= PHILOSOPHY ================= */}

<section className="py-32">

<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

<motion.div>

<span className="text-[10px] tracking-[0.4em] uppercase text-stone-400">
The Philosophy
</span>

<h2 className="mt-6 text-4xl md:text-6xl font-serif font-light">
A dance between <br/>
<span className="italic text-stone-400">Gravity & Grace</span>
</h2>

<p className="mt-8 text-stone-500 text-lg max-w-xl">
Aerial Yoga blends traditional yoga with suspended silk hammocks,
creating a unique environment where the body can stretch,
decompress and move freely.
</p>

</motion.div>

<motion.div style={{y:yRange}}>

<div className="rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5]">

<img
src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1400"
className="w-full h-full object-cover"
/>

</div>

</motion.div>

</div>

</section>


{/* ================= BENEFITS ================= */}

<section className="py-32 bg-white">

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

{benefits.map((item,i)=>(
<div
key={i}
className="p-10 border border-stone-100 rounded-[2rem] hover:shadow-xl transition"
>

<div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center mb-6">
{item.icon}
</div>

<h3 className="text-lg font-medium mb-3">
{item.title}
</h3>

<p className="text-stone-500 text-sm">
{item.desc}
</p>

</div>
))}

</div>

</div>

</section>


{/* ================= PROGRAM SECTION ================= */}

<section className="relative py-40 overflow-hidden">

<div className="absolute inset-0">

<img
src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600"
className="w-full h-full object-cover"
/>

</div>

<div className="absolute inset-0 bg-black/60"/>

<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center text-white">

<div>

<h2 className="text-4xl md:text-6xl font-serif mb-8">
Studio Programs
</h2>

<ul className="space-y-4 text-white/80 text-lg">

<li>• Aerial Foundations (Beginner)</li>
<li>• Aerial Flow & Strength</li>
<li>• Restorative Floating Meditation</li>

</ul>

</div>

<div className="rounded-[2rem] overflow-hidden shadow-2xl">

<img
src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1400"
className="w-full h-full object-cover"
/>

</div>

</div>

</section>


{/* ================= GALLERY ================= */}

<section className="py-32 bg-white">

<div className="max-w-6xl mx-auto px-6 text-center mb-16">

<h2 className="text-4xl md:text-5xl font-serif font-light">
Studio Gallery
</h2>

</div>

<div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">

{[
"https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200",
"https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1200",
"https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200",
"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200",
"https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200",
"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200"
].map((img,i)=>(
<div key={i} className="aspect-[4/5] rounded-[2rem] overflow-hidden">
<img src={img} className="w-full h-full object-cover"/>
</div>
))}

</div>

</section>


{/* ================= CTA ================= */}

<section className="py-40 text-center">

<h2 className="text-5xl md:text-7xl font-serif font-light">
Ready to <span className="italic text-stone-400">Fly?</span>
</h2>

<a
href="https://wa.me/919800000000?text=Hi%20I%20want%20to%20book%20an%20Aerial%20Yoga%20session"
className="inline-flex items-center gap-3 mt-10 px-12 py-5 bg-stone-900 text-white rounded-full text-sm tracking-widest uppercase"
>
Book Your Hammock
<ArrowRight size={16}/>
</a>

</section>

</main>
  );
};

export default AerialYoga;