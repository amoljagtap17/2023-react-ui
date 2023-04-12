import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { themeConstants } from "app/mui";

export function Colors() {
  const { colors, borders } = themeConstants;

  return (
    <>
      <Typography variant="h4" component="div" gutterBottom={true}>
        Colors
      </Typography>
      <Grid container>
        {Object.keys(colors).map((key) => {
          const { label, value } = colors[key as keyof {}];

          return (
            <Grid item xs={12} md={6} lg={4} key={key} padding={2}>
              <Card sx={{ border: borders.large }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: "150px",
                    background: value,
                    borderBottom: borders.large,
                  }}
                />
                <CardContent sx={{ minHeight: 0, padding: 2 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    fontWeight={700}
                  >
                    {label}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    fontWeight={700}
                  >
                    {value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
