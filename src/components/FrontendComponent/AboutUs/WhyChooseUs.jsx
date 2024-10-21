import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


const WhyChooseUs = () => {



    return (
        <div className="mt-10 ">
            <section>
                <div className="text-center">
                    <h1 className="text-sm text-[#003366] font-bold">WHY CHOOSE US</h1>
                    <h2 className="text-2xl text-black font-bold pt-4">We Help You Build On Your Past And Prepare For The Feature</h2>
                </div>
                <div className="mt-10 flex justify-center max-w-7xl mx-auto">
                    <Tabs defaultValue="mission" className="w-full">
                        <TabsList className="flex justify-center space-x-12 max-w-lg h-14 mx-auto px-4">
                            <TabsTrigger
                                value="mission"
                                className="rounded-none px-1 py-2 text-sm font-semibold focus:outline-none transition duration-300 ease-in-out  data-[state=active]:bg-secondary data-[state=active]:shadow-none data-[state=active]:text-[#003366] data-[state=active]:border-b-2 data-[state=active]:border-gray-500"
                            >
                                Mission
                            </TabsTrigger>
                            <TabsTrigger
                                value="vision"
                                className="rounded-none px-1 py-2 text-sm font-semibold focus:outline-none transition duration-300 ease-in-out  data-[state=active]:bg-secondary data-[state=active]:shadow-none data-[state=active]:text-[#003366] data-[state=active]:border-b-2 data-[state=active]:border-gray-500"
                            >
                                Vision
                            </TabsTrigger>
                            <TabsTrigger
                                value="value"
                                className="rounded-none px-1 py-2 text-sm font-semibold focus:outline-none transition duration-300 ease-in-out  data-[state=active]:bg-secondary data-[state=active]:shadow-none data-[state=active]:text-[#003366] data-[state=active]:border-b-2 data-[state=active]:border-gray-500"
                            >
                                Value
                            </TabsTrigger>
                            <TabsTrigger
                                value="awardWining"
                                className="rounded-none px-1 py-2 text-sm font-semibold focus:outline-none transition duration-300 ease-in-out  data-[state=active]:bg-secondary data-[state=active]:shadow-none data-[state=active]:text-[#003366] data-[state=active]:border-b-2 data-[state=active]:border-gray-500"
                            >
                                Award Wining
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent className="mt-6" value="mission">
                            <h1 className="font-bold text-lg mb-6 text-black">Release of Letraset sheets containing Lorem Ipsum passages.</h1>
                            <p>
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                <br />
                                <br />
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <p className="max-w-6xl mx-auto mt-6">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                                1. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br />
                                2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy. <br />
                                3. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make. <br />
                                4. It was popularized in the 1960s with the release of Letterset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like.
                            </p>
                        </TabsContent>
                        <TabsContent value="vision">
                            <h1 className="font-bold text-lg mb-6 text-black">
                                Release of Letraset sheets containing Lorem Ipsum passages.
                            </h1>
                            <p>
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </TabsContent>
                        <TabsContent value="value">
                            <h1 className="font-bold text-lg mb-6 text-black">
                                Release of Letraset sheets containing Lorem Ipsum passages.
                            </h1>
                            <p>
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </TabsContent>
                        <TabsContent value="awardWining">
                            <h1 className="font-bold text-lg mb-6 text-black">
                                Release of Letraset sheets containing Lorem Ipsum passages.
                            </h1>
                            <p>
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </div>
    );
};

export default WhyChooseUs;