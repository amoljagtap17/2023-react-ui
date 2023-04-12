import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CircularProgress } from "components/lib";
import { router } from "components/routes";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";

export function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 2,
            retryDelay: 1000 * 10,
            staleTime: Infinity,
            onError(error) {
              enqueueSnackbar({
                message: (error as any).message,
                variant: "error",
              });
            },
          },
          mutations: {
            onError(error, _variables, _context) {
              enqueueSnackbar({
                message: (error as any).message,
                variant: "error",
              });
            },
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<CircularProgress />} />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
