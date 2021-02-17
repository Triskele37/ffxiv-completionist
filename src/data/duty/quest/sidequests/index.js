import { DataGroup } from "../../../DataGroup";
import { QuestColumnConfig } from "../columnConfigs";

import { Duty_Quests_Sidequests_Side_Story } from './side-story';
import { Duty_Quests_Sidequests_Lominsan } from './lominsan';
import { Duty_Quests_Sidequests_Gridanian } from './gridanian';
import { Duty_Quests_Sidequests_Ul_Dahn } from './ul-dahn';
import { Duty_Quests_Sidequests_Coerthan } from './coerthan';
import { Duty_Quests_Sidequests_Mor_Dhonan } from './mor-dhonan';
import { Duty_Quests_Sidequests_Ishgardian } from './ishgardian';
import { Duty_Quests_Sidequests_Abalathian } from './abalathian';
import { Duty_Quests_Sidequests_Dravanian } from './dravanian';
import { Duty_Quests_Sidequests_Azys_Lla } from './azys-lla';
import { Duty_Quests_Sidequests_Gyr_Abanian } from './gyr-abanian';
import { Duty_Quests_Sidequests_Othardian } from './othardian';
import { Duty_Quests_Sidequests_Hingan } from './hingan';
import { Duty_Quests_Sidequests_Lakeland } from './lakeland';
import { Duty_Quests_Sidequests_Kholusia } from './kholusia';
import { Duty_Quests_Sidequests_Amh_Araeng } from './amh-araeng';
import { Duty_Quests_Sidequests_Il_Mheg } from './il-mheg';
import { Duty_Quests_Sidequests_Rak_Tika } from './rak-tika';
import { Duty_Quests_Sidequests_Tempest } from './tempest';

export const Duty_Quests_Sidequests = function(parent) {
    const data = new DataGroup("Sidequests", parent);
    data.name_fr = "Quêtes Annexes";

    data.columnConfig = QuestColumnConfig;

    data.initializeSubGroups([
        Duty_Quests_Sidequests_Side_Story,
        Duty_Quests_Sidequests_Lominsan,
        Duty_Quests_Sidequests_Gridanian,
        Duty_Quests_Sidequests_Ul_Dahn,
        Duty_Quests_Sidequests_Coerthan,
        Duty_Quests_Sidequests_Mor_Dhonan,
        Duty_Quests_Sidequests_Ishgardian,
        Duty_Quests_Sidequests_Abalathian,
        Duty_Quests_Sidequests_Dravanian,
        Duty_Quests_Sidequests_Azys_Lla,
        Duty_Quests_Sidequests_Gyr_Abanian,
        Duty_Quests_Sidequests_Othardian,
        Duty_Quests_Sidequests_Hingan,
        Duty_Quests_Sidequests_Lakeland,
        Duty_Quests_Sidequests_Kholusia,
        Duty_Quests_Sidequests_Amh_Araeng,
        Duty_Quests_Sidequests_Il_Mheg,
        Duty_Quests_Sidequests_Rak_Tika,
        Duty_Quests_Sidequests_Tempest,
    ]);

    return data;
};
