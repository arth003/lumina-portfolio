import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Page not found</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:shadow-lg glow-primary"
          >
            <Home size={16} />
            Back Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
