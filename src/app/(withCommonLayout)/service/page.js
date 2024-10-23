import ContactUs from "@/components/FrontendComponent/ServicePage/ContactUs";
import ServiceCategory from "@/components/FrontendComponent/ServicePage/ServiceCategory";

const Service = () => {
    return (
        <div className='mt-36'>
            <div className="text-center">
                <h1 className="lg:text-lg text-sm text-[#003366] font-bold">OUR SERVICES</h1>
                <h2 className="lg:text-3xl text-lg text-black font-bold pt-4">Your Comfort is Our #1 Priority</h2>
            </div>
            <ServiceCategory />
            <ContactUs />
        </div>
    );
};

export default Service;