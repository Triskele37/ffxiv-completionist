import { DataGroup } from "../../../DataGroup";

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
    const group = DataGroup.fromJSON(parent, "./duty/quest/sidequests/index");

    group.subGroups = [
        Duty_Quests_Sidequests_Side_Story(group),
        Duty_Quests_Sidequests_Lominsan(group),
        Duty_Quests_Sidequests_Gridanian(group),
        Duty_Quests_Sidequests_Ul_Dahn(group),
        Duty_Quests_Sidequests_Coerthan(group),
        Duty_Quests_Sidequests_Mor_Dhonan(group),
        Duty_Quests_Sidequests_Ishgardian(group),
        Duty_Quests_Sidequests_Abalathian(group),
        Duty_Quests_Sidequests_Dravanian(group),
        Duty_Quests_Sidequests_Azys_Lla(group),
        Duty_Quests_Sidequests_Gyr_Abanian(group),
        Duty_Quests_Sidequests_Othardian(group),
        Duty_Quests_Sidequests_Hingan(group),
        Duty_Quests_Sidequests_Lakeland(group),
        Duty_Quests_Sidequests_Kholusia(group),
        Duty_Quests_Sidequests_Amh_Araeng(group),
        Duty_Quests_Sidequests_Il_Mheg(group),
        Duty_Quests_Sidequests_Rak_Tika(group),
        Duty_Quests_Sidequests_Tempest(group),
    ];

    return group;
};
