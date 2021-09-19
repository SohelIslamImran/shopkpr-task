import { lazy } from "react";

const Dashboard = lazy(() => import("../components/dashboard/Dashboard"));

const routes = [
    {
        path: "/",
        exact: true,
        component: <Dashboard />,
    },
];

export default routes;
