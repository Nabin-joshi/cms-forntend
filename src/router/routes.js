// All this routes has to be lazy loaded when goes to Production
import Home from "../pages/home/HomePageLayout";
import Login from "../pages/login/LoginPageLayout";

import NewsLetterUserList from "../components/auth/admin/section/NewLetter/NewsLetterUserList.jsx";
import MapNewsLetterUserGroup from "../components/auth/admin/section/NewLetter/mapNewsLetterUserGroup.jsx";
import Admin from "../pages/admin/AdminPage.jsx";
import Services from "../components/auth/admin/section/Services.jsx";
import Features from "../components/auth/admin/section/Features.jsx";
import NewsLetterGroupList from "../components/auth/admin/section/NewLetter/newslettergroup/NewsLetterGroupList.jsx";
import Slider from "../components/auth/admin/section/Slider.jsx";
import Stories from "../components/auth/admin/section/Stories.jsx";

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
      {
        path: "/admin/slider",
        name: "Admin Slider",
        exact: true,
        element: Slider,
      },
      {
        path: "/admin/stories",
        name: "Admin Stories",
        exact: true,
        element: Stories,
      },
      {
        path: "/admin/nwusersgroupmap",
        name: "News Letter Work page",
        exact: true,
        element: MapNewsLetterUserGroup,
      },
      {
        path: "/admin/nwusers",
        name: "News Letter Work page",
        exact: true,
        element: NewsLetterUserList,
      },
      {
        path: "/admin/nwgroups",
        name: "News Letter Work page",
        exact: true,
        element: NewsLetterGroupList,
      },
    ],
  },
];
