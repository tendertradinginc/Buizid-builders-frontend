"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { RiDownloadCloud2Line } from "react-icons/ri";


const ServiceCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState("Construction Services");


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
                </div>


            </div>
        </div>
    );
};

export default ServiceCategory;
