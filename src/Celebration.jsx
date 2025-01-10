const Celebration = (prop) => {
  return (
    <div
      className={`${prop.className} relative h-[100vh] flex flex-col justify-center items-center bg-transparent w-[100vw]`}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-50 top-[-80px]">
        {Array.from({ length: 50 }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="absolute w-6 h-6 text-purple-400 rounded-full opacity-80 animate-fall"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <path
              fill="currentColor"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default Celebration;
