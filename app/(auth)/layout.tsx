import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header>This is header for auth page</header>
            {children}</>
    )
}

export default AuthLayout