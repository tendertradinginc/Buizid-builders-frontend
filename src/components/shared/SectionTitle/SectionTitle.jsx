const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center font-bold pt-12 pb-24">
      <h2 className="uppercase text-center text-[#003366] text-xl">{title}</h2>
      <h3 className="text-4xl mt-4">{subTitle}</h3>
    </div>
  );
};

export default SectionTitle;
