import type { OnDestroy } from '@angular/core';
import { Directive, HostListener, signal } from '@angular/core';

@Directive()
export class Overlay implements OnDestroy {
    static anyOverlayLocked: boolean = false;

    isOverlayVisible = signal(false);
    isOverlayLocked = signal(false);

    overlayButtonClass: string = 'p-button-outlined';

    ngOnDestroy(): void {
        // Safety net for static lock value
        Overlay.anyOverlayLocked = false;
    }

    //#region-------------------------------------------- Show
    @HostListener('mouseenter')
    onMouseEnter(): void {
        if(Overlay.anyOverlayLocked) return;
        this.show();
    }

    show(): void {
        this.isOverlayVisible.set(true);
    }

    //#endregion

    //#region-------------------------------------------- Hide
    @HostListener('mouseleave')
    onMouseLeave(): void {
        if(Overlay.anyOverlayLocked) return;
        this.hide();
    }

    hide(): void {
        this.isOverlayVisible.set(false);

        // Revert locking if component calls this
        this.setOverlayLocked(false);
    }

    //#endregion

    //#region-------------------------------------------- Lock
    onOverlayButtonClick(): void {
        // Only let the currently locked overlay toggle locking if its on
        if(Overlay.anyOverlayLocked && !this.isOverlayLocked()) return;

        this.setOverlayLocked(!this.isOverlayLocked());
    }

    setOverlayLocked(locked: boolean): void {
        this.isOverlayLocked.set(locked);
        Overlay.anyOverlayLocked = locked;

        this.overlayButtonClass = locked ? '' : 'p-button-outlined'
    }

    //#endregion
}
