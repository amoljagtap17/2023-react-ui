import { Grid, Stack } from "@mui/material";
import { useBlogsCategoriesQuery } from "app/hooks";
import { CategoryCard, Heading, ReactQueryWrapper } from "components/lib";

export function CategoryList() {
  const blogsCategoriesQuery = useBlogsCategoriesQuery();

  const categoryListing = blogsCategoriesQuery.data?.map(
    ({ id, name, description }) => (
      <Grid item xs={12} md={6} lg={4} key={id} padding={2}>
        <CategoryCard name={name} description={description} />
      </Grid>
    )
  );

  return (
    <Stack spacing={4}>
      <Heading text="Categories" center={true} />
      <ReactQueryWrapper queryResult={blogsCategoriesQuery}>
        <Grid container>{categoryListing}</Grid>
      </ReactQueryWrapper>
    </Stack>
  );
}
