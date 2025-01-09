import { useState, useEffect } from "react";
import Home from "./Home"; // Adjust this import path based on your project structure.

const App = () => {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [hideQuestion, setHideQuestion] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {isLoading ? (
        <div className="dot-spinner flex justify-center items-center h-full">
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
        </div>
      ) : (
        <div className="h-full w-full">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source
              src={`${
                hideQuestion
                  ? "./IMG_2813.MP4"
                  : "./7565825-hd_2048_1080_25fps.mp4"
              }`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <Home
            isAudioEnabled={isAudioEnabled}
            setIsAudioEnabled={setIsAudioEnabled}
            setHideQuestion={setHideQuestion}
            hideQuestion={hideQuestion}
          />
        </div>
      )}
    </div>
  );
};

export default App;
