import DeleteDataModal from "@/components/shared/DeleteDataModal/DeleteDataModal";
import { customLoader } from "@/utils/customLoader";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import Image from "next/image";
import EditFeedback from "./EditFeedback";
import ViewFeedback from "./ViewFeedback";

const SingleFeedback = ({ clientFeedbackData, index, setReload }) => {
  // const { author, image, authorDesignation: designation, feedback } = clientFeedbackData; // Include feedback
  const { authorName, image, authorDesignation, feedback } = clientFeedbackData;

  return (
    <tr className={index % 2 === 1 ? "bg-[#f2f2f2]" : ""}>
      <td className="px-4 py-1">{index + 1}</td>

      <td className="px-8 py-1 font-semibold text-black">
        {authorName || "N/A"}
      </td>

      <td className="px-8 py-1 font-semibold text-black">
        <Image
          loader={customLoader}
          src={image}
          alt="client"
          height="56"
          width="30"
          className="h-14"
        />
      </td>

      <td className="py-1 px-16 pr-2 font-semibold text-black">
        {authorDesignation || "N/A"}
      </td>

      {/* <td className="py-1 px-8 pr-2 font-semibold text-black">
                <p
                    onClick={() => alert(feedback)}  // Example action, replace with actual modal or action
                    className=" text-black font-bold py-1 px-4 rounded"
                >
                    View
                </p>
            </td> */}

      <td className="py-1 px-8 pr-2 font-semibold text-white">
        {/* Call ViewFeedback component */}
        <ViewFeedback data={clientFeedbackData} />
      </td>

      <td className="flex items-center space-x-3 py-2 md:px-4">
        <AlertDialog>
          <EditFeedback
            data={clientFeedbackData}
            setReload={setReload}
          ></EditFeedback>
          {/* <DeleteFeedback
                        data={clientFeedbackData}
                        setReload={setReload}
                    ></DeleteFeedback> */}
          <DeleteDataModal
            setReload={setReload}
            url={`http://localhost:5000/api/v1/clientFeedback/${clientFeedbackData._id}`}
          />
        </AlertDialog>
      </td>
    </tr>
  );
};

export default SingleFeedback;
