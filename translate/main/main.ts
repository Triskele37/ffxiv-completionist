import { app } from 'electron';

import { initEvents } from './src/app/initEvents';

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
