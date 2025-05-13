
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-vpn-dark">
      <div className="text-center glass-card p-12 rounded-xl">
        <h1 className="text-4xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-white/80 mb-6">Oops! Page not found</p>
        <a 
          href="/" 
          className="text-vpn-accent hover:text-vpn-accent-lime underline transition-colors"
        >
          Return to Dashboard
        </a>
      </div>
    </div>
  );
};

export default NotFound;
