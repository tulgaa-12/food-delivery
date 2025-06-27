// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Plus } from "lucide-react";
// import { useState } from "react";
// import { Formik, useFormik } from "formik";
// import * as Yup from "yup";
// import { CreateCategory } from "./CreateCategory";
// import axios from "axios";

// const validtionschema = Yup.object({
//   creatcategory: Yup.string().required("zaaval bich"),
// });

// type Props = {
//   onAddCategory: () => void;
// };

// export const Realcreatecategory = ({ onAddCategory }: Props) => {
//   const [addCategory, setAddCategory] = useState();

//   // const formik = useFormik({
//   //   initialValues: {
//   //     createcategory: "",
//   //   },
//   //   validationSchema: validtionschema,
//   //   onSubmit: async (values) => {
//   //     try {
//   //       const token = window?.localStorage?.getItem("token");
//   //       const response = await axios.post(
//   //         "http://localhost:8000/addCategory",
//   //         {
//   //           categoryName: values.createcategory,
//   //         },
//   //         {
//   //           headers: {
//   //             Authorization: `Bearer ${token}`,
//   //           },
//   //         }
//   //       );
//   //       setAddCategory(response.data.categoryName);
//   //     } catch (err) {
//   //       console.log(err, "aldaa garsan");
//   //     }
//   //   },
//   // });

//   const formik = useFormik({
//     initialValues: {
//       createcategory: "",
//     },
//     validationSchema: validtionschema,
//     onSubmit: async (values, { resetForm }) => {
//       try {
//         const token = window?.localStorage?.getItem("token");
//         const res = await axios.post(
//           "http://localhost:8000/addCategory",
//           {
//             categoryName: values.createcategory,
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         console.log("Амжилттай нэмэгдлээ:", res.data);
//         resetForm();
//         onAddCategory(); // ✅ Категори дахин дуудах
//       } catch (err) {
//         console.log(err, "aldaa garsan");
//       }
//     },
//   });
//   return (
//     <Dialog>
//       <form onSubmit={formik.handleSubmit}>
//         <DialogTrigger asChild>
//           <Button
//             variant="outline"
//             className="rounded-full h-[36px] w-[36px] bg-[#EF4444] text-[white]">
//             <Plus />
//           </Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Add new category</DialogTitle>
//             <DialogDescription></DialogDescription>
//           </DialogHeader>
//           <div className="grid gap-4">
//             <div className="grid gap-3">
//               <Label htmlFor="name-1">Category name</Label>
//               <Input
//                 id="createcategory"
//                 name="createcategory"
//                 placeholder="Type category name..."
//                 value={formik.values.createcategory}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//             </div>
//           </div>

//           <DialogFooter>
//             <DialogClose asChild>
//               <Button type="submit">Add category</Button>
//             </DialogClose>
//           </DialogFooter>
//         </DialogContent>
//       </form>
//     </Dialog>
//   );
// };
