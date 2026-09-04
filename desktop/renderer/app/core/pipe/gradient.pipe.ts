import type { PipeTransform } from '@angular/core';
import { Pipe, inject } from '@angular/core';

import type { Task } from '@model/Task';
import { ThemeService } from '@service/theme/theme.service';

@Pipe({
    name: 'gradient'
})
export class GradientPipe implements PipeTransform {
    private svcTheme = inject(ThemeService);

    // completionFlag$ not used directly so that pipe transforms on value change
    transform(task: Task, value: string): string {
        const totalComplete = Math.max(parseInt(value, 10), task.minValue) - task.minValue;
        const totalPossible = task.maxValue - task.minValue;

        return this.svcTheme.rygGradient(totalComplete / totalPossible);
    }
}
