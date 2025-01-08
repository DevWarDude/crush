import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
import Celebration from "./Celebration";

export default function Home(prop) {
  const audioRef = useRef(null);

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
  return (
    <div className="flex items-center w-full justify-center pt-5 px-4 flex-col gap-10 relative z-40">
      <audio
        ref={audioRef}
        src="./Asake - My Heart (Official Visualizer).mp3"
        preload="auto"
      />
      <div
        className={`bg-purple-400 rounded-3xl shadow-lg ${
          prop.hideQuestion ? "hidden" : "flex"
        }`}
      >
        <LazyLoadImage
          alt="Lazy Image"
          src={`${"./giphy (1).webp"}`}
          className="rounded-3xl"
        />
      </div>
      <div>
        <p
          className={`${
            prop.hideQuestion ? "hidden" : "flex"
          } font-cursive font-bold text-start  mt-4 leading-[60px] tracking-wide  text-4xl btn-shine `}
        >
          Hey, Temiloluwa Glory Osinuga, will you be my girlfriend
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
          prop.hideQuestion ? "hidden" : "flex"
        } flex flex-col gap-5`}
      >
        <Button
          text="Yes"
          className=""
          isAudioEnabled={prop.isAudioEnabled}
          onClick={() => {
            prop.setHideQuestion((is) => !is);
            console.log(prop.hideQuestion);
          }}
        />
        <Button
          text="NO, I'm Sorry"
          className="animated-btn absolute top-0 left-0"
          isAudioEnabled={prop.isAudioEnabled}
        />
        <Button
          text="NO, I'm Sorry"
          className={`${prop.isAudioEnabled ? "hide" : ""}`}
          isAudioEnabled={prop.isAudioEnabled}
        />
      </div>
      {prop.hideQuestion && (
        <div>
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-[100vh] object-cover z-[99999]"
          >
            {/* <source src="../5076790-hd_1080_1920_30fps.mp4" type="video/mp4" /> */}
            {/* <source src="../7101912-uhd_2560_1440_25fps.mp4" type="video/mp4" /> */}
            <source src="./IMG_2813.MP4" type="video/mp4" />
            {/* <source src="../8195624-uhd_2160_4096_30fps.mp4" type="video/mp4" /> */}
            Your browser does not support the video tag.
          </video>
          <Button
            className="absolute z-[999999] left-[50%] translate-x-[-50%] w-fit tracking-wide"
            text="Temiloluwa, I Love You"
          />
          <Celebration className="absolute z-[999999] left-[50%] translate-x-[-50%]" />
        </div>
      )}
    </div>
  );
}
