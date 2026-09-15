import type { CustomContentService } from '../custom-content.service';

export function initService(service: CustomContentService) {
    return (): void => {
        service.initCustomGroup(service.group);
    };
}
