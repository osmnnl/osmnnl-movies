import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Detail = lazy(() => import("../pages/Detail"));

const routes = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/detail",
		element: <Detail />,
	},
];

export default routes;