import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { Tooltip } from 'primeng/tooltip';

import { DataService } from '@service/data/data-service';
import { MainMenuService } from '@service/main-menu/main-menu.service';
import { NavigationService } from '@service/navigation/navigation.service';
import { SearchService } from '@service/search/search.service';
import { Status } from '@service/search/SearchTypes';

@Component({
    selector: 'com-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
    imports: [
        ButtonDirective,
        FormsModule,
        InputText,
        NgClass,
        Tooltip,
        TranslatePipe
    ]
})
export class SearchBarComponent {
    private svcData = inject(DataService);
    private svcMainMenu = inject(MainMenuService);
    svcNavigation = inject(NavigationService);
    svcSearch = inject(SearchService);

    // double bound, no signal
    searchTerm: string = '';

    @ViewChild('searchBar') searchBar: ElementRef | undefined;
    @ViewChild('searchInput') searchInput: ElementRef | undefined;

    // Make Ctrl+F to focus the search input
    @HostListener('window:keydown', ['$event'])
    onWindowKeydown($event: KeyboardEvent): void {
        if(($event.ctrlKey || $event.metaKey) && $event.code === 'KeyF') {
            this.searchTerm = '';
            this.searchInput?.nativeElement.focus();
        }
    }

    // Add key events to the input
    onSearchKeydown($event: KeyboardEvent): void {
        // Prevent back/up hotkeys
        $event.stopPropagation();

        // Auto-search if pasted into the input
        if(($event.ctrlKey || $event.metaKey) && $event.code === 'KeyV') {
            setTimeout(this.onSearch.bind(this), 50);
        }

        // Allow either enter key to call the search
        if($event.code === 'Enter' || $event.code === 'NumpadEnter') {
            this.onSearch();
        }
    }

    onHomeClick(): void {
        if(this.svcNavigation.selectedGroup() === this.svcMainMenu.data) {
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
            this.searchBar?.nativeElement.dispatchEvent(new Event('mouseenter'));
        });

        // On successful search, change the displayed view to the search results
        if(this.svcSearch.searchStatus() === Status.Success) {
            this.svcNavigation.setBreadcrumbs(['main-menu', 'search']);
        }
    }
}
