import { DataGroup } from './DataGroup';

export interface GroupDefinition {
    path: string;
    subGroups: (string | GroupDefinition)[] | DataGroupFactorySignature;
}

type DataGroupFactorySignature = (parent: DataGroup, path: string) => DataGroup;
