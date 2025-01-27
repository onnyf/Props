import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Blogss from "./pages/Blogss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "create",
        element: <Create />,
      },

      {
        path: "blogss",
        element: <Blogss />,
      },
    ],
  },
]);

export default router;
