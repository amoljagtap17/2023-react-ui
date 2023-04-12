import { axiosInstance } from "app/utils";
import { ReactNode, useCallback, useMemo, useState } from "react";
import { UserContextState, UserContextUpdater } from "./useAuth";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const signin = useCallback((tokens: any, callback: VoidFunction) => {
    setUser({ isLoggedIn: true });

    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${tokens.accessToken}`;

    setTimeout(callback, 100);
  }, []);

  const signout = useCallback((callback: VoidFunction) => {
    setUser(null);

    axiosInstance.defaults.headers.common["Authorization"] = null;

    setTimeout(callback, 100);
  }, []);

  const updaterContextValue = useMemo(
    () => ({ signin, signout }),
    [signin, signout]
  );

  return (
    <UserContextState.Provider value={{ user }}>
      <UserContextUpdater.Provider value={updaterContextValue}>
        {children}
      </UserContextUpdater.Provider>
    </UserContextState.Provider>
  );
}
