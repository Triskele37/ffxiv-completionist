import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

import { Character_Achievements_Grand_Company_Grand_Company } from "./grand-company";
import { Character_Achievements_Grand_Company_Maelstrom } from "./maelstrom";
import { Character_Achievements_Grand_Company_Order_of_the_Twin_Adder } from "./order-of-the-twin-adder";
import { Character_Achievements_Grand_Company_Immortal_Flames } from "./immortal-flames";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Grand%20Company&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Character_Achievements_Grand_Company = function(parent) {
    const json = loadJson('./character/achievement/grand-company/index', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeSubGroups([
        Character_Achievements_Grand_Company_Grand_Company,
        Character_Achievements_Grand_Company_Maelstrom,
        Character_Achievements_Grand_Company_Order_of_the_Twin_Adder,
        Character_Achievements_Grand_Company_Immortal_Flames,
    ]);

    return data;
};
