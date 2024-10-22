import DeleteDataModal from "@/components/shared/DeleteDataModal/DeleteDataModal";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import ProjectUpdate from "./ProductUpdate";

const SingleProduct = ({ data, index, setReload }) => {
  const { name, status, category } = data;
  return (
    <tr className={` ${index % 2 === 1 ? "bg-[#f2f2f2]" : ""}`}>
      <td className="px-4 py-1">{index + 1}</td>
      <td className="px-4 py-1 text-center font-semibold">{name}</td>
      <td className="px-4 py-1 text-center font-semibold">{category}</td>
      <td className="px-4 py-1 text-center font-semibold">
        {status ? "Yes" : "No"}
      </td>

      <td className="space-x-3 md:px-4">
        <AlertDialog className="flex gap-3">
          {/* <ViewBlog data={data}/> */}
          <ProjectUpdate setReload={setReload} data={data} />

          <DeleteDataModal
            setReload={setReload}
            url={`http://localhost:5000/api/v1/products/${data?._id}`}
          />
        </AlertDialog>
      </td>
    </tr>
  );
};

export default SingleProduct;
