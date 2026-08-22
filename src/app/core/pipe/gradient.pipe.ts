import { Pipe, PipeTransform, inject } from '@angular/core';

import { Task } from '@model/Task';
import { ThemeService } from '@service/theme/theme.service';

@Pipe({
    name: 'gradient'
})
export class GradientPipe implements PipeTransform {
    private svcTheme = inject(ThemeService);

    // completionFlag$ not used directly so that pipe transforms on value change
    transform(task: Task, value: string): string {
        const totalComplete = parseInt(value, 10) - task.minValue;
        const totalPossible = task.maxValue - task.minValue;

        return this.svcTheme.rygGradient(totalComplete / totalPossible);
    }
}
