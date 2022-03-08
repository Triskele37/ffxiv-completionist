import { NgModule, Pipe, PipeTransform } from '@angular/core';

import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';

@Pipe({
    name: 'groupLink'
})
export class GroupLinkPipe implements PipeTransform {
    transform(task: Task, group?: DataGroup): string {
        let link = task._parent.groupPath.slice(1).join(' > ');

        if(group) {
            const groupLink = group.groupPath.slice(1).join(' > ') + ' > ';
            link = link.replace(groupLink, '');
        }

        return link;
    }
}

@NgModule({
    declarations: [GroupLinkPipe],
    exports: [GroupLinkPipe]
})
export class GroupLinkModule {
}
