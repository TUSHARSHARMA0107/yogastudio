import { motion } from "framer-motion";

const ProgramDetails = ({ title, description, levels }) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="w-full py-24 bg-[#FCFAF8]">

      <div className="w-full px-6">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif italic text-stone-900 mb-6"
          >
            {title}
          </motion.h2>

          <div className="w-12 h-[1px] bg-stone-400 mx-auto mb-6" />

          <p className="text-stone-500 text-lg font-light">
            {description}
          </p>

        </div>

        {/* Responsive Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid gap-10 
          grid-cols-[repeat(auto-fit,minmax(260px,1fr))]"
        >

          {levels.map((level, i) => (

            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-3xl bg-white border border-stone-100
              hover:shadow-lg transition-all duration-500"
            >

              <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 block mb-4">
                Phase 0{i + 1}
              </span>

              <h4 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">
                {level}
              </h4>

              <p className="text-stone-500 text-sm leading-relaxed">
                A structured progression designed for safe strength,
                precision control, and long-term confidence.
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default ProgramDetails;
