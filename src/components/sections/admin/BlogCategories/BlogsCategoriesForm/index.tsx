import { Button, Divider, Grid } from "@mui/material";
import { iBlogsCategoriesFormData } from "app/types";
import { SubmitResetButtons, TextField } from "components/form";
import { Fragment } from "react";
import { useFieldArray } from "react-hook-form";

export function BlogsCategoriesForm() {
  const { fields, append, remove } = useFieldArray<iBlogsCategoriesFormData>({
    name: "blogsCategories",
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          onClick={() =>
            append(
              {
                id: "",
                name: "",
                description: "",
              },
              { focusName: `blogsCategories.${fields.length - 1}.name` }
            )
          }
        >
          Add New
        </Button>
      </Grid>
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          <Grid item xs={12} lg={5}>
            <TextField
              id={`blogsCategories.${index}.name`}
              name={`blogsCategories.${index}.name`}
              placeholder="Blog Category Name"
            />
          </Grid>
          <Grid item xs={12} lg={5}>
            <TextField
              id={`blogsCategories.${index}.description`}
              name={`blogsCategories.${index}.description`}
              placeholder="Blog Category Description"
            />
          </Grid>
          <Grid
            item
            xs={12}
            lg={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Button onClick={() => remove(index)}>delete</Button>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Fragment>
      ))}
      <Grid item xs={12}>
        <SubmitResetButtons />
      </Grid>
    </Grid>
  );
}
