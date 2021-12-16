import { StoreService } from '../store.service';
import { migrate_5_5_to_5_58 } from './5_5-5_58';

export function migrateData(): void {
    const version = StoreService.pStore.get('version');

    // Migrate based on current store version
    // Must flow to each migration for multi-version jumps
    if(version === '0.5.5') migrate_5_5_to_5_58();

    if(!version) {
        console.log('No version found, setting to current');
        StoreService.pStore.set('version', '0.5.58');
    }
}
