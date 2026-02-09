import { motion } from 'framer-motion';

const Section = ({ children, id, className }) => {
    return (
        <section id={id} className={className}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
