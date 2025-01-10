import { useState, useEffect } from "react";
import Home from "./Home";
import Loader from "./Loader";
import gsap from "gsap";

const App = () => {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [hideQuestion, setHideQuestion] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setIsLoading(false);
    // }, 1500);
    gsap.fromTo(
      ".hideloader",
      { display: "flex" },
      { display: "none", duration: 0 }
    );

    window.addEventListener("load", () => {
      setLoaded(true);
    });

    return () => clearTimeout();
  }, [loaded]);

  return (
    <div className="h-[100vh] w-screen flex items-center justify-center">
      <div
        className={`${
          loaded && "hideloader"
        } fixed top-0 bottom-0 left-0 right-0 z-[99999900] justify-center flex items-center bg-white`}
      >
        <Loader className="" />
      </div>

      <div className="h-full w-full">
        <Home
          isAudioEnabled={isAudioEnabled}
          setIsAudioEnabled={setIsAudioEnabled}
          setHideQuestion={setHideQuestion}
          hideQuestion={hideQuestion}
        />
      </div>
    </div>
  );
};

export default App;
