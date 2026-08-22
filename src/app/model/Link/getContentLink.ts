import { DataGroup } from '@model/DataGroup';
import { getGroupPath } from '@model/DataGroup/getGroupPath';
import { Task } from '@model/Task';

const SEPARATOR = ' > ';

export function getContentLink(
    content: DataGroup | Task,
    trimGroup?: DataGroup, // Remove this groups path from a task link's text
    nameOnly?: boolean
): string {
    if(content.dataType === 'Group') {
        return getGroupLink(content, trimGroup, nameOnly);
    }
    else {
        return getTaskLink(content, trimGroup, nameOnly);
    }
}

function getGroupLink(group: DataGroup, trimGroup?: DataGroup, nameOnly?: boolean): string {
    if(nameOnly) return group.name;
    let path = prettyPath(group);

    if(trimGroup) {
        path = path.replace(
            prettyPath(trimGroup) + SEPARATOR,
            ''
        );
    }

    return path;
}

function getTaskLink(task: Task, trimGroup?: DataGroup, nameOnly?: boolean): string {
    if(nameOnly) return task.name;
    let path = prettyPath(task._parent);

    if(trimGroup) {
        path = path.replace(
            prettyPath(trimGroup) + SEPARATOR,
            ''
        );
    }

    return path + SEPARATOR + task.name;
}

function prettyPath(group: DataGroup) {
    return getGroupPath(group).slice(1).join(SEPARATOR);
}
