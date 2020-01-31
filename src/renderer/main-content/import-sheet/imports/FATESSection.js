import { data } from '../../../../data';
import { importCallback } from './utils';

export const FATESSection = {
    name: "FATES",
    tabs: [
        {
            title: "La Noscea FATEs",
            importCallback: importCallback(2, [data.FATEs.La_Noscea]),
        },
        {
            title: "Black Shroud FATEs",
            importCallback: importCallback(2, [data.FATEs.The_Black_Shroud]),
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
            importCallback: importCallback(2, [data.FATEs.Mor_Dhona]),
        },
        {
            title: "Abalathia's Spine FATEs",
            importCallback: importCallback(2, [data.FATEs.Abalathias_Spine]),
        },
        {
            title: "Dravania FATEs",
            importCallback: importCallback(2, [data.FATEs.Dravania]),
        },
        {
            title: "Gyr Abania FATEs",
            importCallback: importCallback(2, [data.FATEs.Gyr_Abania]),
        },
        {
            title: "Othard FATEs",
            importCallback: importCallback(2, [data.FATEs.Othard]),
        },
        {
            title: "The Diadem FATEs",
            importCallback: importCallback(2, [data.FATEs.The_Diadem]),
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
