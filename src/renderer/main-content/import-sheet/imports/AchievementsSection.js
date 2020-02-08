import { data } from '../../../../data';
import { importCallback } from './utils';

const achievements = data.sg('Achievements');

export const AchievementsSection = {
    name: "Achievements",
    tabs: [
        {
            title: "Battle Achievements",
            importCallback: importCallback(1, [
                achievements.sg('Battle')
            ], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === columns[1].replace('Raiders', 'Raider')) return true;
                if(task.name === columns[1].replace('Mighter', 'Mightier')) return true;
                if(task.name === columns[1].replace('Traveller', 'Traveler')) return true;
                if(task.name === 'Mightier than Levin' && columns[1] === 'Mightier than the Levin') return true;
                return false;
            }),
        },
        {
            title: "Character Achievements",
            importCallback: importCallback(1, [
                achievements.sg('Character')
            ], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === 'Freebird: The Tempest' && columns[1] === 'Freebird: Tempest') return true;
                return false;
            }),
        },
        {
            title: "PvP Achievements",
            importCallback: importCallback(1, [
                achievements.sg('PvP')
            ], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name.toLowerCase() === columns[1].toLowerCase()) return true;

                if(task.name === columns[1].replace('Diner\'s', 'Diners\'')) return true;
                if(task.name === columns[1].replace('Elevern', 'Eleven')) return true;
                if(task.name === columns[1].replace('Elever', 'Eleven')) return true;

                if(task.name === 'Life on the Line' && columns[1] === 'Walk the Line VI') return true;

                if(isMislabeledDarkRobesI('II')) return true;
                if(isMislabeledDarkRobesI('III')) return true;
                if(isMislabeledDarkRobesI('IV')) return true;
                return false;

                function isMislabeledDarkRobesI(taskTier) {
                    if(task.name === `A Wolf in Dark Robes ${taskTier}`) {
                        if(columns[1] === 'A Wolf in Dark Robes I') {
                            switch(taskTier) {
                                case 'II': return columns[3].indexOf('50') !== -1;
                                case 'III': return columns[3].indexOf('100') !== -1;
                                case 'IV': return columns[3].indexOf('500') !== -1;
                            }
                        }
                    }

                    return false;
                }
            }),
        },
        {
            title: "Items Achievements",
            importCallback: importCallback(1, [
                achievements.sg('Items')
            ], (isMatch, task, columns) => {
                if(isMatch) return true;
                if(task.name === columns[1].replace('the ', '')) return true;
                return false;
            }),
        },
        {
            title: "Crafting Achievements",
            importCallback: importCallback(1, [
                achievements.sg('Crafting')
            ]),
        },
        {
            title: "Gathering Achievements",
            importCallback: importCallback(1, [
                achievements.sg('Gathering')
            ], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === columns[1].replace('Farm From', 'Far from')) return true;
                return false;
            }),
        },
        {
            title: "Quests Achievements",
            importCallback: importCallback(1, [
                achievements.sg('Quests')
            ]),
        },
        {
            title: "Exploration Achievements",
            importCallback: importCallback(1, [
                achievements.sg('Exploration')
            ], (isMatch, task, columns) => {
                if(isMatch) return true;
                if(task.name === columns[1].replace('The ', '')) return true;
                return false;
            }),
        },
        {
            title: "Grand Company Achievements",
            importCallback: importCallback(1, [
                achievements.sg('Grand Company')
            ], (isMatch, task, columns) => {
                if(isMatch) return true;
                if(task.name === columns[1].replace(' (Achievement)', '')) return true;
                return false;
            }),
        },
    ]
};
