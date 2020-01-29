import { data } from '../../../../data';
import { generateImportObj, findRecursive, findAndSetFlags } from './utils';

export const FATESSection = {
    name: "FATES",
    tabs: [
        {
            title: "La Noscea FATEs",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.FATEs.LaNoscea, result.dict);

                return result;
            },
        },
        {
            title: "Black Shroud FATEs",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.FATEs.BlackShroud, result.dict);

                return result;
            },
        },
        {
            title: "Thanalan FATEs",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.FATEs.Thanalan, result.dict);

                return result;
            },
        },
        {
            title: "Coerthas FATEs",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.FATEs.Coerthas, result.dict);

                return result;
            },
        },
        {
            title: "Mor Dhona FATEs",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.FATEs.MorDhona, result.dict);

                return result;
            },
        },
        {
            title: "Abalathia's Spine FATEs",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.FATEs.AbalathiasSpine, result.dict);

                return result;
            },
        },
        {
            title: "Dravania FATEs",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.FATEs.Dravania, result.dict);

                return result;
            },
        },
        {
            title: "Gyr Abania FATEs",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.FATEs.GyrAbania, result.dict);

                return result;
            },
        },
        {
            title: "Othard FATEs",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.FATEs.Othard, result.dict);

                return result;
            },
        },
        {
            title: "The Diadem FATEs",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);
                console.log(result);
                findRecursive(store, data.FATEs.Diadem, result.dict);

                return result;
            },
        },
        {
            title: "Eureka FATEs",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.FATEs.Eureka, result.dict);

                return result;
            },
        },
        {
            title: "Norvrandt FATEs",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.FATEs.Norvrandt, result.dict);

                return result;
            },
        },
    ]
};
