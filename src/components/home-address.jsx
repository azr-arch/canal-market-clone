import React from "react";

const HomeAddress = () => {
    return (
        <div className="w-full px-[30px] mt-[30px] md:mt-0 md:px-[60px] md:grid md:grid-cols-2 md:gap-x-[60px] ">
            <div className=" font-ogg px-[30px] py-[60px] md:py-[90px] event-hover">
                <h3 className="mx-auto text-[40px]  md:text-[60px] md:font-medium text-center">
                    265 Canal St.New York, NY
                </h3>
            </div>
            <div className="hidden md:block h-full event-hover p-[2px]">
                {/* <h3 className="mx-auto text-[40px]  md:text-[60px] md:font-medium">
                    265 Canal St.New York, NY
                </h3> */}
                {/* <img
                    src="/assets/images/map.png"
                    alt="Map"
                    className="w-full h-full object-cover"
                /> */}
                <div
                    className="
                    w-full h-full bg-[url('/assets/images/map.png')] 
                    bg-[50%] bg-cover bg-no-repeat"
                ></div>
            </div>
        </div>
    );
};

export default HomeAddress;
