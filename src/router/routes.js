import Home from "../pages/home/HomePageLayout";
import Login from "../pages/login/LoginPageLayout";

const Routes = [
  { path: "/", name: "Home Page", element: Home },
  { path: "/login", name: "Login Page", exact: true, element: Login },
];

export default Routes;
