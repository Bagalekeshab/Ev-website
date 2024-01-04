'use client'
import Image from "next/image"
import { SliderItems } from "./carousel-item"
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { useState } from "react";




export const HomeCarousel = () => {

  const[curr, setCurr] = useState(0)

  const prev =()=>
  setCurr((curr) => (curr ===0 ? SliderItems.length - 1 :curr - 1 ))

  const next =()=>
  setCurr((curr) => (curr === SliderItems.length - 1 ? 0 :curr + 1 ))

  

  return (
    
  
    <div>

    <div className="flex transition-transform ease-out duration-500" style={{transform:`translateX(-${curr * 100}%)`}}>
    {SliderItems.map((item) => (
        <div key={item.id} className="flex-shrink-0">
          <Image width={400} height={100} alt={item.title} src={item.imageUrl} />
        </div>

      ))}
    </div>
      <div className=" absolute top-24 w-full py-20 text-white flex items-center justify-between px-2">
      <button onClick={prev} className="text-2xl">
      <FaArrowCircleLeft />
      </button>
      <button onClick={next} className="text-2xl">
      <FaArrowCircleRight />
      </button>
      
    </div>
    
    </div>


    
  
  )
}
