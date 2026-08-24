import type { OnInit } from '@angular/core';
import { Component, Input, inject, signal, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import type { SelectChangeEvent } from 'primeng/select';
import { Select } from 'primeng/select';
import { Tooltip } from 'primeng/tooltip';

import type { Column } from '@model/Column';
import { TableService } from '@service/table/table.service';

import type { Option } from './option';
import { toOptions, toOption } from './option';

@Component({
    selector: 'com-option-filter',
    templateUrl: './option-filter.component.html',
    styleUrls: ['./option-filter.component.scss'],
    imports: [
        FormsModule,
        NgClass,
        TranslatePipe,
        ButtonDirective,
        InputText,
        Select,
        Tooltip,
    ]
})
export class OptionFilterComponent implements OnInit {
    svcTable = inject(TableService);

    @Input({ required: true }) column!: Column;

    options: Option[] = [];
    columnOptions: Option[] = [];
    customOptions: Option[] = [];
    selectedOptions: string[] = [];
    selectedDisplay = signal<string>('');

    @ViewChild('select') select: Select | undefined;

    ngOnInit() {
        this.columnOptions = toOptions(this.svcTable.uniqueValues[this.column.key]);
        this.updateOptions();
    }

    onFilterDropdownChange($event: SelectChangeEvent): void {
        this.updateSelected();

        // Prime scroll sucks again
        const target = $event.originalEvent?.target as HTMLElement;
        setTimeout(() => {
            const optionIndex = this.options.findIndex((o) => o.value === target.textContent.trim());
            const targetIndex = optionIndex + 5;
            const maxIndex = this.options.length - 1;
            this.select?.scrollInView(targetIndex > maxIndex ? maxIndex : targetIndex);
        });
    }

    // Update options available in dropdown
    updateOptions(): void {
        this.options = [...this.customOptions, ...this.columnOptions];
    }

    // Updates when selectedOptions changes
    updateSelected(): void {
        this.selectedDisplay.set(this.selectedOptions.join(', '));
        this.svcTable.filter.modifyFilter(this.selectedOptions, this.column);
    }

    onAddCustomOption(value: string): void {
        if(!value) return;

        const customIndex = this.customOptions.findIndex((o) => o.value === value);
        if(customIndex > -1) return;

        const option = toOption(value);
        option.isCustom = true;

        this.customOptions.push(option);
        this.updateOptions();
    }

    preventOverlayClose($event: MouseEvent): void {
        $event.stopPropagation();
    }

    onRemoveCustomOption(option: Option): void {
        const customIndex = this.customOptions.findIndex((o) => o.value === option.value);
        this.customOptions.splice(customIndex, 1);

        const selectedIndex = this.selectedOptions.indexOf(option.value);
        this.selectedOptions.splice(selectedIndex, 1);

        this.updateOptions();
        this.updateSelected();
    }

}
