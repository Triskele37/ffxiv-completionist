import type { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Component, EventEmitter, Input, Output, signal, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { MenuItem } from 'primeng/api';
import type { TieredMenuToggleEvent } from 'primeng/tieredmenu';
import { TieredMenu } from 'primeng/tieredmenu';

import { DataService } from '@service/data/data-service';
import type { DataGroup } from '@model/DataGroup';

@Component({
    selector: 'com-group-selector',
    templateUrl: './group-selector.component.html',
    imports: [
        FormsModule,
        TieredMenu
    ]
})
export class GroupSelectorComponent implements OnInit, OnChanges {
    private svcData = inject(DataService);

    @Input() group?: DataGroup;
    @Input() menuEvent?: TieredMenuToggleEvent;
    @Input() omitGroup?: DataGroup;
    @Input() includeRoot?: boolean;

    @Output() groupSelected = new EventEmitter<DataGroup>();
    @Output() hidden = new EventEmitter<void>();

    groupMenuItems = signal<MenuItem[]>([]);
    isFirstClick = true;

    _menu: TieredMenu | undefined;
    @ViewChild('menu', { static: false }) set menu(ref: TieredMenu) {
        if(!ref) return;
        this._menu = ref;
    }

    ngOnInit() {
        this.updateMenuItems();
    }

    ngOnChanges(changes: SimpleChanges<GroupSelectorComponent>): void {
        if(changes.menuEvent) {
            if(this.menuEvent) this._menu?.show(this.menuEvent);
            else this._menu?.hide();
        }

        if(changes.group) this.updateMenuItems();
        if(changes.omitGroup) this.updateMenuItems();
        if(changes.includeRoot) this.updateMenuItems();
    }

    onSelectorHide(): void {
        this.isFirstClick = true;
        this.hidden.emit();
    }

    updateMenuItems(): void {
        if(!this.group) this.group = this.svcData.data;
        if(this.group.subGroups) {
            this.groupMenuItems.set(this.addGroup(this.group));
        }
    }

    addGroup(rootGroup: DataGroup, recursed?: boolean): MenuItem[] {
        const items: MenuItem[] = [];

        if(this.includeRoot && !recursed) {
            items.push({
                label: rootGroup!.name,
                command: () => {
                    this.groupSelected.emit(rootGroup);
                }
            });
        }

        rootGroup.subGroups?.forEach((group) => {
            if(!group) return;
            if(group.fullStorageKey === this.omitGroup?.fullStorageKey) return items;

            const menuItem: MenuItem = { label: group.name };

            if(group.subGroups) {
                menuItem.items = this.addGroup(group, true);
            }

            menuItem.command = () => {
                // Eat the first click for items with items because prime sux
                if(menuItem.items?.length && this.isFirstClick) {
                    this.isFirstClick = false;
                    return;
                }
                this.groupSelected.emit(group);
            };

            items.push(menuItem);
        });

        return items;
    }
}
