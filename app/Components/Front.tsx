'use client'
import Carousel from "./Carousel"



const sliders = [
  
  "Images/bmw-04.jpg",
  "Images/byd-03.jpg",
  "Images/kia-02.jpg",
  "IMages/tesla_mode_s.jpg",
  "Images/toyota-01.jpg",
  
]

  const Front: React.FC = () =>{
  return (
    <main className="App">
      <div>
        <Carousel>

          {sliders.map((Images, index) =>(
            <div key={index}><img src={Images} />
            </div>

          ))}
        </Carousel>

      </div>

    </main>
  )
}
export default Front;
