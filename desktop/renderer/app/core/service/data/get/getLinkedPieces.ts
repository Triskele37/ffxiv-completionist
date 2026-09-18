import type { LinkData } from '@service/data/types';
import type { DataService } from '../data-service';

// const LINK_REGEX = /^([^.]*)\b([a-z]+[a-z0-9-]*\.[a-z0-9-.]+)\b([^.]*)$/;
const LINK_REGEX = /\b[a-z][a-z0-9-]*\.[a-z0-9-.]+\b/g;

export function getLinkedPieces(service: DataService) {
    return (
        pathOrValue: string,
        isLink: boolean | undefined,
    ): LinkData[] => {
        if(!isLink || !pathOrValue) {
            // parameter is a raw value
            return [{ value: pathOrValue, type: 'Value' }];
        }

        const links = pathOrValue.match(LINK_REGEX) ?? [];
        if(!links.length) {
            return [{ value: pathOrValue, type: 'Value' }];
        }

        const pieces: LinkData[] = [];
        let destructPath = pathOrValue;

        for(const link of links) {
            const indexOf = destructPath.indexOf(link);
            if(indexOf > 0) {
                pieces.push({
                    type: 'Value',
                    value: destructPath.substring(0, indexOf),
                });

                destructPath = destructPath.substring(indexOf);
            }

            const content = service.getAnyChild(link);
            pieces.push({
                type: content ? content.dataType : 'Value',
                value: content ? content : link,
            } as LinkData);

            destructPath = destructPath.substring(link.length);
        }

        if(destructPath.length) {
            pieces.push({
                type: 'Value',
                value: destructPath
            });
        }

        return pieces;
    };
}
