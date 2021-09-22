import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { StoreService } from '../../../../services/store/store.service';

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

    modifySearch($event, column) {
        const value = $event.target.value;

        // Don't run filter unnecessarily
        if(this.filters[column.key] && this.filters[column.key].value === value) {
            return;
        }

        if(value) {
            // Add/Modify Search Filter
            this.filters[column.key] = {
                key: column.key,
                value
            };
        }
        else {
            // Remove Filter
            this.filters[column.key] = null;
        }

        this.filters = Object.assign({}, this.filters);
        this.filterChange.emit(this.filters);

        // No keycode means the x was clicked
        if(!$event.which && !value) {
            $event.target.blur();
            return;
        }
    }

    onDatalistClick($event) {
        // Datalist clicks fire keydown on their parent input
        // if which is undefined, it was from datalist
        if(!$event.which) $event.target.blur();
    }
}
