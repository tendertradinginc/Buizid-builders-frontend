"use client";
import { customLoader } from "@/app/utils/customLoader";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import { Label } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { toast } from "sonner";

const ProjectUpdate = ({ data, setReload }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDisbaled, setIsdisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const {
    name,
    image,
    shortDescription,
    subTitle,
    description,
    handOverDate,
    location,
    category,
    _id,
  } = data;
  console.log(image);
  const [imageFile, setImageFile] = useState(image);
  const [updatedName, setUpdtedName] = useState(name);
  const [updatedSubTitle, setUpdatedsubTitle] = useState(subTitle);
  const [updateHandOverDate, setUpdateHandOverDate] = useState(handOverDate);
  const [updatedLocation, setUpdatedLocation] = useState(location);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedShorDescription, setUpdatedShortDescription] =
    useState(shortDescription);
  const [updatedCategory, setUpdatedCategory] = useState(category);

  const handleImageUpload = async (e, i) => {
    const file = e.target.files[0];
    let newImgUrl = await uploadImageToImgBB(file);
    let allImage = imageFile;
    console.log(imageFile[i]);
    console.log(allImage);
    if (imageFile[i] !== newImgUrl) {
      allImage[i] = newImgUrl;
      console.log(allImage);
    }
    setImageFile(allImage);
    setIsdisabled(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Loading...");

    try {
      console.log(imageFile);
      const upatedProjectData = {
        name: updatedName,
        image: imageFile,
        shortDescription: updatedShorDescription,
        subTitle: updatedSubTitle,
        description: updatedDescription,
        handOverDate: updateHandOverDate,
        location: updatedLocation,
        category: updatedCategory,
      };

      const response = await fetch(
        `http://localhost:5000/api/v1/projects/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(upatedProjectData),
        }
      );

      if (response.ok) {
        toast.dismiss(toastId);
        toast.success("Success");
        setIsdisabled(true);
        setLoading(false);
        setReload((prev) => prev + 1);
        setIsOpen(false);
        e.target.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "An unexpected error occurred");
      }
    } catch (error) {
      toast.dismiss(toastId);
      setLoading(false);
      toast.error(error.message || "An unexpected error occurred");
      console.error("Error:", error);
    } finally {
      toast.dismiss(toastId);
    }
  };
  // for the date
  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setUpdateHandOverDate(currentDate);
  }, []);
  return (
    <AlertDialog open={isOpen} onClose={() => setIsOpen(false)}>
      <AlertDialogTrigger className="">
        <div onClick={() => setIsOpen(true)} className="py-1 text-blue-950">
          <CiEdit className="m-1 inline text-3xl font-bold"></CiEdit>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-3xl">
        <AlertDialogTitle></AlertDialogTitle>

        <AlertDialogDescription className=" "></AlertDialogDescription>
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full space-y-10 p-5 py-4"
        >
          <div className="mb-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <Label className="mb-2 block">Image 1</Label>
                {image[1] && (
                  <Image
                    loader={customLoader}
                    src={image[0] || ""}
                    alt="Advertisement"
                    width={200}
                    height={200}
                  />
                )}
                <div className="my-4">
                  <Input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={(e) => handleImageUpload(e, 0)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <Label className="mb-2 block">Image 2</Label>
                {image[1] && (
                  <Image
                    loader={customLoader}
                    src={image[1] || ""}
                    alt="Advertisement"
                    width={200}
                    height={200}
                  />
                )}
                <div className="my-4">
                  <Input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={(e) => handleImageUpload(e, 1)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <Label className="mb-2 block">Image 3</Label>
                {image[2] && (
                  <Image
                    loader={customLoader}
                    src={image[2] || ""}
                    alt="Advertisement"
                    width={200}
                    height={200}
                  />
                )}
                <div className="my-4">
                  <Input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={(e) => handleImageUpload(e, 2)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <Label className="mb-2 block">Image 4</Label>
                {image[3] && (
                  <Image
                    loader={customLoader}
                    src={image[3] || ""}
                    alt="Advertisement"
                    width={200}
                    height={200}
                  />
                )}
                <div className="my-4">
                  <Input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={(e) => handleImageUpload(e, 3)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <Label className="mb-2 block">Project Name</Label>
            <Input
              value={updatedName}
              onChange={(e) => {
                setUpdtedName(e.target.value);
                setIsdisabled(false);
              }}
              type="text"
              name="title"
              required
            />
          </div>
          <div className="mb-4">
            <Label className="mb-2 block">Short Description</Label>
            <Textarea
              value={updatedShorDescription}
              onChange={(e) => {
                setUpdatedShortDescription(e.target.value);
                setIsdisabled(false);
              }}
              rows={2}
              className="customScrollbar "
              required
            />
          </div>{" "}
          <div className="mb-4">
            <Label className="mb-2 block">Sub Title</Label>
            <Textarea
              type="text"
              name="subTitle"
              value={updatedSubTitle}
              onChange={(e) => {
                setUpdatedsubTitle(e.target.value);
                setIsdisabled(false);
              }}
              required
            />
          </div>
          <div className="mb-4">
            <Label className="mb-2 block">Description</Label>
            <Textarea
              value={updatedDescription}
              onChange={(e) => {
                setUpdatedDescription(e.target.value);
                setIsdisabled(false);
              }}
              className="customScrollbar min-h-[160px]"
              required
            />
          </div>
          <div className="mb-4">
            <Label className="mb-2 block">Hand Over Date</Label>
            <input
              className="border px-3 py-2 rounded-md"
              type="date"
              name="handOverDate"
              value={updateHandOverDate || ""}
              onChange={(e) => {
                setUpdateHandOverDate(e.target.value);
                setIsdisabled(false);
              }}
              required
            />
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="mb-4">
              <Label className="mb-2 block">Project Location</Label>
              <Input
                value={updatedLocation}
                onChange={(e) => {
                  setUpdatedLocation(e.target.value);
                  setIsdisabled(false);
                }}
                type="text"
                name="title"
                required
              />
            </div>
            <div className="mb-4">
              <Label className="mb-2 block">category</Label>
              <select
                value={updatedCategory}
                onChange={(e) => {
                  setUpdatedCategory(e.target.value);
                  setIsdisabled(false);
                }}
                className="border w-full p-2 rounded-md"
              >
                <option value="up-coming">Up-Coming</option>
                <option value="on-going">On-Going</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          <div className=" ">
            <div
              className={`flex h-10 items-center justify-center rounded font-semibold text-white  ${
                isDisbaled ? "bg-[#91AADF]" : "bg-blue-950"
              }`}
            >
              <button
                disabled={isDisbaled}
                type="submit"
                className={`py-18 h-full w-full ${loading && "hidden"}`}
              >
                <span>Submit</span>
              </button>
            </div>
          </div>
        </form>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ProjectUpdate;
