/**
 * Convenience type for separate feature files
 * - NOTHING LOADS THIS TYPE
 * */
export type Features = {
    'task-links': TaskLink[];
    'multi-task-links': TaskLink[];
};

export type TaskLink = {
    i18nKey: string;
    url: string;
    use: string;
    icon?: string;

    // Multi
    rootGroup?: string;
    usePrefix?: boolean;

    // Encode / Transform
    preEncodeTransforms: LinkTransform[];
    join?: string;
    skipPrefixEncode?: boolean;
    skipEncode?: boolean;
    postEncodeTransforms: LinkTransform[];
};

export type LinkTransform =
    | TextTransform
    | MapTransform
    | Base64Transform

type TextTransform = {
    from: string;
    to: string;
};

type MapTransform = {
    map: string;
};

type Base64Transform = {
    base64: true;
};
