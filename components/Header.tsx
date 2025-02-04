"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date("2025-02-10T23:59:59");
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return { days, hours, minutes, seconds };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Timer has ended
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[65px] ">
      <div className=" bg-primary">
        <div className="container lg:max-w-[1170px] mx-auto px-4  flex gap-2 items-center justify-center p-2">
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
              <span className="font-bold">Don&apos;t miss this offer! </span>
              <span className="line-through text-red-500">
                <span className="text-white">
                  $199 <span className="text-sm">EGP</span>
                </span>
              </span>
              {"  "}
              <strong>$90</strong> for life time access
              <strong className="text-white text-xs">
                {" "}
                {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s left`}
              </strong>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
