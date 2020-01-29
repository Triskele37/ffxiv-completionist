import { data } from '../../../../data';
import { generateImportObj, findAndSetFlags, findRecursive } from './utils';

export const CollectableSection = {
    name: "Collectables",
    tabs: [
        {
            title: "Aesthetician",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findAndSetFlags(store, data.Collectable.Aesthetician, result.dict);

                return result;
            },
        },
        {
            title: "Emotes",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findAndSetFlags(store, data.Collectable.Emotes, result.dict);

                return result;
            },
        },
        {
            title: "Minions",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findAndSetFlags(store, data.Collectable.Minions, result.dict);

                return result;
            },
        },
        {
            title: "Mounts & Barding",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findAndSetFlags(store, data.Collectable.Mounts, result.dict);
                findAndSetFlags(store, data.Collectable.Barding, result.dict);

                return result;
            },
        },
        {
            title: "Orchestrion",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Collectable.Orchestrion, result.dict);

                return result;
            },
        },
        {
            title: "Triple Triad Cards",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findAndSetFlags(store, data.Collectable.TripleTriadCards, result.dict);

                return result;
            },
        },
        {
            title: "Triple Triad Opponents",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findAndSetFlags(store, data.Collectable.TripleTriadOpponents, result.dict);

                return result;
            },
        },
    ]
};
