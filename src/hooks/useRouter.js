import { useMemo } from "react";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";

const useRouter = () => {
    const params = useParams();
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    return useMemo(() => {
        return {
            push: history.push,
            replace: history.replace,
            pathname: location.pathname,
            state: location.state,
            query: {
                ...location.search,
                ...params,
            },
            match,
            location,
            history,
        };
    }, [params, match, location, history]);
};

export default useRouter;
