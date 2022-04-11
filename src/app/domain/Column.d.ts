export type Column = {
    key: string;
    header: string;
    link?: boolean;
    editable?: boolean;
    filterable?: boolean;
    filterType?: 'number';
    centered?: boolean;
    width?: number;
};
