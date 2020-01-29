import { data } from '../../../../data';
import { generateImportObj, findAndSetFlags, findRecursive } from './utils';

export const OtherQuestSection = {
    name: "Other Quests",
    tabs: [
        {
            title: "Class Quests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 3);

                findRecursive(store, data.Duty.HallOfNovice, result.dict);
                findRecursive(store, data.Quests.Class_And_Job.Disciple_Of_War, result.dict);
                findRecursive(store, data.Quests.Class_And_Job.Disciple_Of_Magic, result.dict);
                findRecursive(store, data.Quests.Class_And_Job.Disciple_Of_The_Hand, result.dict);
                findRecursive(store, data.Quests.Class_And_Job.Disciple_Of_The_Land, result.dict);

                return result;
            },
        },
        {
            title: "Job & Role Quests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 3);

                findRecursive(store, data.Quests.Class_And_Job.Disciple_Of_War_Job, result.dict);
                findRecursive(store, data.Quests.Class_And_Job.Disciple_Of_Magic_Job, result.dict);
                findRecursive(store, data.Quests.Class_And_Job.Role, result.dict);

                return result;
            },
        },
        {
            title: "Crystalline Mean & Role Quests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findAndSetFlags(store, data.Quests.Class_And_Job.Crystalline_Mean, result.dict);

                return result;
            },
        },
        {
            title: "Chronicles of a New Era",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Chronicles_Of_A_New_Era, result.dict);

                return result;
            },
        },
        {
            title: "Side Story Quests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Sidequests.Side_Story, result.dict);

                return result;
            },
        },
        {
            title: "Weapons Quests",
            importCallback: (store, rawText) => {
                return 'Not Implemented'
            },
        },
        {
            title: "Grand Company Quests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Quests.Other.Grand_Company, result.dict);

                return result;
            },
        },
        {
            title: "Beast Tribe Quests",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 3);

                findRecursive(store, data.Quests.Beast_Tribe, result.dict);
                findAndSetFlags(store, data.Quests.Sidequests.Side_Story.Allied_Beast_Tribe, result.dict);
                findAndSetFlags(store, data.Quests.Sidequests.Side_Story.Heavensward_Beast_Tribe, result.dict);
                findAndSetFlags(store, data.Quests.Sidequests.Side_Story.Stormblood_Beast_Tribe, result.dict);

                return result;
            },
        },
    ]
};
