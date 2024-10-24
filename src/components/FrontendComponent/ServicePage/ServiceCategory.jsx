"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { RiDownloadCloud2Line } from "react-icons/ri";


const ServiceCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState("Construction Services");
    const [loading, setLoading] = useState(false);
    const [openItem, setOpenItem] = useState("item-2");
    const skeleton = new Array(8).fill(0);

    const categories = [
        "Construction Services",
        "Flooring Solutions",
        "Electrician Solutions",
        "Interior Design",
        "Road Construction",
        "Plumbing Solution",
    ];

    const categoryDetails = {
        "Construction Services": "Lorem ipsum for Construction Services...",
        "Flooring Solutions": "Lorem ipsum for Flooring Solutions...",
        "Electrician Solutions": "Lorem ipsum for Electrician Solutions...",
        "Interior Design": "Lorem ipsum for Interior Design...",
        "Road Construction": "Lorem ipsum for Road Construction...",
        "Plumbing Solution": "Lorem ipsum for Plumbing Solution...",
    };





    const faqData = [
        {
            question: "What types of construction projects does Bayezid Builders specialize in?",
            answer: "Bayezid Builders specializes in residential, commercial, and industrial construction projects, including custom homes, office buildings, and large-scale industrial complexes."
        },
        {
            question: "How does Bayezid Builders ensure the quality of their construction projects?",
            answer: "We use high-quality materials, employ experienced professionals, and follow strict quality control processes to ensure the durability and safety of all our projects."
        },
        {
            question: "What is the typical timeline for a residential construction project?",
            answer: "A typical residential project takes around 6 to 12 months to complete, depending on the complexity of the design, approval processes, and weather conditions."
        },
        {
            question: "Does Bayezid Builders offer a warranty for completed projects?",
            answer: "Yes, we offer a comprehensive warranty covering both structural and non-structural elements, ensuring peace of mind for our clients after the project is completed."
        },
        {
            question: "Can Bayezid Builders help with project design and planning?",
            answer: "Absolutely! We provide full-service solutions, including project design, planning, and execution, collaborating with clients and architects to bring visions to life."
        }
    ];


    return (
        <div className="lg:mt-16 mt-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-12 p-6 ">
                {/* Left side - Service Categories */}
                <div>
                    <div className="bg-gray-50 shadow-lg p-4  rounded-none">
                        <h2 className="text-xl font-bold mb-8 pb-4 text-[#003366] border-b-2 border-[#003366]">Service Categories</h2>

                        <ul className="space-y-2">
                            {categories.map((category, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer p-2 hover:bg-[#66a4e2] font-medium rounded-none ${selectedCategory === category
                                        ? "bg-[#003366] text-white" // Active category styles
                                        : "text-[#003366]" // Inactive category styles
                                        }`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {index + 1}. {category}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="relative bg-[url('https://i.postimg.cc/yYrvcbvJ/Frame-76615.png')] bg-cover bg-center text-white p-4 sm:p-6 md:p-8 rounded-none shadow-lg mt-16 h-[270px] md:h-[340px]">

                        {/* <div className="absolute inset-0 bg-black bg-opacity-0 rounded-lg"></div> */}

                        <div className="relative z-10 space-y-4">
                            <h3 className="text-base font-bold mb-4">Have Additional Questions?</h3>
                            <p className="mb-2 sm:text-lg md:text-xl font-bold text-[#ff7300]">Contact One of Our Agents!</p>
                            <p className="text-sm p">Phone #1: (0712) 819 79 555</p>
                            <p className="text-sm ">Phone #2: (0712) 819 79 555</p>
                            <p className="text-sm mb-6">Email: hello@company.com</p>
                            <button className="flex items-center gap-2 bg-white text-[#003366] px-7 py-1 text-sm rounded-none">
                                Contact Us
                                <GoArrowRight />
                            </button>
                        </div>
                    </div>


                    <div className="mt-10">
                        <div className="flex flex-col items-center space-y-10 px-4 md:px-0">
                            {/* Download Brochure Section */}
                            <div className="w-full bg-[#003366] text-white py-5  flex justify-center items-center gap-6">
                                <h2 className="text-sm font-semibold ">Download Our Services <br /> Brochure</h2>
                                <RiDownloadCloud2Line className="text-2xl" />
                            </div>

                            {/* Testimonial Section */}
                            <div className="w-full max-w-md bg-white text-center p-6">
                                <p className="text-gray-600 italic mb-6 text-xs">
                                    If you can offer a free tier that provides a lot of value, it will naturally help your product to spread much more rapidly.
                                </p>
                                <div className="flex items-center justify-center space-x-4">

                                    <div className="relative w-12 h-12">
                                        <Image
                                            src="https://i.postimg.cc/cJ6KYFkJ/Ellipse-9.png"
                                            alt="Nafiul Islam Jim"
                                            className="rounded-full"
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold">Nafiul Islam Jim</p>
                                        <p className="text-sm text-start text-gray-500">CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Right side - Category Details */}
                <div className="lg:col-span-3">
                    <div className="mb-8">
                        <div className=" mb-4">
                            <Image
                                src={"https://i.postimg.cc/kGR8SFBf/Frame-76613.png"}
                                alt={"image"}
                                width={600}
                                height={400}
                                className="shadow-md w-full h-auto object-cover"
                            />
                        </div>

                        <div className="mt-10">

                            <p className="text-gray-700 mb-4 text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit placeat culpa repellat, eius impedit dolorem sint doloremque temporibus voluptate itaque beatae ab quod sequi eos, in atque recusandae reprehenderit soluta eveniet veritatis deleniti optio ratione tempora. Incidunt eligendi possimus officia alias error perspiciatis sit quod consequuntur? Perspiciatis dolores recusandae sapiente deleniti atque quasi provident quam? Sit optio dolorem sunt nemo eum laborum eligendi, itaque repellat placeat corporis a facilis qui quis temporibus. Cupiditate veniam ipsam laudantium unde facilis cum.
                            </p>

                            <div className="bg-[#e1e7f1] border-l-4 border-[#003366] p-4 rounded-l-lg shadow-sm my-4">
                                <p className="text-gray-700 text-justify">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>


                            <p className="text-gray-700 mb-4 text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius obcaecati quaerat accusamus sapiente perferendis unde recusandae itaque libero est dicta, qui, repellendus culpa illo nam ratione? Consequatur sit quis provident velit. Expedita illum, magnam doloremque voluptate neque vero quis aperiam id nam necessitatibus deserunt, accusamus sapiente commodi enim iusto perspiciatis ipsam ducimus ex at? Perferendis natus molestias corrupti voluptatibus ad?
                            </p>


                            <p className="text-gray-700 mb-4 text-justify">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sit pariatur aspernatur deleniti alias tempore velit quisquam impedit quos nihil ex maiores, praesentium repellendus voluptas dicta libero itaque mollitia eveniet, nobis excepturi aut similique? Illo magnam doloribus voluptate minus dolor quas, distinctio amet maiores dicta nobis reprehenderit cupiditate voluptas optio inventore natus explicabo accusantium consequuntur sint et in. Debitis, aut. Reiciendis inventore quam iste veritatis voluptatem, quae cumque consequuntur? Sapiente voluptatem odio reprehenderit quos porro ut totam ratione laborum, optio, eaque necessitatibus! Vero corrupti, veritatis beatae aliquam quibusdam veniam praesentium?
                            </p>
                        </div>
                    </div>


                    <div className="my-10">
                        <div>
                            <h1 className="text-black font-bold lg:text-3xl text-xl pt-6">
                                We Building Everything Best <span className="text-[#008080] font-bold lg:text-3xl text-xl">That  You Needed.</span>
                            </h1>
                            <p className="text-gray-700 mt-8 text-justify">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>

                        <div>


                            <div className="lg:flex-row md:flex-row flex-col justify-between items-center">
                                <div className="py-8  bg-gray-100">
                                    {loading
                                        ? skeleton?.map((item, idx) => (
                                            <div className="h-14 mb-14 bg-gray-200/50" key={idx}></div>
                                        ))
                                        :
                                        faqData.slice(0, 3)?.map((faq, index) => (
                                            <div
                                                key={index}
                                                className={`px-2 my-2  bg-white`} // Added bg-white and my-2 for background and spacing
                                            >
                                                <Accordion
                                                    type="single"
                                                    collapsible
                                                    value={openItem} // Manage open item here
                                                    onValueChange={(value) => setOpenItem(value)} // Handle state 
                                                >
                                                    <AccordionItem value={`item-${index + 1}`}>
                                                        <AccordionTrigger className="text-base font-medium text-black">{faq?.question}</AccordionTrigger>
                                                        <AccordionContent className="text-sm text-gray-900">
                                                            {faq?.answer}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>
                                        ))}
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceCategory;
