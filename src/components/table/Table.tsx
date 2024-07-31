import React from "react";
import { RowProps, TablePropInterface } from "../../interfaces/table.interface";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import ProjectTableBodyRow from "./ProjectTableBodyRow";

const Table = <B,>({ data, columns }: TablePropInterface<B>): React.ReactElement => {
    return (
        <table id="content" className="mt-12 w-full border-collapse text-left">
            <TableHead columns={columns} />
            <TableBody data={data} RowComponent={ProjectTableBodyRow as React.ComponentType<RowProps<B>>} />
        </table>
    );
};

export default Table;
