import { CircularProgress } from "components/lib";
import { RequireAuth } from "components/sections/auth/RequireAuth";
import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const Root = lazy(() => import("./root"));
const HomePage = lazy(() => import("./home"));
const StyleGuidePage = lazy(() => import("./styleguide"));
const SignInPage = lazy(() => import("./signIn"));
const SignUpPage = lazy(() => import("./signUp"));
const FourOhFour = lazy(() => import("./fourOhFour"));
const AdminPage = lazy(() => import("./admin"));
const BlogsPage = lazy(() => import("./blogs"));
const BlogDetailsPage = lazy(() => import("./blogDetails"));
const BlogListPage = lazy(() => import("./blogList"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<CircularProgress />}>
          <Root />
        </Suspense>
      }
    >
      <Route
        index
        element={
          <Suspense fallback={<CircularProgress />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="styleguide"
        element={
          <Suspense fallback={<CircularProgress />}>
            <StyleGuidePage />
          </Suspense>
        }
      />
      <Route
        path="blogs"
        element={
          <Suspense fallback={<CircularProgress />}>
            <BlogsPage />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<CircularProgress />}>
              <BlogListPage />
            </Suspense>
          }
        />
        <Route
          path=":slug"
          element={
            <Suspense fallback={<CircularProgress />}>
              <BlogDetailsPage />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="admin"
        element={
          <RequireAuth>
            <Suspense fallback={<CircularProgress />}>
              <AdminPage />
            </Suspense>
          </RequireAuth>
        }
      />
      <Route
        path="login"
        element={
          <Suspense fallback={<CircularProgress />}>
            <SignInPage />
          </Suspense>
        }
      />
      <Route
        path="register"
        element={
          <Suspense fallback={<CircularProgress />}>
            <SignUpPage />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<CircularProgress />}>
            <FourOhFour />
          </Suspense>
        }
      />
    </Route>
  )
);
