import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { themeConstants } from "app/mui";
import { iBlog } from "app/types";
import { Badge, DateText, ReadMoreLink } from "components/lib";

export function BlogCard({
  title,
  excerpt,
  createdAt,
  category,
  slug,
  ratings,
}: Omit<iBlog, "id" | "content" | "isPublished">) {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: mdUp ? "row" : "column",
        boxShadow: "0 18px 0 0 #202020",
        width: "100%",
        position: "relative",
        border: themeConstants.borders.large,
      }}
    >
      <Box
        width="auto"
        maxWidth={mdUp ? "45%" : "100%"}
        maxHeight="530px"
        borderBottom={mdUp ? "" : themeConstants.borders.large}
        borderRight={mdUp ? themeConstants.borders.large : ""}
        overflow="hidden"
        alignSelf="stretch"
      >
        <Box position="relative" height="100%" overflow="hidden">
          <CardMedia
            component="img"
            image="/images/image1.jpg"
            alt="Live from space album cover"
            sx={{
              display: "inline-block",
              objectPosition: mdUp ? "100% 50%" : "50% 50%",
              maxWidth: "100%",
              verticalAlign: "middle",
              height: "100%",
            }}
          />
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" padding="60px 30px" flex={1}>
        <CardHeader avatar={<Badge label={category.name} />} />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body1">{excerpt}</Typography>
          <Rating value={ratings} readOnly />
        </CardContent>
        <CardActions>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <DateText date={createdAt} />
            <ReadMoreLink href={slug} />
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
}
