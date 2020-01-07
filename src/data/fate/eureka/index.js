import { AnemosFATEs } from './anemos';
import { PagosFATEs } from './pagos';
import { PyrosFATEs } from './pyros';
import { HydatosFATEs } from './hydatos';

export const EurekaFATEs = {
    name: 'Eureka',
    subGroups: [
        AnemosFATEs,
        PagosFATEs,
        PyrosFATEs,
        HydatosFATEs
    ]
};
