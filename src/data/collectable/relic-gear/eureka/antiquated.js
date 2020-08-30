import { DataGroup } from "../../../DataGroup";

export const Collectables_Relic_Gear_Eureka_Antiquated = function(parent) {
    return new DataGroup("Antiquated", parent).initializeTasks(tasks);
};

const tasks = [
    { name: "Antiquated Pleiades", job: "Astrologian", },
    { name: "Antiquated Vanargand", job: "Black Mage", },
    { name: "Antiquated Failnaught", job: "Bard", },
    { name: "Antiquated Ryunohige", job: "Dragoon", },
    { name: "Antiquated Caladbolg", job: "Dark Knight", },
    { name: "Antiquated Outsider", job: "Machinist", },
    { name: "Antiquated Sudarshana Chakra", job: "Monk", },
    { name: "Antiquated Nagi", job: "Ninja", },
    { name: "Antiquated Galatyn & Antiquated Evalach", job: "Paladin", },
    { name: "Antiquated Murgleis", job: "Red Mage", },
    { name: "Antiquated Kiku-ichimonji", job: "Samurai", },
    { name: "Antiquated Organum", job: "Scholar", },
    { name: "Antiquated Lemegeton", job: "Summoner", },
    { name: "Antiquated Farsha", job: "Warrior", },
    { name: "Antiquated Aymur", job: "White Mage", },
];
