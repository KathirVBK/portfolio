import { portfolioData } from '../data/portfolioData';

const Footer = () => {
    const { personalInfo } = portfolioData;

    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-8 text-center">
            <p className="text-slate-500">
                &copy; {new Date().getFullYear()} <span className="text-primary">{personalInfo.name}</span>. All rights reserved.
            </p>
            <p className="text-slate-600 text-sm mt-2">
                Built with React & Tailwind CSS
            </p>
        </footer>
    );
};

export default Footer;
