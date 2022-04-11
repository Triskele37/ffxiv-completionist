import { NgModule, Pipe, PipeTransform } from '@angular/core';

import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';

/** Returns a pretty path to the passed DataGroup or Task
 * */
@Pipe({ name: 'contentLink' })
export class ContentLinkPipe implements PipeTransform {
    private static separator = ' > ';

    transform(
        groupOrTask: DataGroup | Task,
        trimGroup?: DataGroup, // Remove this groups path from a task link's text
        nameOnly?: boolean
    ): string {
        return groupOrTask instanceof DataGroup ?
            this.transformGroup(groupOrTask, trimGroup, nameOnly) :
            this.transformTask(groupOrTask, trimGroup, nameOnly);
    }

    private static prettyGroupPath(group: DataGroup): string {
        return group.groupPath.slice(1).join(ContentLinkPipe.separator);
    }

    transformGroup(group: DataGroup, trimGroup?: DataGroup, nameOnly?: boolean): string {
        if(nameOnly) return group.name;
        let path = ContentLinkPipe.prettyGroupPath(group);

        if(trimGroup) {
            path = path.replace(
                ContentLinkPipe.prettyGroupPath(trimGroup) + ContentLinkPipe.separator,
                ''
            );
        }

        return path;
    }

    transformTask(task: Task, trimGroup?: DataGroup, nameOnly?: boolean): string {
        if(nameOnly) return task.name;
        let path = ContentLinkPipe.prettyGroupPath(task._parent);

        if(trimGroup) {
            path = path.replace(
                ContentLinkPipe.prettyGroupPath(trimGroup) + ContentLinkPipe.separator,
                ''
            );
        }

        return path + ContentLinkPipe.separator + task.name;
    }

}

@NgModule({
    declarations: [ContentLinkPipe],
    exports: [ContentLinkPipe]
})
export class ContentLinkPipeModule {
}
