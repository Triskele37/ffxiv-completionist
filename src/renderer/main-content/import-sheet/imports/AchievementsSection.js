import { data } from '../../../../data';
import { generateImportObj, findRecursive } from './utils';

export const AchievementsSection = {
    name: "Achievements",
    tabs: [
        {
            title: "Battle Achievements",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findRecursive(store, data.Achievements.Battle, result.dict);

                return result;
            },
        },
        {
            title: "Character Achievements",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findRecursive(store, data.Achievements.Character, result.dict);

                return result;
            },
        },
        {
            title: "PvP Achievements",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findRecursive(store, data.Achievements.PVP, result.dict);

                return result;
            },
        },
        {
            title: "Items Achievements",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findRecursive(store, data.Achievements.Item, result.dict);

                return result;
            },
        },
        {
            title: "Crafting Achievements",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findRecursive(store, data.Achievements.Crafting, result.dict);

                return result;
            },
        },
        {
            title: "Gathering Achievements",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findRecursive(store, data.Achievements.Gathering, result.dict);

                return result;
            },
        },
        {
            title: "Quests Achievements",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findRecursive(store, data.Achievements.Quest, result.dict);

                return result;
            },
        },
        {
            title: "Exploration Achievements",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findRecursive(store, data.Achievements.Exploration, result.dict);

                return result;
            },
        },
        {
            title: "Grand Company Achievements",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findRecursive(store, data.Achievements.GrandCompany, result.dict);

                return result;
            },
        },
    ]
};
