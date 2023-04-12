import {
  ConnectedTv as ConnectedTvIcon,
  LocalDiningRounded as LocalDiningRoundedIcon,
  MovieRounded as MovieRoundedIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { themeConstants } from "app/mui";
import { iBlogCategory } from "app/types";
import { ReadMoreLink } from "components/lib";

interface iCategoryCardProps extends Omit<iBlogCategory, "id"> {}

const iconsMap = new Map();
iconsMap.set("movies", <MovieRoundedIcon />);
iconsMap.set("webseries", <ConnectedTvIcon />);
iconsMap.set("restaurants", <LocalDiningRoundedIcon />);

export function CategoryCard({ name, description }: iCategoryCardProps) {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const icon = iconsMap.get(name);
  const textStyles = mdUp ? {} : { textAlign: "center" };
  const blockStyles = mdUp ? {} : { justifyContent: "center" };

  return (
    <Card
      variant="outlined"
      sx={{
        padding: "50px 35px",
        border: themeConstants.borders.large,
        ...textStyles,
      }}
    >
      <CardHeader
        avatar={<Avatar aria-label={name}>{icon}</Avatar>}
        sx={{ ...blockStyles, "& .MuiCardHeader-content": { flex: "none" } }}
      />
      <CardContent>
        <Typography variant="h3" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardActions sx={{ ...blockStyles }}>
        <ReadMoreLink href={`?category=${name.toLowerCase()}`} />
      </CardActions>
    </Card>
  );
}
