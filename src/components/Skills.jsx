import { portfolioData } from '../data/portfolioData';
import Section from './Section';

const Skills = () => {
    const { skills } = portfolioData;

    return (
        <Section id="skills" className="section-container bg-dark">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
                <p className="text-slate-400">My technical expertise and tools I use.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((category, index) => (
                    <div
                        key={index}
                        className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-primary transition-all duration-300 hover:-translate-y-2 shadow-lg"
                    >
                        <h3 className="text-xl font-bold text-primary mb-4 border-b border-slate-700 pb-2">
                            {category.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.items.map((item, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full hover:bg-primary/20 hover:text-white transition-colors cursor-default"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
