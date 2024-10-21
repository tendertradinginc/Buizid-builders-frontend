"use client";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { GoDownload } from "react-icons/go";
import { MdCall } from "react-icons/md";
import Image from "next/image";
import { customLoader } from "@/utils/customLoader";

const ProductDetailsPage = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="container mx-auto p-3 md:p-10 xl:p-0 mt-10">
      <div className="grid grid-cols-12">
        <div className=" col-span-12 lg:col-span-7">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {data?.image?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  src={item}
                  alt={data?.name}
                  height={500}
                  width={600}
                  loader={customLoader}
                  className="max-h-[500px] w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper my-10"
          >
            {data?.image?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  src={item}
                  loader={customLoader}
                  alt={data?.name}
                  height={500}
                  width={600}
                  className="max-h-[100px] w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" col-span-12 lg:col-span-5 p-5 md: px-10">
          <div>
            <h1 className="text-3xl font-semibold text-[#090909]">
              {data?.name}
            </h1>
            <h1 className="text-[#090909] text-xl font-medium my-4">
              <span className="text-[#5F5F5F]">Model : </span>
              {data?.model}
            </h1>
          </div>

          <div className="space-y-3 mt-8">
            <p className="text-[#0E0E0E]">
              <span className="font-semibold">Unique Id :</span>{" "}
              <span className="text-[#39393A]">{data?.id}</span>{" "}
            </p>
            <p className="text-[#0E0E0E]">
              <span className="font-semibold">Category : </span>
              <span className="text-[#39393A]">{data?.category}</span>{" "}
            </p>
            <p className="text-[#0E0E0E]">
              <span className="font-semibold">Brand :</span>{" "}
              <span className="text-[#39393A]">{data?.category}</span>{" "}
            </p>
            <p className="text-[#0E0E0E]">
              <span className="font-semibold"> Warranty : </span>
              <span className="text-[#39393A]">{data?.warranty}</span>{" "}
            </p>
            <p className="text-[#0E0E0E]">
              <span className="font-semibold"> Date Of Manufacture : </span>
              <span className="text-[#39393A]">{data?.manufacture}</span>{" "}
            </p>
          </div>
          <div className="flex flex-wrap gap-5 mt-12 ">
            <Button className="bg-[#003366] hover:bg-[#003366] text-white hover:text-white font-medium flex gap-2 items-center">
              <GoDownload className="text-xl" /> Downlaod Catelogue
            </Button>
            <Button className="bg-[#003366] hover:bg-[#003366] text-white hover:text-white font-medium flex gap-2 items-center">
              <MdCall className="text-xl" /> Contact For Price
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
