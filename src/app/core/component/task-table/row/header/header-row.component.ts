import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { StoreService } from '@service/store/store.service';

@Component({
    selector: 'xiv-header-row',
    templateUrl: './header-row.component.html',
    styleUrls: ['./header-row.component.scss']
})
export class HeaderRowComponent implements OnInit {
    @Input() isNumericCompletion: boolean;
    @Input() columnConfig: any[];
    @Input() uniqueValues;
    @Output() filterChange = new EventEmitter<any>();

    filters = {
        completion: {
            completed: false,
            incomplete: false,
            excluded: false,
        }
    };

    constructor(private svcStore: StoreService) {
        const filters = this.svcStore.eStore.get('table-filters');

        this.filters.completion.completed = !!filters.completed;
        this.filters.completion.incomplete = !!filters.incomplete;
        this.filters.completion.excluded = !!filters.excluded;
    }

    ngOnInit() {
        this.filterChange.emit(this.filters);
    }

    onFilterCompletion(value) {
        const key = (value === 'Y') ? 'completed' : (value === 'N') ? 'incomplete' : 'excluded';
        this.filters.completion[key] = !this.filters.completion[key];
        this.svcStore.eStore.set(`table-filters.${key}`, this.filters.completion[key]);

        this.filters = Object.assign({}, this.filters);
        this.filterChange.emit(this.filters);
    }

    displayedFilterValue(filterValue) {
        switch(filterValue) {
            case null:
            case undefined:
            case '': return 'Blank';
            default: return filterValue;
        }
    }

    onFilterKeyup($event, column) {
        this.modifySearch($event.target.value, column);
    }

    onFilterDropdownChange($event, column) {
        this.modifySearch($event.value, column);
    }

    modifySearch(value, column) {
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
