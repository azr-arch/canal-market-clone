import React from "react";

const HomeFooter = () => {
    return (
        <div className="px-[60px] md:px-[30px] pt-[60px] md:pt-[30px] pb-[30px]">
            <div className="mb-[60px] slash ">
                <div className="py-[42px] md:p-[60px] w-full flex flex-col items-center ">
                    <h3 className="font-ogg mb-[25px]  text-2xl md:text-[45px] text-center">
                        Interested in becoming vendor?
                    </h3>
                    <a className="hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer font-medium inline-block text-center font-apercu  md:max-w-[180px] w-full  p-4 border border-black">
                        click here
                    </a>
                </div>
            </div>

            <div className="mb-[60px] grid grid-cols-1 md:grid-cols-3 gap-[60px] font-apercu font-medium">
                <a className="p-[30px] md:p-[55px] event-hover text-sm md:text-base  text-center">
                    <img src="/assets/pencil.svg" alt="pencil-svg" className="mx-auto mb-4" />
                    Email us
                </a>
                <a className="p-[30px] md:p-[55px] event-hover text-sm md:text-base  text-center">
                    <img src="/assets/fb.svg" alt="pencil-svg" className="mx-auto mb-4" />
                    Follow us <br className="block md:hidden" /> on facebook
                </a>
                <a className="p-[30px] md:p-[55px] event-hover text-sm md:text-base  text-center">
                    <img src="/assets/insta.svg" alt="pencil-svg" className="mx-auto mb-4" />
                    Follow us <br className="block md:hidden" /> on instagram
                </a>
            </div>

            <div className="px-[60px] py-[30px] font-apercu font-medium flex flex-col items-center  md:flex-row md:justify-between event-hover">
                <span className=" hidden md:block text-[22px] mr-[60px] max-w-[260px]">
                    Stay up to date with out newsletter
                </span>

                {/* Mobile only */}
                <span className="mb-[15px] md:hidden">
                    <img src="/assets/mail.svg" alt="mail svg" className="mx-auto mb-[15px]" />
                    <span className="text-sm mx-auto">Get updates in your inbox</span>
                </span>

                <div className="max-w-[680px] w-full relative">
                    <input
                        type="text"
                        className="w-full px-[30px] py-[20px] border border-black "
                    ></input>

                    <span className="absolute top-5 left-8">Email</span>
                    <span className="absolute top-4 right-8 after:content-['\21E3'] -rotate-90 after:text-[24px]"></span>
                </div>
            </div>
        </div>
    );
};

export default HomeFooter;
