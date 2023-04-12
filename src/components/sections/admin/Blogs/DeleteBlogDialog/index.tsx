import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@mui/material";
import { useBlogMutation } from "app/hooks";
import { SlideTransition } from "components/lib";

interface iDeleteBlogDialogProps {
  handleClose: VoidFunction;
  blogId: string;
}

export function DeleteBlogDialog({
  handleClose,
  blogId,
}: iDeleteBlogDialogProps) {
  const { deleteBlogMutation } = useBlogMutation();

  const handleAgreeButtonClick = () => {
    deleteBlogMutation.mutate(blogId, {
      onSuccess: () => {
        handleClose();
      },
    });
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      keepMounted
      TransitionComponent={SlideTransition}
      transitionDuration={300}
      fullWidth={true}
      PaperProps={{ style: { background: "rgba(255, 243, 219, 1)" } }}
    >
      <DialogTitle id="alert-dialog-title" fontWeight={600}>
        Delete Blog Confirmation
      </DialogTitle>
      <Divider />
      <DialogContent sx={{ minHeight: "150px" }}>
        <DialogContentText id="alert-dialog-description">
          You are about to delete the blog. This means your story won't be read
          by others.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={handleClose}
          disabled={deleteBlogMutation.isLoading}
        >
          Disagree
        </Button>
        <Button
          variant="contained"
          onClick={handleAgreeButtonClick}
          autoFocus={true}
          disabled={deleteBlogMutation.isLoading}
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
