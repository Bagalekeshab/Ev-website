'use client'
import Image from "next/image"
import { SliderItems } from "./carousel-item"

export const HomeCarousel = () => {
  return (
    <div className="flex overflow-y-auto ">
      {SliderItems.map((item) => (
        <div key={item.id} className=" flex-shrink-0">
          <Image width={600} height={200} alt={item.title} src={item.imageUrl} />
        </div>
      ))}

    </div>

  )
}
