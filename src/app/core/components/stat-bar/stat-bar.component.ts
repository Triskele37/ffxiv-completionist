import { Component } from '@angular/core';

import { data } from '../../../data';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
    selector: 'xiv-stat-bar',
    templateUrl: './stat-bar.component.html',
    styleUrls: ['./stat-bar.component.scss']
})
export class StatBarComponent {
    allData = data;
    selectedGroup;

    showSelectedGroupLine: boolean = false;

    constructor(private svcNavigation: NavigationService) {
        this.svcNavigation.selectedGroup$.subscribe((selectedGroup) => {
            this.selectedGroup = selectedGroup;

            this.showSelectedGroupLine = this.shouldShowSelectedGroupLine;
        });
    }

    get shouldShowSelectedGroupLine() {
        if(!this.selectedGroup) return false;
        else if(this.selectedGroup === this.allData) return false;
        else if(this.selectedGroup.percentComplete === undefined) return false;
        else if(this.selectedGroup.percentComplete === null) return false;

        return true;
    }
}
