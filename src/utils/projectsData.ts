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
        imageUrl: 'https://www.sriramakrishnahospital.com/wp-content/uploads/2021/06/Blood-Donation-1.jpg',
        githubUrl: 'https://github.com/chinthanachamod/Blood-Donation-Management-System',
        liveUrl: 'https://your-blood-donation.vercel.app',
        technologies: ['Spring Boot', 'MySQL', 'React', 'Bootstrap'],
    },
    {
        id: 2,
        title: 'Portfolio Website',
        description: 'A responsive portfolio site built with React and Tailwind CSS.',
        imageUrl: 'https://imgs.search.brave.com/Gdgw6Ki6SWkjnLLa_mB3Zv9-XtGmjO2qjMbMC11EUco/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc1/NDMxOTQ3L3Bob3Rv/L3BvcnRmb2xpby5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OXBiMEFxY1dxaktJ/MmJKSl9wUmlkWnli/NWNLeHBkU1ZCNmRn/WU9wREx3ST0',
        githubUrl: 'https://github.com/chinthanachamod/Portfolio-React',
        liveUrl: 'https://yourportfolio.vercel.app',
        technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    },
    {
        id: 3,
        title: 'Animal Empire - Animal Hospital Management System',
        description: 'A web app for managing animal hospital operations.',
        imageUrl: 'https://media.istockphoto.com/id/1303833889/photo/veterinarian-stroking-dog-close-up.jpg?s=612x612&w=0&k=20&c=ayMnKxDwrlNi16f_SEZWOU2YVkjicPj1-oK5iWXzdQc=',
        githubUrl: 'https://github.com/chinthanachamod/Animal-Hospital---Layered',
        technologies: ['Spring', 'Hibernate', 'Bootstrap', 'MySQL'],
    },
]
