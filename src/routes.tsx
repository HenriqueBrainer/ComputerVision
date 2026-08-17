import { createBrowserRouter } from "react-router"
import Home from "./pages/Home"
import PostPage from "./pages/PostPage"

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Home,
    },
    {
      path: "/post/:slug",
      Component: PostPage,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
)
