import Home from "../pages/home/HomePageLayout";
import Login from "../pages/login/LoginPageLayout";
import createNewsLetterUser from "../components/suraj/createNewsLetterUser";

import NewsLetterUserList from "../components/suraj/NewsLetterUserList";
import NewsLetterGroupList from "../components/suraj/newslettergroup/NewsLetterGroupList";
import MapNewsLetterUserGroup from "../components/suraj/mapNewsLetterUserGroup";

const Routes = [
  { path: "/", name: "Home Page", element: Home },
  { path: "/login", name: "Login Page", exact: true, element: Login },
  {
    path: "/nwusersgroupmap",
    name: "News Letter Work page",
    exact: true,
    element: MapNewsLetterUserGroup,
  },
  {
    path: "/nwusers",
    name: "News Letter Work page",
    exact: true,
    element: NewsLetterUserList,
  },
  {
    path: "/nwgroups",
    name: "News Letter Work page",
    exact: true,
    element: NewsLetterGroupList,
  },
];

export default Routes;
