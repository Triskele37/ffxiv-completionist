import { DataGroup } from '@domain/DataGroup';

import { CHARACTER_DEFINITION } from './definitions/character';
import { DUTY_DEFINITION } from './definitions/duty';
import { LOGS_DEFINITION } from './definitions/logs';
import { TRAVEL_DEFINITION } from './definitions/travel';
import { SOCIAL_DEFINITION } from './definitions/social';
import { Custom } from './custom';

const data = DataGroup.fromJSON(null, './index');

data.subGroups = [
    DataGroup.fromDefinition(data, CHARACTER_DEFINITION),
    DataGroup.fromDefinition(data, DUTY_DEFINITION),
    DataGroup.fromDefinition(data, LOGS_DEFINITION),
    DataGroup.fromDefinition(data, TRAVEL_DEFINITION),
    DataGroup.fromDefinition(data, SOCIAL_DEFINITION),
    Custom(data),
];

export { data };
