import { Orchestrion } from "./orchestrion";

export const Collectable = {
    name: 'Collectable',
    subGroups:[
        require('./aesthetician.js'),
        require('./barding.js'),

        require('./emote.js'),
        require('./minion.js'),
        require('./mount.js'),
        Orchestrion,
        require('./tripletriad-card.js'),
        require('./tripletriad-opponent.js'),
    ]
};
