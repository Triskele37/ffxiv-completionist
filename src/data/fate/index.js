import { LaNosceaFATEs } from './la-noscea';
import { BlackShroudFATEs } from './black-shroud';

export const FATEs = {
    name: 'FATE',
    subGroups: [
        LaNosceaFATEs,
        BlackShroudFATEs,
        require('./thanalan'),
        require('./coerthas'),
        require('./mor-dhona'),
        require('./abalathias-spine'),
        require('./dravania'),
        require('./gyr-abania'),
        require('./othard'),
        require('./diadem'),
        require('./eureka'),
        require('./norvrandt')
    ]
};

/*
\r\n(.*)\t(.*)\t(.*)\t(.*)
{\r\n\tlevel: $1,\r\n\tname: '$2',\r\n\tlocation: '$3',\r\n\ttype: '$4'\r\n}, 
*/
