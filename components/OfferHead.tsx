import Image from "next/image";

export const OfferHead = () => {
  return (
    <div className="mt-[65px] sticky backdrop-blur-sm border-b bg-gradient-to-r from-primary to-primary-gold">
      <div className="container lg:max-w-[1170px] mx-auto px-4 h-16 flex items-center justify-center">
        <Image
          src="/fast.svg"
          alt="Program Logo"
          width={120}
          height={60}
          className="h-12 w-auto"
          priority
        />
      </div>
    </div>
  );
};
