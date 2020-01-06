import { CentralShroudFATEs } from './central-shroud';
import { NorthShroudFATEs } from './north-shroud';
import { EastShroudFATEs } from './east-shroud';
import { SouthShroudFATEs } from './south-shroud';

export const BlackShroudFATEs = {
    name: 'Black Shroud',
    subGroups: [
        CentralShroudFATEs,
        NorthShroudFATEs,
        EastShroudFATEs,
        SouthShroudFATEs
    ],
    tasks: [
        {
            level: 50,
            name: 'Steel Reign',
            location: 'Sorrel Haven (14,18), Sorrel Haven (14,21), Hopeseed Pond (25,24), Proud Creek (16,27), Gelmorra Ruins (22,22), Alder Springs (26,21), Proud Creek (23,30), Larkscall (16,33), Nine Ivies (20,23), Lower Paths (33,23)',
            type: 'Notorious Monster'
        }
    ]
};
