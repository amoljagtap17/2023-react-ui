import { Create as CreateIcon } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { useBlogsQuery } from "app/hooks";
import { Heading, ReactQueryWrapper } from "components/lib";
import { NewBlog } from "components/sections";
import { useState } from "react";
import { BlogsTable } from "./BlogsTable";

export function Blogs() {
  const [showBlogDialog, setShowBlogDialog] = useState(false);
  const blogQuery = useBlogsQuery(false);

  const toggleShowBlogDialog = () => {
    setShowBlogDialog((prevShowBlogDialog) => !prevShowBlogDialog);
  };

  return (
    <Stack spacing={4}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          startIcon={<CreateIcon />}
          sx={{ display: "flex" }}
          onClick={toggleShowBlogDialog}
        >
          Write Your Story
        </Button>
      </Box>
      <Heading text="Update Blogs" center={true} />

      <ReactQueryWrapper queryResult={blogQuery}>
        <BlogsTable blogs={blogQuery.data || []} />
      </ReactQueryWrapper>

      {showBlogDialog ? <NewBlog handleClose={toggleShowBlogDialog} /> : null}
    </Stack>
  );
}
