import { Rectangle, screen } from 'electron';

export function isStoredPositionValid(rect?: Rectangle): boolean {
    if(!rect) return false;

    // Unreasonably small
    if(rect.height < 100 || rect.width < 100) return false;

    // Get the window closest to the stored rect
    const closestWindow = screen.getDisplayMatching(rect);

    // Coordinates are not in a window
    if(rect.x < closestWindow.bounds.x) return false;
    if(rect.y < closestWindow.bounds.y) return false;

    return true;
}
