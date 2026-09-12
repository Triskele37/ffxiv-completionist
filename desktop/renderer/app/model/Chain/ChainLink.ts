export type Link = string | number;

export type Links = Link | Link[];

export type AtLinks = {
    [key: string]: Links;
};

export type ChainKeys =
    | 'cPrev'
    | 'cPrevAt'
    | 'cPrevAny'
    | 'cNext'
    | 'cUnlock'
    | 'cUnlocks'
    | 'cSiblings'
    | 'cSiblingsAt'
    | 'cCombo'
    | 'cComboAt'
    | 'cExclude'
    | 'cExclusive';
