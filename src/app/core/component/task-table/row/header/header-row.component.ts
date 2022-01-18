import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Completion } from '@constant';
import { DataGroup } from '@domain/DataGroup';
import { ConfigStoreService } from '@service/store/config-store.service';

@Component({
    selector: 'xiv-header-row',
    templateUrl: './header-row.component.html',
    styleUrls: ['./header-row.component.scss']
})
export class HeaderRowComponent implements OnInit {
    @Input() group: DataGroup;
    @Input() uniqueValues;
    @Output() filterChange = new EventEmitter<any>();

    Completion = Completion;

    filters = {
        completion: {
            completed: false,
            incomplete: false,
            excluded: false,
        }
    };

    constructor(private svcConfig: ConfigStoreService) {
    }

    ngOnInit() {
        const filters = this.svcConfig.get('table-filters');

        this.filters.completion.completed = !!filters.completed;
        this.filters.completion.incomplete = !!filters.incomplete;
        this.filters.completion.excluded = !!filters.excluded;

        this.filterChange.emit(this.filters);
    }

    onFilterCompletion(value: Completion): void {
        const key = value === Completion.Y ? 'completed' :
            value === Completion.N ? 'incomplete' : 'excluded';
        this.filters.completion[key] = !this.filters.completion[key];
        this.svcConfig.set(`table-filters.${key}`, this.filters.completion[key]);

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
