import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useUserAuthState from '../hooks/useUserAuthState';


const RequireAuthUser = ({ children }) => {
    // const [user] = useUserAuthState();
    // const location = useLocation();

    // if (user !== "Student") {
    //     console.log("from check", user);
    //     return <Navigate to="/login" state={{ from: location }} replace></Navigate>

    // }

    // return children;

    const [user, setUser] = useState('null'); // Initialize with null or an appropriate initial value
    const location = useLocation();
    const [loading, setLoading] = useState(true); // Initialize loading state

    useEffect(() => {
        const FetchData = async () => {
            try {
                const [user] = await useUserAuthState();
                setUser(user);
            } catch (error) {
                // Handle error
            } finally {
                setLoading(false); // Set loading state to false when done
            }
        };

        FetchData();
    }, [user]);

    if (loading) {
        // You can return a loading indicator or any content while waiting
        return <div>Loading...</div>;
    }

    if (user !== "Student") {
        console.log("from check", user);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuthUser;