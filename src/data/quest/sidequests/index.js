import { SideStory } from './side-story';
import { Lominsan } from './lominsan';
import { Gridanian } from './gridanian';
import { UlDahn } from './ul-dahn';
import { Coerthan } from './coerthan';
import { MorDhonan } from './mor-dhonan';
import { Ishgardian } from './ishgardian';
import { Abalathian } from './abalathian';
import { Dravanian } from './dravanian';
import { AzysLla } from './azys-lla';
import { GyrAbanian } from './gyr-abanian';
import { Othardian } from './othardian';
import { Hingan } from './hingan';
import { Lakeland } from './lakeland';
import { Kholusia } from './kholusia';
import { AmhAraeng } from './amh-araeng';
import { IlMheg } from './il-mheg';
import { RakTika } from './rak-tika';
import { Tempest } from './tempest';

export const Sidequests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.sidequests`;

    return {
        name: 'Sidequests',
        storageKey,
        subGroups: [
            SideStory(storageKey),
            Lominsan(storageKey),
            Gridanian(storageKey),
            UlDahn(storageKey),
            Coerthan(storageKey),
            MorDhonan(storageKey),
            Ishgardian(storageKey),
            Abalathian(storageKey),
            Dravanian(storageKey),
            AzysLla(storageKey),
            GyrAbanian(storageKey),
            Othardian(storageKey),
            Hingan(storageKey),
            Lakeland(storageKey),
            Kholusia(storageKey),
            AmhAraeng(storageKey),
            IlMheg(storageKey),
            RakTika(storageKey),
            Tempest(storageKey),
        ]
    };
};
