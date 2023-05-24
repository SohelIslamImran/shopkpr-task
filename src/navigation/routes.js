import { lazy } from "react";

const Admin = lazy(() => import("../components/admin/Admin"));

const routes = [
    {
        path: "/dash-board/admin",
        component: <Admin />,
    },
];

export default routes;
