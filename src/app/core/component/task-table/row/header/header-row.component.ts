import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Completion } from '@constant';
import { DataGroup } from '@domain/DataGroup';
import { ConfigStoreService } from '@service/store/config-store.service';

import { Filters, UniqueValues } from '@component/task-table/types';

@Component({
    selector: 'xiv-header-row',
    templateUrl: './header-row.component.html',
    styleUrls: ['./header-row.component.scss']
})
export class HeaderRowComponent implements OnInit {
    @Input() group: DataGroup;
    @Input() uniqueValues: UniqueValues;
    @Output() filterChange = new EventEmitter<Filters>();

    Completion = Completion;

    filters: Filters = {
        completion: {
            completed: false,
            incomplete: false,
            excluded: false,
        }
    };

    constructor(private svcConfig: ConfigStoreService) {
    }

    ngOnInit(): void {
        const filters = this.svcConfig.get('table-filters');

        if('completed' in this.filters.completion) {
            this.filters.completion.completed = !!filters.completed;
            this.filters.completion.incomplete = !!filters.incomplete;
            this.filters.completion.excluded = !!filters.excluded;
        }

        this.filterChange.emit(this.filters);
    }

    onFilterCompletion(value: Completion): void {
        const key = {
            [Completion.Y]: 'completed',
            [Completion.N]: 'incomplete',
            [Completion.X]: 'excluded'
        }[value];

        this.filters.completion[key] = !this.filters.completion[key];
        this.svcConfig.set(`table-filters.${key}`, this.filters.completion[key]);

        this.filters = Object.assign({}, this.filters);
        this.filterChange.emit(this.filters);
    }

    displayedFilterValue(filterValue: string): string {
        switch(filterValue) {
            case null:
            case undefined:
            case '': return 'Blank';
            default: return filterValue;
        }
    }

    onFilterKeyup($event, column): void {
        this.modifySearch($event.target.value, column);
    }

    onFilterDropdownChange($event, column): void {
        if($event.value === '') this.modifySearch('Blank', column);
        else this.modifySearch($event.value, column);
    }

    modifySearch(value, column): void {
        // Don't run filter unnecessarily
        if(this.filters[column.key]?.value === value) return;

        // If a value exists the filter is being added or modified, otherwise null it out
        this.filters[column.key] = !value ? null : {
            key: column.key,
            value
        };

        this.filterChange.emit(this.filters);
    }

}
