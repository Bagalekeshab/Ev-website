import Footer from "@/components/footer/Footer"
import Navbar from "@/components/header/Navbar"


const MainLayout = ({children}:{children: React.ReactNode}) => {
  return (
        <>
       <div className="layout flex flex-col justify-between">
        <div>
        <Navbar/>
        </div>
        <div>
            {children}
        </div>
        <div>
        <Footer/>
        </div>
        </div>
        </>
  )
}

export default MainLayout