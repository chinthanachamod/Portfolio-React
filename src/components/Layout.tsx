/*import React from 'react'*/
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />
            <main className="container mx-auto px-4 py-8">
                <Outlet />
            </main>
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>
                        © {new Date().getFullYear()} My Portfolio. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Layout
