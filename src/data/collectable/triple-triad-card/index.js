import { DataGroup } from "../../DataGroup";

import { Collectables_Triple_Triad_Card_List_Page_1 } from "./page-1";
import { Collectables_Triple_Triad_Card_List_Page_2 } from "./page-2";
import { Collectables_Triple_Triad_Card_List_Page_3 } from "./page-3";
import { Collectables_Triple_Triad_Card_List_Page_4 } from "./page-4";
import { Collectables_Triple_Triad_Card_List_Page_5 } from "./page-5";
import { Collectables_Triple_Triad_Card_List_Page_6 } from "./page-6";
import { Collectables_Triple_Triad_Card_List_Page_7 } from "./page-7";
import { Collectables_Triple_Triad_Card_List_Page_8 } from "./page-8";
import { Collectables_Triple_Triad_Card_List_Page_9 } from "./page-9";
import { Collectables_Triple_Triad_Card_List_Page_10 } from "./page-10";
import { Collectables_Triple_Triad_Card_List_Page_11 } from "./page-11";
import { Collectables_Triple_Triad_Card_List_Last_Page } from "./last-page";

export const Collectables_Triple_Triad_Card_List = function(parent) {
    const data = new DataGroup("Triple Triad Card List", parent);
    data.name_fr = "Cartes de Triple Triade";

    data.columnConfig = [
        { header: "Number", key: "number" },
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
        Collectables_Triple_Triad_Card_List_Page_1,
        Collectables_Triple_Triad_Card_List_Page_2,
        Collectables_Triple_Triad_Card_List_Page_3,
        Collectables_Triple_Triad_Card_List_Page_4,
        Collectables_Triple_Triad_Card_List_Page_5,
        Collectables_Triple_Triad_Card_List_Page_6,
        Collectables_Triple_Triad_Card_List_Page_7,
        Collectables_Triple_Triad_Card_List_Page_8,
        Collectables_Triple_Triad_Card_List_Page_9,
        Collectables_Triple_Triad_Card_List_Page_10,
        Collectables_Triple_Triad_Card_List_Page_11,
        Collectables_Triple_Triad_Card_List_Last_Page
    ]);

    return data;
};
