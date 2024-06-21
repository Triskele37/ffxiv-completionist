import { createIpcRendererMock } from 'src/test/ipcRenderer.mock';
import { createMockAsyncSubject } from 'src/test/rxjs.mock';
export { ElectronService } from './electron.service';

export function createElectronServiceMock() {
    return jasmine.createSpyObj([
        'setAppReady',
        'sendSync',
    ], {
        appReady$: createMockAsyncSubject(),
        ipcRenderer: createIpcRendererMock(),
    });
}
