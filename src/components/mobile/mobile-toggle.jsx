import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const animationVariant = (x) => ({
    initial: {
        x,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.2, // adjust as needed
            type: "tween",
            ease: "easeInOut",
        },
    },
    exit: {
        x,
        opacity: 0,
        transition: {
            // delay: 0.5, // adjust as needed
            type: "tween",
            ease: "easeInOut",
        },
    },
});

const MobileToggle = ({ menuOpen, menuToggle }) => {
    const menuVariant = animationVariant(20);
    const closeVariant = animationVariant(-20);

    return (
        <motion.div className="z-50 block md:hidden fixed top-[45px] right-[30px]  w-[30px] h-[30px]">
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        variants={closeVariant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        onClick={menuToggle}
                        className="absolute inset-y-0 right-3 flex flex-col items-center justify-center w-full h-full overflow-hidden"
                    >
                        <span className="w-full  bg-black h-[1px] origin-center rotate-45"></span>
                        <span className="w-full  bg-black h-[1px] origin-center -rotate-45"></span>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {!menuOpen && (
                    <motion.div
                        variants={menuVariant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        onClick={menuToggle}
                        className="absolute inset-y-0 right-3 flex flex-col justify-around w-full h-full"
                    >
                        <span className="w-full  h-[1px] bg-black"></span>
                        <span className="w-full h-[1px] bg-black"></span>
                        <span className="w-full h-[1px] bg-black"></span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default MobileToggle;
