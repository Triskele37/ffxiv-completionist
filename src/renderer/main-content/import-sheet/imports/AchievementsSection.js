import { data } from '../../../../data';
import { importCallback } from './utils';

export const AchievementsSection = {
    name: "Achievements",
    tabs: [
        {
            title: "Battle Achievements",
            importCallback: importCallback(1, [data.Achievements.Battle]),
        },
        {
            title: "Character Achievements",
            importCallback: importCallback(1, [data.Achievements.Character]),
        },
        {
            title: "PvP Achievements",
            importCallback: importCallback(1, [data.Achievements.PVP]),
        },
        {
            title: "Items Achievements",
            importCallback: importCallback(1, [data.Achievements.Item]),
        },
        {
            title: "Crafting Achievements",
            importCallback: importCallback(1, [data.Achievements.Crafting]),
        },
        {
            title: "Gathering Achievements",
            importCallback: importCallback(1, [data.Achievements.Gathering]),
        },
        {
            title: "Quests Achievements",
            importCallback: importCallback(1, [data.Achievements.Quest]),
        },
        {
            title: "Exploration Achievements",
            importCallback: importCallback(1, [data.Achievements.Exploration]),
        },
        {
            title: "Grand Company Achievements",
            importCallback: importCallback(1, [data.Achievements.GrandCompany]),
        },
    ]
};
