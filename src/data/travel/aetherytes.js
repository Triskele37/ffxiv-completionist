import { DataGroup } from "../DataGroup";

export const Travel_Aetherytes = function(parent) {
    return new DataGroup("Aetherytes", parent).initializeTasks(tasks, [
        { key: 'type', header: 'Type', filterable: true },
        { key: 'region', header: 'Region', filterable: true },
        { key: 'zone', header: 'Zone', filterable: true },
        { key: 'name', header: 'Location Name' },
    ]);
};

const tasks = [
    //------------------------------------------------------- La Noscea
    {
        type: "Crystal",
        region: "La Noscea",
        zone: "Limsa Lominsa Lower Decks",
        name: "Limsa Lominsa Lower Decks"
    }, {
        type: "Shard",
        region: "La Noscea",
        zone: "Limsa Lominsa Upper Decks",
        name: "The Aftcastle"
    }, {
        type: "Shard",
        region: "La Noscea",
        zone: "Limsa Lominsa Upper Decks",
        name: "Culinarian's Guild"
    }, {
        type: "Shard",
        region: "La Noscea",
        zone: "Limsa Lominsa Lower Decks",
        name: "Arcanists' Guild"
    }, {
        type: "Shard",
        region: "La Noscea",
        zone: "Limsa Lominsa Lower Decks",
        name: "Fishermen's Guild"
    }, {
        type: "Shard",
        region: "La Noscea",
        zone: "Limsa Lominsa Upper Decks",
        name: "Marauders' Guild"
    }, {
        type: "Shard",
        region: "La Noscea",
        zone: "Limsa Lominsa Lower Decks",
        name: "Hawkers' Alley"
    }, {
        type: "Crystal",
        region: "La Noscea",
        zone: "Middle La Noscea",
        name: "Summerford Farms"
    }, {
        type: "Crystal",
        region: "La Noscea",
        zone: "Lower La Noscea",
        name: "Moraby Drydocks"
    }, {
        type: "Crystal",
        region: "La Noscea",
        zone: "Eastern La Noscea",
        name: "Costa del Sol"
    }, {
        type: "Crystal",
        region: "La Noscea",
        zone: "Eastern La Noscea",
        name: "Wineport"
    }, {
        type: "Crystal",
        region: "La Noscea",
        zone: "Western La Noscea",
        name: "Swiftperch"
    }, {
        type: "Crystal",
        region: "La Noscea",
        zone: "Western La Noscea",
        name: "Aleport"
    }, {
        type: "Crystal",
        region: "La Noscea",
        zone: "Upper La Noscea",
        name: "Camp Bronze Lake"
    }, {
        type: "Crystal",
        region: "La Noscea",
        zone: "Outer La Noscea",
        name: "Camp Overlook"
    }, {
        type: "Crystal",
        region: "La Noscea",
        zone: "Wolves' Den Pier",
        name: "Wolves' Den Pier"
    },
    //------------------------------------------------------- The Black Shroud
    {
        type: "Crystal",
        region: "The Black Shroud",
        zone: "New Gridania",
        name: "New Gridania"
    }, {
        type: "Shard",
        region: "The Black Shroud",
        zone: "New Gridania",
        name: "Archers' Guild"
    }, {
        type: "Shard",
        region: "The Black Shroud",
        zone: "Old Gridania",
        name: "Leatherworkers' Guild"
    }, {
        type: "Shard",
        region: "The Black Shroud",
        zone: "Old Gridania",
        name: "Lancers' Guild"
    }, {
        type: "Shard",
        region: "The Black Shroud",
        zone: "Old Gridania",
        name: "Conjurors' Guild"
    }, {
        type: "Shard",
        region: "The Black Shroud",
        zone: "Old Gridania",
        name: "Botanists' Guild"
    }, {
        type: "Shard",
        region: "The Black Shroud",
        zone: "Old Gridania",
        name: "Mih Khetto's Amphitheatre"
    }, {
        type: "Crystal",
        region: "The Black Shroud",
        zone: "Central Shroud",
        name: "Bentbranch Meadows"
    }, {
        type: "Crystal",
        region: "The Black Shroud",
        zone: "East Shroud",
        name: "The Hawthorne Hut"
    }, {
        type: "Crystal",
        region: "The Black Shroud",
        zone: "South Shroud",
        name: "Quarrymill"
    }, {
        type: "Crystal",
        region: "The Black Shroud",
        zone: "South Shroud",
        name: "Camp Tranquil"
    }, {
        type: "Crystal",
        region: "The Black Shroud",
        zone: "North Shroud",
        name: "Fallgourd Float"
    },
    //------------------------------------------------------- Thanalan
    {
        type: "Crystal",
        region: "Thanalan",
        zone: "Ul'dah - Steps of Nald",
        name: "Ul'dah - Steps of Nald"
    }, {
        type: "Shard",
        region: "Thanalan",
        zone: "Ul'dah - Steps of Nald",
        name: "Adventurers' Guild"
    }, {
        type: "Shard",
        region: "Thanalan",
        zone: "Ul'dah - Steps of Nald",
        name: "Thaumaturges' Guild"
    }, {
        type: "Shard",
        region: "Thanalan",
        zone: "Ul'dah - Steps of Thal",
        name: "Gladiators' Guild"
    }, {
        type: "Shard",
        region: "Thanalan",
        zone: "Ul'dah - Steps of Thal",
        name: "Miners' Guild"
    }, {
        type: "Shard",
        region: "Thanalan",
        zone: "Ul'dah - Steps of Thal",
        name: "Alchemists' Guild"
    }, {
        type: "Shard",
        region: "Thanalan",
        zone: "Ul'dah - Steps of Thal",
        name: "Weavers' Guild"
    }, {
        type: "Shard",
        region: "Thanalan",
        zone: "Ul'dah - Steps of Thal",
        name: "Goldsmiths' Guild"
    }, {
        type: "Shard",
        region: "Thanalan",
        zone: "Ul'dah - Steps of Thal",
        name: "Chamber of Rule"
    }, {
        type: "Shard",
        region: "Thanalan",
        zone: "Ul'dah - Steps of Thal",
        name: "Sapphire Avenue Exchange"
    }, {
        type: "Crystal",
        region: "Thanalan",
        zone: "Western Thanalan",
        name: "Horizon"
    }, {
        type: "Crystal",
        region: "Thanalan",
        zone: "Central Thanalan",
        name: "Black Brush Station"
    }, {
        type: "Crystal",
        region: "Thanalan",
        zone: "Eastern Thanalan",
        name: "Camp Drybone"
    }, {
        type: "Crystal",
        region: "Thanalan",
        zone: "Southern Thanalan",
        name: "Little Ala Mhigo"
    }, {
        type: "Crystal",
        region: "Thanalan",
        zone: "Southern Thanalan",
        name: "Forgotten Springs"
    }, {
        type: "Crystal",
        region: "Thanalan",
        zone: "Northern Thanalan",
        name: "Camp Bluefog"
    }, {
        type: "Crystal",
        region: "Thanalan",
        zone: "Northern Thanalan",
        name: "Ceruleum Processing Plant"
    }, {
        type: "Crystal",
        region: "Thanalan",
        zone: "The Gold Saucer",
        name: "The Gold Saucer"
    }, {
        type: "Shard",
        region: "Thanalan",
        zone: "The Gold Saucer",
        name: "Entrance & Card Squares"
    }, {
        type: "Shard",
        region: "Thanalan",
        zone: "The Gold Saucer",
        name: "Wonder Square East"
    }, {
        type: "Shard",
        region: "Thanalan",
        zone: "The Gold Saucer",
        name: "Wonder Square West"
    }, {
        type: "Shard",
        region: "Thanalan",
        zone: "The Gold Saucer",
        name: "Event Square"
    }, {
        type: "Shard",
        region: "Thanalan",
        zone: "The Gold Saucer",
        name: "Cactpot Board"
    }, {
        type: "Shard",
        region: "Thanalan",
        zone: "The Gold Saucer",
        name: "Round Square"
    }, {
        type: "Shard",
        region: "Thanalan",
        zone: "Chocobo Square",
        name: "Chocobo Square"
    }, {
        type: "Shard",
        region: "Thanalan",
        zone: "Chocobo Square",
        name: "Minion Square"
    },
    //------------------------------------------------------- Coerthas
    {
        type: "Crystal",
        region: "Coerthas",
        zone: "Foundation",
        name: "Foundation"
    }, {
        type: "Shard",
        region: "Coerthas",
        zone: "Foundation",
        name: "The Forgotten Knight"
    }, {
        type: "Shard",
        region: "Coerthas",
        zone: "Foundation",
        name: "Skysteel Manufactory"
    }, {
        type: "Shard",
        region: "Coerthas",
        zone: "Foundation",
        name: "The Brume"
    }, {
        type: "Shard",
        region: "Coerthas",
        zone: "The Pillars",
        name: "Athenaeum Astrologicum"
    }, {
        type: "Shard",
        region: "Coerthas",
        zone: "The Pillars",
        name: "The Jeweled Crozier"
    }, {
        type: "Shard",
        region: "Coerthas",
        zone: "The Pillars",
        name: "Saint Reymanaud Cathedral"
    }, {
        type: "Shard",
        region: "Coerthas",
        zone: "The Pillars",
        name: "The Tribunal"
    }, {
        type: "Shard",
        region: "Coerthas",
        zone: "The Pillars",
        name: "The Last Vigil"
    }, {
        type: "Crystal",
        region: "Coerthas",
        zone: "Coerthas Central Highlands",
        name: "Camp Dragonhead"
    }, {
        type: "Crystal",
        region: "Coerthas",
        zone: "Coerthas Western Highlands",
        name: "Falcon's Nest"
    },
    //------------------------------------------------------- Abalathia's Spine
    {
        type: "Crystal",
        region: "Abalathia's Spine",
        zone: "The Sea of Clouds",
        name: "Camp Cloudtop"
    }, {
        type: "Crystal",
        region: "Abalathia's Spine",
        zone: "The Sea of Clouds",
        name: "Ok' Zundu"
    }, {
        type: "Crystal",
        region: "Abalathia's Spine",
        zone: "Azys Lla",
        name: "Helix"
    },
    //------------------------------------------------------- Dravania
    {
        type: "Crystal",
        region: "Dravania",
        zone: "Idyllshire",
        name: "Idyllshire"
    }, {
        type: "Shard",
        region: "Dravania",
        zone: "Idyllshire",
        name: "West Idyllshire"
    }, {
        type: "Crystal",
        region: "Dravania",
        zone: "The Dravanian Forelands",
        name: "Tailfeather"
    }, {
        type: "Crystal",
        region: "Dravania",
        zone: "The Dravanian Forelands",
        name: "Anyx Trine"
    }, {
        type: "Crystal",
        region: "Dravania",
        zone: "The Churning Mists",
        name: "Moghome"
    }, {
        type: "Crystal",
        region: "Dravania",
        zone: "The Churning Mists",
        name: "Zenith"
    },
    //------------------------------------------------------- Gyr Abania
    {
        type: "Crystal",
        region: "Gyr Abania",
        zone: "Rhalgr's Reach",
        name: "Rhalgr's Reach"
    }, {
        type: "Shard",
        region: "Gyr Abania",
        zone: "Rhalgr's Reach",
        name: "Western Rhalgr's Reach"
    }, {
        type: "Shard",
        region: "Gyr Abania",
        zone: "Rhalgr's Reach",
        name: "Northeastern Rhalgr's Reach"
    }, {
        type: "Crystal",
        region: "Gyr Abania",
        zone: "The Fringes",
        name: "Castrum Oriens"
    }, {
        type: "Crystal",
        region: "Gyr Abania",
        zone: "The Fringes",
        name: "The Peering Stones"
    }, {
        type: "Crystal",
        region: "Gyr Abania",
        zone: "The Peaks",
        name: "Ala Gannha"
    }, {
        type: "Crystal",
        region: "Gyr Abania",
        zone: "The Peaks",
        name: "Ala Ghiri"
    }, {
        type: "Crystal",
        region: "Gyr Abania",
        zone: "The Lochs",
        name: "Porta Praetoria"
    }, {
        type: "Crystal",
        region: "Gyr Abania",
        zone: "The Lochs",
        name: "The Ala Mhigan Quarter"
    },
    //------------------------------------------------------- Hingashi
    {
        type: "Crystal",
        region: "Hingashi",
        zone: "Kugane",
        name: "Kugane"
    }, {
        type: "Shard",
        region: "Hingashi",
        zone: "Kugane",
        name: "Shiokaze Hostelry"
    }, {
        type: "Shard",
        region: "Hingashi",
        zone: "Kugane",
        name: "Pier #1"
    }, {
        type: "Shard",
        region: "Hingashi",
        zone: "Kugane",
        name: "Thavnairian Consulate"
    }, {
        type: "Shard",
        region: "Hingashi",
        zone: "Kugane",
        name: "Kogane Dori Markets"
    }, {
        type: "Shard",
        region: "Hingashi",
        zone: "Kugane",
        name: "Bokairo Inn"
    }, {
        type: "Shard",
        region: "Hingashi",
        zone: "Kugane",
        name: "The Ruby Bazaar"
    }, {
        type: "Shard",
        region: "Hingashi",
        zone: "Kugane",
        name: "Sekiseigumi Barracks"
    }, {
        type: "Shard",
        region: "Hingashi",
        zone: "Kugane",
        name: "Rakuza District"
    },
    //------------------------------------------------------- Othard
    {
        type: "Crystal",
        region: "Othard",
        zone: "The Ruby Sea",
        name: "Tamamizu"
    }, {
        type: "Crystal",
        region: "Othard",
        zone: "The Ruby Sea",
        name: "Onokoro"
    }, {
        type: "Crystal",
        region: "Othard",
        zone: "Yanxia",
        name: "Namai"
    }, {
        type: "Crystal",
        region: "Othard",
        zone: "Yanxia",
        name: "The House of the Fierce"
    }, {
        type: "Crystal",
        region: "Othard",
        zone: "The Azim Steppe",
        name: "Reunion"
    }, {
        type: "Crystal",
        region: "Othard",
        zone: "The Azim Steppe",
        name: "The Dawn Throne"
    }, {
        type: "Crystal",
        region: "Othard",
        zone: "The Azim Steppe",
        name: "Dhoro Iloh"
    }, {
        type: "Crystal",
        region: "Othard",
        zone: "The Doman Enclave",
        name: "The Doman Enclave"
    }, {
        type: "Shard",
        region: "Othard",
        zone: "The Doman Enclave",
        name: "The Northern Enclave"
    }, {
        type: "Shard",
        region: "Othard",
        zone: "The Doman Enclave",
        name: "The Southern Enclave"
    }, {
        type: "Shard",
        region: "Othard",
        zone: "The Doman Enclave",
        name: "Ferry Docks"
    },
    //------------------------------------------------------- Norvrandt
    {
        type: "Crystal",
        region: "Norvrandt",
        zone: "The Crystarium",
        name: "The Crystarium"
    }, {
        type: "Shard",
        region: "Norvrandt",
        zone: "The Crystarium",
        name: "Musica Universalis Markets"
    }, {
        type: "Shard",
        region: "Norvrandt",
        zone: "The Crystarium",
        name: "Temenos Rookery"
    }, {
        type: "Shard",
        region: "Norvrandt",
        zone: "The Crystarium",
        name: "The Dossal Gate"
    }, {
        type: "Shard",
        region: "Norvrandt",
        zone: "The Crystarium",
        name: "The Pendants"
    }, {
        type: "Shard",
        region: "Norvrandt",
        zone: "The Crystarium",
        name: "The Amaro Launch"
    }, {
        type: "Shard",
        region: "Norvrandt",
        zone: "The Crystarium",
        name: "The Crystalline Mean"
    }, {
        type: "Shard",
        region: "Norvrandt",
        zone: "The Crystarium",
        name: "The Cabinet of Curiosity"
    }, {
        type: "Crystal",
        region: "Norvrandt",
        zone: "Eulmore",
        name: "Eulmore"
    }, {
        type: "Shard",
        region: "Norvrandt",
        zone: "Eulmore",
        name: "Southeast Derelicts"
    }, {
        type: "Shard",
        region: "Norvrandt",
        zone: "Eulmore",
        name: "The Mainstay"
    }, {
        type: "Shard",
        region: "Norvrandt",
        zone: "Eulmore",
        name: "Nightsoil Pots"
    }, {
        type: "Shard",
        region: "Norvrandt",
        zone: "Eulmore",
        name: "The Glory Gate"
    }, {
        type: "Crystal",
        region: "Norvrandt",
        zone: "Lakeland",
        name: "Fort Jobb"
    }, {
        type: "Crystal",
        region: "Norvrandt",
        zone: "Lakeland",
        name: "The Ostall Imperative"
    }, {
        type: "Crystal",
        region: "Norvrandt",
        zone: "Kholusia",
        name: "Stilltide"
    }, {
        type: "Crystal",
        region: "Norvrandt",
        zone: "Kholusia",
        name: "Wright"
    }, {
        type: "Crystal",
        region: "Norvrandt",
        zone: "Kholusia",
        name: "Tomra"
    }, {
        type: "Crystal",
        region: "Norvrandt",
        zone: "Amh Araeng",
        name: "Mord Souq"
    }, {
        type: "Crystal",
        region: "Norvrandt",
        zone: "Amh Araeng",
        name: "The Inn at Journey's Head"
    }, {
        type: "Crystal",
        region: "Norvrandt",
        zone: "Amh Araeng",
        name: "Twine"
    }, {
        type: "Crystal",
        region: "Norvrandt",
        zone: "Il Mheg",
        name: "Lydha Lran"
    }, {
        type: "Crystal",
        region: "Norvrandt",
        zone: "Il Mheg",
        name: "Pla Enni"
    }, {
        type: "Crystal",
        region: "Norvrandt",
        zone: "Il Mheg",
        name: "Wolekdorf"
    }, {
        type: "Crystal",
        region: "Norvrandt",
        zone: "The Rak'tika Greatwood",
        name: "Slitherbough"
    }, {
        type: "Crystal",
        region: "Norvrandt",
        zone: "The Rak'tika Greatwood",
        name: "Fanow"
    }, {
        type: "Crystal",
        region: "Norvrandt",
        zone: "The Tempest",
        name: "The Ondo Cups"
    }, {
        type: "Crystal",
        region: "Norvrandt",
        zone: "The Tempest",
        name: "The Macarenses Angle"
    },
    //------------------------------------------------------- Mor Dhona
    {
        type: "Crystal",
        region: "Mor Dhona",
        zone: "Mor Dhona",
        name: "Revenant's Toll"
    },
];
