import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const OurTeam = () => {
    return (
        <div className="mt-20">
            <section className="mt-10 max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="lg:text-lg text-sm text-[#003366] font-bold">OUR PROFESSIONALS</h1>
                    <h2 className="lg:text-3xl text-lg text-black font-bold pt-4">Our Dedicated Team</h2>
                </div>

                <div className="lg:my-20 my-4 flex flex-col lg:flex-row justify-between gap-6 lg:px-0 px-4">
                    <div className="w-2/5">
                        {/* <Image
                            src={"https://i.postimg.cc/MThxLLf0/Frame-76640.png"}
                            alt={"image"}
                            width={600}
                            height={400}
                            className="shadow-md w-full h-auto object-cover"
                        /> */}
                        <div className="flex-1 text-justify">
                            <Image
                                src="https://i.postimg.cc/v8N07RxT/Frame-76642.png"
                                alt="About Us Image"
                                width={500}
                                height={300}
                                className="h-auto w-full rounded-none object-cover shadow-md"
                            />
                            <div className="relative z-10 mx-auto -mt-8 w-max bg-[#003366] text-white px-24 p-2">
                                <h1 className="text-center text-xl font-medium  md:text-2xl">
                                    Mohammad Bayezid
                                </h1>
                                <h2 className="text-sm text-center font-medium">
                                    Chief Executive Officer (CEO)
                                </h2>
                                <h2 className="text-sm text-center font-medium">
                                    M/S The Bayezid Builders
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/5 lg:p-6 lg:text-lg text-base font-medium text-[#5f5f5f]  text-justify ">
                        <p>

                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurTeam;