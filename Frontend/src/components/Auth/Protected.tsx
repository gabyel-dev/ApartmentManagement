// Protected.tsx
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CheckAuth from "./CheckAuth";

interface Props {
  component: React.ComponentType<any>;
}

const Protected: React.FC<Props> = ({ component: Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const verify = async () => {
      const result = await CheckAuth();
      setIsAuthenticated(result);
    };

    verify();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="border-4 border-t-transparent border-black rounded-full w-10 h-10 animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Component />;
};

export default Protected;
