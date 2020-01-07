import { AbalathiasSpineFATEs } from './abalathias-spine';
import { BlackShroudFATEs } from './black-shroud';
import { CoerthasFATEs } from './coerthas';
import { DiademFATEs } from './diadem';
import { DravaniaFATEs } from './dravania';
import { EurekaFATEs } from './eureka';
import { GyrAbaniaFATEs } from './gyr-abania';
import { LaNosceaFATEs } from './la-noscea';
import { MorDhonaFATEs } from './mor-dhona';
import { NorvrandtFATEs } from './norvrandt';
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
        EurekaFATEs,
        GyrAbaniaFATEs,
        LaNosceaFATEs,
        MorDhonaFATEs,
        NorvrandtFATEs,
        OthardFATEs,
        ThanalanFATEs,
    ]
};

/*
\r\n(.*)\t(.*)\t(.*)\t(.*)
{\r\n\tlevel: $1,\r\n\tname: '$2',\r\n\tlocation: '$3',\r\n\ttype: '$4'\r\n},

https://xivapi.com/Fate
*/
