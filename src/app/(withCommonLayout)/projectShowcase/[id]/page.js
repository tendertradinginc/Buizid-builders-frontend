import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineCameraAlt } from 'react-icons/md';


const page = async ({ params }) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/projects/${params?.id}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const project = data?.data;




  return (
    <div className="mt-16">
      <div className="my-20 pt-10">

        <div>
          <h2 className="text-black text-base text-center font-bold">EXPLORE FEATURES</h2>
          <h1 className="text-black text-2xl text-center font-bold mt-4">Presenting Our Successful Project</h1>
          <Breadcrumb className="flex justify-center mt-5">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link className='text-gray-500' href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-500" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link className='text-gray-500' href="/projects">Projects</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-500" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link className='text-gray-500' href="/projects">{project?.category}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>

          </Breadcrumb>
        </div>



        <div className="min-h-[100vh] container mx-auto">
          <div className="text-justify mt-28">

            <h1 className="text-xl font-bold text-black mb-6">{project?.name}</h1>
            <p>
              {project?.shortDescription}
            </p>
            <br />
            <p>
              {project?.description}
            </p>
            <br />
            <p>
              {project?.shortDescription}
            </p>
            <br />
            <p>
              {project?.description}
            </p>
            <br />
            <br />

            <h1 className="text-black text-xl py-4 font-bold">Photo Gallery From Site</h1>

            <div>



              <div className="grid grid-cols-2 gap-10 mt-4">
                {project?.slice(0, 4).map((image, index) => (
                  <div key={index} className="">
                    <Image
                      src={project?.image}
                      alt={"image"}
                      width={600}
                      height={400}
                      className="shadow-md w-full h-full object-cover"
                    />

                    <div className="flex items-center space-x-2 mt-2 text-black">
                      <MdOutlineCameraAlt className="text-lg font-bold text-[#003366]" />
                      <span className="text-[#2b5680]">
                        Photo Capture: <span className="font-semibold">{project?.handOverDate}</span>.
                        Time: <span className="font-semibold">{project?.createdAt}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>



              <div className="mt-20">
                <h1 className="font-semibold text-gray-700 text-xl">


                </h1>
                <br />
                <div className="text-[#636363]">
                  <p>
                    {project?.shortDescription}
                  </p>
                  <br />
                  <p>

                    {project?.description}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default page;
