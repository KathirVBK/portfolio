import { portfolioData } from '../data/portfolioData';
import Section from './Section';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const { contact, personalInfo } = portfolioData;

    return (
        <Section id="contact" className="section-container">
            <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {contact.sectionTitle}
                </h2>
                <p className="text-slate-400 mb-10 max-w-2xl text-lg">
                    {contact.description}
                </p>

                <div className="flex flex-col items-center gap-3 mb-10">
                    <div className="bg-slate-800 p-4 rounded-full text-primary text-2xl mb-2">
                        <FaPaperPlane />
                    </div>
                    <h4 className="text-xl font-bold text-white">Email</h4>
                    <a href={`mailto:${contact.email}`} className="text-slate-400 hover:text-primary transition-colors text-lg font-medium">
                        {contact.email}
                    </a>
                </div>

                <div className="flex justify-center space-x-6">
                    {personalInfo.socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-800 p-4 rounded-full text-slate-400 hover:text-white hover:bg-primary transition-all duration-300 hover:scale-110 shadow-lg"
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Contact;
