// components/Slider.js
import { useState, useEffect } from 'react';
import MainComponent from './home_main_component';

const Slider = ({ slides }:{slides:any}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide:any, index:any) => (
          <div key={index} className="w-full  flex-shrink-0">
           <MainComponent/>
          </div>
        ))}
      </div>
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_:any, index:any) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Slider;
