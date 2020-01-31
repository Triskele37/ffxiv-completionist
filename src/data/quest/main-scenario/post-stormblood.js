import { DataGroup } from "../../DataGroup";

export const Quests_Main_Scenario_Post_Stormblood = function(name, parent) {
    const data = new DataGroup(name, parent).initializeTasks(tasks);
    data.columnConfig = parent.columnConfig.concat(
        { header: "Patch", key: "patch", filterable: true }
    );
    return data;
};

// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=7&columns=ID,Name&limit=106

const tasks = [
    //------------------------------------------------------------------ The Legend Returns
    {
        level: "70",
        name: "Arenvald's Adventure",
        npc: "Lyse Hext",
        unlock: "Box",
        patch: "The Legend Returns"
    }, {
        level: "70",
        name: "The Darkness Below",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "The Legend Returns"
    }, {
        level: "70",
        name: "The Mad King's Trove",
        npc: "Alphinaud Leveilleur",
        unlock: "The Drowned City of Skalla",
        patch: "The Legend Returns"
    }, {
        level: "70",
        name: "The Butcher's Blood",
        npc: "Arenvald",
        unlock: "",
        patch: "The Legend Returns"
    }, {
        level: "70",
        name: "Echoes of an Echo",
        npc: "Lyse Hext",
        unlock: "",
        patch: "The Legend Returns"
    }, {
        level: "70",
        name: "A Sultana's Strings",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "The Legend Returns"
    }, {
        level: "70",
        name: "A Sultana's Duty",
        npc: "Nanamo Ul Namo",
        unlock: "",
        patch: "The Legend Returns"
    }, {
        level: "70",
        name: "A Sultana's Resolve",
        npc: "Nanamo Ul Namo",
        unlock: "",
        patch: "The Legend Returns"
    }, {
        level: "70",
        name: "Securing the Saltery",
        npc: "Nanamo Ul Namo",
        unlock: "",
        patch: "The Legend Returns"
    }, {
        level: "70",
        name: "A Blissful Arrival",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "The Legend Returns"
    }, {
        level: "70",
        name: "Return of the Bull",
        npc: "Raubahn",
        unlock: "Dress-up Raubahn Minion",
        patch: "The Legend Returns"
    },
    //------------------------------------------------------------------ Rise Of A New Sun
    {
        level: "70",
        name: "Tidings from the East",
        npc: "Lyse Hext",
        unlock: "Greeting",
        patch: "Rise of a New Sun"
    }, {
        level: "70",
        name: "The Sword in the Store",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Rise of a New Sun"
    }, {
        level: "70",
        name: "Hope on the Waves",
        npc: "Yugiri",
        unlock: "",
        patch: "Rise of a New Sun"
    }, {
        level: "70",
        name: "Elation and Trepidation",
        npc: "Yugiri",
        unlock: "",
        patch: "Rise of a New Sun"
    }, {
        level: "70",
        name: "Storm on the Horizon",
        npc: "Hien",
        unlock: "",
        patch: "Rise of a New Sun"
    }, {
        level: "70",
        name: "His Forgotten Home",
        npc: "Alisaie Leveilleur",
        unlock: "",
        patch: "Rise of a New Sun"
    }, {
        level: "70",
        name: "A Guilty Conscience",
        npc: "Asahi sas Brutus",
        unlock: "",
        patch: "Rise of a New Sun"
    }, {
        level: "70",
        name: "Rise of a New Sun",
        npc: "Hien",
        unlock: "Cyan's Theme O. Roll",
        patch: "Rise of a New Sun"
    },
    //------------------------------------------------------------------ Under The Moonlight
    {
        level: "70",
        name: "Gosetsu and Tsuyu",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Under the Moonlight"
    }, {
        level: "70",
        name: "Gone Like the Morning Dew",
        npc: "Hien",
        unlock: "",
        patch: "Under the Moonlight"
    }, {
        level: "70",
        name: "Fruits of Her Labor",
        npc: "Hien",
        unlock: "",
        patch: "Under the Moonlight"
    }, {
        level: "70",
        name: "Conscripts and Contingencies",
        npc: "Hien",
        unlock: "",
        patch: "Under the Moonlight"
    }, {
        level: "70",
        name: "The Primary Agreement",
        npc: "Hien",
        unlock: "Castrum Fluminis",
        patch: "Under the Moonlight"
    }, {
        level: "70",
        name: "Under the Moonlight",
        npc: "Alisaie Leveilleur",
        unlock: "",
        patch: "Under the Moonlight"
    }, {
        level: "70",
        name: "Emissary of the Dawn",
        npc: "Alisaie Leveilleur",
        unlock: "/ponder Emote",
        patch: "Under the Moonlight"
    },
    //------------------------------------------------------------------ Prelude in Violet
    {
        level: "70",
        name: "Sisterly Act",
        npc: "Alisaie Leveilleur",
        unlock: "",
        patch: "Prelude in Violet"
    }, {
        level: "70",
        name: "Feel the Burn",
        npc: "Hien",
        unlock: "The Burn",
        patch: "Prelude in Violet"
    }, {
        level: "70",
        name: "Shadows of the Empire",
        npc: "Hien",
        unlock: "",
        patch: "Prelude in Violet"
    }, {
        level: "70",
        name: "A Power in Slumber",
        npc: "Hien",
        unlock: "",
        patch: "Prelude in Violet"
    }, {
        level: "70",
        name: "The Will of the Moon",
        npc: "Y'shtola",
        unlock: "",
        patch: "Prelude in Violet"
    }, {
        level: "70",
        name: "The Call",
        npc: "Y'shtola",
        unlock: "/endure Emote",
        patch: "Prelude in Violet"
    }, {
        level: "70",
        name: "Prelude in Violet",
        npc: "Alisaie Leveilleur",
        unlock: "Title: Prelude In Violet",
        patch: "Prelude in Violet"
    },
    //------------------------------------------------------------------ A Requiem For Heroes
    {
        level: "70",
        name: "Soul Searching",
        npc: "Alisaie Leveilleur",
        unlock: "",
        patch: "A Requiem For Heroes"
    }, {
        level: "70",
        name: "A Defector's Tidings",
        npc: "Alisaie Leveilleur",
        unlock: "",
        patch: "A Requiem For Heroes"
    }, {
        level: "70",
        name: "Seiryu's Wall",
        npc: "Hien",
        unlock: "",
        patch: "A Requiem For Heroes"
    }, {
        level: "70",
        name: "Parley on the Front Lines",
        npc: "Hien",
        unlock: "",
        patch: "A Requiem For Heroes"
    }, {
        level: "70",
        name: "The Face of War",
        npc: "Lyse Hext",
        unlock: "The Ghimlyt Dark",
        patch: "A Requiem For Heroes"
    }, {
        level: "70",
        name: "A Brief Reprieve",
        npc: "Hoary Boulder",
        unlock: "",
        patch: "A Requiem For Heroes"
    }, {
        level: "70",
        name: "A Requiem for Heroes",
        npc: "Resistance Fighter",
        unlock: "Scion Traveller's Garb",
        patch: "A Requiem For Heroes"
    }
];
