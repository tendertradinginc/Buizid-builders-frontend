"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { uploadImageToImgBB } from "@/utils/imageUpload";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export default function CreateServiceForm({ setReload }) {
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    shortDescription: "",
    highlightDescription: "",
    fullDescription: "",
    subtitle: "",
    subtitleDescription: "",
    featuredStatus: false,
  });

  // Image upload handler
  const handleImageUpload = async (e) => {
    setUploading(true);
    try {
      const image = e.target.files[0];
      const imageUrl = await uploadImageToImgBB(image);
      setFormData((prev) => ({ ...prev, image: imageUrl }));
    } catch (error) {
      toast.error("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.image ||
      !formData.shortDescription ||
      !formData.highlightDescription ||
      !formData.fullDescription ||
      !formData.subtitle ||
      !formData.subtitleDescription
    ) {
      toast.error("Please provide all required fields.");
      return;
    }

    try {
      const dataToSend = {
        name: formData.name,
        image: formData.image,
        shortDescription: formData.shortDescription,
        highlightDescription: formData.highlightDescription,
        fullDescription: formData.fullDescription,
        subtitle: formData.subtitle,
        subtitleDescription: formData.subtitleDescription,
        featuredStatus: formData.featuredStatus,
      };

      const response = await axios.post(
        "http://localhost:5000/api/v1/service",
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Service created successfully!");
      setFormData({
        name: "",
        image: "",
        shortDescription: "",
        highlightDescription: "",
        fullDescription: "",
        subtitle: "",
        subtitleDescription: "",
      });
      setReload((prev) => prev + 1);
    } catch (error) {
      console.error("Failed to submit form:", error.response || error);
      toast.error(
        `Failed to create service: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="px-4">
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="service-name">Service Name</Label>
          <Input
            name="service-name"
            placeholder="Enter service name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service-image">Service Image</Label>
          <Input
            type="file"
            accept="image/*"
            name="service-image"
            disabled={uploading}
            onChange={handleImageUpload}
          />
        </div>

        {formData.image && (
          <Image
            src={formData.image}
            alt="service-img"
            height={100}
            width={100}
            className="size-40"
          />
        )}

        <div className="space-y-2">
          <Label htmlFor="short-description">Short Description</Label>
          <Input
            name="short-description"
            placeholder="Enter short description"
            value={formData.shortDescription}
            onChange={(e) =>
              setFormData({ ...formData, shortDescription: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="highlightDescription">Highlight Description</Label>
          <Textarea
            name="highlightDescription"
            placeholder="Enter full description"
            value={formData.highlightDescription}
            onChange={(e) =>
              setFormData({ ...formData, highlightDescription: e.target.value })
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="full-description">Full Description</Label>
          <Textarea
            name="full-description"
            placeholder="Enter full description"
            value={formData.fullDescription}
            onChange={(e) =>
              setFormData({ ...formData, fullDescription: e.target.value })
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subtitle">Sub title</Label>
          <Textarea
            name="subtitle"
            placeholder="Enter full description"
            value={formData.subtitle}
            onChange={(e) =>
              setFormData({ ...formData, subtitle: e.target.value })
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subtitleDescription">Subtitle Description</Label>
          <Textarea
            name="subtitleDescription"
            placeholder="Enter full description"
            value={formData.subtitleDescription}
            onChange={(e) =>
              setFormData({ ...formData, subtitleDescription: e.target.value })
            }
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="featured-status"
            checked={formData.featuredStatus}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, featuredStatus: checked })
            }
          />
          <Label htmlFor="featured-status">Featured Status</Label>
        </div>

        <Button type="submit" disabled={uploading}>
          Submit
        </Button>
      </div>
    </form>
  );
}
