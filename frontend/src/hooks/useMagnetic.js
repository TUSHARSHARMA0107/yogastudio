export const magneticEffect = (element, strength = 0.35) => {
  element.addEventListener("mousemove", (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * strength}px, ${
      y * strength
    }px)`;
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = "translate(0px, 0px)";
  });
};