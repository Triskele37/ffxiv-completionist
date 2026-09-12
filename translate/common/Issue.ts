export type Issue = {
    key: string;
    type: IssueType;
    source: string | undefined;
    target: string | undefined;
    reasons?: string[];
    newValue?: string; // for history
};

export type IssueType =
    | 'MISSING_FILE'
    | 'UNTRANSLATED'
    | 'MISSING_DATA_KEY'
    | 'EXTRA_DATA_KEY'
    | 'EXTRA_VERIFIED_KEY'
    | 'STALE';
