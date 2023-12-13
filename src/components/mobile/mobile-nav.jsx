import React from "react";
import { motion } from "framer-motion";

const variants = {
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
    hidden: { opacity: 0 },
};

const navItem = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
};

const MobileNav = () => {
    const navItems = [
        { label: "About", rotate: "-rotate-45", bg: "bg-white" },
        { label: "Food", rotate: "rotate-45", bg: "bg-blue" },
        { label: "Retail", rotate: "rotate-45", bg: "bg-red" },
        { label: "Community", rotate: "-rotate-45", bg: "bg-yellow" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden font-apercu fixed overflow-y-scroll   inset-0 z-40  text-black"
        >
            <motion.nav
                variants={variants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 grid-row-2 h-[671px]  text-xl"
            >
                {navItems.map((i) => (
                    <motion.a
                        key={i}
                        variants={navItem}
                        className={`flex items-center justify-center ${i.bg} `}
                    >
                        <span className={`origin-center ${i.rotate}`}>{i.label}</span>
                    </motion.a>
                ))}
            </motion.nav>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-white p-[30px]"
            >
                <div className="flex flex-col items-start font-medium">
                    <a className="p-[20px] mb-[30px] w-full text-center  border border-black">
                        become a vendor
                    </a>

                    <div className="mb-[30px]   flex flex-col items-start w-full gap-[30px] leading-[21px]">
                        <p>
                            265 Canal Street <br /> New York, New York{" "}
                        </p>

                        <p>
                            Food Hall Hours: <br /> Mon - Sun: 10AM- 10PM{" "}
                        </p>
                        <p>
                            Retail Market Hours: <br /> Mon - Sat: 11AM- 7PM <br /> Sun: 11AM-6PM
                        </p>
                    </div>
                    <a className="text-sm underline">Email us</a>
                    <div className="mt-[30px] grid grid-cols-2 gap-x-[30px] w-full">
                        <a className="w-full  h-[60px] flex items-center justify-center border border-black">
                            <img src="/assets/fb.svg" alt="" />
                        </a>
                        <a className="w-full h-[60px]  flex items-center justify-center border border-black">
                            <img src="/assets/insta.svg" alt="" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default MobileNav;
