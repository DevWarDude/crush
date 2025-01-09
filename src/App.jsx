import { useState, useEffect } from "react";
import Home from "./Home"; // Adjust this import path based on your project structure.
import Loader from "./Loader";

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
    <div className="h-[100vh] w-screen bg-black flex items-center justify-center">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="h-full w-full">
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
