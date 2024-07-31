import React from "react";
import TableHeadRow from "./TableHeadRow";
import { TableHeadPropInterface} from "../../interfaces/table.interface";

const TableHead = ({columns}: TableHeadPropInterface): React.ReactElement => {
    return (
        <thead className="sticky top-0 z-10 border-b border-primary/25 dark:border-primaryDark/25 px-6 py-5 backdrop-blur">
            <TableHeadRow rowData={columns} />
        </thead>
    );
};

export default TableHead;
