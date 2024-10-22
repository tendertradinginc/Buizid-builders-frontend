"use client";
import PaginationRaw from "@/components/shared/pagination/PaginationRaw";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useAllProducts from "@/hooks/useAllProducts";
import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(12);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const { products, setReload, loading, productsCount } = useAllProducts(
    currentPage,
    pageLimit,
    search,
    category
  );

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/category/product-category")
      .then((res) => res.json())
      .then((data) => {
        setAllCategories(data?.data);
        setCategoryLoading(false);
        console.log(data?.data);
      })
      .catch((err) => console.log(err));
  }, [categoryLoading]);
  return (
    <div className="py-20 container mx-auto">
      <div className="text-center space-y-2 mt-10">
        <h3 className="text-[#003366] font-semibold text-xl">OUR PRODUCT</h3>
        <h1 className="text-[#0E0E0E] text-4xl font-bold">
          We Are provide Some Qualityful Product
        </h1>
      </div>
      <div className="flex gap-5 flex-wrap md:flex-nowrap my-16">
        <div className="flex-1 relative">
          <Input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="border border-[#003366]"
          />{" "}
          <FaSearch className="absolute top-2.5 right-2 text-[#003366]" />
        </div>
        <Select
          onValueChange={(value) => {
            setReload((prev) => prev + 1);
            setCategory(value);
            console.log(category);
          }}
          className="bg-transparent "
        >
          <SelectTrigger className="bg-transparent max-w-sm border border-[#003366] h-[37px]">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              {!categoryLoading &&
                allCategories?.map((item) => (
                  <SelectItem key={item?._id} value={item?.name}>
                    {item?.name}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>{" "}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  min-h-[60vh]">
        {loading
          ? "loading..."
          : products?.length > 0
          ? products?.map((item) => (
              <div className="bg-white" key={item?._id}>
                <Image
                  src={item?.image[0]}
                  alt={item?.name}
                  height={400}
                  width={300}
                  style={{ width: "100%" }}
                  loader={customLoader}
                  className="w-full h-auto"
                />

                <div className="p-3 space-y-3">
                  <h1 className="text-[#090909] text-[22px] font-semibold ">
                    {item?.name}
                  </h1>
                  <p>
                    Model No.{" "}
                    <span className="font-semibold">{item?.model}</span>
                  </p>
                  <p className="line-clamp-2 text-sm">
                    {item?.shortDescription}
                  </p>
                  <div className="flex justify-center py-2">
                    <Link
                      className="inline-block mx-auto"
                      href={`/products/${item?._id}`}
                    >
                      {" "}
                      <Button className="bg-[#09FF220F] hover:bg-[#09FF220F] text-[#00DF16] hover:text-[#00DF16] font-semibold ">
                        Explore More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          : "No Data Found"}
      </div>
      {products?.length > 0 && (
        <div className="mt-12">
          <PaginationRaw
            data={{
              setCurrentPage,
              dataCount: productsCount,
              currentPage,
              pageLimit,
              setPageLimit,
              defaultPageLimit: 12,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
