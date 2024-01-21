// All this routes has to be lazy loaded when goes to Production
import Home from "../pages/home/HomePageLayout";
import Login from "../pages/login/LoginPageLayout";
import Admin from "../pages/admin/AdminPage.jsx";
import Services from "../components/auth/admin/section/Services.jsx";
import Features from "../components/auth/admin/section/Features.jsx";

export const mainRoutes = [
  { path: "/", name: "Home Page", element: Home },
  { path: "/login", name: "Login Page", exact: true, element: Login },
  {
    path: "/admin",
    name: "Admin Page",
    exact: true,
    element: Admin,
    children: [
      {
        path: "/admin/services",
        name: "Admin Service",
        exact: true,
        element: Services,
      },
      {
        path: "/admin/features",
        name: "Admin Feature",
        exact: true,
        element: Features,
      },
    ],
  },
];
