"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import { Payment } from "./_components/Column";
import { format } from "date-fns";
import { HeaderContainer } from "./_components/HeaderContainer";
// import { DataTable } from "./_components/DataTable";
import { StateChanger } from "./_components/DataTable";
import { DataTable } from "./_components/Data";
enum orderStatusType {
  PENDING = "PENDING",
  CANCELLED = "CANCELLED",
  DELIVERED = "DELIVERED",
}
const AdminHomePage = () => {
  const [order, setOrder] = useState<any[]>([]);
  const [selectedOrdersId, setSelectedOrdersId] = useState<string[]>([]);
  const [orderStatus, setOrderStatus] = useState<orderStatusType>(
    orderStatusType.PENDING
  );

  useEffect(() => {
    const fetchData = async () => {
      const token = window?.localStorage?.getItem("token");

      const response: any = await axios.get(
        "https://food-delivery-1-6g0i.onrender.com/Admin/getAllOrder",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrder(response.data.orders);
    };
    fetchData();
  }, []);

  const data: Payment[] = order?.map((el: any, index) => ({
    id: el._id,
    number: index + 1,
    customer: `${el.user?.email ?? "No email"}`,
    food: `${el.foodOrderItems?.length || 0} hool`,
    date: format(new Date(el.createdAt), "yyyy-MM-dd"),
    total: el.totalPrice,
    status: el.status,
    address: el.address,
  }));

  console.log(data, "data");

  const selectHandler = (id: string, selected: boolean) => {
    if (selected) {
      setSelectedOrdersId((prev) => [...prev, id]);
    } else {
      const removed = selectedOrdersId.filter((item) => item != id);
      setSelectedOrdersId(removed);
    }
  };

  const statusHandler = (orderStatus: orderStatusType) => {
    setOrderStatus(orderStatus);
  };

  const saveChange = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Log in hiine uu!");
      return;
    }

    const prepare = selectedOrdersId.map((el) => ({
      _id: el,
      status: orderStatus,
    }));

    await axios.put(
      "https://food-delivery-1-6g0i.onrender.com/Admin/getAllOrder",
      {
        orders: prepare,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const updated = order.map((item) => {
      return selectedOrdersId.map((el) => {
        if (item._id === el) {
          return { ...item, status: orderStatus };
        } else {
          return item;
        }
      })[0];
    });
    setOrder(updated);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between">
        <h1 className="text-2xl font-black mb-5">Orders</h1>
        <HeaderContainer
          saveChange={saveChange}
          statusHandler={statusHandler}
          orderStatus={orderStatus}
        />
      </div>
      <DataTable data={data} onCheckedChange={selectHandler} />
    </div>
  );
};

export default AdminHomePage;
