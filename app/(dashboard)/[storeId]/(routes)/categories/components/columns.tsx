"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { CellAction } from "./cell-action"
import { Button } from "@/components/ui/button"
export type CategoryColumn = {
  id: string
  name:string
  billboardLabel:string
  createdAt:string;
}

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "name",
    header: "Name"
  },
  {
    accessorKey: "billboard",
    header: "Billboard",
    cell:({row})=>row.original.billboardLabel
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
           Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },

  
]