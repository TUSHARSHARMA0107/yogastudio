import { Heart, Sun, Sparkles } from "lucide-react";

export default function Happiness() {
  return (
    <div className="bg-[#FCFBF7] min-h-screen font-serif selection:bg-amber-100">
      
      {/* Cinematic Hero */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000"
          alt="Happiness"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        
        {/* Elegant Glass Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex flex-col items-center justify-center text-center px-6">
          <div className="mb-6 flex items-center gap-4 animate-fade-in">
            <div className="h-px w-12 bg-white/60" />
            <span className="text-white/90 uppercase tracking-[0.5em] text-xs font-sans">
              The Joy of Being
            </span>
            <div className="h-px w-12 bg-white/60" />
          </div>

          <h1 className="text-6xl md:text-8xl text-white font-light tracking-tighter leading-tight drop-shadow-sm">
            A Space of <span className="italic">Happiness</span>
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#FCFBF7] to-transparent" />
      </div>

      {/* Narrative Section */}
      <div className="max-w-7xl mx-auto py-32 px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -top-12 -left-12 w-72 h-72 bg-amber-100/50 rounded-full blur-3xl animate-pulse" />
            
            <div className="relative z-10 p-4 bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[2.5rem]">
              <img
                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1200"
                alt="Yoga Happiness"
                className="rounded-[2rem] w-full h-[500px] object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#8b6f47] text-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <Sun className="text-amber-300 animate-spin-slow" size={32} />
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-80 font-sans">
                    Vibe
                  </p>
                  <p className="text-lg font-medium">Pure Energy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-6 space-y-10 lg:pl-12">
            <header className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-sans font-bold uppercase tracking-tighter">
                <Sparkles size={14} />
                <span>Community Spirit</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-[#2C2C2C] leading-[1.2]">
                Where Smiles <br />
                Become{" "}
                <span className="text-[#8b6f47] italic font-medium underline decoration-amber-200 underline-offset-8">
                  Connections
                </span>
              </h2>
            </header>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-xl font-light italic pl-8 border-l-4 border-amber-200">
                "Happiness is not a destination, it is the very path we walk
                together at Sohum Yogkul."
              </p>

              <p className="text-[#4A4A4A] leading-loose text-lg font-sans font-light">
                At Sohum Yogkul, happiness flows naturally. Our community
                creates an atmosphere filled with warmth, laughter, and
                connection. Every breath taken here brings a sense of renewal
                and joy.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <Heart className="text-[#8b6f47]" size={24} />
                <h4 className="font-sans font-bold text-sm uppercase tracking-widest">
                  Warmth
                </h4>
                <p className="text-sm text-gray-500">
                  A welcoming heart in every session.
                </p>
              </div>

              <div className="space-y-2">
                <Sun className="text-[#8b6f47]" size={24} />
                <h4 className="font-sans font-bold text-sm uppercase tracking-widest">
                  Growth
                </h4>
                <p className="text-sm text-gray-500">
                  Expanding joy through movement.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 10s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  );
}