import { ReactNode } from "react"

interface CarouselProps {
  children:ReactNode;
}


const Carousel: React.FC<CarouselProps> = ({ children }) => {
  return (

    <div>
       <div>
        <div className="flex">
        {children}
        </div>
    </div>

    </div>
  )
}
export default Carousel
