import Footer from '@/components/footer/Footer'
import { Navbar } from '@/components/header/Navbar'
import React from 'react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default MainLayout