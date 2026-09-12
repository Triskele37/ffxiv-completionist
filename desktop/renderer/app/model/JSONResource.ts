/**
 * Hyper generic JSON object type
 * */
export type JSONResource = Record<string, any>;

/**
 * JSON type for a group's `tasks` property
 * */
export type JsonTasks = { [key: string]: JSONResource };
