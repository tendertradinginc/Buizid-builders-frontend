"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import { useEffect } from "react";

const ViewFeedback = ({ data }) => {
  // Log the data to verify if it contains the necessary properties
  useEffect(() => {}, [data]);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className=" bg-blue-950 hover:bg-blue-900 text-white font-bold py-1 px-4 rounded-full">
          View
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-2xl">
        <AlertDialogHeader>
          {data?.image && (
            <Image
              loader={customLoader}
              height={400}
              width={400}
              className="h-64 border shadow-md"
              src={data.image}
              alt="Client Image"
            />
          )}

          <AlertDialogTitle className="my-5 text-2xl font-semibold text-si-primary">
            {data?.authorName || "No Author"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            <p className="text-lg font-semibold">
              {data?.authorDesignation || "No Designation"}
            </p>
            <p className="mt-4 text-sm">{data?.feedback || "No Feedback"}</p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-blue-700 hover:bg-blue-300 text-white">
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ViewFeedback;
