import { data } from '../../../../data';
import { importCallback } from './utils';

export const AchievementsSection = {
    name: "Achievements",
    tabs: [
        {
            title: "Battle Achievements",
            importCallback: importCallback(1, [data.Achievements.Battle], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === columns[1].replace('Raiders', 'Raider')) return true;

                if(task.name === 'Octopath Traveler' && columns[1] === 'Octopath Traveller') return true;
                if(task.name === 'Mightier than Levin' && columns[1] === 'Mightier than the Levin') return true;
                return false;
            }),
        },
        {
            title: "Character Achievements",
            importCallback: importCallback(1, [data.Achievements.Character], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === 'Freebird: The Tempest' && columns[1] === 'Freebird: Tempest') return true;
                return false;
            }),
        },
        {
            title: "PvP Achievements",
            importCallback: importCallback(1, [data.Achievements.PvP], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name.toLowerCase() === columns[1].toLowerCase()) return true;

                if(task.name === columns[1].replace('Diner\'s', 'Diners\'')) return true;
                if(task.name === columns[1].replace('Elevern', 'Eleven')) return true;
                if(task.name === columns[1].replace('Elever', 'Eleven')) return true;

                if(task.name === 'Life on the Line' && columns[1] === 'Walk the Line VI') return true;
                return false;
            }),
        },
        {
            title: "Items Achievements",
            importCallback: importCallback(1, [data.Achievements.Items]),
        },
        {
            title: "Crafting Achievements",
            importCallback: importCallback(1, [data.Achievements.Crafting]),
        },
        {
            title: "Gathering Achievements",
            importCallback: importCallback(1, [data.Achievements.Gathering], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === columns[1].replace('Farm From', 'Far from')) return true;
                return false;
            }),
        },
        {
            title: "Quests Achievements",
            importCallback: importCallback(1, [data.Achievements.Quests]),
        },
        {
            title: "Exploration Achievements",
            importCallback: importCallback(1, [data.Achievements.Exploration], (isMatch, task, columns) => {
                if(isMatch) return true;
                if(task.name === columns[1].replace('The', '')) return true;
                return false;
            }),
        },
        {
            title: "Grand Company Achievements",
            importCallback: importCallback(1, [data.Achievements.Grand_Company], (isMatch, task, columns) => {
                if(isMatch) return true;
                if(task.name === columns[1].replace(' (Achievement)', '')) return true;
                return false;
            }),
        },
    ]
};
