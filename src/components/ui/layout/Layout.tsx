import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile sidebar */}
      <div className={cn(
        "fixed inset-0 z-40 md:hidden",
        mobileOpen ? "block" : "hidden"
      )}>
        <div className="fixed inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-64 flex-col">
          <Sidebar />
        </div>
      </div>
      
      {/* Desktop sidebar */}
      <div className={cn(
        "hidden md:block",
        sidebarOpen ? "w-64" : "w-16"
      )}>
        <Sidebar />
      </div>
      
      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="flex-1 text-xl font-bold">MyApp</div>
        </div>
        
        <main className="flex-1 overflow-auto bg-slate-100 dark:bg-slate-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
}