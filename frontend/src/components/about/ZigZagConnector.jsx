const ZigZagConnector = ({ direction = "right" }) => {
  const isRight = direction === "right";

  return (
    <svg
      width="160"
      height="220"
      viewBox="0 0 160 220"
      className="mx-auto"
      fill="none"
    >
      <path
        d={
          isRight
            ? "M30 20 H130 V200 H60"
            : "M130 20 H30 V200 H100"
        }
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={
          isRight
            ? "M60 200 L70 190 M60 200 L70 210"
            : "M100 200 L90 190 M100 200 L90 210"
        }
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ZigZagConnector;