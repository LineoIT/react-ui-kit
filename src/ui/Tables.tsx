import { FC } from "react";
import { Tab } from "../components/Tab";
import { Table } from "../components/Table";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "../components/Table/Table";
import { Code } from "./Code";
import { Heading } from "./Heading";
import { tableCodeSnipet } from "./snipets";

const items = [
  "bg-rose-500",
  "bg-yellow-500",
  "bg-blue-500",
  "bg-orange-500",
  "bg-green-500",
  "bg-sky-500",
];

export const TableUI: FC<{ className?: string }> = (prop) => {
  return (
    <div className={prop.className}>
      <Heading>Table</Heading>

      <div className="  py-2">
        <Tab
          onTabItemChange={(tab: number) => {
            console.log(tab);
          }}
        >
          <div className="flex">
            <Tab.Header tab={0}>Preview</Tab.Header>
            <Tab.Header tab={1}>Code</Tab.Header>
          </div>
          <div className="flex">
            <Tab.Content tab={0}>
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
                    return (
                      <TableRow hover key={i}>
                        <TableCell>16 Mar, 2019</TableCell>
                        <TableCell>Elvis Presley</TableCell>
                        <TableCell>
                          <div className={`w-2 h-2 rounded-full ` + item} />
                        </TableCell>
                        <TableCell>Tupelo, MS</TableCell>
                        <TableCell>VISA ⠀•••• 3719</TableCell>
                        <TableCell>$312.44</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Tab.Content>
            <Tab.Content tab={1}>
              <Code content={tableCodeSnipet} />;
            </Tab.Content>
          </div>
        </Tab>
      </div>
    </div>
  );
};
