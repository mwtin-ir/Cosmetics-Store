import React,{useState} from 'react'

export function useZoomed() {

    
    const [isZoomed, setIsZoomed] = useState(false); // حالت زوم فعال
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // موقعیت ماوس
  
    const handleMouseMove = (e) => {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100; // موقعیت X به صورت درصد
      const y = ((e.clientY - top) / height) * 100; // موقعیت Y به صورت درصد
      setMousePosition({ x, y });
    };
  
    const handleImageClick = () => {
      setIsZoomed(!isZoomed); // فعال یا غیرفعال کردن زوم

    };



      return [isZoomed,handleMouseMove,handleImageClick,mousePosition]
}

