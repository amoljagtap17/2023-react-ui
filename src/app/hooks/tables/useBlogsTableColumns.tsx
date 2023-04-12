import {
  DeleteForever as DeleteForeverIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";
import { iBlog } from "app/types";
import { useMemo } from "react";

interface iuseBlogsTableColumnsProps {
  onActionButtonClick: (action: "edit" | "delete", blogId: string) => void;
}

export const useBlogsTableColumns = ({
  onActionButtonClick,
}: iuseBlogsTableColumnsProps) => {
  return useMemo<ColumnDef<iBlog>[]>(
    () => [
      {
        id: "categoryName",
        header: "Category",
        accessorKey: "category.name",
      },
      {
        id: "title",
        header: "Title",
        accessorKey: "title",
      },
      {
        id: "ratings",
        header: "Ratings",
        accessorKey: "ratings",
      },
      { id: "isPublished", header: "Published", accessorKey: "isPublished" },
      {
        id: "actions",
        header: "Actions",
        accessorKey: "id",
        cell(props) {
          const blogId = props.getValue() as string;

          return (
            <Box display="flex">
              <Button
                startIcon={<EditIcon />}
                sx={{ paddingX: "10px" }}
                onClick={() => onActionButtonClick("edit", blogId)}
              >
                Edit
              </Button>
              <Button
                startIcon={<DeleteForeverIcon />}
                sx={{ paddingX: "10px" }}
                onClick={() => onActionButtonClick("delete", blogId)}
              >
                Delete
              </Button>
            </Box>
          );
        },
      },
    ],
    // eslint-disable-next-line
    []
  );
};
