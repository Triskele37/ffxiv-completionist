import type { JSONResource } from '@model/JSONResource';

export type JSON_GROUP = JSONResource & {
    columns?: JSONResource;
    tasks?: Record<string, JSONResource & {
        hidden?: boolean;
    }>;
};
