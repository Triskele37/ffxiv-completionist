import type { MainApi } from '@common/MainApi';

/* SystemJS module definition */
declare const nodeModule: NodeModule;

interface NodeModule {
    id: string;
}

declare global {
    interface Window {
        electron: MainApi;
    }
}
