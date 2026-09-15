import { signal } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

import type { CustomContentService } from '../custom-content.service';

export function cloneGroupObj(service: CustomContentService) {
    return (
        group: DataGroup,
        newParent: DataGroup,
        newKey: string,
    ): DataGroup => {
        // Dereference and remove properties structuredClone doesn't like
        const dereferencedGroup: Partial<DataGroup> = { ...group };
        delete dereferencedGroup.updated$;
        delete dereferencedGroup.onUpdated$;
        delete dereferencedGroup.subGroups;
        delete dereferencedGroup.tasks;
        delete dereferencedGroup._parent;

        // Clone the dereferenced group and add back top level
        const clonedGroup = structuredClone(dereferencedGroup) as DataGroup;
        clonedGroup.updated$ = new Subject<void>();
        clonedGroup.onUpdated$ = clonedGroup.updated$.pipe(debounceTime(250));
        clonedGroup.subGroups = new Map();
        clonedGroup.tasks = [];
        service.changeGroupParent(clonedGroup, newParent, newKey);

        // Add back subGroups, ensuring they are properly cloned
        group.subGroups?.forEach((subGroup) => {
            if(!subGroup) return;
            const clonedSubGroup = service.cloneGroupObj(subGroup, clonedGroup, subGroup._key);
            clonedGroup.subGroups!.set(clonedSubGroup._key, clonedSubGroup);
        });

        // Add back tasks, ensuring they are properly cloned
        group.tasks?.forEach((task) => {
            const derefTask: Partial<Task> = { ...task };
            delete derefTask._parent;
            delete derefTask.selected;
            delete derefTask.completionFlag$;

            const clonedTask = structuredClone(derefTask) as Task;
            clonedTask._parent = clonedGroup;
            clonedTask.selected = signal(false);
            clonedTask.completionFlag$ = signal('N');
            clonedGroup.tasks.push(clonedTask);
        });

        return clonedGroup;
    };
}
