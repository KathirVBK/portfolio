import { portfolioData } from '../data/portfolioData';
import Section from './Section';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
    const { about } = portfolioData;

    return (
        <Section id="about" className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column: Title & Experience */}
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="h-1 w-10 bg-primary"></div>
                        <span className="text-primary font-medium uppercase tracking-wider">About Me</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {about.sectionTitle}
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6">
                        {about.summary}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {about.highlights.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 text-slate-300">
                                <FaCheckCircle className="text-primary flex-shrink-0" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Key Stats / Visual */}
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 text-9xl font-bold select-none">
                        {about.experienceYears.replace('+', '')}
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-6xl font-bold text-primary mb-2">{about.experienceYears}</h3>
                        <p className="text-xl text-white font-medium">Years of Experience</p>
                        <p className="mt-4 text-slate-400">
                            Delivering high-quality web solutions and creating impact through user-centric design.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
