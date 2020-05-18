import { data } from "../../data";

import { applyStoreToData } from './applyStoreToData';
import { migrateData } from "./migration";

export function initializeData() {
    migrateData();
    applyStoreToData(data);
}
