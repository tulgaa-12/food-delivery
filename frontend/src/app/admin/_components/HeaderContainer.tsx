// "use client";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// import { ChangeStateDialog } from "./ChangeStateDialog";
// import axios from "axios";
// import * as React from "react";

// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useEffect, useState } from "react";
// import { Input } from "@/components/ui/input";

// export const HeaderContainer = () => {
//   const [order, setOrder] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     const fetchOrders = async () => {
//       try {
//         const { data } = await axios.get(
//           "http://localhost:8000/Admin/getAllOrder",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         console.log("Orders from backend:", data.orders);
//         setOrder(data.orders);
//       } catch (error) {
//         console.error("Failed to fetch orders", error);
//       }
//     };

//     if (token) {
//       fetchOrders();
//     }
//   }, []);

// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

//   export const columns: ColumnDef<Payment>[] = [
//     {
//       id: "select",
//       header: ({  }) => (
//         <Checkbox
//           checked={
//             table.getIsAllPageRowsSelected() ||
//             (table.getIsSomePageRowsSelected() && "indeterminate")
//           }
//           onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//           aria-label="Select all"
//         />
//       ),
//       cell: ({ row }) => (
//         <Checkbox
//           checked={row.getIsSelected()}
//           onCheckedChange={(value) => row.toggleSelected(!!value)}
//           aria-label="Select row"
//         />
//       ),
//       enableSorting: false,
//       enableHiding: false,
//     },
//     {
//       accessorKey: "status",
//       header: "Status",
//       cell: ({ row }) => (
//         <div className="capitalize">{row.getValue("status")}</div>
//       ),
//     },
//     {
//       accessorKey: "email",
//       header: ({ column }) => {
//         return (
//           <Button
//             variant="ghost"
//             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//           >
//             Email
//             <ArrowUpDown />
//           </Button>
//         )
//       },
//       cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
//     },
//     {
//       accessorKey: "amount",
//       header: () => <div className="text-right">Amount</div>,
//       cell: ({ row }) => {
//         const amount = parseFloat(row.getValue("amount"))
//         // Format the amount as a dollar amount
//         const formatted = new Intl.NumberFormat("en-US", {
//           style: "currency",
//           currency: "USD",
//         }).format(amount)
//         return <div className="text-right font-medium">{formatted}</div>
//       },
//     },
//     {
//       id: "actions",
//       enableHiding: false,
//       cell: ({ row }) => {
//         const payment = row.original
//         return (
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="h-8 w-8 p-0">
//                 <span className="sr-only">Open menu</span>
//                 <MoreHorizontal />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>Actions</DropdownMenuLabel>
//               <DropdownMenuItem
//                 onClick={() => navigator.clipboard.writeText(payment.id)}
//               >
//                 Copy payment ID
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>View customer</DropdownMenuItem>
//               <DropdownMenuItem>View payment details</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         )
//       },
//     },
//   ]
//   return (
//     <div className="w-full pr-20">
//       <div className="flex  items-center p-4">
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild></DropdownMenuTrigger>
//           <Avatar className="ml-auto">
//             <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//             <AvatarFallback>CN</AvatarFallback>
//           </Avatar>
//           <DropdownMenuContent align="end">
//             <DropdownMenuCheckboxItem className="capitalize"></DropdownMenuCheckboxItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//       <Table>
//         {/* <TableHeader>
//           <TableRow className="flex flex-row justify-center items-center gap-5 h-[76px]">
//             <TableHead>
//               <div className=" flex flex-col items-center ">
//                 <TableHead className="text-[20px] font-bold">Orders</TableHead>
//                 <TableHead className="text-[#71717A] text-[12px] font-medium ">
//                   items
//                 </TableHead>
//               </div>
//             </TableHead>
//             <Input
//               type="date"
//               className="w-[300px] h-[36px] rounded-full  ml-150 2xl:ml-280"
//             />
//             <ChangeStateDialog />
//           </TableRow>
//         </TableHeader> */}

//         <TableBody>
//           <TableRow>
//             <TableCell>
//               <div className="flex flex-row justify-between">
//                 <div className="w-[56px] h-[52px] flex justify-center items-center">
//                   <Checkbox className="" />
//                 </div>
//                 <div className="w-[48px] h-[52px] flex  items-center">
//                   <p>№</p>
//                 </div>
//                 <div className="flex items-center  2xl:w-[213px] ">
//                   <p className="text-[#71717A]">Customer</p>
//                 </div>
//                 <div className="flex items-center  2xl:w-[213px] ">
//                   <p className="text-[#71717A]">Food</p>
//                 </div>
//                 <div className="w-[160px] flex items-center">
//                   <p className="text-[#71717A]">Date</p>
//                 </div>
//                 <div className="w-[160px] flex items-center">
//                   <p className="text-[#71717A]">Total</p>
//                 </div>
//                 <div className="flex items-center 2xl:w-[213px] ">
//                   <p className="text-[#71717A]">Delivery Address</p>
//                 </div>
//                 <div className="w-[160px] flex items-center">
//                   <p className="text-[#71717A]">Delivery state</p>
//                 </div>
//               </div>
//             </TableCell>
//           </TableRow>

//         /*/* {order?.map((el: any, index) => {
//             return (
//               <TableRow key={index}>
//                 <TableCell className="h-24 text-center">
//                   <div className="flex flex-row justify-between">
//                     <div className="w-[56px] h-[52px] flex justify-center items-center">
//                       <Checkbox className="" />
//                     </div>
//                     <div className="w-[48px] h-[52px] flex  items-center">
//                       <p></p>
//                     </div>
//                     <div className="flex items-center w-[213px] ">
//                       <p className="text-[#71717A]">{index + 1}</p>
//                     </div>
//                     <div className="flex items-center w-[213px] ">
//                       <p className="text-[#71717A]"></p>
//                     </div>
//                     <div className="w-[160px] flex items-center">
//                       <p className="text-[#71717A]">{el.user}</p>
//                     </div>
//                     <div className="w-[160px] flex items-center">
//                       <p className="text-[#71717A]">{el.totalPrice}</p>
//                     </div>
//                     <div className="flex items-center w-[213px]  ">
//                       <p className="text-[#71717A] flex ">
//                         {el.address.slice(0, 30)}
//                       </p>
//                     </div>
//                     <div className="w-[160px] flex items-center">
//                       <p className="text-[#71717A]">{el.status}</p>
//                     </div>
//                   </div>
//                 </TableCell>
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
//       <div className="flex items-center justify-end space-x-2 py-4">
//         <div className="text-muted-foreground flex-1 text-sm"></div>
//         <div className="space-x-2">
//           <Button variant="outline" size="sm">
//             Previous
//           </Button>
//           <Button variant="outline" size="sm">
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }; */

// "use client";
// import * as React from "react";
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   SortingState,
//   useReactTable,
//   VisibilityState,
// } from "@tanstack/react-table";
// import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// const data: Payment[] = [
//   {
//     _id: "685a9e0e1b7d609526293144",
//     user: { email: "user123@gmail.com" },
//     totalPrice: 12.99,
//     foodOrderItems: [
//       {
//         quantity: 1,
//         food: {
//           _id: "68543dcf9461ca2d50fe19f0",
//           foodName: "Sunshine Stackers ",
//           image:
//             "https://res.cloudinary.com/dvzu0yw0n/image/upload/v1750350571/ce6cd6f59da9ff84c52e907b1955e23221b9a850_fzxnkk.png",
//           price: 12.99,
//           ingredients:
//             "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//           category: "685381da8fe5eabd52e1417c",
//           createdAt: "2025-06-19T16:41:51.817Z",
//           updateAt: "2025-06-19T16:41:51.817Z",
//           __v: 0,
//         },
//       },
//     ],
//     address:
//       "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
//     status: "Pending",
//     createdAt: "2025-06-24T12:46:06.131Z",
//     updatedAt: "2025-06-24T12:46:06.131Z",
//     __v: 0,
//   },
//   {
//     _id: "685a9e4b1b7d60952629314b",
//     user: { email: "user500@gmail.com" },
//     totalPrice: 12.99,
//     foodOrderItems: [
//       {
//         quantity: 1,
//         food: {
//           _id: "68543c0c9461ca2d50fe19ea",
//           foodName: "Cranberry Brie Bites",
//           image:
//             "https://res.cloudinary.com/dvzu0yw0n/image/upload/v1750350537/ddb94c55b6b523cb1d8c85b882363f4719c5aa79_nfsfo9.jpg",
//           price: 12.99,
//           ingredients:
//             "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//           category: "685381da8fe5eabd52e1417c",
//           createdAt: "2025-06-19T16:34:20.132Z",
//           updateAt: "2025-06-19T16:34:20.132Z",
//           __v: 0,
//         },
//       },
//     ],
//     address:
//       "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
//     status: "Pending",
//     createdAt: "2025-06-24T12:47:07.453Z",
//     updatedAt: "2025-06-24T12:47:07.453Z",
//     __v: 0,
//   },
//   {
//     _id: "685a9e4b1b7d60952629314d",
//     user: { email: "user123@gmail.com" },
//     totalPrice: 12.99,
//     foodOrderItems: [
//       {
//         quantity: 1,
//         food: {
//           _id: "68543c0c9461ca2d50fe19ea",
//           foodName: "Cranberry Brie Bites",
//           image:
//             "https://res.cloudinary.com/dvzu0yw0n/image/upload/v1750350537/ddb94c55b6b523cb1d8c85b882363f4719c5aa79_nfsfo9.jpg",
//           price: 12.99,
//           ingredients:
//             "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//           category: "685381da8fe5eabd52e1417c",
//           createdAt: "2025-06-19T16:34:20.132Z",
//           updateAt: "2025-06-19T16:34:20.132Z",
//           __v: 0,
//         },
//       },
//     ],
//     address:
//       "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
//     status: "Pending",
//     createdAt: "2025-06-24T12:47:07.465Z",
//     updatedAt: "2025-06-24T12:47:07.465Z",
//     __v: 0,
//   },
// ];

// export type Payment = {
//   _id: string;
//   user:
//   totalPrice: number;
//   FoodOrderItems: any;
// };

// export type Payment = {
//   _id: string;
//   totalPrice: number;
//   createdAt: string;
//   address: string;
//   __v: number;
//   status: "Pending" | "Delivered";
//   updatedAt: string;
//   user: {
//     email: string;
//   };
//   foodOrderItems: {
//     food: {
//       foodName: string;
//       _id: string;
//       image: string;
//       price: number;
//       ingredients: string;
//       category: string;
//       createdAt: string;
//       updateAt: string;
//       __v: number;
//     };
//     quantity: number;
//   }[];
// };

// export const columns: ColumnDef<Payment>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "user",
//     header: "Customer",
//     cell: ({ row }) => (
//       <div className="capitalize">{row.getValue("user").email}</div>
//     ),
//   },
//   {
//     accessorKey: "",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           Food
//           <ArrowUpDown />
//         </Button>
//       );
//     },
//     cell: ({ row }) => <div className="lowercase">{row.getValue("")}</div>,
//   },
//   {
//     accessorKey: "createdAt",
//     header: () => <div className="text-right">Date</div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("created"));
//       // Format the amount as a dollar amount
//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount);
//       return <div className="text-right font-medium">{amount}</div>;
//     },
//   },
//   {
//     accessorKey: "",
//     header: () => <div className="text-right"></div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue(""));
//       // Format the amount as a dollar amount
//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount);
//       return <div className="text-right font-medium"></div>;
//     },
//   },
//   // {
//   //   accessorKey: "Customer",
//   //   header: "Customer",
//   //   cell: ({ row }) => (
//   //     <div className="capitalize">{row.getValue("Customer")}</div>
//   //   ),
//   // },
//   {
//     accessorKey: "address",
//     header: "Delivery address",
//     cell: ({ row }) => (
//       <div className="capitalize w-3xs text-wrap">
//         {row.getValue("address")}
//       </div>
//     ),
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => (
//       <div className="capitalize">{row.getValue("status")}</div>
//     ),
//   },
//   {
//     accessorKey: "",
//     header: "Total",
//     cell: ({ row }) => <div className="capitalize">{row.getValue("")}</div>,
//   },

//   {
//     id: "actions",
//     enableHiding: false,
//     cell: ({ row }) => {
//       const payment = row.original;
//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <MoreHorizontal />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem
//               onClick={() => navigator.clipboard.writeText(payment.id)}
//             >
//               Copy payment ID
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>View customer</DropdownMenuItem>
//             <DropdownMenuItem>View payment details</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       );
//     },
//   },
// ];
// export const HeaderContainer = () => {
//   const [sorting, setSorting] = React.useState<SortingState>([]);
//   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
//     []
//   );
//   const [columnVisibility, setColumnVisibility] =
//     React.useState<VisibilityState>({});
//   const [rowSelection, setRowSelection] = React.useState({});
//   const table = useReactTable({
//     data,
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//   });
//   return (
//     <div className="w-full">
//       <div className="flex items-center py-4">
//         <Input
//           placeholder="Filter emails..."
//           value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
//           onChange={(event) =>
//             table.getColumn("email")?.setFilterValue(event.target.value)
//           }
//           className="max-w-sm"
//         />
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline" className="ml-auto">
//               Columns <ChevronDown />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             {table
//               .getAllColumns()
//               .filter((column) => column.getCanHide())
//               .map((column) => {
//                 return (
//                   <DropdownMenuCheckboxItem
//                     key={column.id}
//                     className="capitalize"
//                     checked={column.getIsVisible()}
//                     onCheckedChange={(value) =>
//                       column.toggleVisibility(!!value)
//                     }
//                   >
//                     {column.id}
//                   </DropdownMenuCheckboxItem>
//                 );
//               })}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => {
//                   return (
//                     <TableHead key={header.id}>
//                       {header.isPlaceholder
//                         ? null
//                         : flexRender(
//                             header.column.columnDef.header,
//                             header.getContext()
//                           )}
//                     </TableHead>
//                   );
//                 })}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && "selected"}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext()
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length}
//                   className="h-24 text-center"
//                 >
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//       <div className="flex items-center justify-end space-x-2 py-4">
//         <div className="text-muted-foreground flex-1 text-sm">
//           {table.getFilteredSelectedRowModel().rows.length} of{" "}
//           {table.getFilteredRowModel().rows.length} row(s) selected.
//         </div>
//         <div className="space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

enum orderStatusType {
  PENDING = "PENDING",
  CANCELLED = "CANCELLED",
  DELIVERED = "DELIVERED",
}

type PropsType = {
  saveChange: () => void;
  statusHandler: (_orderStatus: orderStatusType) => void;
  orderStatus: orderStatusType;
};

export const HeaderContainer = ({
  saveChange,
  statusHandler,
  orderStatus,
}: PropsType) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="secondary">Change delivery state</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Change delivery state</DialogTitle>
          </DialogHeader>
          <div className="flex my-6 justify-evenly">
            <Button onClick={() => statusHandler(orderStatusType.PENDING)}>
              {orderStatusType.PENDING}
            </Button>
            <Button onClick={() => statusHandler(orderStatusType.DELIVERED)}>
              {orderStatusType.DELIVERED}
            </Button>
            <Button onClick={() => statusHandler(orderStatusType.CANCELLED)}>
              {orderStatusType.CANCELLED}
            </Button>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" onClick={saveChange}>
                Save
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
