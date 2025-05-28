import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

interface Report {
  id: string;
  month: string;
  year: number;
  fileName: string;
  fileSize: string;
  dateGenerated: string;
}

interface MonthlyReportsTableProps {
  reports: Report[];
}

export function MonthlyReportsTable({ reports }: MonthlyReportsTableProps) {
  const handleDownload = (reportId: string, fileName: string) => {
    console.log(`Downloading report ${reportId}: ${fileName}`);
    // In a real app, this would trigger an actual download
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Month</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>File Name</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Generated</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports.map((report) => (
            <TableRow key={report.id}>
              <TableCell className="font-medium">{report.month}</TableCell>
              <TableCell>{report.year}</TableCell>
              <TableCell>{report.fileName}</TableCell>
              <TableCell>{report.fileSize}</TableCell>
              <TableCell>{report.dateGenerated}</TableCell>
              <TableCell className="text-right">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleDownload(report.id, report.fileName)}
                >
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}