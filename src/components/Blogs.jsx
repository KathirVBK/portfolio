import { portfolioData } from '../data/portfolioData';
import Section from './Section';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Blogs = () => {
    const { blogs } = portfolioData;

    if (!blogs || blogs.length === 0) return null;

    return (
        <Section id="blogs" className="section-container">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blogs</h2>
                <p className="text-slate-400">My thoughts and learnings shared on LinkedIn.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col"
                    >
                        {/* Image Container with Overlay */}
                        <div className="relative overflow-hidden h-48">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <a
                                    href={blog.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors text-xl flex items-center justify-center gap-2 px-6"
                                    title="Read on LinkedIn"
                                >
                                    <span className="text-sm font-semibold">Read Post</span>
                                    <FaExternalLinkAlt className="text-sm" />
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-3 line-clamp-2">
                                {blog.title}
                            </h3>
                            {blog.description && (
                                <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-1">
                                    {blog.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Blogs;
