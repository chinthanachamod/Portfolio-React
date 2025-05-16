/*import React from 'react'*/
import { useForm } from 'react-hook-form'
import { SendIcon, AlertCircleIcon } from 'lucide-react'
interface FormData {
    name: string
    email: string
    subject: string
    message: string
}
const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>()
    const onSubmit = async (data: FormData) => {
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log('Form submitted:', data)
        alert('Message sent successfully! I will get back to you soon.')
        reset()
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-lg shadow-md p-6"
        >
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Your name"
                    {...register('name', {
                        required: 'Name is required',
                        minLength: {
                            value: 2,
                            message: 'Name must be at least 2 characters',
                        },
                        maxLength: {
                            value: 50,
                            message: 'Name cannot exceed 50 characters',
                        },
                    })}
                />
                {errors.name && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">
                        <AlertCircleIcon size={14} className="mr-1" />
                        {errors.name.message}
                    </p>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="your.email@example.com"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                        },
                    })}
                />
                {errors.email && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">
                        <AlertCircleIcon size={14} className="mr-1" />
                        {errors.email.message}
                    </p>
                )}
            </div>
            <div className="mb-4">
                <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-1"
                >
                    Subject
                </label>
                <input
                    id="subject"
                    type="text"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="What's this regarding?"
                    {...register('subject', {
                        required: 'Subject is required',
                        minLength: {
                            value: 5,
                            message: 'Subject must be at least 5 characters',
                        },
                        maxLength: {
                            value: 100,
                            message: 'Subject cannot exceed 100 characters',
                        },
                    })}
                />
                {errors.subject && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">
                        <AlertCircleIcon size={14} className="mr-1" />
                        {errors.subject.message}
                    </p>
                )}
            </div>
            <div className="mb-6">
                <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-1"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Your message here..."
                    {...register('message', {
                        required: 'Message is required',
                        minLength: {
                            value: 10,
                            message: 'Message must be at least 10 characters',
                        },
                        maxLength: {
                            value: 1000,
                            message: 'Message cannot exceed 1000 characters',
                        },
                    })}
                ></textarea>
                {errors.message && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">
                        <AlertCircleIcon size={14} className="mr-1" />
                        {errors.message.message}
                    </p>
                )}
                <div className="mt-2 text-right text-sm text-gray-500">
                    <span>Max 1000 characters</span>
                </div>
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 rounded-md text-white font-medium flex justify-center items-center transition-colors ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
            >
                {isSubmitting ? (
                    <>
                        <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        Sending...
                    </>
                ) : (
                    <>
                        <SendIcon size={18} className="mr-2" />
                        Send Message
                    </>
                )}
            </button>
        </form>
    )
}

export default ContactForm
