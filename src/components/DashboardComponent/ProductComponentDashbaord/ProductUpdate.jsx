"use client";
import { customLoader } from "@/app/utils/customLoader";
import { ProductCategoryCombobox } from "@/components/shared/CategoryCombobox/ProductCategoryCombobox";
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

const ProductUpdate = ({ data, setReload }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDisbaled, setIsdisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  // const [category, setCategory] = useState(data?.ccategory || "");
  const {
    name,
    model,
    category,
    brand,
    image,
    warranty,
    manufacture,
    shortDescription,
    fullDescription,
    status,
    _id,
  } = data;
  console.log(image);
  const [imageFile, setImageFile] = useState(image);
  const [updateModel, setUpdateModel] = useState(model);
  const [updateBrand, setUpdateBrand] = useState(brand);
  const [updateWarranty, setUpdateWarranty] = useState(warranty);
  const [updateManufacture, setUpdateManufacture] = useState(manufacture);
  const [updatedName, setUpdtedName] = useState(name);
  const [updatedDescription, setUpdatedDescription] = useState(fullDescription);
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
      const upatedProjectData = {
        name: updatedName,
        model: updateModel,
        category: updatedCategory,
        brand: updateBrand,
        image: imageFile,
        warranty: updateWarranty,
        manufacture: updateManufacture,
        shortDescription: updatedShorDescription,
        fullDescription: updatedDescription,
      };

      const response = await fetch(
        `http://localhost:5000/api/v1/products/${_id}`,
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
    setUpdateWarranty(currentDate);
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
            <Label className="mb-2 block"> Name</Label>
            <Input
              value={updatedName}
              onChange={(e) => {
                setUpdtedName(e.target.value);
                setIsdisabled(false);
              }}
              type="text"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <Label className="mb-2 block"> Model</Label>
            <Input
              value={updateModel}
              onChange={(e) => {
                setUpdateModel(e.target.value);
                setIsdisabled(false);
              }}
              type="text"
              name="model"
              required
            />
          </div>
          <div className="mb-4">
            <Label className="mb-2 block">category</Label>
            <ProductCategoryCombobox
              category={updatedCategory}
              setCategory={setUpdatedCategory}
              apiEndPoint="product-category"
              defaultAll={true}
            />
          </div>
          <div className="mb-4">
            <Label className="mb-2 block">Brand</Label>
            <Textarea
              type="text"
              name="subTitle"
              value={updateBrand}
              onChange={(e) => {
                setUpdateBrand(e.target.value);
                setIsdisabled(false);
              }}
              required
            />
          </div>
          <div className="mb-4">
            <Label className="mb-2 block">Warranty</Label>
            <input
              className="border px-3 py-2 rounded-md"
              type="date"
              name="handOverDate"
              value={updateWarranty || ""}
              onChange={(e) => {
                setUpdateWarranty(e.target.value);
                setIsdisabled(false);
              }}
              required
            />
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="mb-4">
              <Label className="mb-2 block">Manufacture</Label>
              <Input
                value={updateManufacture}
                onChange={(e) => {
                  setUpdateManufacture(e.target.value);
                  setIsdisabled(false);
                }}
                type="text"
                name="title"
                required
              />
            </div>
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

export default ProductUpdate;
