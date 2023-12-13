import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import MainNav from "./main-nav";
import MobileToggle from "./mobile/mobile-toggle";
import MobileNav from "./mobile/mobile-nav";
import { useNavigate } from "react-router-dom";

const RootLayout = ({ children }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div className="relative">
            <MainNav />
            <MobileToggle menuOpen={open} menuToggle={handleToggle} />
            <AnimatePresence>{open && <MobileNav />}</AnimatePresence>
            <motion.div
                onClick={() => navigate("/")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }} // Tune this
                className="fixed z-10 top-[30px] md:top-[60px] left-[30px] md:left-[60px]"
                aria-label="Logo"
            >
                <img src="/assets/logo.svg" alt="Logo" />
            </motion.div>
            {children}
        </div>
    );
};

RootLayout.propTypes = {
    children: React.Fragment,
};

export default RootLayout;
