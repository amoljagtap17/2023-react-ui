import { UseQueryResult } from "@tanstack/react-query";
import { CircularProgress } from "components/lib";
import { ReactNode } from "react";

interface iReactQueryWrapperProps {
  queryResult: UseQueryResult;
  children: ReactNode;
}

export function ReactQueryWrapper({
  queryResult,
  children,
}: iReactQueryWrapperProps) {
  if (queryResult.isLoading) {
    return <CircularProgress />;
  }

  if (queryResult.isError) {
    return <h1>something went wrong!</h1>;
  }

  return <>{children}</>;
}
