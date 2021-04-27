import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/side-story-quests";
export const Duty_Quests_Sidequests_Side_Story = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/hildibrand-quests`),
        DataGroup.fromJSON(group, `${basePath}/further-hildibrand-adventures`),
        DataGroup.fromJSON(group, `${basePath}/even-further-hildibrand-adventures`),
        DataGroup.fromJSON(group, `${basePath}/scholasticate-quests`),
        DataGroup.fromJSON(group, `${basePath}/tales-of-the-dragonsong-war`),
        DataGroup.fromJSON(group, `${basePath}/wandering-minstrel-quests`),
        DataGroup.fromJSON(group, `${basePath}/zodiac-weapons`),
        DataGroup.fromJSON(group, `${basePath}/anima-weapons`),
        DataGroup.fromJSON(group, `${basePath}/the-forbidden-land-eureka`),
        DataGroup.fromJSON(group, `${basePath}/resistance-weapons`),
        DataGroup.fromJSON(group, `${basePath}/delivery-moogle-quests`),
        DataGroup.fromJSON(group, `${basePath}/allied-beast-tribe-quests`),
        DataGroup.fromJSON(group, `${basePath}/heavensward-beast-tribe-quests`),
        DataGroup.fromJSON(group, `${basePath}/stormblood-beast-tribe-quests`),
        DataGroup.fromJSON(group, `${basePath}/doman-adventurers-guild-quests`),
        DataGroup.fromJSON(group, `${basePath}/doman-reconstruction-quests`),
        DataGroup.fromJSON(group, `${basePath}/tales-from-the-shadows`),
        DataGroup.fromJSON(group, `${basePath}/void-quests`),
        DataGroup.fromJSON(group, `${basePath}/ishgardian-restoration-main-quests`),
        DataGroup.fromJSON(group, `${basePath}/ishgardian-restoration-sidequests`),
    ];

    return group;
};
