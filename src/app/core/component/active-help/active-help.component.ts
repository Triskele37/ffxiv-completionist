import type { OnInit} from '@angular/core';
import { Component, HostListener, signal, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DebounceListener } from '@decorator/DebounceListener';

@Component({
    selector: 'com-active-help',
    templateUrl: './active-help.component.html',
    styleUrls: ['./active-help.component.scss'],
    imports: []
})
export class ActiveHelpComponent implements OnInit {
    private translate = inject(TranslateService);

    activeHelpSummary = signal('');
    activeHelpDetail = signal('');

    ngOnInit() {
        this.setActiveHelp('APP.ACTIVE_HELP.ACTIVE_HELP.NO_SELECTION');
    }

    @HostListener('document:mousemove', ['$event'])
    @DebounceListener(50)
    onDocumentMouseMove($event: MouseEvent): void {
        const target = $event.target as HTMLElement;
        const closest = target.closest('[data-active-help]');
        const activeHelpKey = closest?.getAttribute('data-active-help') ?? 'APP.ACTIVE_HELP.ACTIVE_HELP.NO_SELECTION';
        this.setActiveHelp(activeHelpKey);
    }

    setActiveHelp(activeHelpKey: string): void {
        const { SUMMARY, DETAIL } = this.translate.instant(activeHelpKey);
        this.activeHelpSummary.set(SUMMARY);
        this.activeHelpDetail.set(DETAIL.split('.').join('\n'));
    }
}
