import { MaelstromQuests } from "./maelstrom-quests";
import { OrderOfTheTwinAdderQuests } from "./order-of-the-twin-adder-quests";
import { ImmortalFlamesQuests } from "./immortal-flames-quests";

export const GrandCompanyQuests = {
    name: "Grand Company",
    subGroups: [
        MaelstromQuests,
        OrderOfTheTwinAdderQuests,
        ImmortalFlamesQuests,
    ]
};
