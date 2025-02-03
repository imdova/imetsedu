import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b">
      {/* <div className=" bg-primary">
        <div className="container lg:max-w-[1170px] mx-auto px-4 h-16 flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Program Logo"
            width={120}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </div>
      </div> */}
      {/* <div className=" backdrop-blur-sm border-b bg-gradient-to-r from-primary to-primary-gold"> */}
      <div className=" backdrop-blur-sm border-b bg-primary">
        <div className="container lg:max-w-[1170px] mx-auto px-4  flex flex-col items-center justify-center p-2">
          <Image
            src="/fast.svg"
            alt="Program Logo"
            width={120}
            height={60}
            className="h-12 w-auto"
            priority
          />
          <div className="flex text-sm text-center items-center justify-center mt-4">
            <span className=" text-white">
              <span className="font-bold">Don t miss this offer! </span>
              <span className="line-through text-red-500">
                <span className="text-white">
                  $199 <span className="text-sm">EGP</span>
                </span>
              </span>
              {"  "}
              $90 for life time access
            </span>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
