import type { DataService } from '../data-service';

export function getLinkedTextFull(service: DataService) {
    return (
        pathOrValue: string | number,
        isLink: boolean | undefined,
    ): number | string => {
        if(typeof pathOrValue === 'number') return pathOrValue;

        const pieces = service.getLinkedPieces(pathOrValue, isLink);
        if(!pieces.length) return pathOrValue;

        return pieces.reduce((acc, piece) => {
            if(piece.type === 'Value') acc += piece.value;
            else acc += piece.value.name;

            return acc;
        }, '');
    };
}
