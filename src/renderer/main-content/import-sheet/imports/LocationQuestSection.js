import { data } from '../../../../data';
import { importCallback } from './utils';

export const LocationQuestSection = {
    name: "Location Quests",
    tabs: [
        {
            title: "La Noscea Side Quests",
            importCallback: importCallback(2, [data.Quests.Sidequests.Lominsan]),
        },
        {
            title: "Black Shroud Sidequests",
            importCallback: importCallback(2, [data.Quests.Sidequests.Gridanian]),
        },
        {
            title: "Thanalan Sidequests",
            importCallback: importCallback(2, [data.Quests.Sidequests.Ul_Dahn]),
        },
        {
            title: "Coerthas Sidequests",
            importCallback: importCallback(2, [data.Quests.Sidequests.Coerthan]),
        },
        {
            title: "Mor Dhona Sidequests",
            importCallback: importCallback(2, [data.Quests.Sidequests.Mor_Dhonan]),
        },
        {
            title: "Ishgard Sidequests",
            importCallback: importCallback(2, [data.Quests.Sidequests.Ishgardian]),
        },
        {
            title: "Abalathia's Spine Sidequests",
            importCallback: importCallback(2, [
                data.Quests.Sidequests.Abalathian,
                data.Quests.Sidequests.Azys_Lla,
            ]),
        },
        {
            title: "Dravania Sidequests",
            importCallback: importCallback(2, [data.Quests.Sidequests.Dravanian]),
        },
        {
            title: "Gyr Abania Sidequests",
            importCallback: importCallback(2, [data.Quests.Sidequests.Gyr_Abanian]),
        },
        {
            title: "Kugane Sidequests",
            importCallback: importCallback(2, [data.Quests.Sidequests.Hingan]),
        },
        {
            title: "Othard Sidequests",
            importCallback: importCallback(2, [data.Quests.Sidequests.Othardian]),
        },
        {
            title: "Lakeland Sidequests",
            importCallback: importCallback(2, [data.Quests.Sidequests.Lakeland]),
        },
        {
            title: "Kholusia Sidequests",
            importCallback: importCallback(2, [data.Quests.Sidequests.Kholusia]),
        },
        {
            title: "Il Mheg Sidequests",
            importCallback: importCallback(2, [data.Quests.Sidequests.Il_Mheg]),
        },
        {
            title: "Rak'tika Sidequests",
            importCallback: importCallback(2, [data.Quests.Sidequests.Rak_Tika]),
        },
        {
            title: "Amh Araeng Sidequests",
            importCallback: importCallback(2, [data.Quests.Sidequests.Amh_Araeng]),
        },
        {
            title: "Tempest Sidequests",
            importCallback: importCallback(2, [data.Quests.Sidequests.Tempest]),
        },
    ]
};
