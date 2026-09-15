import type { NavigationService } from '../navigation.service';

export function addGroupHistory(service: NavigationService) {
    return (): void => {
        const selectedGroup = service.selectedGroup();

        if(!selectedGroup?.contentLink) return; // Must exist

        if(selectedGroup.type === 'UI') {
            if(!selectedGroup.contentLink) return;
        }
        else {
            if(!selectedGroup.tasks?.length) return; // Must have tasks
        }

        // Push a pretty history string
        const newHistory = [...service.groupHistory()];
        newHistory.unshift(selectedGroup);

        // Remove older duplicate (check index 0 because we just added it)
        const lastIndex = newHistory.lastIndexOf(selectedGroup);
        if(lastIndex > 0) newHistory.splice(lastIndex, 1);

        // Limit to 10 historical groups
        if(newHistory.length > 10) newHistory.pop();

        service.groupHistory.set(newHistory);
    };
}
