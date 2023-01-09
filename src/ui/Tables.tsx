import { FC } from "react";
import { Table } from "../components/Table";
import { TableBody, TableCell, TableHead, TableRow } from "../components/Table/Table";


const items = ["bg-rose-500", "bg-yellow-500", "bg-blue-500", "bg-orange-500", "bg-green-500", "bg-sky-500"]

export const TableUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
      <fieldset className="border p-2 ">
        <legend className="p-2  dark:text-gray-400">Tables</legend>
        <div className="flex items-center flex-wrap gap-8 py-2">
           <Table className=" w-full bg-white dark:bg-transparent">
             <TableHead>
                <TableRow>
                   <TableCell type="th">Date</TableCell>
                   <TableCell type="th">Name</TableCell>
                   <TableCell type="th">Status</TableCell>
                   <TableCell type="th">Ship to</TableCell>
                   <TableCell type="th">Payment method</TableCell>
                   <TableCell type="th">Sale Amount</TableCell>
                </TableRow>
             </TableHead>
             <TableBody>
                {items.map((item, i) => {
                  return <TableRow hover key={i}>
                    <TableCell>16 Mar, 2019</TableCell>
                    <TableCell>Elvis Presley</TableCell>
                    <TableCell>
                      <div className={`w-2 h-2 rounded-full `+ item}/>
                    </TableCell>
                    <TableCell>Tupelo, MS</TableCell>
                    <TableCell>VISA ⠀•••• 3719</TableCell>
                    <TableCell>$312.44</TableCell>
                </TableRow>})}
             </TableBody>
           </Table>
        </div>
      </fieldset>
    </div>
  );
};
