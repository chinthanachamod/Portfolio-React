export interface Project {
    id: number
    title: string
    description: string
    imageUrl: string
    githubUrl: string
    liveUrl?: string
    technologies: string[]
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Blood Donation Management System',
        description: 'A full-stack web app to manage blood donations and requests.',
        imageUrl: '/images/Blood_ms.jpg',
        githubUrl: 'https://github.com/chinthanachamod/Blood-Donation-Management-System',
        liveUrl: 'https://your-blood-donation.vercel.app',
        technologies: ['Spring Boot', 'MySQL', 'React', 'Bootstrap'],
    },
    {
        id: 2,
        title: 'Portfolio Website',
        description: 'A responsive portfolio site built with React and Tailwind CSS.',
        imageUrl: '/images/portfolio.jpg',
        githubUrl: 'https://github.com/chinthanachamod/Portfolio-React',
        liveUrl: 'https://yourportfolio.vercel.app',
        technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    },
    {
        id: 3,
        title: 'Animal Empire - Animal Hospital Management System',
        description: 'A web app for managing animal hospital operations.',
        imageUrl: '/images/Animal Empire.jpg',
        githubUrl: 'https://github.com/chinthanachamod/Animal-Hospital---Layered',
        technologies: ['Spring', 'Hibernate', 'Bootstrap', 'MySQL'],
    },
]
