import { createMockAsyncSubject } from '@test/rxjs.mock';
import { ElectronService } from './electron.service';
export { ElectronService };

export function createElectronServiceMock(): jest.Mocked<ElectronService> {
    return {
        appReady$: createMockAsyncSubject(),
        setAppReady: jest.fn(),
        getSave: jest.fn(),
        setSave: jest.fn(),
    } as unknown as jest.Mocked<ElectronService>;
}
