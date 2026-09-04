import { Component, Input, inject } from '@angular/core';
import { InputText } from 'primeng/inputtext';

import type { Column } from '@model/Column';
import { TableService } from '@service/table/table.service';

@Component({
    selector: 'com-input-filter',
    templateUrl: './input-filter.component.html',
    styleUrls: ['./input-filter.component.scss'],
    imports: [
        InputText,
    ]
})
export class InputFilterComponent {
    svcTable = inject(TableService);

    @Input({ required: true }) column!: Column;

    onFilterKeyup($event: KeyboardEvent, column: Column): void {
        if(!$event.target) return;

        const target = $event.target as HTMLInputElement;
        this.svcTable.filter.modifyFilter(target.value, column);
    }

}
