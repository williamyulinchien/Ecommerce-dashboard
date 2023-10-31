"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

import {ColorColumn, columns } from "./columns";

interface ColorsCleintProps {
  data:ColorColumn[];
}

export const ColorsClient:React.FC<ColorsCleintProps> = ({data}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`顏色(${data.length})`} description="Manage Colors for your store" />
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey='name' columns={columns} data={data} />
      <Heading title="API" description="API Calls for color" />
      <Separator />
      <ApiList entityName="color" entityIdName="colorId" />
    </>
  );
};