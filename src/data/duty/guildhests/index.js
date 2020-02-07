import { DataGroup } from "../../DataGroup";
import { DutyColumnConfig } from "../columnConfigs";

import { Duty_Guildhests_Arcanist } from './arcanist';
import { Duty_Guildhests_Archer } from './archer';
import { Duty_Guildhests_Astrologian } from './astrologian';
import { Duty_Guildhests_Conjurer } from './conjurer';
import { Duty_Guildhests_Dark_Knight } from './dark-knight';
import { Duty_Guildhests_Gladiator } from './gladiator';
import { Duty_Guildhests_Lancer } from './lancer';
import { Duty_Guildhests_Machinist } from './machinist';
import { Duty_Guildhests_Marauder } from './marauder';
import { Duty_Guildhests_Pugilist } from './pugilist';
import { Duty_Guildhests_Red_Mage } from './red-mage';
import { Duty_Guildhests_Rogue } from './rogue';
import { Duty_Guildhests_Samurai } from './samurai';
import { Duty_Guildhests_Thaumaturge } from './thaumaturge';

export const Duty_Guildhests = function(name, parent) {
    const data = new DataGroup(name, parent);
    data.columnConfig = DutyColumnConfig;

    data.initializeSubGroups([
        Duty_Guildhests_Arcanist,
        Duty_Guildhests_Archer,
        Duty_Guildhests_Astrologian,
        Duty_Guildhests_Conjurer,
        Duty_Guildhests_Dark_Knight,
        Duty_Guildhests_Gladiator,
        Duty_Guildhests_Lancer,
        Duty_Guildhests_Machinist,
        Duty_Guildhests_Marauder,
        Duty_Guildhests_Pugilist,
        Duty_Guildhests_Red_Mage,
        Duty_Guildhests_Rogue,
        Duty_Guildhests_Samurai,
        Duty_Guildhests_Thaumaturge,
    ]);

    return data;
};
