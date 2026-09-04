import type { OnInit } from '@angular/core';
import { Component, Input, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';
import { IftaLabel } from 'primeng/iftalabel';
import { InputText } from 'primeng/inputtext';
import type { TieredMenuToggleEvent } from 'primeng/tieredmenu';

import { GroupSelectorComponent } from '@component/group-selector/group-selector.component';
import { DataService } from '@service/data/data-service';
import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';
import { NavigationService } from '@service/navigation/navigation.service';
import { CustomContentService } from '@service/custom-content/custom-content.service';

import { Overlay } from '../Overlay';
import { Divider } from 'primeng/divider';

type SelectFor = 'moveGroup' | 'duplicateGroup' | 'moveTasks';

@Component({
    selector: 'com-custom-content-overlay',
    templateUrl: './custom-content-overlay.component.html',
    styleUrls: [
        '../overlay.scss',
        './custom-content-overlay.component.scss'
    ],
    imports: [
        ButtonDirective,
        ButtonGroup,
        FormsModule,
        IftaLabel,
        InputText,
        TranslatePipe,
        Divider,

        GroupSelectorComponent,
    ]
})
export class CustomContentOverlayComponent extends Overlay implements OnInit {
    private svcData = inject(DataService);
    private svcNavigation = inject(NavigationService);
    svcCustomContent = inject(CustomContentService);

    @Input({ required: true }) group!: DataGroup;
    @Input({ required: true }) tasks!: Task[];

    // New task bindings (double bound, no need for signal)
    newContentName: string = '';
    newTaskNotes: string = '';

    // Move functionality
    menuGroup!: DataGroup;
    groupSelectorEvent?: PointerEvent;
    selectFor?: SelectFor;

    // Oopsie deletion prevention flags
    verifyGroupDelete: boolean = false;
    verifyTasksDelete: boolean = false;

    ngOnInit() {
        this.menuGroup = { ...this.svcCustomContent.group };
        this.svcCustomContent.onGroupUpdated$.subscribe(() => {
            this.menuGroup = { ...this.svcCustomContent.group };
        });
    }

    onTargetGroupChange(targetGroup: DataGroup) {
        if(this.selectFor === 'moveGroup') this.moveCurrentGroup(targetGroup);
        if(this.selectFor === 'duplicateGroup') this.duplicateCurrentGroup(targetGroup);
        if(this.selectFor === 'moveTasks') this.moveSelectedTasks(targetGroup);
        this.groupSelectorEvent = undefined;
    }

    showGroupTargetMenu($event: PointerEvent, selectFor: SelectFor) {
        this.groupSelectorEvent = $event;
        this.selectFor = selectFor;
    }

    onSelectorHide() {
        this.groupSelectorEvent = undefined;
    }

    //#region------------------------------------------------------- Modal
    isModalVisible = signal(false);

    showModal(callback: () => boolean | void): void {
        this.isModalVisible.set(true);

        // Gives time for the UI to add the modal
        setTimeout(() => {
            this.isModalVisible.set(!!callback());
        }, 100);
    }

    hide(): void {
        super.hide();
        this.onSelectorHide();
    }

    //#endregion

    //#region------------------------------------------------------- Import/Export
    importGroup(): void {
        this.showModal(() => {
            const importedGroup = this.svcCustomContent.importGroup(this.group);
            if(importedGroup) this.svcNavigation.setSelectedGroup(importedGroup);
            this.isModalVisible.set(false);
        });
    }

    exportGroup(): void {
        this.showModal(() => {
            this.svcCustomContent.exportGroup(this.group);
            this.isModalVisible.set(false);
        });
    }

    //#endregion

    //#region------------------------------------------------------- Custom Group
    addGroup(): void {
        if(this.newContentName.length < 3) return; // Prevent short names
        this.svcCustomContent.createGroup(this.group, this.newContentName);
        this.svcData.apply.dataToStore();
    }

    renameGroup(): void {
        this.svcCustomContent.editGroupMeta(this.group, 'name', this.newContentName);
    }

    moveCurrentGroup(targetGroup: DataGroup): void {
        if(!targetGroup) return;

        // Don't do anything if the group wouldn't move
        if(this.group._parent!.fullStorageKey === targetGroup.fullStorageKey) return;

        // Don't allow moving a group into its own tree
        if(targetGroup.fullStorageKey.startsWith(this.group.fullStorageKey)) return;

        this.svcCustomContent.moveGroup(targetGroup, this.group);
        this.svcNavigation.setSelectedGroup(this.group);
    }

    duplicateCurrentGroup(targetGroup: DataGroup): void {
        const duplicateGroup = this.svcCustomContent.duplicateGroup(targetGroup, this.group);
        this.svcNavigation.setSelectedGroup(duplicateGroup);
    }

    cancelDeleteGroup(): void {
        this.verifyGroupDelete = false;
    }

    deleteCurrentGroup(): void {
        if(!this.verifyGroupDelete) {
            this.verifyGroupDelete = true;
            return;
        }

        this.svcNavigation.setSelectedGroup(this.group._parent!);
        this.svcCustomContent.removeGroup(this.group);
        this.verifyGroupDelete = false;
    }

    //#endregion

    //#region------------------------------------------------------- Custom Task
    addTask(): void {
        if(this.newContentName.length < 3) return; // Prevent short names
        this.svcCustomContent.createTask(this.group, this.newContentName, this.newTaskNotes);
        this.svcData.apply.dataToStore();
    }

    moveSelectedTasks(targetGroup: DataGroup): void {
        if(!targetGroup) return;
        this.svcCustomContent.moveTasks(targetGroup, this.getSelectedTasks());
        this.svcNavigation.setSelectedGroup(this.tasks[0]._parent);
    }

    cancelDeleteTasks(): void {
        this.verifyTasksDelete = false;
    }

    deleteSelectedTasks(): void {
        if(!this.verifyTasksDelete) {
            this.verifyTasksDelete = true;
            return;
        }

        this.getSelectedTasks().forEach((task) => {
            this.svcCustomContent.removeTask(this.group, task);
        });

        this.verifyTasksDelete = false;
    }

    getSelectedTasks(): Task[] {
        return this.tasks.filter((t) => t.selected());
    }

    //#endregion

}
