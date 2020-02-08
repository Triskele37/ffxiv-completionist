import { data } from '../../../../data';
import { importCallback } from './utils';

const msq = data.sg('Quests').sg('Main Scenario');

export const MainQuestSection = {
    name: "Main Quests",
    tabs: [
        {
            title: "Seventh Umbral Era Quests",
            importCallback: importCallback(2, [msq.sg('Seventh Umbral Era')]),
        },
        {
            title: "Seventh Astral Era Quests",
            importCallback: importCallback(2, [msq.sg('Seventh Astral Era')]),
        },
        {
            title: "Heavensward Main Quests",
            importCallback: importCallback(2, [msq.sg('Heavensward')]),
        },
        {
            title: "Dragonsong War Quests",
            importCallback: importCallback(2, [
                msq.sg('Dragonsong'),
                msq.sg('Post-Dragonsong'),
            ]),
        },
        {
            title: "Stormblood Main Quests",
            importCallback: importCallback(2, [msq.sg('Stormblood')]),
        },
        {
            title: "The Legend Returns Quests",
            importCallback: importCallback(2, [msq.sg('Post-Stormblood')]),
        },
        {
            title: "Shadowbringers Quests",
            importCallback: importCallback(2, [msq.sg('Shadowbringers')]),
        },
        {
            title: "Post-Shadowbringers Quests",
            importCallback: importCallback(2, [msq.sg('Post-Shadowbringers')]),
        },
    ]
};
