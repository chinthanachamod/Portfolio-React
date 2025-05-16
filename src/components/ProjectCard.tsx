import { ExternalLinkIcon, GithubIcon } from 'lucide-react'
import type { Project } from '../utils/projectsData'

interface ProjectCardProps {
    project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded"
                        >
              {tech}
            </span>
                    ))}
                </div>

                <div className="flex gap-3">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors text-sm"
                        >
                            <ExternalLinkIcon size={16} className="mr-1" /> Live Demo
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors text-sm"
                        >
                            <GithubIcon size={16} className="mr-1" /> View Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
