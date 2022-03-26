import { NgModule, Pipe, PipeTransform } from '@angular/core';

import { Task } from '@domain/Task';
import { ThemeService } from '@service/theme/theme.service';

@Pipe({
    name: 'gradient'
})
export class GradientPipe implements PipeTransform {
    constructor(private svcTheme: ThemeService) {
    }

    transform(task: Task, value: string): string {
        const totalComplete = parseInt(value, 10) - task.minValue;
        const totalPossible = task.maxValue - task.minValue;

        return this.svcTheme.rygGradient(totalComplete / totalPossible);
    }
}

@NgModule({
    declarations: [GradientPipe],
    exports: [GradientPipe]
})
export class GradientModule {
}
