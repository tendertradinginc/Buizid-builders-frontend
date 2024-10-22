import Image from "next/image";


const OurPromises = () => {
    return (
        <div className="mt-20 ">
            <section className="mt-10 max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="lg:text-lg text-sm text-[#003366] font-bold">OUR PROMISES</h1>
                    <h2 className="lg:text-3xl text-lg text-black font-bold pt-4">Our Promise To Solve Your Problem</h2>
                </div>
                <div className="lg:my-20 my-4 flex flex-col lg:flex-row justify-between gap-6 lg:px-0 px-4">
                    <div className="flex-1">
                        <Image
                            src={"https://i.postimg.cc/MThxLLf0/Frame-76640.png"}
                            alt={"image"}
                            width={600}
                            height={400}
                            className="shadow-md w-full h-auto object-cover"
                        />
                    </div>
                    <div className="text- lg:p-6 lg:text-lg text-base font-medium text-[#5f5f5f] flex-1 text-justify ">
                        <p>
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            <br />
                            <br />
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.
                            <br />
                            <br />
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy
                        </p>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default OurPromises;