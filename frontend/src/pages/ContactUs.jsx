import React from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube, Facebook, ArrowRight } from "lucide-react";

import JoinUsCluster from "../components/Contact/JoinUsCluster";
import AvailableTime from "../components/Contact/AvalibleTime";
import BookDemo from "../components/Contact/BookingClass";

export default function Contact() {

const fadeInUp = {
initial:{opacity:0,y:30},
whileInView:{opacity:1,y:0},
viewport:{once:true},
transition:{duration:0.8}
}

return(

<main className="bg-[#FDFCFB] text-stone-900 overflow-x-hidden">


{/* HERO */}

<section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-24 pt-24">

<motion.span
initial={{opacity:0}}
animate={{opacity:1}}
className="text-stone-400 uppercase tracking-[0.4em] text-[10px] mb-6"
>

Contact Sanctuary

</motion.span>


<h1 className="text-[10vw] md:text-[110px] font-serif leading-[0.9] tracking-tight mb-12">

Get in <br/>

<span className="italic font-light text-stone-400">
Touch
</span>

</h1>


<div className="max-w-xl border-l border-stone-200 pl-8">

<p className="text-lg text-stone-500 leading-relaxed">

Reach out for private sessions, studio inquiries, or curated wellness experiences in Shimla.

</p>

</div>

</section>



{/* JOIN US CLUSTER */}

<JoinUsCluster/>


{/* AVAILABLE TIME */}

<AvailableTime/>



{/* CONTACT GRID */}

<section className="py-32 px-6 md:px-24 border-t border-stone-100">

<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">


{/* LEFT CONTACT INFO */}

<div className="lg:col-span-5 space-y-16">


<motion.div {...fadeInUp}>

<h3 className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-6">

Direct Contact

</h3>


<div className="space-y-6">

<a
href="mailto:hello@sohumyogkul.com"
className="block text-2xl font-serif font-light hover:text-stone-400 transition"
>

hello@sohumyogkul.com

</a>


<a
href="tel:+919800000000"
className="block text-2xl font-serif font-light hover:text-stone-400 transition"
>

+91 98XXX XXXXX

</a>

</div>

</motion.div>



<motion.div {...fadeInUp}>

<h3 className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-6">

Location

</h3>

<p className="text-lg text-stone-500 leading-relaxed">

Near Heritage Zone  
Mall Road, Shimla  
Himachal Pradesh 171001

</p>

</motion.div>



<motion.div {...fadeInUp} className="flex gap-6">

{[Instagram,Youtube,Facebook].map((Icon,i)=>(

<a
key={i}
href="#"
className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 hover:bg-stone-900 hover:text-white transition"
>

<Icon size={16}/>

</a>

))}

</motion.div>

</div>



{/* RIGHT FORM */}

<motion.div
{...fadeInUp}
className="lg:col-span-7 bg-white p-12 md:p-16 border border-stone-100 rounded-[28px] shadow-sm"
>

<form className="space-y-12">


<div className="relative">

<label className="text-[9px] uppercase tracking-[0.3em] text-stone-400 absolute -top-6">

Name

</label>

<input
type="text"
placeholder="Your full name"
className="w-full py-4 border-b border-stone-200 focus:border-stone-900 outline-none bg-transparent"
/>

</div>



<div className="relative">

<label className="text-[9px] uppercase tracking-[0.3em] text-stone-400 absolute -top-6">

Email

</label>

<input
type="email"
placeholder="email@example.com"
className="w-full py-4 border-b border-stone-200 focus:border-stone-900 outline-none bg-transparent"
/>

</div>



<div className="relative">

<label className="text-[9px] uppercase tracking-[0.3em] text-stone-400 absolute -top-6">

Message

</label>

<textarea
rows="3"
placeholder="Tell us briefly about your inquiry"
className="w-full py-4 border-b border-stone-200 focus:border-stone-900 outline-none bg-transparent resize-none"
/>

</div>



<motion.button
whileHover={{x:8}}
className="flex items-center gap-4 uppercase tracking-[0.3em] text-[11px] font-bold text-stone-900"
>

Send Inquiry

<ArrowRight size={16}/>

</motion.button>

</form>

</motion.div>

</div>

</section>



{/* BOOK DEMO */}

<BookDemo/>



{/* MAP */}

<section className="px-6 md:px-24 pb-32">

<motion.div
{...fadeInUp}
className="max-w-7xl mx-auto rounded-[28px] overflow-hidden border border-stone-100 shadow-sm"
>

<iframe
title="Google Map"
src="https://www.google.com/maps?q=Shimla+Mall+Road&output=embed"
className="w-full h-[500px]"
loading="lazy"
/>

</motion.div>


<div className="max-w-7xl mx-auto mt-6 flex justify-between text-sm text-stone-400">

<span>Visit Us</span>

<a
href="https://maps.google.com?q=Shimla+Mall+Road"
target="_blank"
className="hover:text-stone-900 transition"
>

Open in Google Maps →

</a>

</div>

</section>


</main>

)

}