import { data } from '../../../../data';
import { importCallback } from './utils';

const fates = data.sg('FATEs');

export const FATESSection = {
    name: "FATES",
    tabs: [
        {
            title: "La Noscea FATEs",
            importCallback: importCallback(2, [fates.sg('La Noscea')]),
        },
        {
            title: "Black Shroud FATEs",
            importCallback: importCallback(2, [fates.sg('The Black Shroud')]),
        },
        {
            title: "Thanalan FATEs",
            importCallback: importCallback(2, [fates.sg('Thanalan')]),
        },
        {
            title: "Coerthas FATEs",
            importCallback: importCallback(2, [fates.sg('Coerthas')]),
        },
        {
            title: "Mor Dhona FATEs",
            importCallback: importCallback(2, [fates.sg('Mor Dhona')]),
        },
        {
            title: "Abalathia's Spine FATEs",
            importCallback: importCallback(2, [fates.sg('Abalathia\'s Spine')]),
        },
        {
            title: "Dravania FATEs",
            importCallback: importCallback(2, [fates.sg('Dravania')]),
        },
        {
            title: "Gyr Abania FATEs",
            importCallback: importCallback(2, [fates.sg('Gyr Abania')]),
        },
        {
            title: "Othard FATEs",
            importCallback: importCallback(2, [fates.sg('Othard')]),
        },
        {
            title: "The Diadem FATEs",
            importCallback: importCallback(2, [fates.sg('The Diadem')]),
        },
        {
            title: "Eureka FATEs",
            importCallback: importCallback(2, [fates.sg('Eureka')]),
        },
        {
            title: "Norvrandt FATEs",
            importCallback: importCallback(2, [fates.sg('Norvrandt')]),
        },
    ]
};
