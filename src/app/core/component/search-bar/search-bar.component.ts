import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import { MainMenuService } from '@service/main-menu/main-menu.service';
import { NavigationService } from '@service/navigation/navigation.service';
import { SearchService } from '@service/search/search.service';

@Component({
    selector: 'xiv-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
    searchTerm: string;

    @ViewChild('searchInput') searchInput: ElementRef;

    constructor(
        private svcMainMenu: MainMenuService,
        private svcNavigation: NavigationService,
        public svcSearch: SearchService,
    ) {
    }

    @HostListener('window:keydown', ['$event'])
    onKeydown($event: KeyboardEvent) {
        if(($event.ctrlKey || $event.metaKey) && $event.code === 'KeyF') {
            this.searchTerm = '';
            this.searchInput.nativeElement.focus();
        }
    }

    onHomeClick(): void {
        this.svcNavigation.setSelectedGroup(this.svcMainMenu.data);
    }

    searchOnEnter(): void {
        this.onSearch();
    }

    onSearch(): void {
        this.svcSearch.expanded = false;
        this.svcSearch.doAppSearch(this.searchTerm);
    }
}
