import { DataGroup } from "../../DataGroup";

import { Achievements_Grand_Company_Grand_Company } from "./grand-company";
import { Achievements_Grand_Company_Maelstrom } from "./maelstrom";
import { Achievements_Grand_Company_Order_of_the_Twin_Adder } from "./order-of-the-twin-adder";
import { Achievements_Grand_Company_Immortal_Flames } from "./immortal-flames";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Grand%20Company&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Grand_Company = function(parent) {
    return new DataGroup("Grand Company", parent).initializeSubGroups([
        Achievements_Grand_Company_Grand_Company,
        Achievements_Grand_Company_Maelstrom,
        Achievements_Grand_Company_Order_of_the_Twin_Adder,
        Achievements_Grand_Company_Immortal_Flames,
    ]);
};
