import { data } from '../../../../data';
import { generateImportObj, findAndSetFlags } from './utils';

export const LeveSection = {
    name: "Leves",
    tabs: [
        {
            title: "Battlecraft & Grand Company Leves",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findAndSetFlags(store, data.Quests.Levequests.Battlecraft, result.dict);

                return result;
            },
        },
        {
            title: "Fieldcraft Leves",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findAndSetFlags(store, data.Quests.Levequests.Botany, result.dict);
                findAndSetFlags(store, data.Quests.Levequests.Fishing, result.dict);
                findAndSetFlags(store, data.Quests.Levequests.Mining, result.dict);

                return result;
            },
        },
        {
            title: "Tradecraft Leves",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findAndSetFlags(store, data.Quests.Levequests.Alchemy, result.dict);
                findAndSetFlags(store, data.Quests.Levequests.Armoring, result.dict);
                findAndSetFlags(store, data.Quests.Levequests.Blacksmithing, result.dict);
                findAndSetFlags(store, data.Quests.Levequests.Carpentry, result.dict);
                findAndSetFlags(store, data.Quests.Levequests.Cooking, result.dict);
                findAndSetFlags(store, data.Quests.Levequests.Goldsmithing, result.dict);
                findAndSetFlags(store, data.Quests.Levequests.Leatherworking, result.dict);
                findAndSetFlags(store, data.Quests.Levequests.Clothcrafting, result.dict);

                return result;
            },
        },
    ]
};
