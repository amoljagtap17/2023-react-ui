import { Grid, Typography } from "@mui/material";
import { Rating, Select, SubmitResetButtons, TextField } from "components/form";
import { enqueueSnackbar } from "notistack";
import { FormProvider, useForm } from "react-hook-form";

export function Inputs() {
  const methods = useForm({
    defaultValues: {},
  });

  const onSubmit = () => {
    enqueueSnackbar({
      message: "Form submitted successfully.",
      variant: "success",
    });
  };

  return (
    <>
      <Typography variant="h4" component="div" gutterBottom={true}>
        Inputs
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          onReset={() => methods.reset()}
          noValidate
        >
          <Grid container>
            <Grid item xs={12} padding={2}>
              <TextField
                id="input1"
                name="input1"
                placeholder="some placeholder"
                label="Input Label"
              />
            </Grid>
            <Grid item xs={12} padding={2}>
              <TextField
                id="input2"
                name="input2"
                label="TextArea Label"
                placeholder=""
                multiline={true}
                minRows={4}
                maxRows={4}
              />
            </Grid>
            <Grid item xs={12} padding={2}>
              <Select
                id="input3"
                name="input3"
                options={[
                  { label: "Option 1", value: "option1" },
                  { label: "Option 2", value: "option2" },
                ]}
                label="Select Label"
                placeholder="Select"
              />
            </Grid>
            <Grid item xs={12} padding={2}>
              <Rating id="input4" name="input4" label="Rating Label" />
            </Grid>
            <Grid item xs={12} md={6} lg={4} padding={2}>
              <SubmitResetButtons />
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
}
