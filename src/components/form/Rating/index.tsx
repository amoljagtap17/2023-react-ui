import {
  FormControl,
  FormHelperText,
  FormLabel,
  Rating as MUIRating,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { Controller } from "react-hook-form";

interface iTextFieldProps {
  id: string;
  name: string;
  label?: string;
  required?: boolean;
}

export function Rating({ id, name, label, required }: iTextFieldProps) {
  const isMDUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <FormControl
            fullWidth
            error={!!error}
            size={isMDUp ? "medium" : "small"}
          >
            {label ? (
              <FormLabel htmlFor={id} required={required} error={!!error}>
                {label}
              </FormLabel>
            ) : null}
            <MUIRating
              id={id}
              name={name}
              value={+value}
              onChange={onChange}
              precision={0.5}
            />
            {!!error ? (
              <FormHelperText id={id} error={!!error}>
                {error?.message}
              </FormHelperText>
            ) : null}
          </FormControl>
        );
      }}
    />
  );
}
