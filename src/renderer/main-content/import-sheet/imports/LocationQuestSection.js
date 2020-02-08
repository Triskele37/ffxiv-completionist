import { data } from '../../../../data';
import { importCallback } from './utils';

const sidequests = data.sg('Quests').sg('Sidequests');

export const LocationQuestSection = {
    name: "Location Quests",
    tabs: [
        {
            title: "La Noscea Side Quests",
            importCallback: importCallback(2, [sidequests.sg('Lominsan')]),
        },
        {
            title: "Black Shroud Sidequests",
            importCallback: importCallback(2, [sidequests.sg('Gridanian')]),
        },
        {
            title: "Thanalan Sidequests",
            importCallback: importCallback(2, [sidequests.sg('Ul\'Dahn')]),
        },
        {
            title: "Coerthas Sidequests",
            importCallback: importCallback(2, [sidequests.sg('Coerthan')]),
        },
        {
            title: "Mor Dhona Sidequests",
            importCallback: importCallback(2, [sidequests.sg('Mor Dhonan')]),
        },
        {
            title: "Ishgard Sidequests",
            importCallback: importCallback(2, [sidequests.sg('Ishgardian')]),
        },
        {
            title: "Abalathia's Spine Sidequests",
            importCallback: importCallback(2, [
                sidequests.sg('Abalathian'),
                sidequests.sg('Azys Lla'),
            ]),
        },
        {
            title: "Dravania Sidequests",
            importCallback: importCallback(2, [sidequests.sg('Dravanian')]),
        },
        {
            title: "Gyr Abania Sidequests",
            importCallback: importCallback(2, [sidequests.sg('Gyr Abanian')]),
        },
        {
            title: "Kugane Sidequests",
            importCallback: importCallback(2, [sidequests.sg('Hingan')]),
        },
        {
            title: "Othard Sidequests",
            importCallback: importCallback(2, [sidequests.sg('Othardian')]),
        },
        {
            title: "Lakeland Sidequests",
            importCallback: importCallback(2, [sidequests.sg('Lakeland')]),
        },
        {
            title: "Kholusia Sidequests",
            importCallback: importCallback(2, [sidequests.sg('Kholusia')]),
        },
        {
            title: "Il Mheg Sidequests",
            importCallback: importCallback(2, [sidequests.sg('Il Mheg')]),
        },
        {
            title: "Rak'tika Sidequests",
            importCallback: importCallback(2, [sidequests.sg('Rak\'Tika')]),
        },
        {
            title: "Amh Araeng Sidequests",
            importCallback: importCallback(2, [sidequests.sg('Amh Araeng')]),
        },
        {
            title: "Tempest Sidequests",
            importCallback: importCallback(2, [sidequests.sg('Tempest')]),
        },
    ]
};
