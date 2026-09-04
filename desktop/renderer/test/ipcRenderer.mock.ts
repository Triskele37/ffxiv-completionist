export function createIpcRendererMock() {
    return {
        sendSync: jest.fn()
    };
}
