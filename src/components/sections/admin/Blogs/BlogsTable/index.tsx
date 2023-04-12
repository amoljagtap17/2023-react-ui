import { useBlogsTableColumns } from "app/hooks";
import { iBlog } from "app/types";
import { Table } from "components/lib";
import { NewBlog } from "components/sections";
import { useState } from "react";
import { DeleteBlogDialog } from "../DeleteBlogDialog";

interface iBlogsTableProps {
  blogs: iBlog[];
}

export function BlogsTable({ blogs }: iBlogsTableProps) {
  const [action, setAction] = useState("");
  const [blogId, setBlogId] = useState("");

  const onActionButtonClick = (action: "edit" | "delete", blogId: string) => {
    setAction(action);
    setBlogId(blogId);
  };

  const columns = useBlogsTableColumns({
    onActionButtonClick,
  });

  const handleDialogClose = () => {
    setAction("");
    setBlogId("");
  };

  let editDefaultValues;

  if (blogId) {
    const { id, title, excerpt, content, category, isPublished, ratings } =
      blogs.filter((blog) => blog.id === blogId)[0];

    editDefaultValues = {
      id,
      title,
      excerpt,
      content,
      isPublished,
      ratings,
      blogCategoryId: category.id,
    };
  }

  return (
    <>
      <Table data={blogs} columns={columns} />
      {action === "delete" ? (
        <DeleteBlogDialog blogId={blogId} handleClose={handleDialogClose} />
      ) : null}
      {action === "edit" ? (
        <NewBlog
          handleClose={handleDialogClose}
          defaultValues={editDefaultValues}
        />
      ) : null}
    </>
  );
}
