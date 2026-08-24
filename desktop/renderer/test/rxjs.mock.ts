export { AsyncSubject } from 'rxjs';

export function createMockAsyncSubject() {
    return {
        subscribe: jest.fn()
    };
}
