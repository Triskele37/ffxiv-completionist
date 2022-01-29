import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';

/** Reorders the tasks of all groups in TARGET using SOURCE as the baseline order
 * */

const SOURCE = '../resources/en/character/blue-mage/log';
const TARGET = '../resources/fr/character/blue-mage/log';

reorderTasksBySource();

function reorderTasksBySource(): void {
    let message;
    if(!fs.existsSync(SOURCE)) message = `${SOURCE} does not exist`;
    if(!fs.existsSync(TARGET)) message = `${TARGET} does not exist`;

    // Bail if there is an issue with config
    if(message) {
        console.error(`Error: ${message}`);
        return;
    }

    console.log(`Reordering tasks in ${chalk.green(TARGET)}`);
    console.log(`   using order from ${chalk.green(SOURCE)}\n`);

    dive(SOURCE, TARGET);

    console.log('Reorder complete');
}

function dive(source: string, target: string): void {
    const sourceDirs = fs.readdirSync(source);

    sourceDirs.forEach((sourceDir) => {
        const sourcePath = path.join(source, sourceDir);
        const targetPath = path.join(target, sourceDir);

        if(fs.lstatSync(sourcePath).isDirectory()) {
            dive(sourcePath, targetPath);
        }
        else {
            reorderTargetTasks(sourcePath, targetPath);
        }
    });
}

function reorderTargetTasks(source: string, target: string): void {
    const sourceFile = JSON.parse(fs.readFileSync(source, 'utf8'));
    const targetFile = JSON.parse(fs.readFileSync(target, 'utf8'));

    if(shouldReorder(sourceFile, targetFile)) {
        const sourceIds = Object.keys(sourceFile.tasks);
        const targetTasks: any = {};

        console.log(`Updating task order for: ${chalk.green(target)}`);

        // Build the new tasks object by mapping all ids from source
        sourceIds.forEach((id) => {
            targetTasks[id] = targetFile.tasks[id];
        });

        // Append tasks not in source to the end
        Object.keys(targetFile.tasks).forEach((id) => {
            if(!sourceIds.includes(id)) {
                console.error(`${target} contains id ${id} not in ${source}`);
                targetTasks[id] = targetFile.tasks[id];
            }
        });

        targetFile.tasks = targetTasks;
        fs.writeFileSync(target, JSON.stringify(targetFile, null, 4));
    }
}

function shouldReorder(sourceFile: any, targetFile: any): boolean {
    // Simple false if neither has tasks
    if(!sourceFile.tasks && !targetFile.tasks) return false;

    // Log if source has tasks but target doesn't
    if(sourceFile.tasks && !targetFile.tasks) {
        console.error(`Target ${targetFile.groupName} missing tasks`);
        return false;
    }

    // Log if target has tasks and source doesn't
    if(!sourceFile.tasks && targetFile.tasks) {
        console.error(`Source ${sourceFile.groupName} missing tasks`);
        return false;
    }

    const sourceIds = Object.keys(sourceFile.tasks);
    const targetIds = Object.keys(targetFile.tasks);

    // Log tasks that are in source but not target
    const targetMismatch = sourceIds.some((id, i) => {
        if(!targetIds.includes(id)) {
            console.error(`Target ${targetFile.groupName} missing task ${id}`);
            return true;
        }
    });
    if(targetMismatch) return false;

    // Log tasks that are in target but not source
    const sourceMismatch = targetIds.some((id, i) => {
        if(!sourceIds.includes(id)) {
            console.error(`Source ${sourceFile.groupName} missing task ${id}`);
            return true;
        }
    });
    if(sourceMismatch) return false;

    // Don't write if already ordered
    const needsOrdering = sourceIds.some((id, i) => {
        if(id !== targetIds[i]) return true;
    });

    return needsOrdering;
}
