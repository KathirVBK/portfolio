import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { personalInfo } = portfolioData;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Certifications', to: 'certifications' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav
            className={clsx(
                'fixed w-full z-50 transition-all duration-300',
                isScrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="text-2xl font-bold text-white cursor-pointer"
                >
                    {personalInfo.name.split(' ')[0]}
                    <span className="text-primary">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="text-slate-300 hover:text-primary transition-colors cursor-pointer font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={personalInfo.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-2xl text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark border-b border-slate-800 overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-300 hover:text-primary transition-colors cursor-pointer block"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href={personalInfo.resumeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-5 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors self-start"
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
