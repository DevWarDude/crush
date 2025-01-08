const Celebration = (prop) => {
  return (
    <div
      className={`${prop.className} relative h-[100vh] flex flex-col justify-center items-center bg-transparent w-[100vw]`}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-50 top-[-80px]">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-5 h-5 bg-purple-400 rounded-full opacity-80 animate-fall"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Celebration;
