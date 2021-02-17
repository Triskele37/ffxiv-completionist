import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/blue-mage/spellbook";

export const Character_Blue_Mage_Spellbook = function(parent) {
    const data = new DataGroup("Spellbook", parent);
    data.name_fr = "Grimoire";

    data.initializeTasks(tasks, [
        { header: "#", key: "number", centered: true },
        { header: "Spell", key: "name" },
        { header: "Enemy", key: "enemy" },
        { header: "Location", key: "location" },
    ]);

    return data;
};
