import { DataGroup } from "../../DataGroup";

const basePath = "./duty/fate";
export const Duty_FATEs_Mor_Dhona = function(parent) {
    return DataGroup.fromJSON(parent, `${basePath}/mor-dhona`);
};
