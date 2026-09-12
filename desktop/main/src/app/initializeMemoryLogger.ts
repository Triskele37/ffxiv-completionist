import { app } from 'electron';
import { GlobalStore } from '../globalStore';

/**
 * Logs memory usage to console every interval
 * - One of the "Tab" lines is dev tools
 * */
export function initializeMemoryLogger(): void {
    if(!GlobalStore.LOG_MEMORY) return;

    setInterval(() => {
        console.table(
            app.getAppMetrics().map((p) => ({
                pid: p.pid,
                type: p.type,
                name: p.name,
                created: new Date(p.creationTime).toLocaleTimeString(),
                workingSetMB: (p.memory.workingSetSize / 1024).toFixed(1),
                privateMB: p.memory.privateBytes ? (p.memory.privateBytes / 1024).toFixed(1) : null,
                peakWorkingSetMB: (p.memory.peakWorkingSetSize / 1024).toFixed(1),
            }))
        );
    }, 5000);
}
