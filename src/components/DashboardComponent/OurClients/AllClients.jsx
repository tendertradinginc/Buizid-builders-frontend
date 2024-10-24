"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import PaginationBlog from "@/components/shared/pagination/PaginationShadcn";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { CgSpinnerAlt } from "react-icons/cg";
import { FaPlusCircle } from "react-icons/fa";
import CreateClient from "./CreateClient";
import SingleClient from "./SingleClient";

const AllClients = () => {
  const searchParams = useSearchParams();
  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [limit, setLimit] = useState(searchParams.get("limit") || 5);
  const [totalClient, setTotalClient] = useState(0);
  const [reload, setReload] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/client?page=${page}&limit=${limit}`
        );
        const data = await response.json();

        setClients(data?.data.result);
        setTotalClient(data?.data?.total);
      } catch (error) {
        console.error("Error fetching :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, [reload, page, limit]);

  const totalPage = Math.ceil(totalClient / limit);

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearchQuery(newSearchTerm);
    setPage(1); // Reset to page 1 when a new search is performed
    updateURL(1, limit, newSearchTerm); // Update the URL with new search term
  };

  // Update the URL with the search term
  const updateURL = (newPage, newLimit, newSearchTerm) => {
    const params = new URLSearchParams();
    params.set("page", newPage);
    params.set("limit", newLimit);
    if (newSearchTerm) {
      params.set("search", newSearchTerm);
    }
    window.history.replaceState({}, "", `?${params.toString()}`); // Update the URL without reloading
  };

  const filteredClients = clients.filter(
    (client) =>
      client.name?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
      client.description?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  const skeleton = new Array(10).fill(Math.random());

  return (
    <div>
      <div className="min-h-[100vh]">
        <div className="container mx-auto px-10">
          <br />

          <div className="mx-auto w-full max-w-screen-lg bg-white p-8">
            <div className="overflow-x-auto sm:px-1 min-h-[60vh]">
              <div className="flex items-center justify-between pb-6">
                <h2 className="text-2xl font-semibold text-blue-950">
                  <AiFillDatabase className="mb-1 inline"></AiFillDatabase>
                  Clients List - {totalClient}
                </h2>

                <div className="mt-4 flex items-center justify-between px-2">
                  {/* Search Input */}
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="mr-4 w-48"
                  />
                  <div>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          className="cursor-pointer rounded-lg border px-3 py-1 text-base font-semibold   duration-500  hover:bg-blue-950 hover:text-white text-black"
                          variant="outline"
                        >
                          Create Client{" "}
                          <span className="ml-2">
                            <FaPlusCircle className="inline" />
                          </span>{" "}
                        </Button>
                      </AlertDialogTrigger>

                      <AlertDialogContent className="max-w-4xl">
                        <CreateClient setReload={setReload} />

                        <AlertDialogFooter>
                          <AlertDialogCancel className="bg-blue-950 hover:bg-blue-900 text-white hover:text-white">
                            Close
                          </AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
              <hr />

              {loading ? (
                <div className="flex min-h-[50vh] items-center justify-center">
                  <span className="animate-spin text-si-primary">
                    <CgSpinnerAlt className="h-10 w-10" />
                  </span>
                </div>
              ) : (
                <table className="w-full table-auto">
                  <thead className="bg-blue-950 text-white">
                    <tr className="text-left">
                      <th className="px-4 py-2">No</th>
                      <th className="py-2 pl-36">Image</th>
                      <th className="py-2 pl-32">Title</th>
                      {/* <th className="py-2">Details</th> */}
                      <th className="px-4 pl-8">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredClients.length > 0 ? (
                      filteredClients?.map((client, index) => (
                        <SingleClient
                          key={client?._id}
                          index={index}
                          clientData={client}
                          setReload={setReload}
                        />
                      ))
                    ) : (
                      <p className="text center">No Clients Available.</p>
                    )}
                  </tbody>
                </table>
              )}
            </div>
            {!loading && (
              <div className="mt-8">
                <PaginationBlog data={{ page, limit, totalPage }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClients;
