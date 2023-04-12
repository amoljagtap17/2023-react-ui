import { FourOhFour } from "components/lib";
import { useRouteError } from "react-router-dom";

export function RootBoundary() {
  const error = useRouteError();

  console.log("error::", error);

  return <FourOhFour />;
}
