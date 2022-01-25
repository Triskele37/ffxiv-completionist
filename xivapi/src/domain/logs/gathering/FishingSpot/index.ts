import { Content } from '../../../Content.js';

export class FishingSpot extends Content {
    API_ENDPOINT = 'FishingSpot';
    // MERGE_KEYS = ['name', 'issueLocation', 'leveZone'];
    // COMMON_KEYS = ['level'];

    constructor() {
        super('logs/gathering/FishingSpot');
    }
}
