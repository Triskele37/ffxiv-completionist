import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainContentComponent } from './main-content.component';
import { TranslateModule } from '@ngx-translate/core';

describe('HomeComponent', () => {
    let component: MainContentComponent;
    let fixture: ComponentFixture<MainContentComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MainContentComponent],
            imports: [TranslateModule.forRoot()]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title in a h1 tag', waitForAsync(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain(
            'PAGES.HOME.TITLE'
        );
    }));
});
