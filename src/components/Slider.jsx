import { useState, useEffect } from 'react';

const images = [
  '/HomeImages/Slider1.webp',
  '/HomeImages/Slider2.webp',
  '/HomeImages/Slider3.webp',
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto h-60 sm:h-72 md:h-80 lg:h-96 overflow-hidden mt-20">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`
            absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
          `}
        />
      ))}
    </div>
  );
}
