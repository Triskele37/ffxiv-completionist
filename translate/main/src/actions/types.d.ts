export type Issue = {
    key: string;
    type: string;
    source: string | undefined;
    target: string | undefined;
    reasons?: string[];
};

export type JSON = Record<string, unknown>;
