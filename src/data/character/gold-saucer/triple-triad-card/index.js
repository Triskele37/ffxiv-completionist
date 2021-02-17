import { DataGroup } from "../../../DataGroup";

import { Character_Gold_Saucer_Triple_Triad_Card_List_Page_1 } from "./page-1";
import { Character_Gold_Saucer_Triple_Triad_Card_List_Page_2 } from "./page-2";
import { Character_Gold_Saucer_Triple_Triad_Card_List_Page_3 } from "./page-3";
import { Character_Gold_Saucer_Triple_Triad_Card_List_Page_4 } from "./page-4";
import { Character_Gold_Saucer_Triple_Triad_Card_List_Page_5 } from "./page-5";
import { Character_Gold_Saucer_Triple_Triad_Card_List_Page_6 } from "./page-6";
import { Character_Gold_Saucer_Triple_Triad_Card_List_Page_7 } from "./page-7";
import { Character_Gold_Saucer_Triple_Triad_Card_List_Page_8 } from "./page-8";
import { Character_Gold_Saucer_Triple_Triad_Card_List_Page_9 } from "./page-9";
import { Character_Gold_Saucer_Triple_Triad_Card_List_Page_10 } from "./page-10";
import { Character_Gold_Saucer_Triple_Triad_Card_List_Page_11 } from "./page-11";
import { Character_Gold_Saucer_Triple_Triad_Card_List_Last_Page } from "./last-page";

export const Character_Gold_Saucer_Triple_Triad_Card_List = function(parent) {
    const data = new DataGroup("Triple Triad Card List", parent);
    data.name_fr = "Cartes de Triple Triade";

    data.columnConfig = [
        { header: "Number", key: "number", centered: true },
        { header: "Card", key: "name" },
        {
            header: "Rarity",
            key: "rarity",
            filterable: true,
            centered: true,
        },
        { header: "Type", key: "type", filterable: true },
        { header: "Opponent", key: "opponent" },
        { header: "Acquired By", key: "acquiredBy" },
        { header: "Patch", key: "patch", filterable: true },
    ];

    data.initializeSubGroups([
        Character_Gold_Saucer_Triple_Triad_Card_List_Page_1,
        Character_Gold_Saucer_Triple_Triad_Card_List_Page_2,
        Character_Gold_Saucer_Triple_Triad_Card_List_Page_3,
        Character_Gold_Saucer_Triple_Triad_Card_List_Page_4,
        Character_Gold_Saucer_Triple_Triad_Card_List_Page_5,
        Character_Gold_Saucer_Triple_Triad_Card_List_Page_6,
        Character_Gold_Saucer_Triple_Triad_Card_List_Page_7,
        Character_Gold_Saucer_Triple_Triad_Card_List_Page_8,
        Character_Gold_Saucer_Triple_Triad_Card_List_Page_9,
        Character_Gold_Saucer_Triple_Triad_Card_List_Page_10,
        Character_Gold_Saucer_Triple_Triad_Card_List_Page_11,
        Character_Gold_Saucer_Triple_Triad_Card_List_Last_Page
    ]);

    return data;
};
