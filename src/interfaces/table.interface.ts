export interface TablePropInterface<B> {
    data: B[];
    columns: HeadRowInterface[];
}

export interface TableHeadPropInterface {
    columns: HeadRowInterface[];
}

export interface TableBodyPropInterface<T> {
    data: T[];
    RowComponent: React.ComponentType<RowProps<T>>;
}

export interface RowProps<T> {
    rowData: T;
  }

export interface TableRowPropInterface<T> {
    rowData: T[];
}

export interface HeadRowInterface {
    title: string;
    hidden?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
}

export interface ProjectTableBodyRowPropInterface {
    year: string;
    projectName: string;
    projectSubName: string;
    builtWith: string[];
    titleLink: string;
    href: string;
}
