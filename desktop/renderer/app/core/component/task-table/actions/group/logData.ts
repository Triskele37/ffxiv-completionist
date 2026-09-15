import { DataGroup } from '@model/DataGroup';
import { DataService } from '@service/data/data-service';

/**
 * DEV FUNCTION
 * Prints the currently displayed table as tsv to console
 * */
export function logData(
    group: DataGroup,
    svcData: DataService,
    resolveLinks: boolean
): void {
    if(!group.columns) {
        console.error('Error: No columns to copy data with');
        return;
    }

    // Retrieve column data and remove feature columns
    const columns = Object.values(group.columns);
    if(columns[0].key === 'contentLink') columns.shift();

    // Add column columns to final output
    const tasksOutput: any[] = [];
    tasksOutput.push(columns.map((column) => column.header).join('\t'));

    // Add each task to final output
    group.tasks.forEach((task) => {
        const taskOutput = columns
            .map((column) => {
                if(column.link && resolveLinks) {
                    const resolvedLink = svcData.getChild(svcData.data, task[column.key]);
                    return resolvedLink?.name ?? task[column.key];
                } else {
                    return task[column.key];
                }
            })
            .join('\t');

        tasksOutput.push(taskOutput);
    });

    console.log('tasks', group.tasks);
    console.log(tasksOutput.join('\n'));
}
