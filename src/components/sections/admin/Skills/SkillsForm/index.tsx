import { Button, Divider, Grid, Theme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { EnumSkillCategory, iSkillsFormData } from "app/types";
import { Select, SubmitResetButtons, TextField } from "components/form";
import { Fragment } from "react";
import { useFieldArray, useWatch } from "react-hook-form";

const selectCategoryOptions = [
  {
    label: "Primary",
    value: EnumSkillCategory.PRIMARY as unknown as string,
  },
  {
    label: "Secondary",
    value: EnumSkillCategory.SECONDARY as unknown as string,
  },
];

export function SkillsForm() {
  const { fields, append, remove } = useFieldArray<iSkillsFormData>({
    name: "skills",
  });
  const isMDUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const formData = useWatch({ name: "skills" });

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
                category: EnumSkillCategory.PRIMARY,
                percent: 0,
              },
              { focusName: `skills.${fields.length - 1}.name` }
            )
          }
        >
          Add New
        </Button>
      </Grid>
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          <Grid item xs={12} lg={3}>
            <Select
              id={`skills.${index}.category`}
              name={`skills.${index}.category`}
              options={selectCategoryOptions}
              label=""
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TextField
              id={`skills.${index}.name`}
              name={`skills.${index}.name`}
              placeholder="Skill Name"
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TextField
              id={`skills.${index}.percent`}
              name={`skills.${index}.percent`}
              placeholder="Percent"
              type="number"
              disabled={formData[index]?.category !== EnumSkillCategory.PRIMARY}
            />
          </Grid>
          <Grid
            item
            xs={12}
            lg={3}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Button
              onClick={() => remove(index)}
              size={isMDUp ? "medium" : "small"}
            >
              delete
            </Button>
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
