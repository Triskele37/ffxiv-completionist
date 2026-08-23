import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

import type { DataGroup } from '@model/DataGroup';
import { getContentLink } from '@model/Link/getContentLink';
import type { Task } from '@model/Task';

/**
 * Returns a pretty path to the passed DataGroup or Task
 * */
@Pipe({
    name: 'contentLink'
})
export class ContentLinkPipe implements PipeTransform {
    transform(
        groupOrTask: DataGroup | Task,
        trimGroup?: DataGroup, // Remove this groups path from a task link's text
        nameOnly?: boolean
    ): string {
        return getContentLink(groupOrTask, trimGroup, nameOnly);
    }
}
