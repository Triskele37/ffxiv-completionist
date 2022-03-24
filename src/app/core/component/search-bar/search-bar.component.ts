import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import { DataService } from '@data';
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
        private svcData: DataService,
        private svcMainMenu: MainMenuService,
        public svcNavigation: NavigationService,
        public svcSearch: SearchService,
    ) {
    }

    @HostListener('window:keydown', ['$event'])
    onKeydown($event: KeyboardEvent) {
        if(($event.ctrlKey || $event.metaKey) && $event.code === 'KeyF') {
            this.searchTerm = '';
            this.searchInput.nativeElement.focus();
        }

        if(($event.ctrlKey || $event.metaKey) && $event.code === 'KeyV') {
            setTimeout(this.onSearch.bind(this), 50);
        }
    }

    onHomeClick(): void {
        if(this.svcNavigation.selectedGroup$.value === this.svcMainMenu.data) {
            this.svcNavigation.setSelectedGroup(this.svcData.data);
        }
        else {
            this.svcNavigation.setSelectedGroup(this.svcMainMenu.data);
        }
    }

    searchOnEnter(): void {
        this.onSearch();
    }

    onSearch(): void {
        this.searchTerm = this.searchTerm
            .replace(/[\t\r\n]/g, '')
            .trim();

        this.svcSearch.expanded = false;
        this.svcSearch.doAppSearch(this.searchTerm);
    }
}
