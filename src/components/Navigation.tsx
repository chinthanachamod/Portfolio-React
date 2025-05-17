import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MenuIcon, XIcon } from 'lucide-react'
const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    const navItems = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About',
            path: '/about',
        },
        {
            name: 'Projects',
            path: '/projects',
        },
        {
            name: 'Contact',
            path: '/contact',
        },
    ]
    const isActive = (path: string) => {
        return location.pathname === path
    }
    return (
        <header className="bg-white shadow-sm">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold text-indigo-600">
                        ChaMax
                    </Link>
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                        </button>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`${isActive(item.path) ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden pt-4 pb-2">
                        <div className="flex flex-col space-y-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`${isActive(item.path) ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-gray-900'} px-2 py-1 transition-colors`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navigation
