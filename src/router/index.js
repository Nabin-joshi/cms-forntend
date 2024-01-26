import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { mainRoutes } from "./routes";

function Index() {
  return (
    <BrowserRouter>
      <Suspense fallback="...Loading">
        <Routes>
          {mainRoutes.map((route, ind) => {
            if (route && route.children) {
              return (
                route.element && (
                  <Route
                    key={ind}
                    path={route.path}
                    exact={route.exact ? route.exact : false}
                    element={<route.element />}
                  >
                    {route.children.map((childRoute, index) => {
                      return (
                        <Route
                          key={index}
                          path={childRoute.path}
                          exact={childRoute.exact ? childRoute.exact : false}
                          name={childRoute.name}
                          element={<childRoute.element />}
                        />
                      );
                    })}
                  </Route>
                )
              );
            } else {
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
            }
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default React.memo(Index);
