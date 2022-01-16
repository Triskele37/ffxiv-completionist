export type Column = {
    key: string;
    header: string;
    editable?: boolean;
    filterable?: boolean;
    filterType?: 'number';
    centered?: boolean;
    width?: number;
};
