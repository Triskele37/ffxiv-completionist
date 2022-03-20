import { GroupDefinition } from '@domain/Definition';

export const SOCIAL_DEFINITION: GroupDefinition = {
    path: 'social',
    subGroups: [{
        path: 'emotes',
        subGroups: [
            'general',
            'special',
            'expressions'
        ]
    }]
};
