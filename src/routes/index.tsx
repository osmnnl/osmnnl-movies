// src/routes/index.tsx

import { lazy, Suspense } from "react";
import { ROUTES } from "./paths";

const Home = lazy(() => import("../pages/Home"));
const Detail = lazy(() => import("../pages/Detail"));

const routes = [
	{
		path: ROUTES.HOME,
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				<Home />
			</Suspense>
		),
	},
	{
		path: ROUTES.DETAIL,
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				<Detail />
			</Suspense>
		),
	},
];

export default routes;
