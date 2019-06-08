import loadable from "loadable-components";
import Loading from "./loader";

export const Home = loadable(() => import("../pages/home"),{
    LoadingComponent: Loading
});

export const About = loadable(() => import("../pages/about"),{
    LoadingComponent: Loading
});

export const Connect = loadable(() => import("../pages/connect"),{
    LoadingComponent: Loading
});

export const Portfolio = loadable(() => import("../pages/portfolio"),{
    LoadingComponent: Loading
});