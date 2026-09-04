import { createElectronServiceMock, ElectronService } from '@service/electron/electron.service.mock';
import { IPC_EVENT } from '@service/electron/IPC_EVENT';
import { createMessageServiceMock, MessageService } from '@test/MessageService.mock';
import { createTranslateMock, TranslateService } from '@test/TranslateService.mock';
import { Store } from './Store';

type TestStoreData = {
    a: { b: { c: string } };
    b?: { c: string };
    c: string;
};

class TestStore extends Store<TestStoreData> {
    failedDetailKey = '';
    failedSummaryKey = '';
    ipcGetEvent = IPC_EVENT.GET_SAVE;
    ipcSaveEvent = IPC_EVENT.SET_SAVE;

    constructor(
        translate: TranslateService,
        svcMessage: MessageService,
        svcElectron: ElectronService
    ) {
        super(translate, svcMessage, svcElectron);
    }
}

describe('Store', () => {
    let svcTranslate: TranslateService;
    let svcMessage: MessageService;
    let svcElectron: ElectronService;

    let store: TestStore;

    beforeEach(() => {
        svcTranslate = createTranslateMock();
        svcMessage = createMessageServiceMock();
        svcElectron = createElectronServiceMock();

        store = new TestStore(svcTranslate, svcMessage, svcElectron);
        store.data = { a: { b: { c: 'c' } }, c: 'c' };
    });

    describe('load', () => {
        it('should set data from the return from ipcRenderer', () => {
            const response = { successful: true, data: { a: { b: { c: 'x' } }, c: 'y' } };
            jest.spyOn(svcElectron, 'sendSync').mockReturnValue(response);

            store.load();

            expect(store.data).toEqual(response.data);
            expect(svcElectron.appReady$.subscribe).not.toHaveBeenCalled();
        });
    });

    describe('get', () => {
        it('should return the data itself with no path', () => {
            const value = store.get();
            expect(value).toEqual(store.data);
        });

        it('should handle deep values', () => {
            const value = store.get('a.b.c');
            expect(value).toEqual(store.data?.a.b.c);
        });

        it('should handle shallow values', () => {
            const value = store.get('c');
            expect(value).toEqual(store.data?.c);
        });

        it('should handle invalid paths', () => {
            const value = store.get('x.y.z');
            expect(value).toBeNull();
        });
    });

    describe('set', () => {
        let saveSpy: jest.SpyInstance;
        const expected = 'z';

        beforeEach(() => {
            saveSpy = jest.spyOn(store, 'save');
        });

        it('should handle deep values', () => {
            expect(store.data?.a.b.c).not.toEqual(expected);
            store.set('a.b.c', expected);
            expect(store.data?.a.b.c).toEqual(expected);
        });

        it('should handle shallow values', () => {
            expect(store.data?.c).not.toEqual(expected);
            store.set('c', expected);
            expect(store.data?.c).toEqual(expected);
        });

        it('should populate nullish objects along the path', () => {
            expect(store.data?.b).not.toBeDefined();
            store.set('b.c', expected);
            expect(store.data?.b?.c).toEqual(expected);
        });

        it('should save after setting', () => {
            store.set('c', expected);
            expect(saveSpy).toHaveBeenCalled();
        });
    });

    describe('delete', () => {
        let saveSpy: jest.SpyInstance;

        beforeEach(() => {
            saveSpy = jest.spyOn(store, 'save');
        });

        it('should handle targets through nullish objects', () => {
            expect(() => store.delete('b.c')).not.toThrow();
            expect(saveSpy).not.toHaveBeenCalled();
        });

        it('should remove the target from data', () => {
            expect(store.data?.c).toBeDefined();
            store.delete('c');
            expect(store.data?.c).not.toBeDefined();
        });

        it('should save after deleting', () => {
            store.delete('c');
            expect(saveSpy).toHaveBeenCalled();
        });
    });

    describe('save', () => {
        it('should save via svcElectron', () => {
            expect(svcElectron.sendSync).not.toHaveBeenCalled();
            store.save();
            expect(svcElectron.sendSync).toHaveBeenCalledWith(store.ipcSaveEvent, store.data);
        });
    });
});
