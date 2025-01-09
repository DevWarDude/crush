import { useState } from "react";
import Home from "./Home";

const App = () => {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [hideQuestion, setHideQuestion] = useState(false);

  return (
    <div className="h-[100vh]">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        {/* <source src="../5076790-hd_1080_1920_30fps.mp4" type="video/mp4" /> */}
        {/* <source src="../7101912-uhd_2560_1440_25fps.mp4" type="video/mp4" /> */}
        <source
          src={`${
            hideQuestion ? "./IMG_2813.MP4" : "./7565825-hd_2048_1080_25fps.mp4"
          }`}
          type="video/mp4"
        />
        {/* <source src="../8195624-uhd_2160_4096_30fps.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
      <Home
        isAudioEnabled={isAudioEnabled}
        setIsAudioEnabled={setIsAudioEnabled}
        setHideQuestion={setHideQuestion}
        hideQuestion={hideQuestion}
      />
    </div>
  );
};

// public\5076790-hd_1080_1920_30fps.mp4
export default App;
