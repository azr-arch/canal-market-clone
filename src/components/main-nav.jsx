import { motion } from "framer-motion";

const navVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, when: "beforeChildren" },
    },
};

const navItem = {
    visible: {
        y: 0,
    },
    hidden: {
        y: -1000,
    },
};

const MainNav = () => {
    const routes = [
        {
            label: "Food",
            foreignLabel: "餐饮",
            bg: "bg-blue",
        },
        {
            label: "Retail",
            foreignLabel: "購物",
            bg: "bg-red",
        },
        {
            label: "Community",
            foreignLabel: "文化",
            bg: "bg-yellow",
        },
    ];

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="hidden overflow-hidden md:flex fixed w-full h-full inset-0 justify-end font-apercu"
        >
            {routes.map((route) => (
                <motion.div
                    key={route}
                    variants={navItem}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className={`
                        h-full px-[5px] py-[60px] 
                        min-w-[60px] w-[60px] ${route.bg} relative 
                        text-[20px]`}
                >
                    <p className="pt-4 text-center">{route.foreignLabel}</p>
                    <span className="absolute top-1/2 -translate-y-1/2 left-1/2 rotate-90 -translate-x-1/2">
                        {route.label}
                    </span>
                </motion.div>
            ))}
        </motion.nav>
    );
};

export default MainNav;
