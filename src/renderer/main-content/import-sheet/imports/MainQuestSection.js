import { data } from '../../../../data';
import { generateImportObj, findAndSetFlags, findRecursive } from './utils';

export const MainQuestSection = {
    name: "Main Quests",
    tabs: [
        {
            title: "Seventh Umbral Era Quests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Main_Scenario.Seventh_Umbral_Era, result.dict);

                return result;
            },
        },
        {
            title: "Seventh Astral Era Quests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findAndSetFlags(store, data.Quests.Main_Scenario.Seventh_Astral_Era, result.dict);

                return result;
            },
        },
        {
            title: "Heavensward Main Quests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Main_Scenario.Heavensward, result.dict);

                return result;
            },
        },
        {
            title: "Dragonsong War Quests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findAndSetFlags(store, data.Quests.Main_Scenario.Dragonsong, result.dict);
                findAndSetFlags(store, data.Quests.Main_Scenario.Post_Dragonsong, result.dict);

                return result;
            },
        },
        {
            title: "Stormblood Main Quests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Main_Scenario.Stormblood, result.dict);

                return result;
            },
        },
        {
            title: "The Legend Returns Quests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findAndSetFlags(store, data.Quests.Main_Scenario.Post_Stormblood, result.dict);

                return result;
            },
        },
        {
            title: "Shadowbringers Quests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Main_Scenario.Shadowbringers, result.dict);

                return result;
            },
        },
        {
            title: "Post-Shadowbringers Quests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findAndSetFlags(store, data.Quests.Main_Scenario.Post_Shadowbringers, result.dict);

                return result;
            },
        },
    ]
};
