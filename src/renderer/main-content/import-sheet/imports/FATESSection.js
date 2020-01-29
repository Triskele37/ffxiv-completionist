import { data } from '../../../../data';
import { importCallback } from './utils';

export const FATESSection = {
    name: "FATES",
    tabs: [
        {
            title: "La Noscea FATEs",
            importCallback: importCallback(2, [data.FATEs.LaNoscea]),
        },
        {
            title: "Black Shroud FATEs",
            importCallback: importCallback(2, [data.FATEs.BlackShroud]),
        },
        {
            title: "Thanalan FATEs",
            importCallback: importCallback(2, [data.FATEs.Thanalan]),
        },
        {
            title: "Coerthas FATEs",
            importCallback: importCallback(2, [data.FATEs.Coerthas]),
        },
        {
            title: "Mor Dhona FATEs",
            importCallback: importCallback(2, [data.FATEs.MorDhona]),
        },
        {
            title: "Abalathia's Spine FATEs",
            importCallback: importCallback(2, [data.FATEs.AbalathiasSpine]),
        },
        {
            title: "Dravania FATEs",
            importCallback: importCallback(2, [data.FATEs.Dravania]),
        },
        {
            title: "Gyr Abania FATEs",
            importCallback: importCallback(2, [data.FATEs.GyrAbania]),
        },
        {
            title: "Othard FATEs",
            importCallback: importCallback(2, [data.FATEs.Othard]),
        },
        {
            title: "The Diadem FATEs",
            importCallback: importCallback(2, [data.FATEs.Diadem]),
        },
        {
            title: "Eureka FATEs",
            importCallback: importCallback(2, [data.FATEs.Eureka]),
        },
        {
            title: "Norvrandt FATEs",
            importCallback: importCallback(2, [data.FATEs.Norvrandt]),
        },
    ]
};
