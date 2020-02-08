import { DataGroup } from "../../DataGroup";

export const Achievements_Legacy_Battle = function(parent) {
    return new DataGroup("Battle", parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Defeat the notorious monsters Barometz, Slippery Sykes, Gluttonous Gertrude, bomb baron, Unknown Soldier, great buffalo, and Old Six-arms.",
        name: "La Noscea Big Game Hunter",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat the notorious monsters Queen Bolete, Alux, the Jackanapes, Sirocco, Phaia, Haughtpox Bloatbelly, and the Prince of Pestilence.",
        name: "Black Shroud Big Game Hunter",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat the notorious monsters Cactuar Jack, elder mosshorn, Daddy Longlegs, Kokoroon Quickfingers, nest commander, Bardi, and Pyrausta.",
        name: "Thanalan Big Game Hunter",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat the notorious monsters Uraeus, Spitfire, and Downy Dunstan.",
        name: "Coerthas Big Game Hunter",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat the notorious monster Dodore.",
        name: "Mor Dhona Big Game Hunter",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat the notorious monsters Shearing Sheridan, giant remora, and the lone coeurl.",
        name: "Shposhae Big Game Hunter",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat the notorious beastmen Lozol Totoloq the Decapitator, Flamefist Ahlygg Roh, and 3rd Order Patriarch Zu Ga.",
        name: "Bane of the Tribes",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat 25 different notorious monsters.",
        name: "Notorious Monster Hunting",
        points: 30,
        reward: "Title: Notorious Monster Hunter"
    }, {
        description: "Defeat Ifrit in the Bowl of Embers (Hard).",
        name: "Had Me Some Fun",
        points: 5,
        reward: "-"
    }, {
        description: "Defeat Good King Moggle Mog XII in Thornmarch (Hard).",
        name: "Most Adorable Death Ever",
        points: 5,
        reward: "-"
    }, {
        description: "Defeat Garuda in the Howling Eye (Hard).",
        name: "Where the Wind Blows",
        points: 5,
        reward: "-"
    },
];
