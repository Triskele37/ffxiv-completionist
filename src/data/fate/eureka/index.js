import { AnemosFATEs } from "./anemos";
import { PagosFATEs } from "./pagos";
import { PyrosFATEs } from "./pyros";
import { HydatosFATEs } from "./hydatos";

export const EurekaFATEs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.eureka`;

    return {
        name: "Eureka",
        storageKey,
        subGroups: [
            AnemosFATEs(storageKey),
            PagosFATEs(storageKey),
            PyrosFATEs(storageKey),
            HydatosFATEs(storageKey),
        ]
    };
};
