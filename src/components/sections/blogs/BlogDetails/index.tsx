import {
  Box,
  Rating,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { iBlog } from "app/types";
import { BackLink, Badge, DateText } from "components/lib";

interface iBlogDetailsProps {
  blog: iBlog;
}

export function BlogDetails({ blog }: iBlogDetailsProps) {
  const { category, createdAt, title, excerpt, content, ratings } = blog;
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  return (
    <Stack spacing={4}>
      <BackLink />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Badge label={category.name} />
        <DateText date={createdAt} />
      </Box>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body1">{excerpt}</Typography>
      <Rating value={ratings} readOnly />
      <Box
        component="img"
        src="/images/image1.jpg"
        alt={title}
        width={mdUp ? "50%" : "100%"}
        height="50vh"
        alignSelf="center"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Typography variant="body1">{content}</Typography>
    </Stack>
  );
}
