import { DataGroup } from "../../DataGroup";

const pastPath = "./duty/quest/beast-tribe-quests-past";
const presentPath = "./duty/quest/beast-tribe-quests-shadowbringers";
export const Duty_Quests_Beast_Tribe = function(parent) {
    const group = DataGroup.fromJSON(parent, `${presentPath}/index`, {
        Level: { filterable: true, centered: true },
        Reputation: { filterable: true },
        type: { filterable: true },
    });

    group.subGroups = [
        buildBeastTribe(group, `${pastPath}/amaljaa-quests`),
        buildBeastTribe(group, `${pastPath}/sylph-quests`),
        buildBeastTribe(group, `${pastPath}/kobold-quests`),
        buildBeastTribe(group, `${pastPath}/sahagin-quests`),
        buildBeastTribe(group, `${pastPath}/ixal-quests`),
        buildBeastTribe(group, `${pastPath}/vanu-vanu-quests`),
        buildBeastTribe(group, `${pastPath}/vath-quests`),
        buildBeastTribe(group, `${pastPath}/moogle-quests`),
        buildBeastTribe(group, `${pastPath}/kojin-quests`),
        buildBeastTribe(group, `${pastPath}/ananta-quests`),
        buildBeastTribe(group, `${pastPath}/namazu-quests`),
        buildBeastTribe(group, `${presentPath}/pixie-quests`),
        buildBeastTribe(group, `${presentPath}/qitari-quests`),
        buildBeastTribe(group, `${presentPath}/dwarf-quests`),
    ];

    return group;
};

function buildBeastTribe(parent, basePath) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    const mainGroup = DataGroup.fromJSON(group, `${basePath}/main-quests`);
    const dailyGroup = DataGroup.fromJSON(group, `${basePath}/daily-quests`);

    group.tasks = [...mainGroup.tasks, ...dailyGroup.tasks];
    group.countTasks();

    return group;
}
