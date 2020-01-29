import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Side_Story_Delivery_Moogle = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.delivery-moogle`;

    return {
        name: "Delivery Moogle",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "50",
        name: "Of Errant Epistles",
        npc: "Klynthota",
        unlock: ""
    }, {
        level: "50",
        name: "A Debt Unpaid",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "Carline Memories",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "Dream On",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "Spirits Most Foul",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "Dubious Dancing",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "Stroking the Haft",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "Thwack-a-Mole",
        npc: "Deputy Postmoogle",
        unlock: "Mini Mole Minion"
    }, {
        level: "50",
        name: "Sweet Words, Shadowy Dealings",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "The Captain of Her Heart",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "Sudul Eht Nioj",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "Of Siblings and Side-whiskers",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "Death of a Mailman",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "All in the Family",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "Duel Personalities",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "Lone Survivor",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "Guildmaster, Prelate, and Plot",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "The Past Is a Story We Never Tell",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "Thanks For Your Support",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "Hostages to Fortune",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "A Qiqirn Always Pays His Debts",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "The Hazy Professor",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "Blues on Emerald Avenue",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "Better Left Unfound",
        npc: "Deputy Postmoogle",
        unlock: ""
    }, {
        level: "50",
        name: "The Little Postmoogle that Could",
        npc: "Deputy Postmoogle",
        unlock: ""
    }
];
