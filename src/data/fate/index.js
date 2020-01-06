import { BlackShroudFATEs } from './black-shroud';
import { CoerthasFATEs } from './coerthas';
import { LaNosceaFATEs } from './la-noscea';
import { ThanalanFATEs } from './thanalan';

export const FATEs = {
    name: 'FATE',
    subGroups: [
        require('./abalathias-spine'),
        BlackShroudFATEs,
        CoerthasFATEs,
        require('./diadem'),
        require('./dravania'),
        require('./eureka'),
        require('./gyr-abania'),
        LaNosceaFATEs,
        require('./mor-dhona'),
        require('./norvrandt'),
        require('./othard'),
        ThanalanFATEs,
    ]
};

/*
\r\n(.*)\t(.*)\t(.*)\t(.*)
{\r\n\tlevel: $1,\r\n\tname: '$2',\r\n\tlocation: '$3',\r\n\ttype: '$4'\r\n},
*/
