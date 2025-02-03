"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  id: string | number;
}

interface CarouselProps<T extends CarouselItem> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  autoScrollInterval?: number;
  className?: string;
}

export function Carousel<T extends CarouselItem>({
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
    if (!isPaused) {
      const interval = setInterval(scrollToNext, autoScrollInterval);
      return () => clearInterval(interval);
    }
  }, [scrollToNext, autoScrollInterval, isPaused]);

  if (items.length === 0) return null;

  return (
    <div className={`relative w-full ${className}`}>
      <div className="absolute left-0 top-0 z-10 flex h-full w-8 md:w-16 items-center justify-center">
        <button
          onClick={scrollToPrev}
          className="rounded-full bg-gray-100 p-2 text-gray-700 hover:bg-gray-200"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      <div className="absolute right-0 top-0 z-10 flex h-full w-8 md:w-16 items-center justify-center">
        <button
          onClick={scrollToNext}
          className="rounded-full bg-gray-100 p-2 text-gray-700 hover:bg-gray-200"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div
        ref={carouselRef}
        className="overflow-x-hidden w-full snap-x snap-mandatory scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex gap-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="snap-center w-full flex-shrink-0 flex justify-center items-center"
              onClick={() => setIsPaused(true)}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      <div className="z-10 flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
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