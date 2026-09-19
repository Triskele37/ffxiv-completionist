import { Component, EventEmitter, Input, Output, inject, OnChanges, SimpleChanges } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { Divider } from 'primeng/divider';

import { TaskLink as BaseTaskLink } from '@common/Features';
import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';
import { ElectronService } from '@service/electron/electron.service';

import { Overlay } from '../Overlay';

type TaskLink = BaseTaskLink & { disabled?: boolean; };

@Component({
    selector: 'com-selection-overlay',
    templateUrl: './selection-overlay.component.html',
    styleUrls: [
        '../overlay.scss',
        './selection-overlay.component.scss'
    ],
    imports: [
        TranslatePipe,
        NgIcon,
        ButtonDirective,
        Divider
    ]
})
export class SelectionOverlayComponent extends Overlay implements OnChanges {
    private svcElectron = inject(ElectronService);

    @Input({ required: true }) group!: DataGroup;
    @Input({ required: true }) tasks!: Task[];
    @Output() selectChange = new EventEmitter<void>();

    static taskLinks?: TaskLink[];
    taskLinks: TaskLink[] = [];

    constructor() {
        super();

        if(!SelectionOverlayComponent.taskLinks) {
            SelectionOverlayComponent.taskLinks = this.svcElectron.getFeature('multi-task-links');
        }

        this.taskLinks = SelectionOverlayComponent.taskLinks ?? [];
    }

    ngOnChanges(changes: SimpleChanges<SelectionOverlayComponent>) {
        if(changes.group) this.updateExternalEnabled();
    }

    updateExternalEnabled() {
        for(const taskLink of this.taskLinks) {
            taskLink.disabled = !!taskLink.rootGroup &&
                !this.group.fullStorageKey.startsWith(taskLink.rootGroup);
        }
    }

    // Passing null means 'invert' selected value
    onSelectChange(select: boolean | null): void {
        this.tasks.forEach((task) => {
            if(select === null) task.selected.set(!task.selected());
            else task.selected.set(select);
        });

        this.selectChange.emit();
    }

    onTaskLinkClick(taskLink: TaskLink): void {
        const ids = this.getSelectedItemResultIds(taskLink);

        if(ids.length) {
            if(taskLink.usePrefix) {
                ids.unshift(this.getGroupPrefix(taskLink));
            }

            this.svcElectron.openExternalMulti(ids, taskLink.i18nKey);
        }
    }

    getSelectedItemResultIds(taskLink: TaskLink): string[] {
        return this.tasks
            .filter((t) => t.selected())
            .map((t) => t[taskLink.use].toString())
            .filter(Boolean);
    }

    getGroupPrefix(taskLink: TaskLink): string {
        if(!taskLink.rootGroup) return this.group.name;

        let secondRoot = this.group;
        while(secondRoot?._parent?._parent?.fullStorageKey.startsWith(taskLink.rootGroup)) {
            secondRoot = secondRoot._parent;
        }

        if(this.group === secondRoot) return this.group.name;

        return `${secondRoot?.name} - ${this.group.name}`;
    }
}
