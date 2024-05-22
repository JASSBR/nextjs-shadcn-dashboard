import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
  } from "@/components/ui/card";
  
  const Customers = [
    {
      Customer: "INV001",
      Date: "04 Apr, 2020",
      Status: "Credit Card",
      Total: "$250.00",
    },
    {
      Customer: "INV002",
      Date: "04 Apr, 2020",
      Status: "PayPal",
      Total: "$150.00",
    },
    {
      Customer: "INV003",
      Date: "04 Apr, 2020",
      Status: "Bank Transfer",
      Total: "$350.00",
    },
    {
      Customer: "INV004",
      Date: "04 Apr, 2020",
      Status: "Credit Card",
      Total: "$450.00",
    },
    {
      Customer: "INV005",
      Date: "04 Apr, 2020",
      Status: "PayPal",
      Total: "$550.00",
    },


  ]
  
  export function TableDemo() {
    return (
        <Card className='w-full'>
    <CardHeader>
      <CardTitle>Recent orders</CardTitle>
    </CardHeader>
    <CardContent className="grid gap-4 ">
    <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">CUSTOMER</TableHead>
            <TableHead  className="w-[200px]">DATE</TableHead>
            <TableHead className="w-[200px]">STATUS</TableHead>
            <TableHead className="w-[200px] text-right">TOTAL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Customers.map((invoice) => (
            <TableRow key={invoice.Customer}>
              <TableCell className="font-medium">{invoice.Customer}</TableCell>
              <TableCell>{invoice.Date}</TableCell>
              <TableCell>{invoice.Total}</TableCell>
              <TableCell className="text-right">{invoice.Status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    </CardContent>
  </Card>
      
    )
  }
  