"use client";
import { createDateFromInput } from "@/util/date";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CallToAction from "./CallToAction";
import { HeaderType } from "@/types";

const Header: React.FC<Block<HeaderType> & { forms: FormType[] }> = ({
  data,
  forms,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = createDateFromInput(data?.endDate || "");
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return null;
  return (
    <React.Fragment>
      <header className="sticky left-0 right-0 top-0 z-50">
        <div className="bg-primary">
          <div className="container mx-auto flex items-center justify-center gap-2 p-2 px-4 lg:max-w-[1170px]">
            <Image
              src="/fast.svg"
              alt="Program Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
              priority
            />
            <div className="text-center">
              <strong className="text-lg font-medium text-gold">
                {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s left`}
              </strong>
              <p className="text-white">
                <span
                  className="text-sm font-medium"
                  dangerouslySetInnerHTML={{
                    __html: data.content
                      .replace(
                        `[[oldPrice]]`,
                        `<del className='text-gray-500'>${data.oldPrice}</del>`,
                      )
                      .replace(
                        `[[newPrice]]`,
                        `<span className='text-green-600 font-bold'>${data.newPrice}</span>`,
                      ),
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </header>
      <CallToAction data={data} forms={forms} />
    </React.Fragment>
  );
};

export default Header;
