const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] 4xl:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 3xl:px-12 4xl:px-16 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
