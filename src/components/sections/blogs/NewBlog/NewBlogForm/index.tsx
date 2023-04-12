import { Grid } from "@mui/material";
import { iBlogCategory } from "app/types";
import {
  Rating,
  Select,
  SubmitResetButtons,
  Switch,
  TextField,
} from "components/form";

interface iNewBlogFormProps {
  blogsCategories: iBlogCategory[];
}

export function NewBlogForm({ blogsCategories }: iNewBlogFormProps) {
  const options = blogsCategories.map(({ id, name }) => ({
    label: name,
    value: id,
  }));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Select
          id="blogCategoryId"
          name="blogCategoryId"
          label="Blog Category"
          options={options}
          required={true}
          placeholder="Select Blog Category"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="title"
          name="title"
          placeholder="New Blog Title"
          label="Title"
          required={true}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="excerpt"
          name="excerpt"
          placeholder="What is this Blog about?"
          label="Excerpt"
          required={true}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="content"
          name="content"
          placeholder="Write your Blog"
          label="Content"
          required={true}
          multiline={true}
          maxRows={4}
          minRows={4}
        />
      </Grid>
      <Grid item xs={12}>
        <Rating id="ratings" name="ratings" label="Ratings" required={true} />
      </Grid>
      <Grid item xs={12}>
        <Switch id="isPublished" name="isPublished" label="Publish" />
      </Grid>
      <Grid item xs={12}>
        <SubmitResetButtons />
      </Grid>
    </Grid>
  );
}
