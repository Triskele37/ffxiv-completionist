import { Component, computed, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';

type IconKey = 'Y' | 'N' | 'X' | 'S';
const IconMap = {
    'Y': { icon: 'matCheck', class: 'i-complete' },
    'N': { icon: 'matClose', class: 'i-incomplete' },
    'X': { icon: 'matClose', class: 'i-exclude' },
    'S': { icon: 'matTouchApp', class: 'i-selected' },
};

@Component({
    selector: 'com-quick-mark-from-to-label',
    templateUrl: './quick-mark-from-to-label.component.html',
    styleUrls: ['./quick-mark-from-to-label.component.scss'],
    imports: [
        TranslatePipe,
        NgIcon
    ]
})
export class QuickMarkFromToLabelComponent {
    from = input.required<IconKey>();
    to = input.required<IconKey>();

    fromIcon = computed(() => IconMap[this.from()].icon);
    fromClass = computed(() => IconMap[this.from()].class);

    toIcon = computed(() => IconMap[this.to()].icon);
    toClass = computed(() => IconMap[this.to()].class);

    textKey = computed(() => `${this.from()}-${this.to()}`);
}
