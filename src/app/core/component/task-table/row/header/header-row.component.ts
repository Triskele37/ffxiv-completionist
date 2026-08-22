import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { SelectChangeEvent } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { SortableColumn, SortIcon } from 'primeng/table';

import { Completion } from '@constant';
import { Column } from '@model/Column';
import { TableService } from '@service/table/table.service';

@Component({
    selector: 'com-header-row',
    templateUrl: './header-row.component.html',
    styleUrls: ['./header-row.component.scss'],
    imports: [
        InputText,
        NgClass,
        Select,
        SortIcon,
        SortableColumn,
    ]
})
export class HeaderRowComponent {
    Completion = Completion;

    constructor(
        public svcTable: TableService
    ) {
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

    onFilterKeyup($event: KeyboardEvent, column: Column): void {
        if(!$event.target) return;
        const target = $event.target as HTMLInputElement;
        this.svcTable.filter.modifyFilter(target.value, column);
    }

    onFilterDropdownChange($event: SelectChangeEvent, column: Column): void {
        if($event.value === '') this.svcTable.filter.modifyFilter('Blank', column);
        else this.svcTable.filter.modifyFilter($event.value, column);
    }

}
