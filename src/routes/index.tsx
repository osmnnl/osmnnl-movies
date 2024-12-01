import { lazy, Suspense } from "react";
import { Spin } from "antd";
import { ROUTES } from "./paths";

const Home = lazy(() => import("../pages/Home"));
const Detail = lazy(() => import("../pages/Detail"));

const routes = [
	{
		path: ROUTES.HOME,
		element: (
			<Suspense
				fallback={
					<div className="d-flex align-center justify-center h-v100">
						<Spin size="large" />
					</div>
				}
			>
				<Home />
			</Suspense>
		),
	},
	{
		path: ROUTES.DETAIL,
		element: (
			<Suspense
				fallback={
					<div className="d-flex align-center justify-center h-v100">
						<Spin size="large" />
					</div>
				}
			>
				<Detail />
			</Suspense>
		),
	},
];

export default routes;
