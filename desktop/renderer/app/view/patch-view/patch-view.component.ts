import type { OnDestroy, OnInit } from '@angular/core';
import { Component, signal, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import type { MenuItem } from 'primeng/api';
import { ButtonDirective } from 'primeng/button';
import { TieredMenu } from 'primeng/tieredmenu';

import { DataService } from '@service/data/data-service';
import { SummaryLineComponent } from '@component/summary-line/summary-line.component';
import { TaskTableComponent } from '@component/task-table/task-table.component';
import type { DataGroup } from '@model/DataGroup';
import { createDummyGroup } from '@model/DataGroup/createDummyGroup';
import type { Task } from '@model/Task';
import { sortPatchStrings } from '@model/util/sortPatchStrings';

/**
 * View tasks by patch
 */
@Component({
    selector: 'com-patch-view',
    templateUrl: './patch-view.component.html',
    styleUrls: ['./patch-view.component.scss'],
    imports: [
        ButtonDirective,
        TranslatePipe,
        FormsModule,
        TieredMenu,

        SummaryLineComponent,
        TaskTableComponent,
    ]
})
export class PatchViewComponent implements OnInit, OnDestroy {
    private svcData = inject(DataService);
    private translate = inject(TranslateService);

    patchMenuItem = signal<MenuItem[]>([]);
    isFirstClick: boolean = true;

    tasksInPatch: Task[] = [];

    selectedPatch: string = '';

    patchViewGroup = signal(createDummyGroup({
        isUiGroup: true
    }));

    constructor() {
        this.buildPatchMenu();
        this.patchViewGroup.update((group) => {
            group.columns = [
                {
                    key: 'contentLink',
                    header: this.translate.instant('APP.SEARCH.LINK'),
                    taskLink: true,
                },
                {
                    key: 'parentContentLink',
                    header: this.translate.instant('APP.TABLE.GROUP'),
                    groupLink: true,
                    filterable: true,
                }
            ];
            return group;
        });
    }

    ngOnInit() {
        if(this.selectedPatch) this.getTasksByPatch();
    }

    ngOnDestroy() {
        this.tasksInPatch.forEach((task) => {
            delete task.parentContentLink;
        });
    }

    _patchMenu: TieredMenu | undefined;
    @ViewChild('patchMenu', { static: false }) set patchMenu(ref: TieredMenu) {
        if(!ref) return;
        this._patchMenu = ref;
    }

    onSelectorHide(): void {
        this.isFirstClick = true;
    }

    buildPatchMenu(): void {
        // Get an array of just the patch strings
        const patches: string[] = [];
        this.diveForPatches(this.svcData.data, patches);
        patches.sort(sortPatchStrings);

        // Create a map to group them by series (expansion)
        const seriesMap: Record<string, MenuItem> = {};

        patches.forEach((patch) => {
            const [series, fullSubPatch] = patch.split('.');

            if(!seriesMap[series]) {
                const seriesPatch = `${series}.x`;
                seriesMap[series] = {
                    label: seriesPatch,
                    items: [],
                    command: () => {
                        if(this.isFirstClick) {
                            this.isFirstClick = false;
                            return;
                        }

                        this.isFirstClick = true;
                        this._patchMenu!.hide();
                        this.selectedPatch = seriesPatch;
                        this.getTasksByPatch();
                    }
                };
            }

            const subPatch = parseInt(fullSubPatch.charAt(0));
            if(!seriesMap[series].items![subPatch]) {
                const majorPatch = `${series}.${subPatch}x`;
                seriesMap[series].items![subPatch] = {
                    label: majorPatch,
                    items: [],
                    command: () => {
                        this._patchMenu!.hide();
                        this.selectedPatch = majorPatch;
                        this.getTasksByPatch();
                    }
                };
            }

            seriesMap[series].items![subPatch].items!.push({
                label: patch,
                command: () => {
                    this.selectedPatch = patch;
                    this.getTasksByPatch();
                }
            });
        });

        // Convert the maps back to an arrays
        const menuItems = Object.values(seriesMap);
        menuItems.forEach((seriesItem) => {
            seriesItem.items = seriesItem.items!.filter((x) => x);
        });

        // Add the blank patch item
        menuItems.unshift({
            label: this.translate.instant('APP.PATCH_VIEW.NO_PATCH'),
            command: () => {
                this.selectedPatch = ' ';
                this.getTasksByPatch();
            }
        });

        // fin
        this.patchMenuItem.set(menuItems);
    }

    diveForPatches(group: DataGroup | null, patches: string[]): void {
        if(!group || group.isBookmarkGroup || group.isCustomGroup) return;

        group.tasks?.forEach((task) => {
            if(!task.patch) return;
            if(!patches.includes(task.patch)) {
                patches.push(task.patch);
            }
        });

        group.subGroups?.forEach((subGroup) => this.diveForPatches(subGroup, patches));
    }

    getTasksByPatch(): void {
        this.tasksInPatch.forEach((task) => {
            delete task.parentContentLink;
        });

        this.tasksInPatch = [];

        if(this.selectedPatch) {
            this.diveForTasks(this.svcData.data);

            this.patchViewGroup.update((group) => {
                group.name = this.selectedPatch;
                group.tasks = [...this.tasksInPatch];
                group.updated$.next();
                return { ...group };
            });
        }
    }

    diveForTasks(group: DataGroup | null): void {
        if(!group || group.isBookmarkGroup || group.isCustomGroup) return;

        for(const task of group.tasks) {
            let match: boolean = false;

            if(this.selectedPatch === ' ') match = !task.patch;
            else if(this.selectedPatch.includes('x')) match = this.getPatchRegex(this.selectedPatch).test(task.patch);
            else match = this.selectedPatch === task.patch;

            if(match) {
                task.parentContentLink = task._parent.contentLink;
                this.tasksInPatch.push(task);
            }
        }

        group.subGroups?.forEach(this.diveForTasks.bind(this));
    }

    getPatchRegex(wildcardPatch: string): RegExp {
        return new RegExp(`^${wildcardPatch.replace('x', '\\d?')}$`);
    }

}
