import { Component, Input } from '@angular/core';

import { Completion } from '@constant';
import { DataGroup } from '@domain/DataGroup';
import { FilterService } from '@service/filter/filter.service';

import { UniqueValues } from '@component/task-table/types';

@Component({
    selector: 'xiv-header-row',
    templateUrl: './header-row.component.html',
    styleUrls: ['./header-row.component.scss']
})
export class HeaderRowComponent {
    @Input() group: DataGroup;
    @Input() uniqueValues: UniqueValues;

    Completion = Completion;

    constructor(public svcFilter: FilterService) {
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
