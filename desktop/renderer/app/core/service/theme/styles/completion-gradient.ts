import type { ThemeService } from '../theme.service';

export function completionGradient(service: ThemeService) {
    return (
        weight: number,
    ): string => {
        if(
            service.incompleteColor === undefined ||
            service.partialCompleteColor === undefined ||
            service.completeColor === undefined
        ) {
            console.error(`Error: Missing colors for gradient`);
            return '';
        }

        // Red rgb Weights (100% to 0% from 0-0.5)
        const red = service.incompleteColor;
        const redWeight = weight < 0.5 ? (1 - (weight * 2)) : 0;
        const rrw = red.red * redWeight;
        const rgw = red.green * redWeight;
        const rbw = red.blue * redWeight;

        // Yellow rgb Weights  (0% to 100% from 0-0.5, 100% to 0% from 0.5-1)
        const yellow = service.partialCompleteColor;
        const yellowWeight = weight < 0.5 ? (weight * 2) : (1 - weight) * 2;
        const yrw = yellow.red * yellowWeight;
        const ygw = yellow.green * yellowWeight;
        const ybw = yellow.blue * yellowWeight;

        // Green rgb Weights (0% to 100% from 0.5-1)
        const green = service.completeColor;
        const greenWeight = weight >= 0.5 ? (weight - 0.5) * 2 : 0;

        // Make it obvious when values are close to max
        // if(greenWeight < 1) greenWeight *= 0.8;

        const grw = green.red * greenWeight;
        const ggw = green.green * greenWeight;
        const gbw = green.blue * greenWeight;

        // Combine each color
        const r = Math.round(grw + yrw + rrw);
        const g = Math.round(ggw + ygw + rgw);
        const b = Math.round(gbw + ybw + rbw);

        return `rgb(${r},${g},${b})`;
    };
}
