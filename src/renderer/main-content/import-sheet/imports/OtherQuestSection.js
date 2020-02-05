import { data } from '../../../../data';
import { importCallback } from './utils';

export const OtherQuestSection = {
    name: "Other Quests",
    tabs: [
        {
            title: "Class Quests",
            importCallback: importCallback(3, [
                data.Duty.Hall_of_the_Novice,
                data.Quests.Class_and_Job.Disciple_of_War,
                data.Quests.Class_and_Job.Disciple_of_Magic,
                data.Quests.Class_and_Job.Disciple_of_the_Hand,
                data.Quests.Class_and_Job.Disciple_of_the_Land,
            ]),
        },
        {
            title: "Job & Role Quests (old)",
            importCallback: importCallback(3, [
                data.Quests.Class_and_Job.Disciple_of_War_Job,
                data.Quests.Class_and_Job.Disciple_of_Magic_Job,
                data.Quests.Class_and_Job.Role,
            ]),
        },
        {
            title: "Job Quests (new)",
            importCallback: importCallback(3, [
                data.Quests.Class_and_Job.Disciple_of_War_Job,
                data.Quests.Class_and_Job.Disciple_of_Magic_Job,
            ]),
        },
        {
            title: "Role Quests (new)",
            importCallback: importCallback(3, [
                data.Quests.Class_and_Job.Role,
            ]),
        },
        {
            title: "Crystalline Mean Quests",
            importCallback: importCallback(2, [data.Quests.Class_and_Job.Crystalline_Mean]),
        },
        {
            title: "Chronicles of a New Era",
            importCallback: importCallback(2, [data.Quests.Chronicles_of_a_New_Era]),
        },
        {
            title: "Side Story Quests",
            importCallback: importCallback(2, [
                data.Quests.Sidequests.Side_Story.Hildibrand,
                data.Quests.Sidequests.Side_Story.Further_Hildibrand_Adventures,
                data.Quests.Sidequests.Side_Story.Even_Further_Hildibrand_Adventures,
                data.Quests.Sidequests.Side_Story.Scholasticate,
                data.Quests.Sidequests.Side_Story.Tales_of_the_Dragonsong_War,
                data.Quests.Sidequests.Side_Story.Wandering_Minstrel,
                data.Quests.Sidequests.Side_Story.The_Forbidden_Land_Eureka,
                data.Quests.Sidequests.Side_Story.Delivery_Moogle,
                data.Quests.Sidequests.Side_Story.Doman_Adventurers_Guild,
                data.Quests.Sidequests.Side_Story.Doman_Reconstruction,
                data.Quests.Sidequests.Side_Story.Tales_from_the_Shadows,
                data.Quests.Sidequests.Side_Story.Ishgardian_Restoration_Main,
            ]),
        },
        {
            title: "Weapon Quests",
            importCallback: importCallback(2, [
                data.Quests.Sidequests.Side_Story.Zodiac_Weapons,
                data.Quests.Sidequests.Side_Story.Anima_Weapons,
                data.Quests.Sidequests.Gridanian.North_Shroud,
                data.Quests.Sidequests.Ul_Dahn.Western_Thanalan,
                data.Quests.Sidequests.Mor_Dhonan.Mor_Dhona,
                data.Collectables.Relic_Gear,
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
                data.Quests.Beast_Tribe,
                data.Quests.Sidequests.Side_Story.Allied_Beast_Tribe,
                data.Quests.Sidequests.Side_Story.Heavensward_Beast_Tribe,
                data.Quests.Sidequests.Side_Story.Stormblood_Beast_Tribe,
            ]),
        },
        {
            title: "Grand Company Quests",
            importCallback: importCallback(2, [data.Quests.Other.Grand_Company]),
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
