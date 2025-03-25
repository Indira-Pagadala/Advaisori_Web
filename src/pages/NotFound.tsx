
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="glassmorphism rounded-xl p-12 max-w-lg mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6 text-secondary">404</h1>
        <p className="text-2xl font-medium mb-8">Page Not Found</p>
        <p className="text-muted-foreground mb-10">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary flex items-center justify-center gap-2">
            <Home size={18} />
            Return to Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
