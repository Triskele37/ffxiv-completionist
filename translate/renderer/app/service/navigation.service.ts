import { computed, inject, Injectable, signal } from '@angular/core';

import { DataService } from '@service/data.service';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    svcData = inject(DataService);

    currentIndex = signal(0);
    currentIssue = computed(() => this.svcData.issues()[this.currentIndex()]);

    goToPreviousIssue(jump: number = 1): void {
        if(this.currentIndex() - jump < 0) {
            const j = jump - this.currentIndex();
            this.currentIndex.set(this.svcData.issues().length - j);
        }
        else {
            this.currentIndex.set(this.currentIndex() - jump);
        }
    }

    goToCurrent(): void {
        this.currentIndex.set(this.currentIndex() - 1);
        this.goToNextIssue();
    }

    goToNextIssue(jump: number = 1): void {
        if(this.currentIndex() + jump > this.svcData.issues().length - 1) {
            const j = this.svcData.issues().length - this.currentIndex();
            this.currentIndex.set(jump - j);
        }
        else {
            this.currentIndex.set(this.currentIndex() + jump);
        }
    }

    jumpToGroup(baseKey: string): void {
        const index = this.svcData.issues().findIndex((i) => i.key.startsWith(baseKey));
        if(index > -1) this.currentIndex.set(index);
    }
}
