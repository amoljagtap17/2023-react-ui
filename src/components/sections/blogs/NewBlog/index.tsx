import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { iBlogFormData } from "app/types";
import { SlideTransition } from "components/lib";
import { NewBlogFormContainer } from "./NewBlogFormContainer";

interface iNewBlogProps {
  handleClose: VoidFunction;
  defaultValues?: iBlogFormData;
}

export function NewBlog({ handleClose, defaultValues }: iNewBlogProps) {
  const fullScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      keepMounted
      TransitionComponent={SlideTransition}
      transitionDuration={300}
      fullWidth={fullScreen}
      maxWidth="xl"
      PaperProps={{ style: { background: "rgba(255, 243, 219, 1)" } }}
    >
      <DialogTitle id="alert-dialog-title" fontWeight={600}>
        {defaultValues?.id ? "Edit Blog" : "Create Blog"}
      </DialogTitle>
      <Divider />
      <DialogContent>
        <NewBlogFormContainer
          defaultValues={defaultValues}
          onSubmitCallback={handleClose}
        />
      </DialogContent>
    </Dialog>
  );
}
