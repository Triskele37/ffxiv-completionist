import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Completion } from '@constant';
import { DataGroup } from '@model/DataGroup';
import { FilterService } from '@service/filter/filter.service';

import { UniqueValues } from '@component/task-table/types';

@Component({
    selector: 'xiv-header-row',
    templateUrl: './header-row.component.html',
    styleUrls: ['./header-row.component.scss']
})
export class HeaderRowComponent implements OnChanges {
    @Input() group: DataGroup;
    @Input() uniqueValues: UniqueValues;

    Completion = Completion;
    hasNumericColumns: boolean;

    constructor(public svcFilter: FilterService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.group) {
            this.hasNumericColumns = this.getHasNumericColumns(this.group);
        }
    }

    getHasNumericColumns(group: DataGroup): boolean {
        if(group.isBookmarkGroup) return true;
        if(group.isNumericCompletion) return true;

        if(group.tasks?.length) {
            return Object.keys(group.tasks).some(
                (key) => group.tasks[key].isNumericCompletion
            );
        }
        else { // should be in show all mode
            let anySubGroupIsNumericCompletion = false;

            group.subGroups.forEach((subGroup) => {
                anySubGroupIsNumericCompletion ||= this.getHasNumericColumns(subGroup);
            });

            return anySubGroupIsNumericCompletion;
        }
    }

    displayedFilterValue(filterValue: string): string {
        switch(filterValue) {
            case null:
            case undefined:
            case '':
                return 'Blank';
            default:
                return filterValue;
        }
    }

    onFilterKeyup($event, column): void {
        this.svcFilter.modifySearch($event.target.value, column);
    }

    onFilterDropdownChange($event, column): void {
        if($event.value === '') this.svcFilter.modifySearch('Blank', column);
        else this.svcFilter.modifySearch($event.value, column);
    }

}
