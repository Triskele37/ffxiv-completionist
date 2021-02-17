import { DataGroup } from "../../DataGroup";

export const Travel_Mount_Speed_Norvrandt = function(parent) {
    return new DataGroup("Norvrandt", parent).initializeTasks(tasks);
};

const tasks = [
    { name: "Lakeland", method: "Purchase for 70 Gemstones (Siulmet - Fort Jobb)" },
    { name: "Kholusia", method: "Purchase for 70 Gemstones (Zumutt - Tomra)" },
    { name: "Amh Araeng", method: "Purchase for 70 Gemstones (Halden - Twine)" },
    { name: "Il Mheg", method: "Purchase for 70 Gemstones (Sul Lad - Lydha Lran)" },
    { name: "Rak'tika Greatwood", method: "Purchase for 70 Gemstones  (Nacille - Fanow)" },
    { name: "The Tempest", method: "Purchase for 70 Gemstones  (Goushs Ooan - The Ondo Cups)" },
];
