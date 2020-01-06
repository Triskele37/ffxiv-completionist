import { AbalathiasSpineFATEs } from './abalathias-spine';
import { BlackShroudFATEs } from './black-shroud';
import { CoerthasFATEs } from './coerthas';
import { DravaniaFATEs } from './dravania';
import { LaNosceaFATEs } from './la-noscea';
import { MorDhonaFATEs } from './mor-dhona';
import { ThanalanFATEs } from './thanalan';

export const FATEs = {
    name: 'FATE',
    subGroups: [
        AbalathiasSpineFATEs,
        BlackShroudFATEs,
        CoerthasFATEs,
        require('./diadem'),
        DravaniaFATEs,
        require('./eureka'),
        require('./gyr-abania'),
        LaNosceaFATEs,
        MorDhonaFATEs,
        require('./norvrandt'),
        require('./othard'),
        ThanalanFATEs,
    ]
};

/*
\r\n(.*)\t(.*)\t(.*)\t(.*)
{\r\n\tlevel: $1,\r\n\tname: '$2',\r\n\tlocation: '$3',\r\n\ttype: '$4'\r\n},
*/
