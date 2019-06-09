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

export const Fashion = loadable(() => import("../pages/fashion"),{
    LoadingComponent: Loading
});

export const FashionCollection = loadable(() => import("../pages/fashion/collections"),{
    LoadingComponent: Loading
});

export const FashionDesign = loadable(() => import("../pages/fashion/design"),{
    LoadingComponent: Loading
});

export const Others = loadable(() => import("../pages/others"),{
    LoadingComponent: Loading
});

export const Archive = loadable(() => import("../pages/archive"),{
    LoadingComponent: Loading
});
