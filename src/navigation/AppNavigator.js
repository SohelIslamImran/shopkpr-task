import { Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Spinner from "../components/common/Spinner";
import useEventListener from "../hooks/useEventListener";
import ScrollToTop from "../utils/ScrollToTop";
import routes from "./routes";

const AppNavigator = () => {
    const getActiveClass = () => (window.innerWidth < 1200 ? "" : "active");
    const [sidebarActiveClass, setSidebarActiveClass] = useState(getActiveClass());
    const onResize = () => setSidebarActiveClass(getActiveClass());
    useEventListener("resize", onResize);

    return (
        <Router>
            <ScrollToTop />
            <div id="app">
                <Sidebar
                    sidebarClass={sidebarActiveClass}
                    setSidebarClass={setSidebarActiveClass}
                />
                <main id="main">
                    <header className="mb-3">
                        <div
                            className="d-inline-block d-xl-none p-2"
                            onClick={() => setSidebarActiveClass((pre) => (pre ? "" : "active"))}
                        >
                            <i className="bi bi-justify fs-3" />
                        </div>
                    </header>
                    <div className="px-4">
                        <Switch>
                            {routes.map(({ path, exact, component }) => (
                                <Route key={path} exact={exact} path={path}>
                                    <Suspense fallback={<Spinner />}>{component}</Suspense>
                                </Route>
                            ))}
                        </Switch>
                    </div>
                </main>
            </div>
        </Router>
    );
};

export default AppNavigator;
