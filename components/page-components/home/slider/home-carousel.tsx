'use client'
import Image from "next/image"
import { carouselItems } from "./carousel-items";

export const HomeCarousel = () => {
  return (
    <div className=" flex overflow-x-scroll ">
      {carouselItems.map((item) => (
        <div key={item.id} className="flex-shrink-0"><Image width={500} height={200} alt={item.title} src={item.imageUrl} />
        </div>
      ))}

    </div>

  )
}
