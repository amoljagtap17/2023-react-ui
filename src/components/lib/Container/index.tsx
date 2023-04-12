import { ContainerProps, Container as MUIContainer } from "@mui/material";
import { ReactNode } from "react";

interface iContainerProps extends ContainerProps {
  children: ReactNode;
}

export function Container({ children, ...props }: iContainerProps) {
  return (
    <MUIContainer {...props} maxWidth="lg">
      {children}
    </MUIContainer>
  );
}
