import { createIpcRendererMock } from '@test/ipcRenderer.mock';
import { createMockAsyncSubject } from '@test/rxjs.mock';
import { ElectronService } from './electron.service';
export { ElectronService };

export function createElectronServiceMock(): jest.Mocked<ElectronService> {
    return {
        setAppReady: jest.fn(),
        sendSync: jest.fn(),
        appReady$: createMockAsyncSubject(),
        ipcRenderer: createIpcRendererMock(),
    } as unknown as jest.Mocked<ElectronService>;
}
