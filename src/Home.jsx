import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
import Celebration from "./Celebration";
import gsap from "gsap";

export default function Home(prop) {
  const audioRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  const enableAudio = () => {
    // Play audio after user interacts
    audioRef.current
      .play()
      .then(() => {
        prop.setIsAudioEnabled(true);
      })
      .catch((error) => {
        console.error("Audio playback failed:", error);
      });
  };

  useEffect(() => {
    if (prop.isAudioEnabled) {
      audioRef.current.play();
    }
  }, [prop.isAudioEnabled]);

  useEffect(() => {
    gsap.fromTo(
      ".hidepage",
      { display: "flex" },
      { display: "none", duration: 5 }
    );
    setTimeout(() => {
      gsap.fromTo(
        ".showpage",
        { display: "none" },
        { display: "flex", duration: 5 }
      );
    }, 5000);
  }, [showVideo]);

  return (
    <>
      <div
        className={`${
          showVideo
            ? "hidepage"
            : "flex items-center w-full justify-start px-4 flex-col gap-10 z-40 h-full absolute top-0 left-0"
        } `}
      >
        <video
          autoPlay
          loop
          muted
          className="w-full absolute h-[100vh] object-cover"
        >
          <source src="./7565825-hd_2048_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <audio
          ref={audioRef}
          src="./Asake - My Heart (Official Visualizer).mp3"
          preload="auto"
        />
        <div
          className={`bg-purple-400 rounded-3xl shadow-lg ${
            showVideo ? "hidden" : "flex"
          }`}
        >
          <LazyLoadImage
            alt="Lazy Image"
            src={`${"./giphy (1).webp"}`}
            className="rounded-3xl h-[250px] w-[100vw] mt-8 relative z- object-cover"
          />
        </div>
        <div>
          <p
            className={`${
              showVideo ? "hidden" : "flex"
            } font-cursive font-bold text-center  leading-[60px] tracking-wide  text-3xl btn-shine relative z-30`}
          >
            Hey, Temiloluwa Glory Osinuga, will you be my girlfriend?
          </p>
        </div>
        {!prop.isAudioEnabled && (
          <div className="audio-overlay fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 text-white flex justify-center items-center z-[9999] ">
            <button
              onClick={enableAudio}
              className="px-5 py-2.5 bg-purple-500 text-white border-none rounded cursor-pointer flex items-center gap-3"
            >
              <span className="block text-xl font-bold tracking-wide">
                Enable Audio
              </span>
              <FaVolumeUp className="-mt-[-4px] font-bold text-2xl" />
            </button>
          </div>
        )}

        <div
          className={`${
            showVideo ? "hidden" : "flex"
          } flex flex-col gap-3 -mt-4`}
        >
          <Button
            text="Yes"
            className="relative z-30"
            isAudioEnabled={prop.isAudioEnabled}
            onClick={() => {
              setShowVideo((is) => !is);
            }}
          />
          <Button
            text="NO, I'm Sorry"
            className="animated-btn absolute top-0 left-0"
            isAudioEnabled={prop.isAudioEnabled}
          />
          <Button
            text="NO, I'm Sorry"
            className={`${prop.isAudioEnabled ? "hide" : ""} relative z-30`}
            isAudioEnabled={prop.isAudioEnabled}
          />
        </div>

        <div
          className={`flex items-start justify-center ${
            showVideo ? "hidepage " : "hidden"
          }`}
        >
          <Celebration className="absolute z-[999999] left-[50%] translate-x-[-50%]" />
          <div className="flex gap-16 flex-col absolute top-[30px] justify-center items-center">
            <Button
              className="wrap z-[999999]  tracking-wide w-[80vw]"
              text="I Love You or do I?"
            />

            <LazyLoadImage
              alt="Lazy Image"
              src={`${"./200.webp"}`}
              className="rounded-3xl h-[200px] object-cover "
            />
          </div>
        </div>
      </div>

      <div
        className={`hidden ${
          showVideo ? "showpage items-start justify-center" : "hidden"
        }`}
      >
        <Button
          className="wrap absolute z-50 top-[20px] tracking-wide"
          text="My girlfriend y'all "
        />
        <Celebration className=" z-[9] left-[50%] translate-x-[-50%]" />
        <video
          autoPlay
          loop
          muted
          className="w-full absolute h-[100vh] object-cover"
        >
          <source src="./IMG_2813.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
