import React from "react";
import { TableBodyPropInterface } from "../../interfaces/table.interface";

const TableBody = <T,>({data, RowComponent}: TableBodyPropInterface<T>): React.ReactElement => {
    return (
        <tbody>
            {data.map((d, index) => <RowComponent key={index} rowData={d} />)}
        </tbody>
    );
};

export default TableBody;
