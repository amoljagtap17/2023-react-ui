import { Key as KeyIcon } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { themeConstants } from "app/mui";
import { TextField } from "components/form";
import { useFormState } from "react-hook-form";
import { Link as RouterLink, useLocation } from "react-router-dom";

export function SignIn() {
  const location = useLocation();
  const { isSubmitting } = useFormState();

  return (
    <Card
      variant="outlined"
      sx={{
        padding: "50px 35px",
        textAlign: "center",
        border: themeConstants.borders.large,
      }}
    >
      <CardHeader
        avatar={
          <Avatar aria-label="login">
            <KeyIcon />
          </Avatar>
        }
        sx={{
          flexDirection: "column",
          justifyContent: "center",
        }}
      />
      <CardContent>
        <Stack spacing={4}>
          <Typography variant="h3">Login</Typography>
          <Typography variant="body1">
            Please provide your credentials to login
          </Typography>
          <TextField
            id="email"
            name="email"
            label="Email"
            placeholder="Email"
            type="email"
            required
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
            required
          />
        </Stack>
      </CardContent>
      <CardActions sx={{ marginTop: 4 }}>
        <Stack direction="column" spacing={2} width="100%">
          <Button
            type="submit"
            variant="contained"
            fullWidth={true}
            disabled={isSubmitting}
          >
            Login
          </Button>
          <Link component={RouterLink} to="/register" state={location.state}>
            <Button variant="outlined" fullWidth={true}>
              Register
            </Button>
          </Link>
        </Stack>
      </CardActions>
    </Card>
  );
}
