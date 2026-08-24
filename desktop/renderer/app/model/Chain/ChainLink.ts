export type Link = string | number;

export type Links = Link | Link[];

export type AtLinks = {
    [key: string]: Links;
};
