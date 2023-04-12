import {
  FormControl,
  FormHelperText,
  FormLabel,
  OutlinedInput,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { Controller } from "react-hook-form";

interface iTextFieldProps {
  id: string;
  name: string;
  label?: string;
  placeholder: string;
  type?: "password" | "email" | "number" | undefined;
  required?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  maxRows?: number;
  minRows?: number;
}

export function TextField({
  id,
  name,
  label,
  placeholder,
  type,
  required,
  disabled,
  multiline,
  maxRows,
  minRows,
}: iTextFieldProps) {
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
            disabled={disabled}
          >
            {label ? (
              <FormLabel htmlFor={id} required={required} error={!!error}>
                {label}
              </FormLabel>
            ) : null}
            <OutlinedInput
              id={id}
              name={name}
              placeholder={placeholder}
              value={value ?? ""}
              onChange={onChange}
              error={!!error}
              type={type}
              multiline={multiline}
              maxRows={maxRows}
              minRows={minRows}
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
