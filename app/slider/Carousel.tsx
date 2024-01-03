import { ReactNode } from "react"

interface CarouselProps {
  children:ReactNode[];
}


const Carousel: React.FC<CarouselProps> = ({children}) => {
  return (
    
    <div className="overflow-auto">
       
     <div className="flex">

        {children}
        
    </div>

    </div>
  )
}
export default Carousel
