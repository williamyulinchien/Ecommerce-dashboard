"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { CellAction } from "./cell-action"
import { Button } from "@/components/ui/button"
export type ColorColumn = {
  id: string
  name:string
  value:string
  createdAt:string  ;
}

export const columns: ColumnDef<ColorColumn>[] = [
  {
    accessorKey: "name",
    header: "Name"
  },
  {
    accessorKey: "value",
    header: "Value",
    cell:({row})=>(
      <div className="flex items-center gap-x-2">
        <div className="h-6 w-6 rounded-full border"
        style={{backgroundColor:row.original.value}}/>
      </div>
    )
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
