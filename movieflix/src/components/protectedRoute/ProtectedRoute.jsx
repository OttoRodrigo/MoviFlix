import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = ({children}) =>{
    const auth = useAuth();
    const location = useLocation();

    if(!auth.isAutenthicated){
        return <Navigate to="/login" state={{from: location}} replace />
    }

    return children;
}

export default ProtectedRoute;