import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { DataGroup } from '@domain/DataGroup';

import { NavigationService } from '@service/navigation/navigation.service';

@Component({
    selector: 'xiv-nav-group',
    templateUrl: './nav-group.component.html',
    styleUrls: ['./nav-group.component.scss']
})
export class NavGroupComponent implements OnInit, OnChanges {
    @Input() show: boolean;
    @Input() degree: number;
    @Input() group: DataGroup;

    @ViewChild('container') container;

    height = '';
    timeout = null;

    showChildren: boolean = false;
    buttonStyle;

    constructor(private svcNavigation: NavigationService) {
    }

    ngOnInit() {
        this.svcNavigation.breadcrumbs$.subscribe((breadcrumbs) => {
            this.showChildren = breadcrumbs[this.degree] === this.group.name;

            // Calculate group style
            const degMod = (this.degree + 4);
            const opacity = degMod >= 10 ? 1 : `0.${degMod}`;

            this.buttonStyle = {
                'background-color': `rgba(0, 0, 0, ${opacity})`,
                'padding-left': `${(this.degree * 5) + 5}px`
            };
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes.show) {
            this.height = `${this.container.scrollHeight}px`;
            clearTimeout(this.timeout);

            this.timeout = setTimeout(() => {
                this.height = changes.show.previousValue ? '0px' : '';
            }, changes.show.previousValue ? 0 : 500);
        }
    }

    selectGroup(degree) {
        this.svcNavigation.setCrumbAt(degree, this.group.name);
        this.svcNavigation.setSelectedGroup(this.group);
    }
}
