import { NgModule, Pipe, PipeTransform } from '@angular/core';

import { Task } from '@domain/Task';

@Pipe({
    name: 'groupLink'
})
export class GroupLinkPipe implements PipeTransform {
    transform(task: Task): string {
        console.log(task._parent.groupPath);
        return task._parent.groupPath.join(' > ');
    }
}

@NgModule({
    declarations: [GroupLinkPipe],
    exports: [GroupLinkPipe]
})
export class GroupLinkModule {
}
