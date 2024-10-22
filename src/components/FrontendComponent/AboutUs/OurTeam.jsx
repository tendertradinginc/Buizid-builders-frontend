"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { customLoader } from "@/utils/customLoader";

const OurTeam = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/v1/teamMember`);
                const data = await response.json();
                console.log("team members data:", data);
                setTeamMembers(data?.data);
            } catch (error) {
                console.error("Error fetching team members:", error);
            }
        };

        fetchTeamMembers();
    }, []);

    return (
        <div className="mt-20">
            <section className="mt-10 max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="lg:text-lg text-sm text-[#003366] font-bold">
                        OUR PROFESSIONALS
                    </h1>
                    <h2 className="lg:text-3xl text-lg text-black font-bold pt-4">
                        Our Dedicated Team
                    </h2>
                </div>

                <div className="lg:my-20 my-4 grid grid-cols-12 justify-between gap-6 lg:px-0 px-4">
                    <div className="col-span-12 lg:col-span-4 xl:col-span-5">
                        <div className=" text-justify">
                            <Image
                                src="https://i.postimg.cc/v8N07RxT/Frame-76642.png"
                                alt="About Us Image"
                                width={500}
                                height={300}
                                loader={customLoader}
                                className="h-auto w-full rounded-none object-cover shadow-md"
                            />
                            <div className="relative z-10 mx-auto -mt-8 w-[80%] bg-[#003366] text-white p-2">
                                <h1 className="text-center text-xl font-medium md:text-2xl">
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
                        <div className=" lg:text-base text-sm font-medium text-[#5f5f5f] text-justify lg:pt-6">
                            <p>
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                            </p>
                        </div>
                    </div>

                    {/* Swiper Slide */}
                    <div className=" col-span-12 lg:col-span-8 xl:col-span-7 h-auto lg:text-lg text-base font-medium text-[#5f5f5f] text-justify">
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs, Pagination]}
                            className="mySwiper2"
                        >
                            {/* Displaying team members in sets of 4 per slide */}
                            {teamMembers?.map((team, idx) => {
                                if (idx % 4 === 0) {
                                    return (
                                        <SwiperSlide key={idx}>
                                            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5  xl:gap-10 mb-14">
                                                {teamMembers.slice(idx, idx + 4).map((teamMember, teamIdx) => (
                                                    <div key={teamIdx} className="lg:w-full text-base font-medium text-[#5f5f5f] text-justify  xl:px-6">
                                                        <div className="relative text-justify">
                                                            <Image
                                                                src={teamMember.image}
                                                                alt={teamMember.name} // Dynamic alt text
                                                                width={500}
                                                                height={300}
                                                                className="h-[330px] w-full rounded-none object-cover shadow-md"
                                                            />

                                                            {/* Social Media Icons */}
                                                            <div className="absolute top-8 right-3 flex flex-col gap-2">
                                                                {teamMember.socialMedia.linkedin && (
                                                                    <Link
                                                                        href={teamMember.socialMedia.linkedin}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="bg-white p-2 rounded-full"
                                                                    >
                                                                        <AiOutlineLinkedin className="lg" />
                                                                    </Link>
                                                                )}
                                                                {teamMember.socialMedia.facebook && (
                                                                    <Link
                                                                        href={teamMember.socialMedia.facebook}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="bg-white p-3 rounded-full"
                                                                    >
                                                                        <CiFacebook className="xl" />
                                                                    </Link>
                                                                )}
                                                                {teamMember.socialMedia.whatsapp && (
                                                                    <Link
                                                                        href={teamMember.socialMedia.whatsapp}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="bg-white p-3 rounded-full"
                                                                    >
                                                                        <FiTwitter className="xl" />
                                                                    </Link>
                                                                )}
                                                            </div>

                                                            <div className="relative z-10 mx-auto -mt-8 w-[80%] bg-[#003366] text-white px-3 p-2">
                                                                <h1 className="text-center text-xl font-medium md:text-2xl">
                                                                    {teamMember.name}
                                                                </h1>
                                                                <h2 className="text-sm text-center font-medium">
                                                                    {teamMember.designation}
                                                                </h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </SwiperSlide>
                                    );
                                }
                                return null;
                            })}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurTeam;
