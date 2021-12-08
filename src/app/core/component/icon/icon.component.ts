import { Component, Input } from '@angular/core';

@Component({
    selector: 'xiv-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})
export class IconComponent {
    @Input() name: string;
    @Input() size: string = '18';
}
