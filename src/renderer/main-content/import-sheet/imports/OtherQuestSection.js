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
            title: "Job Quests",
            importCallback: importCallback(3, [
                data.Quests.Class_and_Job.Disciple_of_War_Job,
                data.Quests.Class_and_Job.Disciple_of_Magic_Job,
            ]),
        },
        {
            title: "Role Quests",
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
            title: "Weapons Quests",
            importCallback: (rawText) => {
                return 'Not Implemented'
            },
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
