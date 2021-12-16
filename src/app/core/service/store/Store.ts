import { ElectronService } from '@service/electron/electron.service';

export class Store<StoreType> {
    data: StoreType;
    path: string;
    name: string;

    constructor(path?: string, name?: string) {
        this.path = path ? path : '';
        this.name = name ? name : 'config.json';

        if(this.name.substr(-5) !== '.json') this.name += '.json';

        const file = ElectronService.fs.readFileSync(`${this.path}\\${this.name}`, 'utf8');
        this.data = JSON.parse(file);
    }

    get(path: string): any {
        const segments = path.split('.');

        let obj = this.data;
        for(const segment of segments) {
            if(!obj[segment]) return null;
            else obj = obj[segment];
        }

        return obj;
    }

    set(path: string, value: any): void {
        const segments = path.split('.');
        const key = segments.pop();

        let obj = this.data;
        for(const segment of segments) {
            if(!obj[segment]) return null;
            else obj = obj[segment];
        }

        obj[key] = value;

        //TODO: save
    }

    delete(path: string) {
        const segments = path.split('.');
        const key = segments.pop();

        let obj = this.data;
        for(const segment of segments) {
            if(!obj[segment]) return null;
            else obj = obj[segment];
        }

        delete obj[key];

        //TODO: save
    }
}
