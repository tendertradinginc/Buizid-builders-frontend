import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import MaxWidthWrapper from "../../custom/MaxWidthWrapper";

const Clients = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/client`, {
    cache: "no-store",
  });
  const data = await res.json();
  const clients = data?.data?.result;
  const clientsArray = new Array(12).fill(0);
  return (
    <MaxWidthWrapper className="py-16">
      <div className="flex items-center gap-3">
        {" "}
        <p className="h-0.5 w-14 bg-gradient-to-tr from-[#ffc1957a] to-blue-950"></p>{" "}
        <p className="text-blue-950 font-semibold text-xl">Our partners</p>{" "}
        <hr className="border flex-1 border-[#718698]" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 py-8">
        {clients?.map((item) => (
          <div
            key={item?._id}
            className="shadow-lg hover:scale-110 duration-300 hover:shadow-2xl flex justify-center items-center h-20 md:h-28 rounded-sm border-2 border-gray-50"
          >
            <Image
              src={item.image}
              height={200}
              width={200}
              className="w-auto h-16 object-cover  md:h-20 "
              alt="Client Image"
              loader={customLoader}
            />
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Clients;
