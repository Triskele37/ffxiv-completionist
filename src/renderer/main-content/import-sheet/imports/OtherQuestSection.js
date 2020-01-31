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
            title: "Job & Role Quests",
            importCallback: importCallback(3, [
                data.Quests.Class_and_Job.Disciple_of_War_Job,
                data.Quests.Class_and_Job.Disciple_of_Magic_Job,
                data.Quests.Class_and_Job.Role,
            ]),
        },
        {
            title: "Crystalline Mean & Role Quests",
            importCallback: importCallback(2, [data.Quests.Class_and_Job.Crystalline_Mean]),
        },
        {
            title: "Chronicles of a New Era",
            importCallback: importCallback(2, [data.Quests.Chronicles_of_a_New_Era]),
        },
        {
            title: "Side Story Quests",
            importCallback: importCallback(2, [data.Quests.Sidequests.Side_Story]),
        },
        {
            title: "Weapons Quests",
            importCallback: (rawText) => {
                return 'Not Implemented'
            },
        },
        {
            title: "Grand Company Quests",
            importCallback: importCallback(2, [data.Quests.Other.Grand_Company]),
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
    ]
};
