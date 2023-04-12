import {
  FormControl,
  FormHelperText,
  FormLabel,
  Switch as MUISwitch,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { ChangeEvent } from "react";
import { Controller } from "react-hook-form";

interface iTextFieldProps {
  id: string;
  name: string;
  label?: string;
  required?: boolean;
}

export function Switch({ id, name, label, required }: iTextFieldProps) {
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
            <MUISwitch
              id={id}
              name={name}
              checked={value}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                onChange(event.target.checked)
              }
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
