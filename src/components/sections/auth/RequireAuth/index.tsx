import { Navigate, useLocation } from "react-router-dom";
import { useUserContextState } from "../AuthProvider/useAuth";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { user } = useUserContextState();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
