import { Component } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, RefreshCw } from "lucide-react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-navy-dark px-6 text-center">
          <AlertTriangle className="w-16 h-16 text-gold mb-6" />
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-3">
            Something Went Wrong
          </h1>
          <p className="text-sm sm:text-base text-navy/50 dark:text-white/50 max-w-md mb-8">
            An unexpected error occurred. Please try refreshing the page.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-light text-navy font-semibold rounded-full transition-all shadow-lg shadow-gold/25 text-sm"
            >
              <RefreshCw size={16} /> Refresh Page
            </button>
            <Link
              to="/"
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 px-6 py-3 border border-navy/20 dark:border-white/20 text-navy/70 dark:text-white/70 font-medium rounded-full transition-all text-sm"
            >
              Go Home
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
