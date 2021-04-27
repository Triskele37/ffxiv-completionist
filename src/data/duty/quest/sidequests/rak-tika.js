import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/raktika-sidequests";
export const Duty_Quests_Sidequests_Rak_Tika = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/the-raktika-greatwood`),
    ];

    return group;
};
