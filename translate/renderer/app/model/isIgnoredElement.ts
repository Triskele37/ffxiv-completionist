/**
 * Elements that should be ignored in global HostListeners
 * */
export function isIgnoredElement(element: HTMLElement): boolean {
	if(element.tagName === 'INPUT') return true;
	if(element.tagName === 'TEXTAREA') return true;
	return false;
}
