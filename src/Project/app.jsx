import {
  createBrowserRouter,
  RouterProvider,
  Link,
  useParams,
} from "react-router-dom";
import Home from "./home.jsx";
import Detail from "./detail";
import Kontak from "./kontak.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/kontak",
    element: <Kontak />,
  },
]);

function KawahPutihApp() {
  return <RouterProvider router={router} />;
}

export default KawahPutihApp;
