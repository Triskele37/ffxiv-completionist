import type { Store } from '../Store';

export function deleteValue(service: Store<any>) {
    return (
        path: string,
    ): void | null => {
        const segments = path.split('.');
        const key = segments.pop();
        if(!key) return;

        let obj = service.data;
        for(const segment of segments) {
            if(!obj) return null;

            if(!obj[segment]) return null;
            else obj = obj[segment];
        }

        if(!obj) return null;
        delete obj[key];

        service.saveStore();
    };
}
