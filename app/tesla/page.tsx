import Footer from "@/components/footer/Footer"
import Image from "next/image"

const TeslaPage = () => {
  return (
    <>
   <div>
      <p className="text-center text-4xl bg-black text-white h-20 py-5">Tesla</p>
      <div className="container m-auto ">
        <div>
          <img className="w-full h-auto p-10" src="/images/tesla_mode_s.jpg" alt="car" />
        </div>

        <p className="text-center text-3xl font-bold h-20 py-6 underline">Models</p>

        <div className="section grid grid-cols-2 px-2 py-5 md:grid-cols-4 pl-10">
    
        <div className="box1 border-2 w-44 h-52 flex flex-col ">
          <img className="h-full w-auto object-contain " src="/modely/GUID-1.png" alt="car"/>
          <button className="bg-red-900 text-white w-auto h-10">Model Y</button>
          </div>

          <div className="box1 border-2 w-44 h-52 flex flex-col ">
          <img className="h-full w-auto object-cover " src="/images/tesla_mode_s.jpg" alt="car"/>
          <button className="bg-red-900 text-white w-auto h-10">See more</button>
          </div>
          <div className="box1 border-2 w-44 h-52 flex flex-col ">
          <img className="h-full w-auto object-cover " src="/images/tesla_mode_s.jpg" alt="car"/>
          <button className="bg-red-900 text-white w-auto h-10">See more</button>
          </div>
          <div className="box1 border-2 w-44 h-52 flex flex-col ">
          <img className="h-full w-auto object-cover " src="/images/tesla_mode_s.jpg" alt="car"/>
          <button className="bg-red-900 text-white w-auto h-10">See more</button>
          </div>

         


        </div>
        
      </div>
      
      
    </div>

    <Footer/> 
    </>
  )
}

export default TeslaPage
