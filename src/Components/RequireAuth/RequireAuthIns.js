import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useUserAuthState from '../hooks/useUserAuthState';


const RequireAuthIns = ({ children }) => {
    const [user] = useUserAuthState();
    const location = useLocation();

    if (user !== 'Instructor') {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default RequireAuthIns;