export { AsyncSubject } from 'rxjs';

export function createMockAsyncSubject() {
    return jasmine.createSpyObj([
        'subscribe',
    ]);
}
