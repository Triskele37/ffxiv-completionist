import { Component, NgModule } from '@angular/core';

//------------------------------------------------------- Components
@Component({ selector: 'xiv-navigation', templateUrl: './navigation.html' })
export class NavigationComponent {}

@Component({ selector: 'xiv-completion', templateUrl: './completion.html' })
export class CompletionComponent {}

@Component({ selector: 'xiv-task-table', templateUrl: './task-table.html' })
export class TaskTableComponent {}

@Component({ selector: 'xiv-chaining', templateUrl: './chaining.html' })
export class ChainingComponent {}

@Component({ selector: 'xiv-saving', templateUrl: './saving.html' })
export class SavingComponent {}

@Component({ selector: 'xiv-other', templateUrl: './other.html' })
export class OtherComponent {}

//------------------------------------------------------- Module
@NgModule({
    declarations: [
        NavigationComponent,
        CompletionComponent,
        TaskTableComponent,
        ChainingComponent,
        SavingComponent,
        OtherComponent
    ]
})
export class InstructionsModule {}

//------------------------------------------------------- UI Group
export const Instructions = {
    name: 'Instructions',
    noContent: true,
    subGroups: [
        { name: 'Navigation', component: NavigationComponent },
        { name: 'Completion', component: CompletionComponent },
        { name: 'Task Table', component: TaskTableComponent },
        { name: 'Chaining', component: ChainingComponent },
        { name: 'Saving', component: SavingComponent },
        { name: 'Other', component: OtherComponent },
    ],
};
