import ContactForm from '../components/ContactForm'
import {
    MapPinIcon,
    MailIcon,
    PhoneIcon,
    LinkedinIcon,
    GithubIcon

} from 'lucide-react'
const Contact = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
                Get In Touch
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            Contact Information
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPinIcon
                                    size={20}
                                    className="text-indigo-600 mr-3 mt-1 flex-shrink-0"
                                />
                                <div>
                                    <p className="font-medium text-gray-800">Location</p>
                                    <p className="text-gray-600">Panadura</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MailIcon
                                    size={20}
                                    className="text-indigo-600 mr-3 mt-1 flex-shrink-0"
                                />
                                <div>
                                    <p className="font-medium text-gray-800">Email</p>
                                    <a
                                        href="mailto:chinthanachamod50@gmail.com"
                                        className="text-indigo-600 hover:text-indigo-800 transition-colors"
                                    >
                                        chinthanachamod50@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <PhoneIcon
                                    size={20}
                                    className="text-indigo-600 mr-3 mt-1 flex-shrink-0"
                                />
                                <div>
                                    <p className="font-medium text-gray-800">Phone</p>
                                    <a
                                        href="tel:+94 71 750 0753"
                                        className="text-indigo-600 hover:text-indigo-800 transition-colors"
                                    >
                                        +94 71 750 0753
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            Connect With Me
                        </h2>
                        <div className="flex space-x-4">
                            <a
                                href="www.linkedin.com/in/chinthana-chamod-2a133b323"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-colors"
                                aria-label="LinkedIn Profile"
                            >
                                <LinkedinIcon size={20} />
                            </a>
                            <a
                                href="https://github.com/chinthanachamod"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-colors"
                                aria-label="GitHub Profile"
                            >
                                <GithubIcon size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact
