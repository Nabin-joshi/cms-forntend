// All this routes has to be lazy loaded when goes to Production
import Home from "../pages/home/HomePageLayout";
import Login from "../pages/login/LoginPageLayout";

import NewsLetterUserList from "../components/auth/admin/section/NewLetter/NewsLetterUserList.jsx";
import MapNewsLetterUserGroup from "../components/auth/admin/section/NewLetter/mapNewsLetterUserGroup.jsx";
import Admin from "../pages/admin/AdminPage.jsx";
import NewsLetterGroupList from "../components/auth/admin/section/NewLetter/newslettergroup/NewsLetterGroupList.jsx";
import Slider from "../components/auth/admin/section/Slider.jsx";
import Stories from "../components/auth/admin/section/Stories.jsx";
import FooterAdmin from "../components/auth/admin/section/Footer.jsx";

import OurValues from "../components/auth/admin/section/OurValues.jsx";
import OurImpact from "../components/auth/admin/section/OurImpact.jsx";
import TheJourney from "../components/auth/admin/section/TheJourney.jsx";
import OurPartner from "../components/auth/admin/section/OurPartners.jsx";
import LandingPageLayout from "../components/home/LandingPageLayout.jsx";
import LearnMore from "../components/home/homePageRoutingSection/LearnMore.jsx";
import GeographicalCoverage from "../components/auth/admin/section/GeographicalCoverage.jsx";
import OurWork from "../components/auth/admin/section/OurWork.jsx";
import YourSupport from "../components/auth/admin/section/YourSupport.jsx";
import OurWorkLearnMore from "../components/home/homePageRoutingSection/OurWorkLearnMore.jsx";
import OurWorkViewAll from "../components/home/homePageRoutingSection/OurWorkViewAll.jsx";
import LatestNewsViewAll from "../components/home/homePageRoutingSection/LatestNewsViewAll.jsx";
import OurStoriesReadMore from "../components/home/homePageRoutingSection/OurStoriesReadMore.jsx";
import AboutUs from "../components/home/AboutUs.jsx";
import AboutUsAdmin from "../components/auth/admin/section/AboutUs.jsx";
import GetInvolved from "../components/auth/admin/section/GetInvolved.jsx";
import Resources from "../components/auth/admin/section/Resources.jsx";
import { ResourcesHome } from "../components/home/ResourcesHome.jsx";
import { GetInvolvedHome } from "../components/home/GetInvolvedHome.jsx";

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
      {
        path: "/ourWork/learnMore",
        name: "Our Work Learn More page",
        element: OurWorkLearnMore,
      },
      {
        path: "/ourWork/viewAll",
        name: "Our Work View All",
        element: OurWorkViewAll,
      },
      {
        path: "/latestNews/viewAll",
        name: "Latest News View All",
        element: LatestNewsViewAll,
      },
      {
        path: "/stories/readmore",
        name: "Our Stories Read More",
        element: OurStoriesReadMore,
      },
      {
        path: "/aboutUs",
        name: "About Us",
        element: AboutUs,
      },
      {
        path: "/resources",
        name: "Resources",
        element: ResourcesHome,
      },
      {
        path: "/getInvolved",
        name: "Get Involved ",
        element: GetInvolvedHome,
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
      {
        path: "/admin/ourWork",
        name: "Our Work Page",
        element: OurWork,
      },
      {
        path: "/admin/yourSupport",
        name: "Your Support Page",
        element: YourSupport,
      },
      {
        path: "/admin/aboutUs",
        name: "Admin About Us",
        exact: true,
        element: AboutUsAdmin,
      },
      {
        path: "getInvolved",
        name: "Get Involved",
        element: GetInvolved,
      },
      {
        path: "resources",
        name: "Get Involved",
        element: Resources,
      },
    ],
  },
];
