import { NgModule, Pipe, PipeTransform } from '@angular/core';

import { Task } from '@domain/Task';

@Pipe({
    name: 'groupName'
})
export class GroupNamePipe implements PipeTransform {
    transform(task: Task): string {
        return task._parent.groupPath.join(' > ');
    }
}

@NgModule({
    declarations: [GroupNamePipe],
    exports: [GroupNamePipe]
})
export class GroupNameModule {
}
