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
import FooterAdmin from "../components/auth/admin/section/Footer.jsx";

import OurValues from "../components/auth/admin/section/OurValues.jsx";
import OurImpact from "../components/auth/admin/section/OurImpact.jsx";
import TheJourney from "../components/auth/admin/section/TheJourney.jsx";
import OurPartner from "../components/auth/admin/section/OurPartners.jsx";
import Footer from "../components/home/Footer.jsx";
import LandingPageLayout from "../components/home/LandingPageLayout.jsx";
import LearnMore from "../components/home/homePageRoutingSection/LearnMore.jsx";
import GeographicalCoverage from "../components/auth/admin/section/GeographicalCoverage.jsx";

export const mainRoutes = [
  {
    path: "/",
    name: "Home Page",
    element: Home,
    children: [
      {
        path: "",
        name: "Landing page",
        element: LandingPageLayout,
      },
      {
        path: "/learnMore",
        name: "Learn More page",
        element: LearnMore,
      },
    ],
  },
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
        path: "/admin/ourValues",
        name: "Admin Our Values",
        exact: true,
        element: OurValues,
      },
      {
        path: "/admin/ourImpact",
        name: "Admin Our Impact",
        exact: true,
        element: OurImpact,
      },
      {
        path: "/admin/theJourney",
        name: "Admin The Journey",
        exact: true,
        element: TheJourney,
      },
      {
        path: "/admin/ourPartners",
        name: "Admin Our Partners",
        exact: true,
        element: OurPartner,
      },
      {
        path: "/admin/footer",
        name: "Admin Footer",
        exact: true,
        element: FooterAdmin,
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

      {
        path: "/admin/geoCoverage",
        name: "Geographical Coverage Page",
        element: GeographicalCoverage,
      },
    ],
  },
];
