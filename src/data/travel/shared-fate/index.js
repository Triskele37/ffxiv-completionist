import { DataGroup } from "../../DataGroup";

import { Travel_Shared_FATE_Lakeland } from "./lakeland";
import { Travel_Shared_FATE_Amh_Araeng } from "./amh-araeng";
import { Travel_Shared_FATE_Il_Mheg } from "./il-mheg";
import { Travel_Shared_FATE_Kholusia } from "./kholusia";
import { Travel_Shared_FATE_The_Rak_Tika_Greatwood } from "./the-rak-tika-greatwood";
import { Travel_Shared_FATE_The_Tempest } from "./the-tempest";

export const Travel_Shared_FATE = function(name, parent) {
    const data = new DataGroup(name, parent);

    data.columnConfig = [
        { header: "Rank", key: "name" },
        { header: "Requirements", key: "requirements" },
    ];

    data.initializeSubGroups([
        Travel_Shared_FATE_Lakeland,
        Travel_Shared_FATE_Amh_Araeng,
        Travel_Shared_FATE_Il_Mheg,
        Travel_Shared_FATE_Kholusia,
        Travel_Shared_FATE_The_Rak_Tika_Greatwood,
        Travel_Shared_FATE_The_Tempest,
    ]);

    return data;
};
