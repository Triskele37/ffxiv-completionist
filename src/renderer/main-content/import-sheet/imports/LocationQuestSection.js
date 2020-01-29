import { data } from '../../../../data';
import { generateImportObj, findRecursive } from './utils';

export const LocationQuestSection = {
    name: "Location Quests",
    tabs: [
        {
            title: "La Noscea Side Quests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Lominsan, result.dict);

                return result;
            },
        },
        {
            title: "Black Shroud Sidequests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Gridanian, result.dict);

                return result;
            },
        },
        {
            title: "Thanalan Sidequests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Ul_Dahn, result.dict);

                return result;
            },
        },
        {
            title: "Coerthas Sidequests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Coerthan, result.dict);

                return result;
            },
        },
        {
            title: "Mor Dhona Sidequests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Mor_Dhonan, result.dict);

                return result;
            },
        },
        {
            title: "Ishgard Sidequests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Ishgardian, result.dict);

                return result;
            },
        },
        {
            title: "Abalathia's Spine Sidequests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Abalathian, result.dict);
                findRecursive(store, data.Quests.Sidequests.Azys_Lla, result.dict);

                return result;
            },
        },
        {
            title: "Dravania Sidequests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Dravanian, result.dict);

                return result;
            },
        },
        {
            title: "Gyr Abania Sidequests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Gyr_Abanian, result.dict);

                return result;
            },
        },
        {
            title: "Kugane Sidequests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Hingan, result.dict);

                return result;
            },
        },
        {
            title: "Othard Sidequests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Othardian, result.dict);

                return result;
            },
        },
        {
            title: "Lakeland Sidequests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Lakeland, result.dict);

                return result;
            },
        },
        {
            title: "Kholusia Sidequests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Kholusia, result.dict);

                return result;
            },
        },
        {
            title: "Il Mheg Sidequests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Il_Mheg, result.dict);

                return result;
            },
        },
        {
            title: "Rak'tika Sidequests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Rak_Tika, result.dict);

                return result;
            },
        },
        {
            title: "Amh Araeng Sidequests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Amh_Araeng, result.dict);

                return result;
            },
        },
        {
            title: "Tempest Sidequests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Tempest, result.dict);

                return result;
            },
        },
    ]
};
