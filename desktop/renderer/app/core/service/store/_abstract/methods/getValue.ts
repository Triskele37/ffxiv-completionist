import type { Store } from '../Store';

export function getValue(service: Store<any>) {
    return (
        path?: string,
    ): any => {
        const segments = path?.split('.') || [];

        let obj = service.data;
        for(const segment of segments) {
            if(obj?.[segment] === undefined) return null;
            else obj = obj[segment];
        }

        return obj;
    };
}
