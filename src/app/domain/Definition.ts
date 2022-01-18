import { DataGroup } from './DataGroup';
import { ElectronService } from '@service/electron/electron.service';

export interface GroupDefinition {
    path: string;
    subGroups: (string | GroupDefinition)[] | DataGroupFactorySignature;
}

type DataGroupFactorySignature = (parent: DataGroup, path: string) => DataGroup;
