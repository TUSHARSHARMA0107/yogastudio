import { CheckCircle2, Wind, MapPin, Shield, Layers, Users } from "lucide-react";

export default function Facilities() {

  const facilities = [
    {
      title: "Spacious Practice Hall",
      img: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200",
      icon: <Layers size={20} />,
      size: "md:col-span-2",
    },
    {
      title: "Meditation Corner",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200",
      icon: <CheckCircle2 size={20} />,
      size: "md:col-span-1",
    },
    {
      title: "Clean Changing Rooms",
      img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200",
      icon: <Users size={20} />,
      size: "md:col-span-1",
    },
    {
      title: "Sanitized Equipment",
      img: "https://images.unsplash.com/photo-1558611848-73f7eb4001ab?q=80&w=1200",
      icon: <Shield size={20} />,
      size: "md:col-span-1",
    },
    {
      title: "Natural Ventilation",
      img: "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1200",
      icon: <Wind size={20} />,
      size: "md:col-span-1",
    },
    {
      title: "Parking Facility",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200",
      icon: <MapPin size={20} />,
      size: "md:col-span-3",
    },
  ];

  return (
    <section className="relative bg-[#FDFCFB] py-32 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2000"
          alt="background"
          className="w-full h-full object-cover opacity-[0.05]"
        />
      </div>

      {/* Ambient blur */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-stone-100 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-50 rounded-full blur-[100px]" />

      <div className="relative z-10">

        {/* HERO */}
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2000"
            alt="Facilities"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center space-y-6 px-6">

            <span className="text-white/70 uppercase tracking-[0.4em] text-[10px] font-bold">
              Studio Environment
            </span>

            <h1 className="text-5xl md:text-7xl text-white font-serif tracking-tight">

              Designed for{" "}
              <span className="italic font-light text-white/70">
                Balance
              </span>

            </h1>

            <p className="text-white/70 max-w-xl mx-auto leading-relaxed">
              Every space in our studio is intentionally designed to create
              a calm environment where movement, breath and mindfulness
              naturally come together.
            </p>

          </div>

        </div>


        {/* GRID */}
        <div className="max-w-7xl mx-auto py-28 px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">

            {facilities.map((item, index) => (

              <div
                key={index}
                className={`group relative rounded-[32px] overflow-hidden bg-stone-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-700 hover:shadow-xl ${item.size}`}
              >

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-1000 group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-8">

                  <div className="flex items-center gap-3 text-white/90 mb-2">

                    <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg">
                      {item.icon}
                    </div>

                  </div>

                  <h3 className="text-xl font-serif text-white tracking-wide">
                    {item.title}
                  </h3>

                </div>

              </div>

            ))}

          </div>


          {/* STATS */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-stone-200 pt-16">

            {[
              { label: "24/7", sub: "Security Monitoring" },
              { label: "100%", sub: "Natural Ventilation" },
              { label: "Premium", sub: "Yoga Equipment" },
              { label: "Pure", sub: "Clean Air Quality" },
            ].map((stat, i) => (

              <div key={i} className="text-center md:text-left space-y-1">

                <p className="text-2xl font-serif font-light text-stone-900">
                  {stat.label}
                </p>

                <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
                  {stat.sub}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}