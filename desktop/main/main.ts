import { app } from 'electron';

import { GlobalStore } from './src/globalStore';
import { initEvents } from './src/app/initEvents';

const args = process.argv.slice(1);
GlobalStore.isServe = args.some((val) => val === '--serve');

const singleLock = app.requestSingleInstanceLock();

if(!singleLock) {
    app.quit();
}
else {
    try {
        initEvents();
    }
    catch(e) {
        console.error(e);
        // throw e;
    }
}
