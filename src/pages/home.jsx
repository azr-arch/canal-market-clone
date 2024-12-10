import HomeEvents from "../components/home-events";
import HomeAddress from "../components/home-address";
import HomeFooter from "../components/home-footer";

import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="relative  md:max-w-home overflow-x-hidden"
        >
            <div className="px-[30px] md:px-[60px] pt-[300px] md:pt-[250px] pb-[40px] md:pb-[120px] w-full h-full relative">
                {/* Text content */}
                <div className="relative">
                    <h1 className="text-[35px] leading-[42px] md:text-[75px] md:leading-[85px] text-black font-ogg font-medium">
                        Canal Street Market is a carefully curated retail market, food hall &
                        community space open year-round at 265 Canal Street. Support Small Business
                        this weekend!
                    </h1>

                    {/* Spiral effect */}
                    {/* <div id="spiral" className="md:hidden"></div> */}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative pt-[100%] md:pt-0 md:aspect-video mb-[60px]"
            >
                <div className="absolute top-0 w-full h-full bg-[url('/assets/images/home-hero.png')] bg-cover bg-center bg-no-repeat"></div>
            </motion.div>

            {/*  Columns */}
            <div className="p-[30px] md:p-[60px] leading-[21px]">
                <h1 className="text-6xl md:text-[113px] md:leading-normal font-ogg  mb-[60px] ">
                    A New Kind of Market
                </h1>
                <div className="space-y-[30px] md:space-y-0 md:grid md:grid-cols-3 md:gap-x-[60px] ">
                    <div className="space-y-[30px]">
                        <div className="relative pb-[135%] ">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                                className="absolute top-0 w-full h-full bg-[url('/assets/images/market.png')] bg-cover bg-center bg-no-repeat"
                            ></motion.div>
                        </div>
                        <p className="font-apercu text-sm font-medium md:leading-[21px]">
                            Merging retail, food, art, and culture, Canal Street Market highlights
                            top retail and design concepts, restaurants, and up-and-coming players
                            in the downtown New York City community.
                        </p>
                    </div>
                    <div className="space-y-[30px]">
                        <div className="relative pb-[135%]">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="absolute top-0 w-full h-full bg-[url('/assets/images/store.png')] bg-cover bg-center bg-no-repeat"
                            ></motion.div>
                        </div>
                        <p className="font-apercu text-sm font-medium">
                            Retail Market Hours: <br /> Thursday – Sun: 11:00AM - 7:00PM
                        </p>
                    </div>
                    <div className="space-y-[30px] md:m-0">
                        <div className="relative pb-[135%]">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="absolute top-0 w-full h-full bg-[url('/assets/images/lady.png')] bg-cover bg-center bg-no-repeat"
                            ></motion.div>
                        </div>
                        <p className="font-apercu text-sm font-medium">
                            Food Hall Hours: <br />
                            Mon – Sun: 11:00AM - 8:00PM
                        </p>
                    </div>
                </div>
            </div>

            {/* Events */}
            <HomeEvents />
            {/* Address */}
            <HomeAddress />
            {/* Fotter */}
            <HomeFooter />
        </motion.div>
    );
};

export default Home;
