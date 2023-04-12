import { Grid, Stack } from "@mui/material";
import { useBlogsQuery } from "app/hooks";
import { BlogCard, Heading, ReactQueryWrapper } from "components/lib";

export function BlogList() {
  const blogsQuery = useBlogsQuery();

  const blogListing = blogsQuery.data?.map(
    ({ id, title, category, createdAt, excerpt, ratings, slug }) => (
      <Grid item xs={12} key={id} padding={2}>
        <BlogCard
          title={title}
          createdAt={createdAt}
          slug={slug}
          excerpt={excerpt}
          ratings={ratings}
          category={category}
        />
      </Grid>
    )
  );

  return (
    <Stack spacing={4}>
      <Heading text="Blogs" center={true} />
      <ReactQueryWrapper queryResult={blogsQuery}>
        <Grid container>{blogListing}</Grid>
      </ReactQueryWrapper>
    </Stack>
  );
}
