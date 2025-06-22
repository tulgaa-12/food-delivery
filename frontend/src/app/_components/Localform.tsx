"use client";
import { Textarea } from "@/components/ui/textarea";
import { FormikProps } from "formik";

type Props = {
  formik: FormikProps<{ location: string }>;
};

export const LocationForm = ({ formik }: Props) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-[20px] text-[#71717A] font-semibold">
        Delivery location
      </h4>
      <Textarea
        name="location"
        placeholder="Please share your complete address"
        value={formik.values.location}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="h-[80px]"
      />
      {formik.touched.location && formik.errors.location && (
        <p className="text-red-500 text-sm mt-1">{formik.errors.location}</p>
      )}
    </div>
  );
};
