import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes";

function index() {
  return (
    <BrowserRouter>
      <Suspense fallback="...Loading">
        <Routes>
          {routes.map((route, ind) => {
            return (
              route.element && (
                <Route
                  key={ind}
                  path={route.path}
                  exact={route.exact ? route.exact : false}
                  name={route.name}
                  element={<route.element />}
                />
              )
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default React.memo(index);
