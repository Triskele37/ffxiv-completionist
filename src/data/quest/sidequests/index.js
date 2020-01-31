import { DataGroup } from "../../DataGroup";

import { Quests_Sidequests_Side_Story } from './side-story';
import { Quests_Sidequests_Lominsan } from './lominsan';
import { Quests_Sidequests_Gridanian } from './gridanian';
import { Quests_Sidequests_Ul_Dahn } from './ul-dahn';
import { Quests_Sidequests_Coerthan } from './coerthan';
import { Quests_Sidequests_Mor_Dhonan } from './mor-dhonan';
import { Quests_Sidequests_Ishgardian } from './ishgardian';
import { Quests_Sidequests_Abalathian } from './abalathian';
import { Quests_Sidequests_Dravanian } from './dravanian';
import { Quests_Sidequests_Azys_Lla } from './azys-lla';
import { Quests_Sidequests_Gyr_Abanian } from './gyr-abanian';
import { Quests_Sidequests_Othardian } from './othardian';
import { Quests_Sidequests_Hingan } from './hingan';
import { Quests_Sidequests_Lakeland } from './lakeland';
import { Quests_Sidequests_Kholusia } from './kholusia';
import { Quests_Sidequests_Amh_Araeng } from './amh-araeng';
import { Quests_Sidequests_Il_Mheg } from './il-mheg';
import { Quests_Sidequests_Rak_Tika } from './rak-tika';
import { Quests_Sidequests_Tempest } from './tempest';

export const Quests_Sidequests = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Sidequests_Side_Story,
        Quests_Sidequests_Lominsan,
        Quests_Sidequests_Gridanian,
        Quests_Sidequests_Ul_Dahn,
        Quests_Sidequests_Coerthan,
        Quests_Sidequests_Mor_Dhonan,
        Quests_Sidequests_Ishgardian,
        Quests_Sidequests_Abalathian,
        Quests_Sidequests_Dravanian,
        Quests_Sidequests_Azys_Lla,
        Quests_Sidequests_Gyr_Abanian,
        Quests_Sidequests_Othardian,
        Quests_Sidequests_Hingan,
        Quests_Sidequests_Lakeland,
        Quests_Sidequests_Kholusia,
        Quests_Sidequests_Amh_Araeng,
        Quests_Sidequests_Il_Mheg,
        Quests_Sidequests_Rak_Tika,
        Quests_Sidequests_Tempest,
    ]);
};
