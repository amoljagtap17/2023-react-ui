import { Stack } from "@mui/material";
import { useBlogsCategoriesQuery } from "app/hooks";
import { Heading, ReactQueryWrapper } from "components/lib";
import { BlogsCategoriesFormContainer } from "./BlogsCategoriesFormContainer";

export function BlogCategories() {
  const blogsCategoriesQuery = useBlogsCategoriesQuery();

  return (
    <Stack spacing={4}>
      <Heading text="Update Blogs Categories" center={true} />

      <ReactQueryWrapper queryResult={blogsCategoriesQuery}>
        <BlogsCategoriesFormContainer
          blogsCategories={blogsCategoriesQuery.data || []}
        />
      </ReactQueryWrapper>
    </Stack>
  );
}
