import type { MainApi } from '@common/MainApi';

declare global {
    interface Window {
        electron: MainApi;
    }
}
