import type { Store } from '../Store';

export function setValue(service: Store<any>) {
    return (
        path: string,
        value: any,
    ): void => {
        const segments = path.split('.');
        const key = segments.pop();
        if(!key) return;

        let obj = service.data;
        for(const segment of segments) {
            if(!obj) return;

            if(!obj[segment]) (obj as any)[segment] = {};
            obj = obj[segment];
        }

        (obj as any)[key] = value;

        service.saveStore();
    };
}
