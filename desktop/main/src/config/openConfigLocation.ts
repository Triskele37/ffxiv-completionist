import { app, shell } from 'electron';

export function openConfigLocation(): void {
    shell.openPath(app.getPath('userData'));
}
