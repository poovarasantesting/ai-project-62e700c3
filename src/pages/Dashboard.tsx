import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
  Users, 
  LineChart, 
  BarChart3, 
  DollarSign,
  FileText, 
  Calendar,
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnalyticsCard } from "@/components/Dashboard/AnalyticsCard";
import { AnalyticsChart } from "@/components/Dashboard/AnalyticsChart";
import { MonthlyReportsTable } from "@/components/Dashboard/MonthlyReportsTable";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data for demonstration
const chartData = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 900 },
  { name: "Mar", total: 1600 },
  { name: "Apr", total: 1800 },
  { name: "May", total: 2100 },
  { name: "Jun", total: 1700 },
  { name: "Jul", total: 2300 },
  { name: "Aug", total: 2000 },
  { name: "Sep", total: 1900 },
  { name: "Oct", total: 2400 },
  { name: "Nov", total: 2800 },
  { name: "Dec", total: 3200 },
];

const reportsData = [
  { id: "1", month: "January", year: 2024, fileName: "Jan2024_Report.pdf", fileSize: "2.4 MB", dateGenerated: "Feb 1, 2024" },
  { id: "2", month: "February", year: 2024, fileName: "Feb2024_Report.pdf", fileSize: "2.7 MB", dateGenerated: "Mar 1, 2024" },
  { id: "3", month: "March", year: 2024, fileName: "Mar2024_Report.pdf", fileSize: "3.1 MB", dateGenerated: "Apr 1, 2024" },
  { id: "4", month: "April", year: 2024, fileName: "Apr2024_Report.pdf", fileSize: "2.9 MB", dateGenerated: "May 1, 2024" },
];

export default function Dashboard() {
  const [currentYear, setCurrentYear] = useState("2024");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard | Analytics & Reports</title>
      </Helmet>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <Select value={currentYear} onValueChange={setCurrentYear}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="reports">Monthly Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <AnalyticsCard
                  title="Total Revenue"
                  value="$45,231.89"
                  description="from last month"
                  change={20.1}
                  icon={<DollarSign className="h-5 w-5" />}
                />
                <AnalyticsCard
                  title="Active Users"
                  value="2,350"
                  description="from last month"
                  change={10.5}
                  icon={<Users className="h-5 w-5" />}
                />
                <AnalyticsCard
                  title="Sales"
                  value="12,234"
                  description="from last month"
                  change={-5.2}
                  icon={<BarChart3 className="h-5 w-5" />}
                />
                <AnalyticsCard
                  title="Conversions"
                  value="49.5%"
                  description="from last month"
                  change={12.2}
                  icon={<LineChart className="h-5 w-5" />}
                />
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
                <AnalyticsChart 
                  data={chartData} 
                  title="Revenue by Month" 
                  description={`Monthly revenue overview for ${currentYear}`}
                />
                <Card className="col-span-4 lg:col-span-8">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your analytics overview for the past 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {isLoading ? (
                        <div className="flex items-center justify-center h-40">
                          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center gap-4 rounded-lg border p-3">
                              <div className="rounded-full bg-primary/10 p-2">
                                <Calendar className="h-5 w-5 text-primary" />
                              </div>
                              <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium">New report generated</p>
                                <p className="text-xs text-muted-foreground">
                                  Monthly report for {['April', 'March', 'February', 'January'][i-1]} {currentYear} is ready
                                </p>
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {['1d', '7d', '14d', '30d'][i-1]} ago
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Reports</CardTitle>
                  <CardDescription>Download detailed reports for each month</CardDescription>
                </CardHeader>
                <CardContent>
                  <MonthlyReportsTable reports={reportsData} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}