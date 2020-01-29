import { QuestColumnConfig } from "../columnConfigs";

/*
https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=2&columns=ID,Name&limit=102
Missing: Hest of the Best, Pass the Smell Hest
spelling: api > The Least among Us, app > The Least Among Us, game matches api
*/
export const Quest_Main_Scenario_Seventh_Astral_Era = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.seventh-astral-era`;

    return {
        name: "Seventh Astral Era",
    	storageKey,
        columns: QuestColumnConfig.concat({
            header: "Patch",
            key: "patch",
            filterable: true
        }),
        tasks
    };
};

const tasks = [
    //------------------------------------------------------------------ A Realm Awoken
    {
        level: "50",
        name: "The Price of Principles",
        npc: "Minfilia",
        unlock: "",
        patch: "A Realm Awoken"
    }, {
        level: "50",
        name: "Moving On",
        npc: "Minfilia",
        unlock: "",
        patch: "A Realm Awoken"
    }, {
        level: "50",
        name: "Flowers for One",
        npc: "Iliud",
        unlock: "",
        patch: "A Realm Awoken"
    }, {
        level: "50",
        name: "All Things in Time",
        npc: "F'lhaminn",
        unlock: "",
        patch: "A Realm Awoken"
    }, {
        level: "50",
        name: "The Resolute",
        npc: "Minfilia",
        unlock: "",
        patch: "A Realm Awoken"
    }, {
        level: "50",
        name: "Laying the Foundation",
        npc: "Minfilia",
        unlock: "",
        patch: "A Realm Awoken"
    }, {
        level: "50",
        name: "Better Late than Sever",
        npc: "Guolgeim",
        unlock: "",
        patch: "A Realm Awoken"
    }, {
        level: "50",
        name: "Rock-solid Protection",
        npc: "Slafborn",
        unlock: "The Sunken Temple of Qarn",
        patch: "A Realm Awoken"
    }, {
        level: "50",
        name: "Crate Go Kaboom",
        npc: "Sark Malark",
        unlock: "",
        patch: "A Realm Awoken"
    }, {
        level: "50",
        name: "Welcome to Morbol Country",
        npc: "Slafborn",
        unlock: "",
        patch: "A Realm Awoken"
    }, {
        level: "50",
        name: "Answering the Call",
        npc: "Slafborn",
        unlock: "",
        patch: "A Realm Awoken"
    }, {
        level: "50",
        name: "You're Gonna Carry That",
        npc: "Slafborn",
        unlock: "",
        patch: "A Realm Awoken"
    }, {
        level: "50",
        name: "The Things We Do for Tea",
        npc: "Tataru",
        unlock: "",
        patch: "A Realm Awoken"
    }, {
        level: "50",
        name: "It's Possibly a Primal",
        npc: "Tataru",
        unlock: "",
        patch: "A Realm Awoken"
    }, {
        level: "50",
        name: "Hail to the King, Kupo",
        npc: "Vorsaile Heuloix",
        unlock: "",
        patch: "A Realm Awoken"
    }, {
        level: "50",
        name: "You Have Selected Regicide",
        npc: "E-Sumi-Yan",
        unlock: "Thornmarch (Hard)",
        patch: "A Realm Awoken"
    }, {
        level: "50",
        name: "On the Properties of Primals",
        npc: "Raya-O-Senna",
        unlock: "",
        patch: "A Realm Awoken"
    }, {
        level: "50",
        name: "The Gifted",
        npc: "Minfilia",
        unlock: "",
        patch: "A Realm Awoken"
    },
    //------------------------------------------------------------------ Through The Maelstrom
    {
        level: "50",
        name: "Build on the Stone",
        npc: "Minfilia",
        unlock: "The Rising Stones",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "Still Waters",
        npc: "Minfilia",
        unlock: "",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "A Final Temptation",
        npc: "Thancred",
        unlock: "",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "The Mother of Exiles",
        npc: "Thancred",
        unlock: "",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "Promises to Keep",
        npc: "Raubahn",
        unlock: "",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "A Small-scale Operation",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "Yugiri's Game",
        npc: "Hozan",
        unlock: "",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "If Wishes Were Horsebirds",
        npc: "Hozan",
        unlock: "",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "Why We Adventure",
        npc: "Hozan",
        unlock: "",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "All Due Respect",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "Full Belly, Happy Heart",
        npc: "Minfilia",
        unlock: "",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "Writhing in the Dark",
        npc: "Adventurers' Guild Assistant",
        unlock: "",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "The Sea Rises",
        npc: "Minfilia",
        unlock: "",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "Fireworks and Fish Don't Mix",
        npc: "Falkbryda",
        unlock: "",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "Scouts in Distress",
        npc: "Falkbryda",
        unlock: "",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "The Gift of Eternity",
        npc: "Falkbryda",
        unlock: "",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "Into the Heart of the Whorl",
        npc: "Merlwyb Bloefhiswyn",
        unlock: "",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "Lord of the Whorl",
        npc: "Eynzahr Slafyrsyn",
        unlock: "The Whorleater (Hard)",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "When Yugiri Met the Fraternity",
        npc: "Zanthael",
        unlock: "",
        patch: "Through The Maelstrom"
    }, {
        level: "50",
        name: "Through the Maelstrom",
        npc: "Yugiri",
        unlock: "",
        patch: "Through The Maelstrom"
    },
    //------------------------------------------------------------------ Defenders of Eorzea
    {
        level: "50",
        name: "The Great Divide",
        npc: "Minfilia",
        unlock: "",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "Desperate Times",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "Shock and Awe",
        npc: "Terrified Refugee",
        unlock: "",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "Reap the Whirlwind",
        npc: "Swift Ryder",
        unlock: "",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "Revolution",
        npc: "Swift Ryder",
        unlock: "",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "Stories We Tell",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "Lord of Levin",
        npc: "Minfilia",
        unlock: "",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "A Sylphlands Sting",
        npc: "Serpent Lieutenant",
        unlock: "",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "Scattered Scions",
        npc: "Teary-eyed Private",
        unlock: "",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "True to Form",
        npc: "Yda",
        unlock: "",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "Levin an Impression",
        npc: "Papalymo",
        unlock: "The Striking Tree (Hard)",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "What Little Gods Are Made Of",
        npc: "Serpent Lieutenant",
        unlock: "",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "A Hard Hapalit to Break",
        npc: "Minfilia",
        unlock: "",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "Picking Up the Sledge",
        npc: "Slafborn",
        unlock: "",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "Guardian of Eorzea",
        npc: "Tataru",
        unlock: "",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "Recruiting the Realm",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "Heretical Harassment",
        npc: "Minfilia",
        unlock: "",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "When the Cold Sets In",
        npc: "Haurchefant Greystone",
        unlock: "",
        patch: "Defenders of Eorzea"
    }, {
        level: "50",
        name: "Brave New Companions",
        npc: "Slafborn",
        unlock: "",
        patch: "Defenders of Eorzea"
    },
    //------------------------------------------------------------------ Dreams of Ice
    {
        level: "50",
        name: "Traitor in the Midst",
        npc: "Minfilia",
        unlock: "",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "Back and Fourth",
        npc: "Ilberd",
        unlock: "",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "Coming to Terms",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "The Intercession of Saints",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "Strength in Unity",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "Dark Words, Dark Deeds",
        npc: "Drillemont",
        unlock: "",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "First Blood",
        npc: "Drillemont",
        unlock: "",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "The Path of the Righteous",
        npc: "Drillemont",
        unlock: "Snowcloak",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "For the Greater Good",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "Tendrils of Intrigue",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "Chasing Ivy",
        npc: "Ilberd",
        unlock: "",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "Doman Connection",
        npc: "Ilberd",
        unlock: "",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "In Flagrante Delicto",
        npc: "Shinobi",
        unlock: "",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "A Simple Plan",
        npc: "Minfilia",
        unlock: "",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "The Instruments of Our Deliverance",
        npc: "Minfilia",
        unlock: "Akh Afah Amphitheatre (Hard)",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "The Road Less Traveled",
        npc: "Moenbryda",
        unlock: "",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "Eyes Unclouded",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "The Reason Roaille",
        npc: "Minfilia",
        unlock: "",
        patch: "Dreams of Ice"
    }, {
        level: "50",
        name: "Let Us Cling Together",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Dreams of Ice"
    },
    //------------------------------------------------------------------ Before the Fall
    {
        level: "50",
        name: "Good Intentions",
        npc: "Minfilia",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "Bait and Switch",
        npc: "Ilberd",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "Best Laid Schemes",
        npc: "Ilberd",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "The Rising Chorus",
        npc: "Tataru",
        unlock: "The Keeper of the Lake",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "Aether on Demand",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "On the Counteroffensive",
        npc: "Edelstein",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "An Uninvited Ascian",
        npc: "Edelstein",
        unlock: "The Chrysalis",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "In Memory of Moenbryda",
        npc: "Minfilia",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "Mask of Grief",
        npc: "Minfilia",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "Defenders for Ishgard",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "The Wyrm's Roar",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "Committed to the Cause",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "Volunteer Dragonslayers",
        npc: "Minfilia",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "An Allied Perspective",
        npc: "Tataru",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "The Steps of Faith",
        npc: "Marcelain",
        unlock: "The Steps of Faith",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "Administrative Decision",
        npc: "Minfilia",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "An Unexpected Ambition",
        npc: "Minfilia",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "Ancient Ways, Timeless Wants",
        npc: "Tataru",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "Where We Are Needed",
        npc: "Minfilia",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "The Least Among Us",
        npc: "Unsettled Scholar",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "A Time to Every Purpose",
        npc: "Minfilia",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "Come, but Not Gone",
        npc: "Minfilia",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "The Parting Glass",
        npc: "Momodi",
        unlock: "",
        patch: "Before the Fall"
    }, {
        level: "50",
        name: "Before the Dawn",
        npc: "Haurchefant Greystone",
        unlock: "",
        patch: "Before the Fall"
    }
];
