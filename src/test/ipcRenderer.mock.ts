export function createIpcRendererMock() {
    return jasmine.createSpyObj([
        'sendSync'
    ]);
}
