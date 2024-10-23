import DeleteDataModal from "@/components/shared/DeleteDataModal/DeleteDataModal";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import ProjectUpdate from "./ProjectUpdate";

const SingleProject = ({ data, index, setReload }) => {
  const { name, category } = data;
  return (
    <tr className={` ${index % 2 === 1 ? "bg-[#f2f2f2]" : ""}`}>
      <td className="px-4 py-1">{index + 1}</td>
      <td className="px-4 py-1 text-left font-semibold">{name}</td>
      <td className="px-4 py-1 text-left font-semibold">{category}</td>

      <td className="space-x-3 md:px-4">
        <AlertDialog className="flex gap-3">
          {/* <ViewBlog data={data}/> */}
          <ProjectUpdate setReload={setReload} data={data} />

          <DeleteDataModal
            setReload={setReload}
            url={`http://localhost:5000/api/v1/projects/${data?._id}`}
          />
        </AlertDialog>
      </td>
    </tr>
  );
};

export default SingleProject;
