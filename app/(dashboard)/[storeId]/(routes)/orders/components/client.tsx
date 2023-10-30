"use client";

import { useParams, useRouter } from "next/navigation";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";

import { columns, OrderColumn } from "./columns";

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient:React.FC<OrderClientProps> = ({data}) => {
  return (
    <>
        <Heading title={`訂單(${data.length})`} description="Manage orders for your store" />
     
      <DataTable searchKey='products' columns={columns} data={data} />

    </>
  );
};