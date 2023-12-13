import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

const About = () => {
    return (
        <motion.div
            initial={{ x: 9999 }}
            animate={{ x: 0, transition: { duration: 0.5, ease: "circOut" } }}
            exit={{ x: 9999, transition: { duration: 0.5, ease: "circIn" } }}
            // style={{ originX: isPresent ? 0 : 1 }}
            className="max-w-home w-screen screen float-right h-screen bg-blue"
        >
            something went wron
        </motion.div>
    );
};

export default About;
