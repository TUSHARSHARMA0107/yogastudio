import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SampleNoticePopup() {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const closed = sessionStorage.getItem("samplePopupClosed");

    if (!closed) {
      setShowPopup(true);
    }
  }, []);

  const closePopup = () => {
    sessionStorage.setItem("samplePopupClosed", "true");
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >

          <motion.div
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-8 text-center"
          >

            {/* Message */}

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              You might find colour, theme and content variations across the
              website. This is a sample website used to test different design
              combinations. Full images and videos may not be attached yet.
            </p>

            {/* Cancel Button */}

            <button
              onClick={closePopup}
              className="px-6 py-2 bg-black text-white rounded-full hover:scale-105 transition"
            >
              Cancel
            </button>

          </motion.div>

        </motion.div>

      )}
    </AnimatePresence>
  );
}