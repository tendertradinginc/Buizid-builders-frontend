import ContactForm from "@/components/FrontendComponent/ContactUsPage/ContactForm";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

const Contact = () => {
  return (
    <div className=" bg-white mt-16">
      <section class=" w-full rounded-lg container mx-auto">
        <SectionTitle
          title="contact Us"
          subTitle="We’d Love To Hear From You"
        ></SectionTitle>
        <div className="">
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
