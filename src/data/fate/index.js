import { AbalathiasSpineFATEs } from './abalathias-spine';
import { BlackShroudFATEs } from './black-shroud';
import { CoerthasFATEs } from './coerthas';
import { DiademFATEs } from './diadem';
import { DravaniaFATEs } from './dravania';
import { GyrAbaniaFATEs } from './gyr-abania';
import { LaNosceaFATEs } from './la-noscea';
import { MorDhonaFATEs } from './mor-dhona';
import { OthardFATEs } from './othard';
import { ThanalanFATEs } from './thanalan';

export const FATEs = {
    name: 'FATE',
    subGroups: [
        AbalathiasSpineFATEs,
        BlackShroudFATEs,
        CoerthasFATEs,
        DiademFATEs,
        DravaniaFATEs,
        require('./eureka'),
        GyrAbaniaFATEs,
        LaNosceaFATEs,
        MorDhonaFATEs,
        require('./norvrandt'),
        OthardFATEs,
        ThanalanFATEs,
    ]
};

/*
\r\n(.*)\t(.*)\t(.*)\t(.*)
{\r\n\tlevel: $1,\r\n\tname: '$2',\r\n\tlocation: '$3',\r\n\ttype: '$4'\r\n},
*/
