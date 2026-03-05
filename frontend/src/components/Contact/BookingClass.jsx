// const ownerNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
import { useState } from "react";

export default function BookDemo() {

const [form,setForm] = useState({
name:"",
phone:"",
batch:"",
day:"",
time:""
})

const ownerNumber = import.meta.env.VITE_WHATSAPP_NUMBER

const batches = {
Morning:["6:00 AM - 7:00 AM","7:00 AM - 8:00 AM"],
Evening:["5:00 PM - 6:00 PM","6:00 PM - 7:00 PM"]
}

const days = ["Monday","Tuesday","Wednesday","Thursday","Friday"]

const handleBooking = () => {

if(!form.name || !form.phone || !form.batch || !form.day || !form.time){
alert("Please fill all details")
return
}

const message = `🌿 New Demo Class Booking
👤 Name: ${form.name}
📞 Phone: ${form.phone}
🕒 Batch: ${form.batch}
📅 Day: ${form.day}
⏰ Time: ${form.time}

Please confirm my demo class.`

const encodedMessage = encodeURIComponent(message)

const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodedMessage}`

window.open(whatsappURL,"_blank")

}

return(

<section className="py-32 bg-[#FDFCFB] px-6">

<div className="max-w-4xl mx-auto">

{/* HEADER */}

<div className="text-center mb-16">

<span className="text-[10px] uppercase tracking-[0.4em] text-stone-400">

Demo Class

</span>

<h2 className="text-4xl md:text-5xl font-serif font-light mt-6">

Book a <span className="italic text-stone-400">Trial Session</span>

</h2>

<p className="text-stone-500 mt-4 max-w-lg mx-auto">

Experience our yoga practice and discover how mindful movement,
breath and awareness can transform your wellbeing.

</p>

</div>



{/* FORM CARD */}

<div className="bg-white border border-stone-100 rounded-[32px] p-10 md:p-14 shadow-sm">

<div className="grid md:grid-cols-2 gap-8">

{/* NAME */}

<div>

<label className="text-[10px] uppercase tracking-[0.3em] text-stone-400 block mb-3">

Full Name

</label>

<input
type="text"
placeholder="Your name"
className="w-full py-4 border-b border-stone-200 focus:border-stone-900 outline-none bg-transparent"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

</div>



{/* PHONE */}

<div>

<label className="text-[10px] uppercase tracking-[0.3em] text-stone-400 block mb-3">

Phone Number

</label>

<input
type="tel"
placeholder="+91 00000 00000"
className="w-full py-4 border-b border-stone-200 focus:border-stone-900 outline-none bg-transparent"
onChange={(e)=>setForm({...form,phone:e.target.value})}
/>

</div>



{/* DAY */}

<div>

<label className="text-[10px] uppercase tracking-[0.3em] text-stone-400 block mb-3">

Select Day

</label>

<select
className="w-full py-4 border-b border-stone-200 focus:border-stone-900 outline-none bg-transparent"
onChange={(e)=>setForm({...form,day:e.target.value})}
>

<option value="">Choose a day</option>

{days.map((day)=>(
<option key={day} value={day}>{day}</option>
))}

</select>

</div>



{/* BATCH */}

<div>

<label className="text-[10px] uppercase tracking-[0.3em] text-stone-400 block mb-3">

Batch

</label>

<select
className="w-full py-4 border-b border-stone-200 focus:border-stone-900 outline-none bg-transparent"
onChange={(e)=>setForm({...form,batch:e.target.value,time:""})}
>

<option value="">Select Batch</option>

<option value="Morning">Morning</option>
<option value="Evening">Evening</option>

</select>

</div>



{/* TIME */}

<div className="md:col-span-2">

<label className="text-[10px] uppercase tracking-[0.3em] text-stone-400 block mb-3">

Preferred Time

</label>

<select
disabled={!form.batch}
className="w-full py-4 border-b border-stone-200 focus:border-stone-900 outline-none bg-transparent disabled:text-stone-300"
onChange={(e)=>setForm({...form,time:e.target.value})}
>

<option value="">Select Time</option>

{form.batch && batches[form.batch].map((t)=>(
<option key={t} value={t}>{t}</option>
))}

</select>

</div>

</div>



{/* CTA */}

<div className="text-center mt-14">

<button
onClick={handleBooking}
className="inline-flex items-center px-14 py-5 bg-stone-900 text-white rounded-full text-xs uppercase tracking-[0.4em] hover:bg-stone-700 transition"
>

Book via WhatsApp

</button>

<p className="text-xs text-stone-400 mt-6">

Confirmation will be sent on WhatsApp.

</p>

</div>

</div>

</div>

</section>

)

}