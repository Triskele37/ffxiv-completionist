import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

import { DataService } from '@data';
import { MainMenuService } from '@service/main-menu/main-menu.service';
import { NavigationService } from '@service/navigation/navigation.service';
import { SearchService, Status } from '@service/search/search.service';

@Component({
    selector: 'xiv-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    searchTerm: string = '';

    @ViewChild('searchBar') searchBar: ElementRef;
    @ViewChild('searchInput') searchInput: ElementRef;

    constructor(
        private svcData: DataService,
        private svcMainMenu: MainMenuService,
        public svcNavigation: NavigationService,
        public svcSearch: SearchService,
    ) {
    }

    ngOnInit() {
        this.svcSearch.searchStatus$.subscribe((status) => {
            if(status === Status.Success) {
                this.svcNavigation.setBreadcrumbs(['main-menu', 'search']);
            }
        });
    }

    @HostListener('window:keydown', ['$event'])
    onWindowKeydown($event: KeyboardEvent): void {
        if(($event.ctrlKey || $event.metaKey) && $event.code === 'KeyF') {
            this.searchTerm = '';
            this.searchInput.nativeElement.focus();
        }
    }

    onSearchKeydown($event: KeyboardEvent): void {
        if(($event.ctrlKey || $event.metaKey) && $event.code === 'KeyV') {
            setTimeout(this.onSearch.bind(this), 50);
        }

        if($event.code === 'Enter' || $event.code === 'NumpadEnter') {
            this.onSearch();
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

    onSearch(): void {
        this.searchTerm = this.searchTerm
            .replace(/[\t\r\n]/g, '')
            .trim();

        this.svcSearch.expanded = false;
        this.svcSearch.doAppSearch(this.searchTerm);

        // Force the tooltip to show
        // timeout since pTooltip clears on click of the search icon
        setTimeout(() => {
            this.searchBar.nativeElement.dispatchEvent(new Event('mouseenter'));
        });
    }
}
