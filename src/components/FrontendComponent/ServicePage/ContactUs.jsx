import Link from "next/link";

const ContactUs = () => {
    return (
        <div className="mt-10 h-[50vh] text-center p-6 bg-[#e6ebf0]">
            <h1 className=" lg:pt-16 pt-10 text-lg lg:text-3xl font-bold text-black">We Building Everything Best That You
                <br />
                Needed.</h1>
            <Link href={"/contactUs"} >
                <button className="px-7 py-2 mt-8 text-sm font-medium text-white  bg-[#008080]">Contact Us</button>
            </Link>
        </div>
    );
};

export default ContactUs;