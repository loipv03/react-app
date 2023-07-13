import { ReactElement } from "react";

import { Following, Home, Upload } from "@/pages/ClientPage";
import { ClientLayout, AdminLayout } from "@/layout";

interface RouteProps {
  key: string;
  path: string;
  element: ReactElement;
  children?: RouteProps[];
}

const publicRoutes: RouteProps[] = [
  {
    key: "root",
    path: "",
    element: <ClientLayout />,
    children: [
      {
        key: "home",
        path: "/",
        element: <Home />,
      },
      {
        key: "following",
        path: "/following",
        element: <Following />,
      },
      {
        key: "upload",
        path: "/upload",
        element: <Upload />,
      },
    ],
  },
];

export { publicRoutes };
