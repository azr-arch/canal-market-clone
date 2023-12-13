import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// const eased = easeIn(0.5);

const variants = {
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1,
            delay: 1,
            when: "beforeChildren",
        },
    },
    hidden: { opacity: 0 },
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
    const navigate = useNavigate();

    const routes = [
        {
            label: "Food",
            foreignLabel: "餐饮",
            bg: "bg-blue",
            href: "/about",
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
            variants={variants}
            initial="hidden"
            animate="visible"
            // transition={{ease: "easeIn", type:"tween"}}
            className="hidden md:flex fixed w-full h-full inset-0 justify-end font-apercu"
        >
            {routes.map((route) => (
                <motion.a
                    key={route}
                    // href={route?.href}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/about");
                    }}
                    variants={navItem}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className={`
                    h-full px-[5px] py-[60px] 
                    min-w-[60px] w-[60px] ${route.bg} relative 
                    cursor-pointer  text-[20px]`}
                >
                    <p className="pt-4 text-center">{route.foreignLabel}</p>
                    <span className="absolute top-1/2 -translate-y-1/2 left-1/2 rotate-90 -translate-x-1/2">
                        {route.label}
                    </span>
                </motion.a>
            ))}
        </motion.nav>
    );
};

export default MainNav;
