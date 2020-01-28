import { Quest_Sidequests_Side_Story } from './side-story';
import { Quest_Sidequests_Lominsan } from './lominsan';
import { Quest_Sidequests_Gridanian } from './gridanian';
import { Quest_Sidequests_Ul_Dahn } from './ul-dahn';
import { Quest_Sidequests_Coerthan } from './coerthan';
import { Quest_Sidequests_Mor_Dhonan } from './mor-dhonan';
import { Quest_Sidequests_Ishgardian } from './ishgardian';
import { Quest_Sidequests_Abalathian } from './abalathian';
import { Quest_Sidequests_Dravanian } from './dravanian';
import { Quest_Sidequests_Azys_Lla } from './azys-lla';
import { Quest_Sidequests_Gyr_Abanian } from './gyr-abanian';
import { Quest_Sidequests_Othardian } from './othardian';
import { Quest_Sidequests_Hingan } from './hingan';
import { Quest_Sidequests_Lakeland } from './lakeland';
import { Quest_Sidequests_Kholusia } from './kholusia';
import { Quest_Sidequests_Amh_Araeng } from './amh-araeng';
import { Quest_Sidequests_Il_Mheg } from './il-mheg';
import { Quest_Sidequests_Rak_Tika } from './rak-tika';
import { Quest_Sidequests_Tempest } from './tempest';

export const Quest_Sidequests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.sidequests`;

    return {
        name: 'Sidequests',
        storageKey,
        groupKeys: [
            "Side_Story",
            "Lominsan",
            "Gridanian",
            "Ul_Dahn",
            "Coerthan",
            "Mor_Dhonan",
            "Ishgardian",
            "Abalathian",
            "Dravanian",
            "Azys_Lla",
            "Gyr_Abanian",
            "Othardian",
            "Hingan",
            "Lakeland",
            "Kholusia",
            "Amh_Araeng",
            "Il_Mheg",
            "Rak_Tika",
            "Tempest",
        ],
        // Groups
        Side_Story: Quest_Sidequests_Side_Story(storageKey),
        Lominsan: Quest_Sidequests_Lominsan(storageKey),
        Gridanian: Quest_Sidequests_Gridanian(storageKey),
        Ul_Dahn: Quest_Sidequests_Ul_Dahn(storageKey),
        Coerthan: Quest_Sidequests_Coerthan(storageKey),
        Mor_Dhonan: Quest_Sidequests_Mor_Dhonan(storageKey),
        Ishgardian: Quest_Sidequests_Ishgardian(storageKey),
        Abalathian: Quest_Sidequests_Abalathian(storageKey),
        Dravanian: Quest_Sidequests_Dravanian(storageKey),
        Azys_Lla: Quest_Sidequests_Azys_Lla(storageKey),
        Gyr_Abanian: Quest_Sidequests_Gyr_Abanian(storageKey),
        Othardian: Quest_Sidequests_Othardian(storageKey),
        Hingan: Quest_Sidequests_Hingan(storageKey),
        Lakeland: Quest_Sidequests_Lakeland(storageKey),
        Kholusia: Quest_Sidequests_Kholusia(storageKey),
        Amh_Araeng: Quest_Sidequests_Amh_Araeng(storageKey),
        Il_Mheg: Quest_Sidequests_Il_Mheg(storageKey),
        Rak_Tika: Quest_Sidequests_Rak_Tika(storageKey),
        Tempest: Quest_Sidequests_Tempest(storageKey),
    };
};
