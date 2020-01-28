import { Quest_Other_Grand_Company_Maelstrom } from "./maelstrom-quests";
import { Quest_Other_Grand_Company_Order_Of_The_Twin_Adder } from "./order-of-the-twin-adder-quests";
import { Quest_Other_Grand_Company_Immortal_Flames } from "./immortal-flames-quests";

export const Quest_Other_Grand_Company = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.grand-company`;

    return {
        name: "Grand Company",
        storageKey,
        groupKeys: [
            "Maelstrom",
            "Order_Of_The_Twin_Adder",
            "Immortal_Flames",
        ],
        // Groups
        Maelstrom: Quest_Other_Grand_Company_Maelstrom(storageKey),
        Order_Of_The_Twin_Adder: Quest_Other_Grand_Company_Order_Of_The_Twin_Adder(storageKey),
        Immortal_Flames: Quest_Other_Grand_Company_Immortal_Flames(storageKey),
    };
};
