import React from "react";
import TableHeadRow from "./TableHeadRow";
import { TableHeadPropInterface} from "../../interfaces/table.interface";

const TableHead = ({columns}: TableHeadPropInterface): React.ReactElement => {
    return (
        <thead className="sticky top-0 z-10 border-b border-primary dark:border-primaryDark px-6 py-5">
            <TableHeadRow rowData={columns} />
        </thead>
    );
};

export default TableHead;
