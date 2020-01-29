import { data } from '../../../../data';
import { importCallback } from './utils';

export const MainQuestSection = {
    name: "Main Quests",
    tabs: [
        {
            title: "Seventh Umbral Era Quests",
            importCallback: importCallback(2, [data.Quests.Main_Scenario.Seventh_Umbral_Era]),
        },
        {
            title: "Seventh Astral Era Quests",
            importCallback: importCallback(2, [data.Quests.Main_Scenario.Seventh_Astral_Era]),
        },
        {
            title: "Heavensward Main Quests",
            importCallback: importCallback(2, [data.Quests.Main_Scenario.Heavensward]),
        },
        {
            title: "Dragonsong War Quests",
            importCallback: importCallback(2, [
                data.Quests.Main_Scenario.Dragonsong,
                data.Quests.Main_Scenario.Post_Dragonsong,
            ]),
        },
        {
            title: "Stormblood Main Quests",
            importCallback: importCallback(2, [data.Quests.Main_Scenario.Stormblood]),
        },
        {
            title: "The Legend Returns Quests",
            importCallback: importCallback(2, [data.Quests.Main_Scenario.Post_Stormblood]),
        },
        {
            title: "Shadowbringers Quests",
            importCallback: importCallback(2, [data.Quests.Main_Scenario.Shadowbringers]),
        },
        {
            title: "Post-Shadowbringers Quests",
            importCallback: importCallback(2, [data.Quests.Main_Scenario.Post_Shadowbringers]),
        },
    ]
};
