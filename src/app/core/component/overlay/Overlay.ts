import { Directive, OnDestroy } from '@angular/core';

@Directive()
export class Overlay implements OnDestroy {
    static anyLocked: boolean = false;

    isVisible: boolean = false;
    isLocked: boolean = false;

    ngOnDestroy(): void {
        Overlay.anyLocked = false;
    }

    onMouseEnter(): void {
        if(Overlay.anyLocked) return;
        this.isVisible = true;
    }

    onMouseLeave(): void {
        if(!this.isLocked) {
            this.isVisible = false;
        }
    }

    onClick(): void {
        if(!Overlay.anyLocked || this.isLocked) {
            this.isLocked = !this.isLocked;
            Overlay.anyLocked = this.isLocked;
        }
    }

    hide(): void {
        this.isVisible = false;
        this.isLocked = false;
        Overlay.anyLocked = false;
    }
}
