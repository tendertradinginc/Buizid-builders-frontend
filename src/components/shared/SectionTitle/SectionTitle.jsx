const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center font-bold py-32">
      <div className=" ">
        <h2 className="uppercase text-center text-[#003366] text-xl ">
          {title}
        </h2>
        <h3 className="text-4xl mt-4">{subTitle}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
