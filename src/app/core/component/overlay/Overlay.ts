import type { OnDestroy } from '@angular/core';
import { Directive, signal } from '@angular/core';

@Directive()
export class Overlay implements OnDestroy {
    static anyOverlayLocked: boolean = false;

    isOverlayVisible = signal(false);
    isOverlayLocked = signal(false);

    ngOnDestroy(): void {
        Overlay.anyOverlayLocked = false;
    }

    onMouseEnter(): void {
        if(Overlay.anyOverlayLocked) return;
        this.isOverlayVisible.set(true);
    }

    onMouseLeave(): void {
        if(!this.isOverlayLocked()) {
            this.isOverlayVisible.set(false);
        }
    }

    onClick(): void {
        if(!Overlay.anyOverlayLocked || this.isOverlayLocked()) {
            this.isOverlayLocked.set(!this.isOverlayLocked());
            Overlay.anyOverlayLocked = this.isOverlayLocked();
        }
    }

    hide(): void {
        this.isOverlayVisible.set(false);
        this.isOverlayLocked.set(false);
        Overlay.anyOverlayLocked = false;
    }
}
