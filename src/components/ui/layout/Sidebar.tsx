import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3,
  HelpCircle,
  LogOut,
  Menu,
  X,
  User,
  Home
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/users", icon: Users },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  return (
    <div className={cn(
      "flex flex-col bg-slate-50 border-r border-slate-200 dark:bg-slate-950 dark:border-slate-800 h-screen transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex items-center p-4 border-b border-slate-200 dark:border-slate-800">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="mr-2 md:hidden"
        >
          {collapsed ? <Menu /> : <X />}
        </Button>
        
        {!collapsed && (
          <span className="text-xl font-bold">MyApp</span>
        )}
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto hidden md:flex"
        >
          {collapsed ? <Menu /> : <X />}
        </Button>
      </div>
      
      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-1 px-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href || 
              (item.href !== "/" && location.pathname.startsWith(item.href));
              
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-50"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                  collapsed ? "justify-center" : ""
                )}
              >
                <item.icon className={cn("h-5 w-5", collapsed ? "" : "mr-3")} />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <Link
          to="/profile"
          className={cn(
            "flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors",
            location.pathname === "/profile" ? "bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-50" : "",
            collapsed ? "justify-center" : ""
          )}
        >
          {collapsed ? (
            <User className="h-5 w-5" />
          ) : (
            <>
              <Avatar className="h-6 w-6 mr-2">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <span>My Profile</span>
            </>
          )}
        </Link>
        
        <Button
          variant="ghost"
          size={collapsed ? "icon" : "default"}
          className={cn("w-full mt-2 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50", 
            collapsed ? "justify-center px-0" : "")}
        >
          <LogOut className={cn("h-5 w-5", collapsed ? "" : "mr-2")} />
          {!collapsed && "Logout"}
        </Button>
      </div>
    </div>
  );
}