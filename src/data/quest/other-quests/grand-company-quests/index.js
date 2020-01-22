import { MaelstromQuests } from "./maelstrom-quests";
import { OrderOfTheTwinAdderQuests } from "./order-of-the-twin-adder-quests";
import { ImmortalFlamesQuests } from "./immortal-flames-quests";

export const GrandCompanyQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.grand-company`;

    return {
        name: "Grand Company",
        storageKey,
        subGroups: [
            MaelstromQuests(storageKey),
            OrderOfTheTwinAdderQuests(storageKey),
            ImmortalFlamesQuests(storageKey),
        ]
    };
};
