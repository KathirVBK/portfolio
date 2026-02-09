import { portfolioData } from '../data/portfolioData';
import Section from './Section';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <Section id="projects" className="section-container">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-slate-400">Some of the projects I've built recently.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                    >
                        {/* Image Container with Overlay */}
                        <div className="relative overflow-hidden h-48">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors text-xl"
                                    title="View Code"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors text-xl"
                                    title="Live Demo"
                                >
                                    <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                                    {project.category}
                                </span>
                            </div>
                            <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.techStack.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
