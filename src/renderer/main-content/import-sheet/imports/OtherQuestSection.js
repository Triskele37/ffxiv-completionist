import { data } from '../../../../data';
import { importCallback } from './utils';

const duty = data.sg('Duty');
const quests = data.sg('Quests');
const classAndJob = quests.sg('Class & Job');
const sidequests = quests.sg('Sidequests');
const sideStory = sidequests.sg('Side Story');

export const OtherQuestSection = {
    name: "Other Quests",
    tabs: [
        {
            title: "Class Quests",
            importCallback: importCallback(3, [
                duty.sg('Hall of the Novice'),
                classAndJob.sg('Disciple of War'),
                classAndJob.sg('Disciple of Magic'),
                classAndJob.sg('Disciple of the Hand'),
                classAndJob.sg('Disciple of the Land'),
            ]),
        },
        {
            title: "Job & Role Quests (old)",
            importCallback: importCallback(3, [
                classAndJob.sg('Disciple of War Job'),
                classAndJob.sg('Disciple of Magic Job'),
                classAndJob.sg('Role'),
            ]),
        },
        {
            title: "Job Quests (new)",
            importCallback: importCallback(3, [
                classAndJob.sg('Disciple of War Job'),
                classAndJob.sg('Disciple of Magic Job'),
            ]),
        },
        {
            title: "Role Quests (new)",
            importCallback: importCallback(3, [
                classAndJob.sg('Role'),
            ]),
        },
        {
            title: "Crystalline Mean Quests",
            importCallback: importCallback(2, [classAndJob.sg('Crystalline Mean')]),
        },
        {
            title: "Chronicles of a New Era",
            importCallback: importCallback(2, [quests.sg('Chronicles of a New Era')]),
        },
        {
            title: "Side Story Quests",
            importCallback: importCallback(2, [
                sideStory.sg('Hildibrand'),
                sideStory.sg('Further Hildibrand Adventures'),
                sideStory.sg('Even Further Hildibrand Adventures'),
                sideStory.sg('Scholasticate'),
                sideStory.sg('Tales of the Dragonsong War'),
                sideStory.sg('Wandering Minstrel'),
                sideStory.sg('The Forbidden Land, Eureka'),
                sideStory.sg('Delivery Moogle'),
                sideStory.sg('Doman Adventurers\' Guild'),
                sideStory.sg('Doman Reconstruction'),
                sideStory.sg('Tales from the Shadows'),
                sideStory.sg('Ishgardian Restoration Main'),
            ]),
        },
        {
            title: "Weapon Quests",
            importCallback: importCallback(2, [
                sideStory.sg('Zodiac Weapons'),
                sideStory.sg('Anima Weapons'),
                sidequests.sg('Gridanian').sg('North Shroud'),
                sidequests.sg('Ul\'Dahn').sg('Western Thanalan'),
                sidequests.sg('Mor Dhonan').sg('Mor Dhona'),
                data.sg('Collectables').sg('Relic Gear'),
            ], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === columns[2].replace('Madness', 'Malice')) return true;

                // Match iLVL for relics pre-eureka
                if(task.iLvl && task.iLvl === columns[1] && parseInt(task.iLvl) < 290) {
                    const jobName = getWeaponTabRelicJob(columns[2]);

                    if(task.job === jobName) {
                        if(task.name.includes('Atma') && !columns[2].includes('Up In Arms')) return false;
                        if(task.name.includes('Animus') && !columns[2].includes('Trials of the Brave')) return false;
                        if(task.name.includes('Sphere Scroll') && !columns[2].includes('Celestial Radiance')) return false;
                        if(task.name.includes('Novus') && !columns[2].includes('Star Light, Star Bright')) return false;

                        // For all others, no other relic has the same iLvl
                        return true;
                    }
                }

                // Ignores equipment slot part of name for eureka gear
                if(task.name === columns[2].replace(/ \(.*\)/, '')) return true;

                return false;
            }),
        },
        {
            title: "Beast Tribe Quests",
            importCallback: importCallback(3, [
                quests.sg('Beast Tribe'),
                sideStory.sg('Allied Beast Tribe'),
                sideStory.sg('Heavensward Beast Tribe'),
                sideStory.sg('Stormblood Beast Tribe'),
            ]),
        },
        {
            title: "Grand Company Quests",
            importCallback: importCallback(2, [quests.sg('Other').sg('Grand Company')]),
        },
    ]
};

function getWeaponTabRelicJob(rowName) {
    const jobAbbreviation = rowName.match(/\(.*\)/);
    if(!jobAbbreviation) return null;

    switch(jobAbbreviation[0]) {
        case '(AST)': return 'Astrologian';
        case '(BLM)': return 'Black Mage';
        case '(BRD)': return 'Bard';
        case '(DRK)': return 'Dark Knight';
        case '(DRG)': return 'Dragoon';
        case '(MCH)': return 'Machinist';
        case '(MNK)': return 'Monk';
        case '(NIN)': return 'Ninja';
        case '(PLD)': return 'Paladin';
        case '(SCH)': return 'Scholar';
        case '(SMN)': return 'Summoner';
        case '(WAR)': return 'Warrior';
        case '(WHM)': return 'White Mage';
        default: return null;
    }
}
