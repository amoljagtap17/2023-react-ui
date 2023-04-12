import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select as MUISelect,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { Controller } from "react-hook-form";

interface iSelectProps {
  id: string;
  name: string;
  label?: string;
  required?: boolean;
  options: {
    label: string;
    value: string;
  }[];
  placeholder?: string;
}

export function Select({
  id,
  name,
  label,
  required,
  options,
  placeholder = "Select",
}: iSelectProps) {
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
            <MUISelect
              id={id}
              name={name}
              value={value ?? ""}
              onChange={onChange}
              error={!!error}
              displayEmpty={true}
            >
              <MenuItem disabled value="">
                <em>{placeholder}</em>
              </MenuItem>
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </MUISelect>
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
