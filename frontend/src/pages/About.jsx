import { journeySteps } from "../components/about/about";
import ZigZagConnector from "../components/about/ZigZagConnector";

export default function AboutTrainerPage() {
  return (
    <main
      className="text-neutral-900"
      style={{
        backgroundImage: "url('/textures/subtle-paper.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "220px",
      }}
    >
      {/* HERO */}
      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            A Journey of Practice
          </h1>
          <p className="text-neutral-600 text-lg">
            From study to space — a path shaped with intention.
          </p>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-48">
          {journeySteps.slice(0, -1).map((step, index) => {
            const next = journeySteps[index + 1];
            const direction = index % 2 === 0 ? "right" : "left";

            return (
              <div key={index}>
                {/* FROM */}
                <div className="flex flex-col md:flex-row items-center gap-16">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full md:w-1/2 h-[340px] object-cover"
                  />
                  <div className="md:w-1/2">
                    <h2 className="text-3xl font-light mb-4">
                      {step.title}
                    </h2>
                    <p className="text-neutral-700 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>

                {/* ARROW */}
                <div className="my-24">
                  <ZigZagConnector direction={direction} />
                </div>

                {/* TO */}
                <div
                  className={`flex flex-col md:flex-row items-center gap-16 ${
                    direction === "left" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <img
                    src={next.image}
                    alt={next.title}
                    className="w-full md:w-1/2 h-[340px] object-cover"
                  />
                  <div className="md:w-1/2">
                    <h2 className="text-3xl font-light mb-4">
                      {next.title}
                    </h2>
                    <p className="text-neutral-700 leading-relaxed">
                      {next.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}