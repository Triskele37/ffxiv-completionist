import { Component, computed, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

type IconKey = 'Y' | 'N' | 'X' | 'S';
const IconMap = {
    'Y': 'i-complete',
    'N': 'i-incomplete',
    'X': 'i-exclude',
    'S': 'i-selected',
};

@Component({
    selector: 'com-quick-mark-from-to-label',
    templateUrl: './quick-mark-from-to-label.component.html',
    styleUrls: ['./quick-mark-from-to-label.component.scss'],
    imports: [
        TranslatePipe
    ]
})
export class QuickMarkFromToLabelComponent {
    from = input.required<IconKey>();
    to = input.required<IconKey>();

    fromIcon = computed(() => IconMap[this.from()]);
    toIcon = computed(() => IconMap[this.to()]);
    textKey = computed(() => `${this.from()}-${this.to()}`);
}
