import { ElectronService } from '@service/electron/electron.service';

export class Store<StoreType> {
    data: StoreType;
    path: string;
    name: string;
    ipcGetEvent: 'get-config' | 'get-save';
    ipcSaveEvent: 'set-config' | 'set-save';
    svcElectron: ElectronService;

    constructor(
        electronService: ElectronService,
        ipcGetEvent: 'get-config' | 'get-save',
        ipcSaveEvent: 'set-config' | 'set-save'
    ) {
        this.svcElectron = electronService;
        this.ipcGetEvent = ipcGetEvent;
        this.ipcSaveEvent = ipcSaveEvent;
        this.load();
    }

    load() {
        this.data = this.svcElectron.ipcRenderer.sendSync(this.ipcGetEvent);
    }

    get(path?: string): any {
        const segments = path?.split('.') || [];

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
            if(!obj[segment]) obj[segment] = {};
            obj = obj[segment];
        }

        obj[key] = value;

        this.save();
    }

    delete(path: string): void {
        const segments = path.split('.');
        const key = segments.pop();

        let obj = this.data;
        for(const segment of segments) {
            if(!obj[segment]) return null;
            else obj = obj[segment];
        }

        delete obj[key];

        this.save();
    }

    private save() {
        this.svcElectron.ipcRenderer.sendSync(this.ipcSaveEvent, this.data);
    }
}
