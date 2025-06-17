"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
export const Dishes = () => {
  const [file, setFile] = useState();
  const [url, setUrl] = useState();
  const uploadImage = async () => {
    if (!file) {
      return null;
    }

    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("upload_preset", "fooddelivery");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dk7udsfgs/image/upload `,
        {
          method: "POST",
          body: formdata,
        }
      );
      const result = await response.json();

      console.log(result.secure_url);
    } catch (error: unknown) {
      return { error: "failed to upload image" };
    }
  };
  const fileHanlder = (event: any) => {
    setFile(event.target.files[0]);

    const usrl = URL.createObjectURL(event?.target.files[0]);

    setUrl(url);
  };

  return (
    <div className=" w-[472px] h-[596px]">
      <Input type="file" onChange={fileHanlder} />
      <Button onClick={uploadImage}>Save changes</Button>

      <img src={url} alt=" 212412" className="w-[300px] h-[300px]" />
    </div>
  );
};
