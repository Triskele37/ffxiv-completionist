import { Component, Input } from '@angular/core';

@Component({
    selector: 'xiv-status-indicator',
    templateUrl: './status-indicator.component.html',
    styleUrls: ['./status-indicator.component.scss']
})
export class StatusIndicatorComponent {
    @Input() status: string;
    @Input() size: string = '18';
}
