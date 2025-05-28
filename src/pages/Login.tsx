import { LoginForm } from "@/components/LoginForm";
import { useAuth } from "@/lib/auth";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { isAuthenticated } = useAuth();
  
  // Redirect if already logged in
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="mt-2 text-gray-600">Please sign in to continue</p>
        </div>
        
        <LoginForm />
        
        <div className="text-center text-sm text-gray-500">
          <p>Don't have an account? <span className="text-blue-600 hover:underline cursor-pointer">Sign up</span></p>
        </div>
      </div>
    </div>
  );
}