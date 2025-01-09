import { useEffect } from "react";
import { gsap } from "gsap";

const Button = (prop) => {
  useEffect(() => {
    gsap.set(".animated-btn", { x: 0, y: 0, opacity: 0 });

    const randomPosition = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Get button dimensions
      const button = document.querySelector(".animated-btn");
      const buttonRect = button.getBoundingClientRect();
      const buttonWidth = buttonRect.width;
      const buttonHeight = buttonRect.height;

      // Calculate max x and y positions to keep the button fully visible
      const maxX = viewportWidth - buttonWidth;
      const maxY = viewportHeight - buttonHeight;

      // Generate random positions within the allowed range
      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      gsap.to(".animated-btn", {
        x,
        y,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        onComplete: () => setTimeout(randomPosition, 500),
      });
    };

    if (prop.isAudioEnabled) setTimeout(randomPosition, 2000);

    setTimeout(() => {
      gsap.fromTo(".hide", { opacity: 1 }, { opacity: 0, duration: 1 });
    }, 1500);
  }, [prop.isAudioEnabled]);

  return (
    <button
      className={`px-9 py-4 text-white font-semibold text-xl bg-purple-500 rounded-full border-0 shadow-2xl  font-jost tracking-wide ${prop.className} text-nowrap`}
      onClick={prop.onClick}
    >
      {prop.text}
    </button>
  );
};

export default Button;
