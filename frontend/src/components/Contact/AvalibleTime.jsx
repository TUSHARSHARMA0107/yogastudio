export default function AvailableTime() {
  const schedule = {
    Morning: {
      tagline: "Start your day with clarity",
      time: "6:00 AM – 8:00 AM",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      color: "emerald"
    },
    Evening: {
      tagline: "Unwind and restore balance",
      time: "5:00 PM – 7:00 PM",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      color: "amber"
    },
  };

  return (
    <section className="py-24 bg-[#fcfcfb] px-6 relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-slate-200" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Schedule</span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mt-4">
            Available <span className="font-serif italic">Time Slots</span>
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {Object.entries(schedule).map(([batch, details]) => (
            <div
              key={batch}
              className="group relative bg-white border border-slate-100 rounded-[2rem] p-8 md:p-12 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2"
            >
              {/* Subtle Batch Indicator */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-emerald-600 font-medium text-sm mb-1">{details.tagline}</p>
                  <h3 className="text-3xl font-semibold text-slate-800">
                    {batch} <span className="font-light text-slate-400">Batch</span>
                  </h3>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-emerald-50 transition-colors">
                  {batch === "Morning" ? (
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728L5.636 5.636" /></svg>
                  ) : (
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                  )}
                </div>
              </div>

              {/* Time Display */}
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-mono tracking-tight text-slate-700">{details.time.split(' – ')[0]}</span>
                <span className="text-slate-300 text-xl font-light">to</span>
                <span className="text-4xl font-mono tracking-tight text-slate-700">{details.time.split(' – ')[1]}</span>
              </div>

              {/* Days List */}
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Weekly Schedule</p>
                <div className="flex flex-wrap gap-2">
                  {details.days.map((day) => (
                    <span
                      key={day}
                      className="px-4 py-1.5 rounded-full border border-slate-100 text-slate-600 text-sm font-medium bg-slate-50/50 group-hover:border-emerald-100 group-hover:bg-emerald-50/30 transition-colors"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full mt-10 flex items-center justify-between group/btn bg-slate-900 text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-emerald-700">
                <span className="font-semibold">Secure Your Spot</span>
                <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 mt-12 text-sm">
          * Personalized 1-on-1 sessions are available upon request.
        </p>
      </div>
    </section>
  );
}
