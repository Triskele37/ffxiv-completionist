export { MessageService } from 'primeng/api';

export function createMessageServiceMock() {
    return jasmine.createSpyObj([
        'add',
    ]);
}
