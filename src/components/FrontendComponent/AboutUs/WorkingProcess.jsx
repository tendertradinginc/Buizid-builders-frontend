

const WorkingProcess = () => {


    const steps = [
        {
            id: 1,
            title: 'Identify and Simplify',
            description: 'Lorem Ipsum is Contrary to popular belief, Lorem Ipsum is not simply random text.',
            step: 'FIRST STEP',
        },
        {
            id: 2,
            title: 'Build and Develop',
            description: 'Lorem Ipsum is Contrary to popular belief, Lorem Ipsum is not simply random text.',
            step: 'SECOND STEP',
        },
        {
            id: 3,
            title: 'Scale and Deploy',
            description: 'Lorem Ipsum is Contrary to popular belief, Lorem Ipsum is not simply random text.',
            step: 'THIRD STEP',
        },
        {
            id: 4,
            title: 'Completion',
            description: 'Lorem Ipsum is Contrary to popular belief, Lorem Ipsum is not simply random text.',
            step: 'FOURTH STEP',
        },
    ];


    return (
        <div className="mt-10 flex justify-center max-w-7xl mx-auto">
            <section className="mt-20">
                <div className="text-center">
                    <h1 className="text-sm text-[#003366] font-bold">WORKING PROCESS</h1>
                    <h2 className="text-2xl text-black font-bold pt-4">Check out our working process</h2>
                </div>
                <div className="mt-16">
                    <p>
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        <br />
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <div>
                        <div className="flex justify-between items-center w-full py-8 relative">
                            {/* Outer Horizontal Line */}
                            {/* <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-[2px] bg-teal-500 z-[-1] mx-4"></div> */}

                            {steps.map((step) => (
                                <div key={step.id} className="relative flex flex-col items-center">
                                    {/* Step Number Circle */}
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full border-2 border-teal-500 text-xl font-semibold text-teal-500">
                                        {step.id < 10 ? `0${step.id}` : step.id}
                                    </div>

                                    {/* Step Content */}
                                    <div className="text-center mt-4">
                                        <h4 className="text-sm text-teal-500 uppercase">{step.step}</h4>
                                        <h3 className="text-lg font-semibold">{step.title}</h3>
                                        <p className="text-gray-500 text-sm mt-2">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default WorkingProcess;