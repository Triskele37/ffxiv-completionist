import { Component, Input } from '@angular/core';

@Component({
    selector: 'xiv-drag-action',
    templateUrl: './drag-action.component.html',
    styleUrls: ['../action.scss']
})
export class DragActionComponent {
    @Input() rowIndex: number;
}
