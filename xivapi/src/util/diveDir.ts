import * as fs from 'fs';
import * as path from 'path';

type FileCallback = (filePath: string) => void;

export function diveDir(target: string, callback: FileCallback): void {
    if(fs.lstatSync(target).isDirectory()) {
        fs.readdirSync(target).forEach((targetDir) => {
            const targetPath = path.join(target, targetDir);

            if(fs.lstatSync(targetPath).isDirectory()) {
                diveDir(targetPath, callback);
            }
            else {
                callback(targetPath);
            }
        });
    }
    else {
        callback(path.resolve(target));
    }
}
