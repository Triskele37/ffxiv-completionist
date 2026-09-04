import type { Link } from '@model/Chain/ChainLink';

export const curryParentForNumberLink =
    (parent: string) =>
    (link: Link) => typeof link === 'string' ? link : `${parent}.${link}`;
