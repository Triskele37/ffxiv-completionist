export class Overlay {
    static anyLocked: boolean = false;

    isVisible: boolean = false;
    isLocked: boolean = false;

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
}
