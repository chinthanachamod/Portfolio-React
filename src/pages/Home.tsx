import { Link } from 'react-router-dom'
import { ArrowRightIcon } from 'lucide-react'
const Home = () => {
    return (
        <div className="min-h-[80vh] flex flex-col justify-center">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                    Hi, I'm <span className="text-indigo-600">Chinthana Chamod</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                    Full-Stack Developer & UI/UX Designer
                </p>
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                    I build exceptional digital experiences that are fast, accessible,
                    visually appealing, and responsive. Let's turn your vision into
                    reality.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        to="/projects"
                        className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center"
                    >
                        View My Work <ArrowRightIcon size={18} className="ml-2" />
                    </Link>
                    <Link
                        to="/contact"
                        className="px-6 py-3 bg-white border border-indigo-600 text-indigo-600 rounded-md hover:bg-gray-50 transition-colors"
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
