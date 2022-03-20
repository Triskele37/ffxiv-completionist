import { NgModule, Pipe, PipeTransform } from '@angular/core';

import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';

@Pipe({
    name: 'contentLink'
})
export class ContentLinkPipe implements PipeTransform {
    transform(groupOrTask: DataGroup | Task, trimGroup?: DataGroup): string {
        if(groupOrTask instanceof DataGroup) {
            return ContentLinkPipe.prettyGroupPath(groupOrTask);
        }
        else if(groupOrTask instanceof Task) {
            if(trimGroup) {
                const groupLink = ContentLinkPipe.prettyGroupPath(trimGroup) + ' > ';

                return ContentLinkPipe.prettyGroupPath(groupOrTask._parent)
                    .replace(groupLink, '');
            }
            else {
                return groupOrTask.name;
            }
        }
    }

    private static prettyGroupPath(group: DataGroup): string {
        return group.groupPath.slice(1).join(' > ');
    }

}

@NgModule({
    declarations: [ContentLinkPipe],
    exports: [ContentLinkPipe]
})
export class ContentLinkModule {
}
