import {withAuthenticationRequired} from "@auth0/auth0-react";
import Loader from "./Loader";

const ProtectedRoute = ( {component}) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => <Loader/>
    });

    return <Component/>
}

export default ProtectedRoute;