import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface AnalyticsCardProps {
  title: string;
  value: string;
  description: string;
  change: number;
  icon: React.ReactNode;
}

export function AnalyticsCard({ title, value, description, change, icon }: AnalyticsCardProps) {
  const isPositive = change >= 0;
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-slate-100 p-1.5 dark:bg-slate-800">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <CardDescription className="flex items-center pt-1">
          <span className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <ArrowUpIcon className="mr-1 h-4 w-4" /> : <ArrowDownIcon className="mr-1 h-4 w-4" />}
            {Math.abs(change)}%
          </span>
          <span className="ml-1 text-muted-foreground">{description}</span>
        </CardDescription>
      </CardContent>
    </Card>
  );
}