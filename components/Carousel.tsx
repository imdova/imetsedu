"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  autoScrollInterval?: number;
  className?: string;
}

export function Carousel<T>({
  items,
  renderItem,
  autoScrollInterval = 3000,
  className = "",
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = useCallback((index: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.clientWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  }, []);

  const scrollToNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % items.length;
    scrollToIndex(nextIndex);
  }, [currentIndex, items.length, scrollToIndex]);

  const scrollToPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    scrollToIndex(prevIndex);
  }, [currentIndex, items.length, scrollToIndex]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      if (!carousel) return;
      const scrollPosition = carousel.scrollLeft;
      const carouselWidth = carousel.clientWidth;
      // Calculate the current index based on scroll position
      const newIndex = Math.round(scrollPosition / carouselWidth);
      // Update current index if it has changed
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [currentIndex]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(scrollToNext, autoScrollInterval);
      return () => clearInterval(interval);
    }
  }, [scrollToNext, autoScrollInterval, isPaused]);

  if (items.length === 0) return null;

  return (
    <div className={`relative w-full ${className}`}>
      <div className="absolute left-0 top-0 z-10 flex h-full w-6 items-center justify-center md:w-16">
        <button
          onClick={() => {
            setIsPaused(false);
            scrollToPrev();
          }}
          className="rounded-full bg-gray-100 p-1 text-gray-700 hover:bg-gray-200"
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>

      <div className="absolute right-0 top-0 z-10 flex h-full w-6 items-center justify-center md:w-16">
        <button
          onClick={() => {
            setIsPaused(false);
            scrollToNext();
          }}
          className="rounded-full bg-gray-100 p-1 text-gray-700 hover:bg-gray-200"
          aria-label="Next"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div
        ref={carouselRef}
        className="scroll-bar-hidden w-full snap-x snap-mandatory overflow-x-auto scroll-smooth pb-4 pt-2"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex gap-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex w-full flex-shrink-0 snap-center items-center justify-center"
              onMouseDown={() => setIsPaused(true)}
              onMouseUp={() => setIsPaused(false)}
              onMouseOver={() => setIsPaused(true)}
              onMouseOut={() => setIsPaused(false)}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      <div className="z-10 flex justify-center space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsPaused(false);
              scrollToIndex(index);
            }}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gray-700"
                : "bg-gray-300 hover:bg-gray-500"
            }`}
            style={{
              height: "0.5rem",
              width: index === currentIndex ? "1rem" : "0.5rem",
            }}
          />
        ))}
      </div>
    </div>
  );
}
