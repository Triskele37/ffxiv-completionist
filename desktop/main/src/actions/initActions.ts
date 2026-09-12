import { ipcMain, IpcMainEvent, IpcMainInvokeEvent } from 'electron';

import { GlobalStore } from '../globalStore';
import { mainApi, mainAsyncApi } from './api';

export function initActions() {
	for(const [ipcEvent, handler] of Object.entries(mainApi)) {
		ipcMain.on(ipcEvent, (event: IpcMainEvent, ...args: any[]) => {
            if(!validateSender(event.senderFrame)) return;
            if(GlobalStore.LOG_IPC_CHAIN) console.log('on', ipcEvent);
			event.returnValue = (handler as Function).apply(null, args) ?? null;
		});
	}

	for(const [ipcEvent, handler] of Object.entries(mainAsyncApi)) {
		ipcMain.handle(ipcEvent, (event: IpcMainInvokeEvent, ...args: any[]) => {
            if(!validateSender(event.senderFrame)) return;
            if(GlobalStore.LOG_IPC_CHAIN) console.log('handle', ipcEvent);
            return (handler as Function).apply(null, args);
        });
	}
}

// SEC: ensure the app itself sent the ipc request
function validateSender(frame: any): boolean {
    return frame.url === GlobalStore.senderUrl;
}
