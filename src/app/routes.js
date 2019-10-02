import Spec from "./pages/spec/Spec";
import Landing from "./pages/landing/Landing";

export default [
    {
        path: "/",
        component: Landing,
        exact: true,
    },
    {
        path: "/specs/:id",
        component: Spec,
        exact: true,
    }
];
