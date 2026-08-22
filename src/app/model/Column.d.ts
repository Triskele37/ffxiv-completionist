export type Column = {
    key: string;
    header: string;

    // Link
    link?: boolean;
    groupLink?: boolean;
    taskLink?: boolean;
    trimGroup?: boolean;

    // Type
    editable?: boolean;
    filterable?: boolean;
    filterType?: 'number';

    // Style
    oneLineTextList?: boolean;
    centered?: boolean;
    width?: number;
};
