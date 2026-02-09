import { portfolioData } from '../data/portfolioData';
import Section from './Section';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
    const { certifications } = portfolioData;

    return (
        <Section id="certifications" className="section-container bg-slate-900/50">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {certifications.map((cert) => (
                    <div
                        key={cert.id}
                        className="flex items-start gap-4 p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-primary transition-colors duration-300"
                    >
                        <div className="p-3 bg-primary/10 rounded-full text-primary text-2xl">
                            <FaCertificate />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-white mb-1">
                                {cert.title}
                            </h3>
                            <p className="text-slate-400 text-sm mb-2">
                                {cert.organization} • {cert.year}
                            </p>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-primary text-sm hover:underline"
                            >
                                View Credential <FaExternalLinkAlt className="ml-1 text-xs" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Certifications;
