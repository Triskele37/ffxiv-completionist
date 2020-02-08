import { DataGroup } from "../../DataGroup";
import { EurekaColumnConfig } from "../columnConfigs";

import { FATEs_Eureka_Anemos } from "./anemos";
import { FATEs_Eureka_Pagos } from "./pagos";
import { FATEs_Eureka_Pyros } from "./pyros";
import { FATEs_Eureka_Hydatos } from "./hydatos";

export const FATEs_Eureka = function(parent) {
    const data = new DataGroup("Eureka", parent);
    data.columnConfig = EurekaColumnConfig;

    data.initializeSubGroups([
        FATEs_Eureka_Anemos,
        FATEs_Eureka_Pagos,
        FATEs_Eureka_Pyros,
        FATEs_Eureka_Hydatos,
	]);

    return data;
};
