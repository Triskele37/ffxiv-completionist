import { AnemosFATEs } from "./anemos";
import { PagosFATEs } from "./pagos";
import { PyrosFATEs } from "./pyros";
import { HydatosFATEs } from "./hydatos";

export const EurekaFATEs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.eureka`;

    return {
        name: "Eureka",
        storageKey,
        groupKeys: [
            "Anemos",
            "Pagos",
            "Pyros",
            "Hydatos",
        ],
        // Groups
        Anemos: AnemosFATEs(storageKey),
        Pagos: PagosFATEs(storageKey),
        Pyros: PyrosFATEs(storageKey),
        Hydatos: HydatosFATEs(storageKey),
    };
};
