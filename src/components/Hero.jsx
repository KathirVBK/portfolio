import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    const { personalInfo } = portfolioData;

    return (
        <section id="hero" className="flex items-center justify-center min-h-screen pt-20">
            <div className="text-center px-6">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-2xl mb-8"
                >
                    <img
                        src={personalInfo.image}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-5xl md:text-7xl font-bold mb-4"
                >
                    Hi, I'm <span className="text-primary">{personalInfo.name}</span>
                </motion.h1>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-2xl md:text-3xl text-slate-400 mb-6"
                >
                    {personalInfo.role}
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-lg text-slate-500 max-w-2xl mx-auto mb-10"
                >
                    {personalInfo.tagline}
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        to="projects"
                        smooth={true}
                        className="btn-primary cursor-pointer"
                    >
                        View Projects
                    </Link>
                    <a
                        href={personalInfo.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline cursor-pointer"
                    >
                        Download Resume
                    </a>
                    <Link
                        to="contact"
                        smooth={true}
                        className="px-6 py-3 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                        Contact Me
                    </Link>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="mt-12 flex justify-center space-x-6"
                >
                    {personalInfo.socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-slate-400 hover:text-primary transition-colors hover:scale-110 transform"
                        >
                            <social.icon />
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
