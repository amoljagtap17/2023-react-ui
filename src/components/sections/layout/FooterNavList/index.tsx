import {
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useUpBreakpoint } from "app/hooks";
import { Link as RouterLink } from "react-router-dom";

interface iFooterNavListProps {
  listTitle: string;
  listNavItems: {
    label: string;
    path: string;
  }[];
}

export function FooterNavList({
  listTitle,
  listNavItems,
}: iFooterNavListProps) {
  const isMdUp = useUpBreakpoint();

  return (
    <>
      <Typography
        variant="h6"
        component="div"
        gutterBottom={true}
        fontWeight={700}
        textAlign={isMdUp ? "left" : "center"}
      >
        {listTitle}
      </Typography>
      <List dense={true} disablePadding={true}>
        {listNavItems.map((item) => {
          return (
            <ListItem key={item.label} disablePadding={true}>
              <Link
                component={RouterLink}
                to={item.path}
                display="block"
                width="100%"
              >
                <ListItemButton sx={{ paddingLeft: 0 }}>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      textAlign: isMdUp ? "left" : "center",
                      fontWeight: 700,
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
