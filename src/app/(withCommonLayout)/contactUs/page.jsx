import ContactForm from "@/components/FrontendComponent/ContactUsPage/ContactForm";

const Contact = () => {
  return (
    <div className=" bg-white ">
      <section class=" py-16 md:py-32 w-full rounded-lg container mx-auto">
        <div className="text-center font-bold">
          <h2 className="uppercase text-center text-[#003366] text-xl">
            Contact Us
          </h2>
          <h3 className="text-4xl mt-4">We’d Love To Hear From You</h3>
        </div>
        <div className="mt-16">
          <p className="text-gray-500 md:text-lg   mx-auto text-center">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for ‘lorem ipsum’
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>
          <p className="text-gray-500 md:text-lg  mx-auto text-center mt-8">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for ‘lorem ipsum’
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
