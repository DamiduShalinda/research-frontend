import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import Loading from '../components/loading/Loading';

interface ProtectedRouteProps {
    children : React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }: ProtectedRouteProps) => {
    const { token } = React.useContext(AuthContext);
    const [loading, setLoading] = React.useState(true);
  
    React.useEffect(() => {
      // Check if the token is loaded from localStorage.
      if (token !== null) {
        setLoading(false);
      } else {
        setLoading(false)
      }
    }, [token]);
  
    if (loading) {
      return <Loading/>; // You can show a loading indicator here.
    }
  
    if (token) {
      return <>{children}</>;
    } else {
      return <Navigate to="/login" replace />;
    }
  };

export default ProtectedRoute
