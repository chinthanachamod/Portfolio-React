const About = () => {
    const skills = [
        'React',
        'TypeScript',
        'JavaScript',
        'MongoDB',
        'HTML5',
        'CSS3/SCSS',
        'REST APIs',
        'Git',
    ]
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
                About Me
            </h1>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Who I Am</h2>
                <p className="text-gray-600 mb-4">
                    I'm a passionate Full-Stack Developer with over 5 years of experience
                    building web applications and digital experiences. I specialize in
                    JavaScript technologies across the entire stack (MERN, MEAN) and have
                    a strong focus on creating intuitive, accessible, and responsive user
                    interfaces.
                </p>
                <p className="text-gray-600 mb-4">
                    My journey in web development began when I built my first website at
                    the age of 15. Since then, I've been continuously learning and
                    adapting to new technologies. I hold a Bachelor's degree in Computer
                    Science and have worked with startups and established companies alike.
                </p>
                <p className="text-gray-600">
                    When I'm not coding, you can find me hiking, reading science fiction,
                    or experimenting with new recipes in the kitchen. I believe in the
                    power of technology to solve real-world problems and am always looking
                    for new challenges.
                </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">My Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                        >
              {skill}
            </span>
                    ))}
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Experience
                </h2>
                <div className="mb-6">
                    <h3 className="text-xl font-medium text-gray-800">
                        Senior Frontend Developer
                    </h3>
                    <p className="text-indigo-600 font-medium">
                        TechCorp Inc. (2020 - Present)
                    </p>
                    <p className="text-gray-600 mt-2">
                        Lead the development of the company's flagship SaaS product.
                        Implemented new features, improved performance, and mentored junior
                        developers. Reduced load times by 40% through code optimization.
                    </p>
                </div>
                <div className="mb-6">
                    <h3 className="text-xl font-medium text-gray-800">
                        Full-Stack Developer
                    </h3>
                    <p className="text-indigo-600 font-medium">
                        WebSolutions Agency (2018 - 2020)
                    </p>
                    <p className="text-gray-600 mt-2">
                        Developed and maintained various client projects using React,
                        Node.js, and MongoDB. Collaborated with designers and product
                        managers to deliver high-quality web applications on schedule.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-medium text-gray-800">
                        Junior Developer
                    </h3>
                    <p className="text-indigo-600 font-medium">StartupX (2016 - 2018)</p>
                    <p className="text-gray-600 mt-2">
                        Assisted in building the company's web application from scratch.
                        Focused on frontend development using JavaScript and CSS.
                        Participated in code reviews and agile development processes.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
