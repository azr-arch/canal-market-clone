import React from "react";

const HomeEvents = () => {
    return (
        <div className="p-[30px] md:px-[60px] md:pt-[60px] md:pb-[150px]">
            <div className="py-[60px] grid md:grid-cols-3 md:gap-x-[60px] gap-y-[60px]">
                <div className="w-full flex items-center justify-center">
                    <img src="/assets/foreign-text.svg" alt="Text" />
                </div>
                <div className="w-full flex items-center justify-center">
                    <h1 className="font-ogg text-[60px] md:text-[100px] leading-none font-medium">
                        Market Events
                    </h1>
                </div>
                <div className="w-full flex items-center justify-center">
                    <img src="/assets/foreign-text.svg" alt="Text" />
                </div>
            </div>

            <div className="event-row-wrp font-apercu md:grid md:grid-cols-3 md:gap-x-[60px] md:pt-[75px] md:pb-[120px] relative">
                <div className="event-row px-[20px] md:text-center py-[60px] md:p-0 font-medium flex flex-col items-center justify-center space-y-[15px] md:space-y-0">
                    <span className=" font-normal text-xs">09/21</span>
                    <p>Small Business Retail Pop Up Weekend!</p>
                </div>
                <div className="event-row px-[20px] md:text-center py-[60px] md:p-0 font-medium  flex flex-col items-center justify-center space-y-[15px] md:space-y-0">
                    <span className=" font-normal text-xs">02/07</span>
                    <p>New Balance x Paperboy Paris by Greenhouse @ Canal Street Market</p>
                </div>
                <div className="event-row px-[20px] md:text-center py-[60px] md:p-0 font-medium flex flex-col items-center justify-center space-y-[15px] md:space-y-0">
                    <span className=" font-normal text-xs">12/11</span>
                    <p>
                        Hack City <br className="hidden md:block" />
                        12/11
                    </p>
                </div>
                <a
                    className="
                        md:absolute md:-bottom-[20px] md:left-1/2 md:-translate-x-1/2 
                        md:w-[180px] w-full border transition-colors duration-200 hover:bg-black
                         hover:text-white border-black  mt-[60px] md:mt-0 p-[20px] 
                         flex items-center justify-center cursor-pointer  bg-white"
                >
                    see all
                </a>
            </div>
        </div>
    );
};

export default HomeEvents;
