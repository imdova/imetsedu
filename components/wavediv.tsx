const WaveDiv: React.FC<
  React.ComponentPropsWithoutRef<"div"> & { children: React.ReactNode }
> = ({ children, className, ...props }) => {
  return (
    <div className={"relative  py-10 " + className} {...props}>
      <div className="absolute top-[1px] left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
            fill="fillCurrent"
          ></path>
        </svg>
      </div>
      {children}
      <div className="absolute bottom-[1px] left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
            fill="fillCurrent"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default WaveDiv;
