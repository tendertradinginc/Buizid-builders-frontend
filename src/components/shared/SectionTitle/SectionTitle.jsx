const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center font-bold pt-12 pb-24 relative overflow-hidden">
      <div class="absolute top-[50%] left-[50%] md:left-[20%] lg:left-[20%] xl:left-[10%] w-[450px] h-[450px] bg-gradient-to-tr from-red-900 to-transparent rounded-full blur-md"></div>
      <div>
        <h2 className="uppercase text-center text-[#003366] text-xl">
          {title}
        </h2>
        <h3 className="text-4xl mt-4">{subTitle}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
