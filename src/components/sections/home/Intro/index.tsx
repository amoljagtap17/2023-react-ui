import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { IntroText } from "components/lib";

export function Intro() {
  const isMDUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  return (
    <Grid container>
      <Grid item xs={12} lg={6} padding={4}>
        <Box
          minHeight="100%"
          display="flex"
          justifyContent="center"
          alignItems={isMDUp ? "start" : "center"}
          flexDirection="column"
          textAlign={isMDUp ? "left" : "center"}
        >
          <Typography variant="body1" component="h1" fontWeight={600}>
            Hello, My Name is
          </Typography>
          <IntroText text="Your Name" />
          <Typography variant="h6" component="h3" gutterBottom={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            delectus fugit repellat optio voluptas qui soluta autem adipisci
            possimus inventore?
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={6} padding={4}>
        <Box
          width="680px"
          height="800px"
          position="relative"
          sx={{
            transform: isMDUp ? "scale(1)" : "scale(0.5)",
            marginLeft: "-340px",
            left: "50%",
            transformOrigin: "center center",
          }}
          marginY={isMDUp ? 0 : "-150px"}
        >
          {/* Photo by <a href="https://unsplash.com/de/@sandrogphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sandro G. Photography</a> on <a href="https://unsplash.com/t/people?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
           */}
          <Box
            component="img"
            src="images/me.png"
            alt="profile pic name"
            position="absolute"
            left={0}
            top={0}
            height="800px"
            width="680px"
            sx={{ objectFit: "cover" }}
            zIndex={10}
            borderRadius="380px"
          />
          <Box
            width="680px"
            height="680px"
            bgcolor="#39564F" // #29a587
            borderRadius="100%"
            zIndex={2}
            position="absolute"
            left={0}
            bottom={0}
          />
          <Box className="info-list">
            <List>
              <ListItem>
                <ListItemText
                  primary="1+"
                  secondary={
                    <Typography component="span" marginLeft={4}>
                      Years of Experience
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="1+"
                  secondary={
                    <Typography component="span" marginLeft={4}>
                      Completed Projects
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
