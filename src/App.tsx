import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.scss";
import { publicRoutes } from "./routers/index.tsx";
import { PageNotFound } from "@/pages/ClientPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <div className="containers">
        <Routes>
          {publicRoutes.map((route) => (
            <Route key={route.key} path={route.path} element={route.element}>
              {route.children?.map((child) => (
                <Route
                  key={child.key}
                  path={child.path}
                  element={child.element}
                />
              ))}
              <Route path="*" element={<PageNotFound />} />
            </Route>
          ))}
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
