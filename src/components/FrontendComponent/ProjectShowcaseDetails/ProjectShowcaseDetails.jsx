import SectionTitle from '@/components/shared/SectionTitle/SectionTitle';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineCameraAlt } from 'react-icons/md';

const ProjectShowcaseDetails = () => {


    return (
        <div>
            <div className="mt-16">
                <div className="my-20 pt-10">

                    <div>
                        <h2 className="text-black text-base text-center font-bold">EXPLORE FEATURES</h2>
                        <h1 className="text-black text-2xl text-center font-bold mt-4">Presenting Our Successful Project</h1>
                        <Breadcrumb className="flex justify-center mt-5">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link className='text-gray-500' href="/">Home</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="text-gray-500" />
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link className='text-gray-500' href="/successStory">Projects</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="text-gray-500" />
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link className='text-gray-500' href="/successStory">Road Construction</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>

                        </Breadcrumb>
                    </div>



                    <div className="min-h-[100vh] container mx-auto">
                        <div className="text-justify mt-28">

                            <h1 className="text-xl font-bold text-black mb-6"> Road Construction and Highway Development: Navigating Complex Infrastructure</h1>
                            <p>
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <br />
                            <p>
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <br />
                            <p>
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <br />
                            <p>
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <br />
                            <br />

                            <h1 className="text-black text-xl py-4 font-bold">Photo Gallery From Site</h1>

                            <div>
                                <div className="grid grid-cols-2 gap-10 mt-4">
                                    <div className="">

                                        <Image
                                            src="https://i.postimg.cc/GhTRcXWY/Frame-76582.png"
                                            alt="project details"
                                            width={600}
                                            height={400}
                                            className="shadow-md w-full h-full object-cover"
                                        />

                                        {/* Capture date and time with camera icon */}
                                        <div className="flex items-center space-x-2 mt-2  text-black ">
                                            <MdOutlineCameraAlt className="text-lg font-bold text-[#003366]" />
                                            <span className='text-[#2b5680]'>Photo Capture: <span className="font-semibold">05.10.2024</span>.
                                                Time:<span className="font-semibold">3:40 PM</span></span>
                                        </div>
                                    </div>
                                    <div className="">

                                        <Image
                                            src="https://i.postimg.cc/hvFkhnWd/Frame-76586.png"
                                            alt="project details"
                                            width={600}
                                            height={400}
                                            className="shadow-md w-full h-full object-cover"
                                        />

                                        {/* Capture date and time with camera icon */}
                                        <div className="flex items-center space-x-2 mt-2  text-black ">
                                            <MdOutlineCameraAlt className="text-lg font-semibold text-[#003366]" />
                                            <span className='text-[#2b5680]'>Photo Capture: <span className="font-semibold">05.10.2024</span>.
                                                Time:<span className="font-semibold">2:20 PM</span></span>
                                        </div>
                                    </div>
                                    <div className="">

                                        <Image
                                            src="https://i.postimg.cc/NF1WHnBP/Frame-76588.png"
                                            alt="project details"
                                            width={600}
                                            height={400}
                                            className="shadow-md w-full h-full object-cover"
                                        />

                                        {/* Capture date and time with camera icon */}
                                        <div className="flex items-center space-x-2 mt-2  text-black ">
                                            <MdOutlineCameraAlt className="text-lg font-semibold text-[#003366]" />
                                            <span className='text-[#2b5680]'>Photo Capture: <span className="font-semibold">05.10.2024</span>.
                                                Time:<span className="font-semibold">5:30 PM</span></span>
                                        </div>
                                    </div>
                                    <div className="">

                                        <Image
                                            src="https://i.postimg.cc/ZKHQzpR3/Frame-76590.png"
                                            alt="project details"
                                            width={600}
                                            height={400}
                                            className="shadow-md w-full h-full object-cover"
                                        />

                                        {/* Capture date and time with camera icon */}
                                        <div className="flex items-center space-x-2 mt-2  text-black ">
                                            <MdOutlineCameraAlt className="text-lg font-semibold text-[#003366]" />
                                            <span className='text-[#2b5680]'>Photo Capture: <span className="font-semibold">05.10.2024</span>.
                                                Time:<span className="font-semibold">10:30 AM</span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-20">
                                    <h1 className="font-semibold text-gray-700 text-xl">

                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </h1>
                                    <br />
                                    <div className="text-[#636363]">
                                        <p>

                                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </p>
                                        <br />
                                        <p>

                                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </div>F
        </div >
    );
};

export default ProjectShowcaseDetails;