import { Header } from "@/components/ui/Header";
import { useAuth } from "@/lib/auth";

export default function Home() {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {user ? (
            <div className="bg-white rounded-lg shadow p-6">
              <h1 className="text-3xl font-bold">Welcome back, {user.username}!</h1>
              <p className="mt-2 text-gray-600">
                You have successfully logged in to your account.
              </p>
              <div className="mt-6 p-4 bg-gray-100 rounded-md">
                <h2 className="font-semibold">Account Details:</h2>
                <div className="mt-2 space-y-1">
                  <p><span className="font-medium">Username:</span> {user.username}</p>
                  <p><span className="font-medium">Email:</span> {user.email}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-3xl font-bold">Welcome to My App</h1>
              <p className="mt-4 text-xl text-gray-600">
                Please log in to access your dashboard.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}