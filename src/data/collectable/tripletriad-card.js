import { DataGroup } from "../DataGroup";

export const Collectables_Triple_Triad_Card_List = function(parent) {
    return new DataGroup("Triple Triad Card List", parent).initializeTasks(tasks, [
        { header: "Card", key: "name" },
        {
            header: "Rarity",
            key: "rarity",
            filterable: true,
            centered: true,
        },
        { header: "Type", key: "type", filterable: true },
        { header: "Opponent", key: "opponent", filterable: true },
        { header: "Method of Unlock", key: "unlock" },
    ]);
};

const tasks = [
    {
        name: "Ahriman",
        rarity: "★",
        type: "None",
        opponent: "Ourdilic",
        unlock: "Drops from Dzemael Darkhold"
    }, {
        name: "Amalj'aa",
        rarity: "★",
        type: "Beastman",
        opponent: "Memeroon",
        unlock: "Drops from Silver Triad Card"
    }, {
        name: "Amaro",
        rarity: "★",
        type: "None",
        opponent: "Glynard",
        unlock: ""
    }, {
        name: "Apkallu",
        rarity: "★",
        type: "None",
        opponent: "Wyra Lyegha",
        unlock: ""
    }, {
        name: "Bomb",
        rarity: "★",
        type: "None",
        opponent: "",
        unlock: "Starter Deck"
    }, {
        name: "Chocobo",
        rarity: "★",
        type: "None",
        opponent: "Triple Triad Master, Jonas of the Three Spades, Guhtwint of the Three Diamonds",
        unlock: "Purchased from Triple Triad Trader for 600 MGP."
    }, {
        name: "Coblyn",
        rarity: "★",
        type: "None",
        opponent: "Maisenta, Wymond",
        unlock: "Drops from Bronze Triad Card"
    }, {
        name: "Coeurl",
        rarity: "★",
        type: "None",
        opponent: "",
        unlock: "Starter Deck"
    }, {
        name: "Colibri",
        rarity: "★",
        type: "None",
        opponent: "Flichoirel the Lordling",
        unlock: ""
    }, {
        name: "Deepeye",
        rarity: "★",
        type: "None",
        opponent: "Dominiac",
        unlock: ""
    }, {
        name: "Dodo",
        rarity: "★",
        type: "None",
        opponent: "",
        unlock: "Starter Deck"
    }, {
        name: "Evil Weapon",
        rarity: "★",
        type: "None",
        opponent: "Drery",
        unlock: ""
    }, {
        name: "Flower Basket",
        rarity: "★",
        type: "None",
        opponent: "",
        unlock: "Purchased from Sul Lad in Lydha Lran for 40 Bicolor Gemstones"
    }, {
        name: "Gaelicat",
        rarity: "★",
        type: "None",
        opponent: "Noes",
        unlock: ""
    }, {
        name: "Goobbue",
        rarity: "★",
        type: "None",
        opponent: "Mother Miounne, Aurifort of the Three Clubs",
        unlock: "Drops from Bronze Triad Card"
    }, {
        name: "Hobgoblin",
        rarity: "★",
        type: "None",
        opponent: "",
        unlock: "Drops from Dream Triad Card"
    }, {
        name: "Ixal",
        rarity: "★",
        type: "Beastman",
        opponent: "Jonas of the Three Spades, Joellaut",
        unlock: "Drops from Silver Triad Card"
    }, {
        name: "Karakuri Hanya",
        rarity: "★",
        type: "None",
        opponent: "Hokushin",
        unlock: ""
    }, {
        name: "Kobold",
        rarity: "★",
        type: "Beastman",
        opponent: "",
        unlock: "Drops from Silver Triad Card"
    }, {
        name: "Koja",
        rarity: "★",
        type: "None",
        opponent: "Masatsuchi",
        unlock: ""
    }, {
        name: "Lord and Lady Chai",
        rarity: "★",
        type: "None",
        opponent: "Ibenart",
        unlock: ""
    }, {
        name: "Magitek Death Claw",
        rarity: "★",
        type: "Garland",
        opponent: "",
        unlock: "Bronze Triad Card"
    }, {
        name: "Mandragora",
        rarity: "★",
        type: "None",
        opponent: "",
        unlock: "Starter Deck"
    }, {
        name: "Morbol",
        rarity: "★",
        type: "None",
        opponent: "Roger",
        unlock: "Drops from Aurum Vale"
    }, {
        name: "Moogle",
        rarity: "★",
        type: "Beastman",
        opponent: "Jonas of the Three Spades, Trachtoum",
        unlock: "Purchased from Triple Triad Trader for 840 MGP."
    }, {
        name: "Mossling",
        rarity: "★",
        type: "None",
        opponent: "",
        unlock: "Bought from the Triple Triad Trader for 840 MGP"
    }, {
        name: "Namazu",
        rarity: "★",
        type: "Beastman",
        opponent: "Gyoei",
        unlock: ""
    }, {
        name: "Opo-opo",
        rarity: "★",
        type: "None",
        opponent: "",
        unlock: "Bought from the Triple Triad Trader for 600 MGP"
    }, {
        name: "Porxie",
        rarity: "★",
        type: "None",
        opponent: "Eo Sigun",
        unlock: ""
    }, {
        name: "Pudding",
        rarity: "★",
        type: "None",
        opponent: "Roger",
        unlock: "Drops from Bronze Triad Card"
    }, {
        name: "Qitari",
        rarity: "★",
        type: "Beastman",
        opponent: "Redard",
        unlock: ""
    }, {
        name: "Sabotender",
        rarity: "★",
        type: "None",
        opponent: "",
        unlock: "Starter Deck"
    }, {
        name: "Sahagin",
        rarity: "★",
        type: "Beastman",
        opponent: "Baderon",
        unlock: "Drops from Sastasha, Sastasha (Hard)"
    }, {
        name: "Spriggan",
        rarity: "★",
        type: "None",
        opponent: "Triple Triad Master, Guhtwint of the Three Diamonds",
        unlock: "Drops from Bronze Triad Card"
    }, {
        name: "Stormblood Tataru Taru",
        rarity: "★",
        type: "Scion",
        opponent: "",
        unlock: "Bought from the Triple Triad Trader for 96,000 MGP"
    }, {
        name: "Sylph",
        rarity: "★",
        type: "Beastman",
        opponent: "Maisenta",
        unlock: "Drops from Silver Triad Card"
    }, {
        name: "Tataru Taru",
        rarity: "★",
        type: "Scion",
        opponent: "Tataru",
        unlock: "Drops from Silver Triad Card"
    }, {
        name: "Tonberry",
        rarity: "★",
        type: "None",
        opponent: "Memeroon",
        unlock: "Drops from The Wanderer's Palace, The Wanderer's Palace (Hard)"
    }, {
        name: "Wanyudo and Katasharin",
        rarity: "★",
        type: "None",
        opponent: "",
        unlock: "Silver Sack in Heaven on High"
    }, {
        name: "Adamantoise",
        rarity: "★★",
        type: "None",
        opponent: "",
        unlock: "Bought from the Triple Triad Trader for 840 MGP"
    }, {
        name: "Ananta",
        rarity: "★★",
        type: "Beastman",
        opponent: "Garima",
        unlock: ""
    }, {
        name: "Ango",
        rarity: "★★",
        type: "None",
        opponent: "Isobe",
        unlock: ""
    }, {
        name: "Archaeornis",
        rarity: "★★",
        type: "None",
        opponent: "Elaisse",
        unlock: ""
    }, {
        name: "Baderon Tenfingers",
        rarity: "★★",
        type: "None",
        opponent: "Baderon",
        unlock: "Drops from Gold Triad Card"
    }, {
        name: "Bandersnatch",
        rarity: "★★",
        type: "None",
        opponent: "Voracious Vath",
        unlock: ""
    }, {
        name: "Biggs & Wedge",
        rarity: "★★",
        type: "None",
        opponent: "Mimidoa, Sezul Totoloc",
        unlock: ""
    }, {
        name: "Blue Dragon",
        rarity: "★★",
        type: "None",
        opponent: "Ourdilic",
        unlock: "Drops from The Stone Vigil, Stone Vigil (Hard)"
    }, {
        name: "Carvallain de Gorgagne",
        rarity: "★★",
        type: "None",
        opponent: "Mordyn",
        unlock: ""
    }, {
        name: "Chapuli",
        rarity: "★★",
        type: "None",
        opponent: "",
        unlock: "Bought from the Triple Triad Trader for 1,200 MGP"
    }, {
        name: "Chimera",
        rarity: "★★",
        type: "None",
        opponent: "Fufulupa",
        unlock: "Drops from Cutter's Cry"
    }, {
        name: "Crawler",
        rarity: "★★",
        type: "None",
        opponent: "Seika",
        unlock: ""
    }, {
        name: "Delivery Moogle",
        rarity: "★★",
        type: "Beastman",
        opponent: "",
        unlock: "Bronze Triad Card"
    }, {
        name: "Demon Wall",
        rarity: "★★",
        type: "None",
        opponent: "Buscarron",
        unlock: "Drops from Amdapor Keep, Amdapor Keep (Hard)"
    }, {
        name: "Dhalmel",
        rarity: "★★",
        type: "None",
        opponent: "Laniaitte",
        unlock: ""
    }, {
        name: "Dvergr",
        rarity: "★★",
        type: "None",
        opponent: "Hetsukaze",
        unlock: "Drops from Duty-Free FATE in Eureka Hydatos (29-23) "
    }, {
        name: "Ejika Tsunjika",
        rarity: "★★",
        type: "None",
        opponent: "Hetsukaze",
        unlock: ""
    }, {
        name: "Fat Chocobo",
        rarity: "★★",
        type: "None",
        opponent: "Vath Deftarm",
        unlock: "Drops from Special Tarasque Force FATE in The Dravanian Forelands (13,36)."
    }, {
        name: "Feo Ul",
        rarity: "★★",
        type: "None",
        opponent: "Gyulf Uin",
        unlock: ""
    }, {
        name: "Frixio",
        rarity: "★★",
        type: "Beastman",
        opponent: "Marcette, Piralnaut",
        unlock: ""
    }, {
        name: "Fuath",
        rarity: "★★",
        type: "Beastman",
        opponent: "",
        unlock: "Drops from Dream Triad Card"
    }, {
        name: "Gerolt",
        rarity: "★★",
        type: "None",
        opponent: "Helmhart, Rowena",
        unlock: "Drops from Gold Triad Card"
    }, {
        name: "Gibrillont",
        rarity: "★★",
        type: "None",
        opponent: "Elaisse",
        unlock: ""
    }, {
        name: "Gigantender",
        rarity: "★★",
        type: "None",
        opponent: "Drery",
        unlock: ""
    }, {
        name: "Gnath",
        rarity: "★★",
        type: "Beastman",
        opponent: "Mogmill",
        unlock: ""
    }, {
        name: "Gnoll",
        rarity: "★★",
        type: "",
        opponent: "",
        unlock: "Purchased from Siulmet in Fort Jobb for 60 Bicolor Gemstones"
    }, {
        name: "Gold Saucer Attendant",
        rarity: "★★",
        type: "None",
        opponent: "",
        unlock: "Purchased from Campaign Attendant during The Make It Rain Campaign 2017 for 500 MGP"
    }, {
        name: "Grenoldt",
        rarity: "★★",
        type: "None",
        opponent: "Saushs Koal",
        unlock: ""
    }, {
        name: "Guidance Node",
        rarity: "★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Fractal Continuum (Hard)"
    }, {
        name: "Hatamoto",
        rarity: "★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Silver and Gold Sacks in Heaven on High"
    }, {
        name: "Hoary Boulder & Coultenet",
        rarity: "★★",
        type: "Scion",
        opponent: "",
        unlock: "Gold Triad Card"
    }, {
        name: "Honoroit",
        rarity: "★★",
        type: "None",
        opponent: "House Fortemps Manservant",
        unlock: ""
    }, {
        name: "Iguana",
        rarity: "★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Dream Triad Card"
    }, {
        name: "Kojin",
        rarity: "★★",
        type: "Beastman",
        opponent: "Tsuzura",
        unlock: ""
    }, {
        name: "Kotokaze",
        rarity: "★★",
        type: "None",
        opponent: "Kotokaze",
        unlock: ""
    }, {
        name: "Laniaitte de Haillenarte",
        rarity: "★★",
        type: "None",
        opponent: "Marielle",
        unlock: ""
    }, {
        name: "Liquid Flame",
        rarity: "★★",
        type: "None",
        opponent: "",
        unlock: "Bronze Triad Card"
    }, {
        name: "Livia sas Junius",
        rarity: "★★",
        type: "Garlean",
        opponent: "Indolent Imperial",
        unlock: "Drops from Castrum Meridianum"
    }, {
        name: "Lizbeth",
        rarity: "★★",
        type: "None",
        opponent: "",
        unlock: "Purchased from Enie in The Firmament for 500 Skybuilders' Scrips"
    }, {
        name: "Lolorito Nanarito",
        rarity: "★★",
        type: "None",
        opponent: "Wymond",
        unlock: ""
    }, {
        name: "Lost Lamb",
        rarity: "★★",
        type: "None",
        opponent: "Prideful Stag",
        unlock: ""
    }, {
        name: "M'naago",
        rarity: "★★",
        type: "None",
        opponent: "Ercanbald",
        unlock: ""
    }, {
        name: "Magitek Colossus",
        rarity: "★★",
        type: "Garlean",
        opponent: "Hall Overseer",
        unlock: ""
    }, {
        name: "Magitek Gunship",
        rarity: "★★",
        type: "Garlean",
        opponent: "",
        unlock: "Random from Imperial Triad Card"
    }, {
        name: "Magitek Vanguard",
        rarity: "★★",
        type: "Garlean",
        opponent: "",
        unlock: "Random from Imperial Triad Card"
    }, {
        name: "Memeroon",
        rarity: "★★",
        type: "Beastman",
        opponent: "Memeroon",
        unlock: ""
    }, {
        name: "Momodi Modi",
        rarity: "★★",
        type: "None",
        opponent: "Momodi",
        unlock: "Drops from Gold Triad Card"
    }, {
        name: "Mother Miounne",
        rarity: "★★",
        type: "None",
        opponent: "Mother Miounne",
        unlock: "Drops from Gold Triad Card"
    }, {
        name: "Mutamix Bubblypots",
        rarity: "★★",
        type: "Beastman",
        opponent: "F'hobhas",
        unlock: ""
    }, {
        name: "Muud Suud",
        rarity: "★★",
        type: "None",
        opponent: "",
        unlock: "Buy from Triple Triad Trader"
    }, {
        name: "Nu Mou",
        rarity: "★★",
        type: "Beastman",
        opponent: "Eo Sigun",
        unlock: ""
    }, {
        name: "Paissa",
        rarity: "★★",
        type: "None",
        opponent: "Laniaitte",
        unlock: ""
    }, {
        name: "Poroggo",
        rarity: "★★",
        type: "None",
        opponent: "Seika",
        unlock: ""
    }, {
        name: "Qiqirn Meateater",
        rarity: "★★",
        type: "Beastman",
        opponent: "Garima",
        unlock: ""
    }, {
        name: "Rhitahtyn sas Arvina",
        rarity: "★★",
        type: "Garlean",
        opponent: "Indolent Imperial",
        unlock: "Drops from Cape Westwind"
    }, {
        name: "Rhoswen",
        rarity: "★★",
        type: "None",
        opponent: "O'kalkaya",
        unlock: ""
    }, {
        name: "Runar",
        rarity: "★★",
        type: "None",
        opponent: "Hargra",
        unlock: ""
    }, {
        name: "Scarface Bugaal Ja",
        rarity: "★★",
        type: "Beastman",
        opponent: "Guhtwint of the Three Diamonds, Aurifort of the Three Clubs",
        unlock: "Drops from Bronze Triad Card"
    }, {
        name: "Siren",
        rarity: "★★",
        type: "None",
        opponent: "Mimidoa",
        unlock: "Drops from Pharos Sirius"
    }, {
        name: "Succubus",
        rarity: "★★",
        type: "None",
        opponent: "Piralnaut",
        unlock: "Drops from Haukke Manor, Haukke Manor (Hard)"
    }, {
        name: "Tansui",
        rarity: "★★",
        type: "None",
        opponent: "Yusui",
        unlock: ""
    }, {
        name: "Ultros & Typhon",
        rarity: "★★",
        type: "None",
        opponent: "Helmhart",
        unlock: "Drops from The Dragon's Neck"
    }, {
        name: "Vanu Vanu",
        rarity: "★★",
        type: "Beastman",
        opponent: "Mogmill",
        unlock: ""
    }, {
        name: "Yugiri Mistwalker",
        rarity: "★★",
        type: "None",
        opponent: "Yellow Moon",
        unlock: ""
    }, {
        name: "Yukinko",
        rarity: "★★",
        type: "None",
        opponent: "",
        unlock: "FATE \"Eternity\", Eureka Pagos (21, 26)"
    }, {
        name: "Alexander Prime",
        rarity: "★★★",
        type: "Primal",
        opponent: "",
        unlock: "Drops from Alexander - The Soul of the Creator (A12)"
    }, {
        name: "Alpha",
        rarity: "★★★",
        type: "None",
        opponent: "Ironwork's Hand",
        unlock: ""
    }, {
        name: "Arenvald Lentinus",
        rarity: "★★★",
        type: "Scion",
        opponent: "Umber Torrent",
        unlock: ""
    }, {
        name: "Artoirel de Fortemps",
        rarity: "★★★",
        type: "None",
        opponent: "House Fortemps Manservant",
        unlock: ""
    }, {
        name: "Asahi sas Brutus",
        rarity: "★★★",
        type: "Garlean",
        opponent: "Hachinan",
        unlock: ""
    }, {
        name: "Batsquatch",
        rarity: "★★★",
        type: "None",
        opponent: "Redard",
        unlock: ""
    }, {
        name: "Behemoth",
        rarity: "★★★",
        type: "None",
        opponent: "Sezul Totoloc, Ourdilic",
        unlock: "Drops from Bronze Triad Card"
    }, {
        name: "Belladonna",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Saint Mocianne's Arboretum"
    }, {
        name: "Brachiosaur",
        rarity: "★★★",
        type: "None",
        opponent: "Linu Vali",
        unlock: "Mythril Triad Card"
    }, {
        name: "Brendt, Brennan, & Bremondt",
        rarity: "★★★",
        type: "None",
        opponent: "Nell Half-full",
        unlock: ""
    }, {
        name: "Byakko",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Jade Stoa and The Jade Stoa (Extreme)"
    }, {
        name: "Byblos",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from the final boss of The Great Gubal Library dungeon."
    }, {
        name: "Calcabrina",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Antitower"
    }, {
        name: "Charibert",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Vault"
    }, {
        name: "Cirina",
        rarity: "★★★",
        type: "None",
        opponent: "Nigen",
        unlock: ""
    }, {
        name: "Coeurlregina",
        rarity: "★★★",
        type: "None",
        opponent: "Voracious Vath, Vath Deftarm",
        unlock: "Drops randomly from Mythril Triad Card"
    }, {
        name: "Count Edmont de Fortemps",
        rarity: "★★★",
        type: "None",
        opponent: "Marielle",
        unlock: ""
    }, {
        name: "Curator",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Fractal Continuum"
    }, {
        name: "Darkscale",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Mogicide FATE in The Churning Mists (22,21) and Rastaban Vibration FATE in The Churning Mists (14,13)."
    }, {
        name: "Echidna",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Void Ark"
    }, {
        name: "Emmanellain de Fortemps",
        rarity: "★★★",
        type: "None",
        opponent: "House Fortemps Manservant",
        unlock: ""
    }, {
        name: "Eros",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Qitana Ravel, Drops from Dream Triad Card"
    }, {
        name: "Estinien",
        rarity: "★★★",
        type: "None",
        opponent: "Gibrillont",
        unlock: ""
    }, {
        name: "Fenrir",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Snowcloak"
    }, {
        name: "Ferdiad",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Amdapor Keep (Hard)"
    }, {
        name: "Fordola rem Lupis",
        rarity: "★★★",
        type: "None",
        opponent: "Imperial Deserter",
        unlock: ""
    }, {
        name: "Forgiven Obscenity",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Purchased from Zumutt in Tomra for 100 Bicolor Gemstones"
    }, {
        name: "Formidable",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Purchase from Zumutt for 200 Bicolor Gemstones"
    }, {
        name: "Garuda",
        rarity: "★★★",
        type: "Primal",
        opponent: "Marcette",
        unlock: "Drops from The Howling Eye (Hard), The Howling Eye (Extreme)"
    }, {
        name: "Genbu",
        rarity: "★★★",
        type: "",
        opponent: "",
        unlock: "Drops from Hell's Lid"
    }, {
        name: "Gilgamesh & Enkidu",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Battle on the Big Bridge, Drops randomly from Mythril Triad Card"
    }, {
        name: "Godbert Manderville",
        rarity: "★★★",
        type: "None",
        opponent: "Ruhtwyda of the Three Hearts, King Elmer III, Hab",
        unlock: "Purchased from Triple Triad Trader for 9,600 MGP."
    }, {
        name: "Good King Moggle Mog XII",
        rarity: "★★★",
        type: "Primal",
        opponent: "Vorsaile Heuloix",
        unlock: "Drops from Thornmarch (Hard), Thornmarch (Extreme)"
    }, {
        name: "Griffin",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from the final boss of The Dusk Vigil dungeon."
    }, {
        name: "Grynewaht",
        rarity: "★★★",
        type: "Garlean",
        opponent: "",
        unlock: "Doma Castle"
    }, {
        name: "Happy Bunny",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Happy Bunny Silver Treasure Chest (Eureka Pagos)"
    }, {
        name: "Haurchefant",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Obtain Triple Team III Achievement by defeating 41 unique NPCs"
    }, {
        name: "Hilda",
        rarity: "★★★",
        type: "None",
        opponent: "Idle Imperial",
        unlock: ""
    }, {
        name: "Hiruko",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Random from a Gold-haloed Sack"
    }, {
        name: "Hrodric Poisontongue",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "The Drowned City of Skalla"
    }, {
        name: "Huaca",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Purchased from Nacille in Fanow for 100 Bicolor Gemstones"
    }, {
        name: "Ifrit",
        rarity: "★★★",
        type: "Primal",
        opponent: "Swift",
        unlock: "Drops from The Bowl of Embers (Hard), The Bowl of Embers (Extreme)"
    }, {
        name: "Jongleurs of Eulmore",
        rarity: "★★★",
        type: "None",
        opponent: "Grewenn",
        unlock: ""
    }, {
        name: "Julyan Manderville",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Purchased from the Triple Triad Trader for 14,400 MGP"
    }, {
        name: "Kal Myhk",
        rarity: "★★★",
        type: "None",
        opponent: "Master Mogzin",
        unlock: ""
    }, {
        name: "Kraken",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Sastasha (Hard)"
    }, {
        name: "Kuribu",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Lost City of Amdapor (Hard)"
    }, {
        name: "Lakshmi",
        rarity: "★★★",
        type: "Primal",
        opponent: "",
        unlock: "Emanation, Emanation (Extreme)"
    }, {
        name: "Lava Scorpion",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Sohm Al (Hard)"
    }, {
        name: "Leannan Sith",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Dream Triad Card"
    }, {
        name: "Louhi",
        rarity: "★★★",
        type: "None",
        opponent: "Botan",
        unlock: "Potential drop \"Louhi on Ice\" FATE at (35,19) in Pagos"
    }, {
        name: "Lucia goe Junius",
        rarity: "★★★",
        type: "None",
        opponent: "Wawalago",
        unlock: ""
    }, {
        name: "Lupin",
        rarity: "★★★",
        type: "Beastman",
        opponent: "Masatsuchi",
        unlock: ""
    }, {
        name: "Lyna",
        rarity: "★★★",
        type: "None",
        opponent: "Lamlyn",
        unlock: ""
    }, {
        name: "Magitek Predator",
        rarity: "★★★",
        type: "Garlean",
        opponent: "",
        unlock: "Random from Imperial Triad Card"
    }, {
        name: "Magitek Sky Armor",
        rarity: "★★★",
        type: "Garlean",
        opponent: "",
        unlock: "Random from Imperial Triad Card"
    }, {
        name: "Magnai",
        rarity: "★★★",
        type: "None",
        opponent: "Ogodei",
        unlock: ""
    }, {
        name: "Mammoth",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Get Gold on the FATE Wham, Bam, Thank You, Mammoth in The Azim Steppe (31,23)"
    }, {
        name: "Manxome Molaa Ja Ja",
        rarity: "★★★",
        type: "Beastman",
        opponent: "",
        unlock: "Drops from The Wanderer's Palace (Hard)"
    }, {
        name: "Matoya",
        rarity: "★★★",
        type: "None",
        opponent: "Midnight Dew",
        unlock: ""
    }, {
        name: "Mist Dragon",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Burn (Duty)"
    }, {
        name: "Mistbeard",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Hullbreaker Isle (Hard)"
    }, {
        name: "Moglin",
        rarity: "★★★",
        type: "Beastman",
        opponent: "Mogmill",
        unlock: ""
    }, {
        name: "Nero tol Scaeva",
        rarity: "★★★",
        type: "Garlean",
        opponent: "Indolent Imperial",
        unlock: ""
    }, {
        name: "Papalymo & Yda",
        rarity: "★★★",
        type: "Scion",
        opponent: "Buscarron, Vorsaile Heuloix",
        unlock: ""
    }, {
        name: "Pazuzu",
        rarity: "★★★",
        type: "None",
        opponent: "Botan",
        unlock: ""
    }, {
        name: "Penthesilea",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Get Gold on the FATE Lost Epic in The Ring of Fire"
    }, {
        name: "Philia",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Holminster Switch duty, Drops from Dream Triad Card"
    }, {
        name: "Phlegethon",
        rarity: "★★★",
        type: "None",
        opponent: "Klynthota",
        unlock: "Drops from Labyrinth of the Ancients"
    }, {
        name: "Phoebad",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Get Gold on the FATE Tall Tale in The Lochs (21,25)"
    }, {
        name: "Pipin Tarupin",
        rarity: "★★★",
        type: "None",
        opponent: "Swift",
        unlock: "Drops randomly from Mythril Triad Card"
    }, {
        name: "Progenitrix",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Pharos Sirius (Hard)"
    }, {
        name: "Prometheus",
        rarity: "★★★",
        type: "Garlean",
        opponent: "",
        unlock: "Drops from The Ghimlyt Dark"
    }, {
        name: "Provenance Watcher",
        rarity: "★★★",
        type: "None",
        opponent: "Hetsukaze",
        unlock: "Drops from Crystalline Provenance FATE in Eureka Hydatos"
    }, {
        name: "Qitian Dasheng",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "The Swallow's Compass (Duty)"
    }, {
        name: "Rasho",
        rarity: "★★★",
        type: "None",
        opponent: "Kaizan",
        unlock: ""
    }, {
        name: "Raya-O-Senna & A-Ruhn-Senna",
        rarity: "★★★",
        type: "None",
        opponent: "Buscarron, Landenel",
        unlock: "Purchased from Triple Triad Trader for 4,800 MGP."
    }, {
        name: "Rofocale",
        rarity: "★★★",
        type: "None",
        opponent: "Hanagasa",
        unlock: "The Royal City of Rabanastre"
    }, {
        name: "Roland",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Purchased from Campaign Attendant during The Make It Rain Campaign 2017 for 1000 MGP"
    }, {
        name: "Roundrox",
        rarity: "★★★",
        type: "None",
        opponent: "Seika, Tapklix",
        unlock: ""
    }, {
        name: "Sadu",
        rarity: "★★★",
        type: "None",
        opponent: "Munglig",
        unlock: ""
    }, {
        name: "Seeker of Solitude",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Grand Cosmos"
    }, {
        name: "Seiryu",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "The Wreath of Snakes, The Wreath of Snakes (Extreme)"
    }, {
        name: "Storge",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Malikah's Well, Drops from Dream Triad Card"
    }, {
        name: "Strix",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Great Gubal Library (Hard)"
    }, {
        name: "Susano",
        rarity: "★★★",
        type: "Primal",
        opponent: "",
        unlock: "The Pool of Tribute, The Pool of Tribute (Extreme)"
    }, {
        name: "Suzaku",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Hell's Kier, Hell's Kier (Extreme)"
    }, {
        name: "Thancred",
        rarity: "★★★",
        type: "Scion",
        opponent: "Fufulupa, Hab",
        unlock: ""
    }, {
        name: "The Griffin",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Baelsar's Wall"
    }, {
        name: "Tioman",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from the final boss of Sohm Al dungeon."
    }, {
        name: "Titan",
        rarity: "★★★",
        type: "Primal",
        opponent: "Landenel, Trachtoum",
        unlock: "Drops from The Navel (Hard), The Navel (Extreme)"
    }, {
        name: "Titania",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Dancing Plague, The Dancing Plague (Extreme), Drops from Dream Triad Card"
    }, {
        name: "Tokkapchi",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Saint Mocianne's Arboretum (Hard)"
    }, {
        name: "Tozol Huatotl",
        rarity: "★★★",
        type: "Beastman",
        opponent: "",
        unlock: "Drops from Xelphatol"
    }, {
        name: "Unknown",
        rarity: "★★★",
        type: "",
        opponent: "",
        unlock: "Drops from Anamnesis Anyder"
    }, {
        name: "Urianger",
        rarity: "★★★",
        type: "Scion",
        opponent: "Ruhtwyda of the Three Hearts, Tataru",
        unlock: "Drops from Silver Triad Card"
    }, {
        name: "Vedrfolnir",
        rarity: "★★★",
        type: "None",
        opponent: "Mogmill",
        unlock: "Drops randomly from Mythril Triad Card"
    }, {
        name: "Vicegerent to the Warden",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Sunken Temple of Qarn (Hard)"
    }, {
        name: "Waukkeon",
        rarity: "★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Neverreap"
    }, {
        name: "Y'shtola",
        rarity: "★★★",
        type: "Scion",
        opponent: "Gegeruju, R'ashaht Rhiki",
        unlock: ""
    }, {
        name: "Ysayle",
        rarity: "★★★",
        type: "None",
        opponent: "Marcechamp",
        unlock: ""
    }, {
        name: "Alphinaud & Alisaie",
        rarity: "★★★★",
        type: "Scion",
        opponent: "Joellaut, Swift",
        unlock: ""
    }, {
        name: "Argath Thadalfus",
        rarity: "★★★★",
        type: "None",
        opponent: "Hanagasa",
        unlock: "The Royal City of Rabanastre"
    }, {
        name: "Armored Weapon",
        rarity: "★★★★",
        type: "Garlean",
        opponent: "",
        unlock: "Random from Imperial Triad Card"
    }, {
        name: "Aymeric",
        rarity: "★★★★",
        type: "None",
        opponent: "Yayake",
        unlock: ""
    }, {
        name: "Bismarck",
        rarity: "★★★★",
        type: "Primal",
        opponent: "Linu Vali",
        unlock: "Drops from The Limitless Blue (Hard) and The Limitless Blue (Extreme) Trials."
    }, {
        name: "Brute Justice",
        rarity: "★★★★",
        type: "None",
        opponent: "Tapklix",
        unlock: "Alexander - The Burden of the Son"
    }, {
        name: "Calofisteri",
        rarity: "★★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Weeping City of Mhach"
    }, {
        name: "Cid Garlond",
        rarity: "★★★★",
        type: "None",
        opponent: "Sezul Totoloc",
        unlock: "Drops from Gold Triad Card"
    }, {
        name: "Diabolos Hollow",
        rarity: "★★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Dun Scaith"
    }, {
        name: "F'lhaminn",
        rarity: "★★★★",
        type: "Scion",
        opponent: "",
        unlock: "Purchased from the Triple Triad Trader for 20,000 MGP"
    }, {
        name: "Gigi",
        rarity: "★★★★",
        type: "None",
        opponent: "",
        unlock: "Purchased from Campaign Attendant during The Make It Rain Campaign 2017 for 18000 MGP"
    }, {
        name: "Great Gold Whisker",
        rarity: "★★★★",
        type: "Beastman",
        opponent: "Gyoei",
        unlock: ""
    }, {
        name: "Hancock",
        rarity: "★★★★",
        type: "None",
        opponent: "Kikimo",
        unlock: ""
    }, {
        name: "Heavensward Thancred",
        rarity: "★★★★",
        type: "Scion",
        opponent: "",
        unlock: "Achievement Triple Team V - Defeat 60 unique NPCs at Triple Triad."
    }, {
        name: "Heavensward Y'shtola",
        rarity: "★★★★",
        type: "Scion",
        opponent: "",
        unlock: "Achievement Triple-Decker VI - Obtain 150 unique Triple Triad cards."
    }, {
        name: "Innocence",
        rarity: "★★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Crown of the Immaculate, The Crown of the Immaculate (Extreme), Drops from Dream Triad Card"
    }, {
        name: "Krile",
        rarity: "★★★★",
        type: "Scion",
        opponent: "",
        unlock: "Triple Team VII achievement: obtain 190 unique Triple Triad cards"
    }, {
        name: "Lahabrea",
        rarity: "★★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Silver Triad Card, Platinum Triad Card"
    }, {
        name: "Leviathan",
        rarity: "★★★★",
        type: "Primal",
        opponent: "R'ashaht Rhiki",
        unlock: "Drops from The Whorleater (Hard), The Whorleater (Extreme)"
    }, {
        name: "Louisoix Leveilleur",
        rarity: "★★★★",
        type: "None",
        opponent: "Rowena",
        unlock: ""
    }, {
        name: "Lyse",
        rarity: "★★★★",
        type: "Scion",
        opponent: "",
        unlock: "Triple-decker VI achievement: defeat 70 different NPCs"
    }, {
        name: "Minfilia",
        rarity: "★★★★",
        type: "Scion",
        opponent: "Gegeruju",
        unlock: "Drops from Silver Triad Card"
    }, {
        name: "Nael van Darnus",
        rarity: "★★★★",
        type: "Garlean",
        opponent: "Flichoirel the Lordling",
        unlock: ""
    }, {
        name: "Odin",
        rarity: "★★★★",
        type: "Primal",
        opponent: "Landenel",
        unlock: "Drops from Urth's Fount, Drops randomly from Mythril Triad Card"
    }, {
        name: "Oracle of Light",
        rarity: "★★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Dream Triad Card"
    }, {
        name: "Ramuh",
        rarity: "★★★★",
        type: "Primal",
        opponent: "Vorsaile Heuloix",
        unlock: "Drops from The Striking Tree (Hard), The Striking Tree (Extreme)"
    }, {
        name: "Ran'jit",
        rarity: "★★★★",
        type: "None",
        opponent: "Grewenn",
        unlock: ""
    }, {
        name: "Ravana",
        rarity: "★★★★",
        type: "Primal",
        opponent: "Vath Deftarm",
        unlock: "Drops from Thok ast Thok (Hard) and Thok ast Thok (Extreme) Trials."
    }, {
        name: "Ruby Weapon",
        rarity: "★★★★",
        type: "Garlean",
        opponent: "",
        unlock: "Drop from Cinder Drift, Cinder Drift (Extreme)"
    }, {
        name: "Senor Sabotender",
        rarity: "★★★★",
        type: "None",
        opponent: "",
        unlock: "Purchased from the Triple Triad Trader for 200,000 MGP"
    }, {
        name: "Sephirot",
        rarity: "★★★★",
        type: "Primal",
        opponent: "",
        unlock: "Containment Bay S1T7"
    }, {
        name: "Shadowbringers Urianger",
        rarity: "★★★★",
        type: "None",
        opponent: "",
        unlock: "Complete Triple-decker IX achievement"
    }, {
        name: "Shadowbringers Y'shtola",
        rarity: "★★★★",
        type: "None",
        opponent: "Hargra",
        unlock: ""
    }, {
        name: "Shinryu",
        rarity: "★★★★",
        type: "Primal",
        opponent: "",
        unlock: "The Royal Menagerie"
    }, {
        name: "Shiva",
        rarity: "★★★★",
        type: "Primal",
        opponent: "",
        unlock: "Drops from Akh Afah Amphitheatre (Hard), Akh Afah Amphitheatre (Extreme), Drops from Platinum Triad Card"
    }, {
        name: "Stormblood Gilgamesh",
        rarity: "★★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Kugane Ohashi duty."
    }, {
        name: "Tiamat",
        rarity: "★★★★",
        type: "None",
        opponent: "Idle Imperial",
        unlock: ""
    }, {
        name: "Tsukuyomi",
        rarity: "★★★★",
        type: "Primal",
        opponent: "",
        unlock: "Drops from The Minstrel's Ballad: Tsukuyomi's Pain"
    }, {
        name: "Ultima Weapon",
        rarity: "★★★★",
        type: "Garlean",
        opponent: "",
        unlock: "Drops from The Minstrel's Ballad: Ultima's Bane, Gold Triad Card, Platinum Triad Card"
    }, {
        name: "Unei & Doga",
        rarity: "★★★★",
        type: "None",
        opponent: "Klynthota",
        unlock: ""
    }, {
        name: "Vidofnir",
        rarity: "★★★★",
        type: "None",
        opponent: "",
        unlock: "Obtain Triple Decker V Achievement by containing 120 Triple Triad cards"
    }, {
        name: "Xande",
        rarity: "★★★★",
        type: "None",
        opponent: "Klynthota",
        unlock: "Drops from Syrcus Tower"
    }, {
        name: "Yotsuyu",
        rarity: "★★★★",
        type: "Garlean",
        opponent: "Imperial Soldier",
        unlock: ""
    }, {
        name: "9S",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Copied Factory"
    }, {
        name: "Archaeotania",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Dream Triad Card"
    }, {
        name: "Archbishop Thordan VII",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Minstrel's Ballad: Thordan's Reign"
    }, {
        name: "Ardbert",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Complete Triple Team VIII Achievement"
    }, {
        name: "Bahamut",
        rarity: "★★★★★",
        type: "None",
        opponent: "King Elmer III",
        unlock: ""
    }, {
        name: "Bartz Klauser",
        rarity: "★★★★★",
        type: "None",
        opponent: "Lewena",
        unlock: "Drops from Battle in the Big Keep, Drops randomly from Mythril Triad Card"
    }, {
        name: "Cecil Harvey",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Spinner's Pull Triple Triad Tournament Reward, Drops from Platinum Triad Card"
    }, {
        name: "Cloud of Darkness",
        rarity: "★★★★★",
        type: "None",
        opponent: "Klynthota",
        unlock: "Drops from World of Darkness"
    }, {
        name: "Cloud Strife",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Purchased from Triple Triad Trader for 1,000,000 MGP."
    }, {
        name: "Firion",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Triple Triad Tournament Reward, Drops from Platinum Triad Card"
    }, {
        name: "Gaius van Baelsar",
        rarity: "★★★★★",
        type: "Garlean",
        opponent: "Indolent Imperial",
        unlock: "Dropped from The Praetorium"
    }, {
        name: "Gosetsu",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Obtain Triple-Decker VIII Achievement"
    }, {
        name: "Hades",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from The Dying Gasp, The Minstrel's Ballad: Hades's Elegy"
    }, {
        name: "Hien",
        rarity: "★★★★★",
        type: "None",
        opponent: "Kiuka",
        unlock: ""
    }, {
        name: "Hildibrand & Nashu Mhakaracca",
        rarity: "★★★★★",
        type: "None",
        opponent: "Hab, Helmhart",
        unlock: ""
    }, {
        name: "Hisui and Kurenai",
        rarity: "★★★★★",
        type: "None",
        opponent: "Isobe",
        unlock: ""
    }, {
        name: "Hraesvelgr",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Sohr Khai"
    }, {
        name: "Kan-E-Senna",
        rarity: "★★★★★",
        type: "None",
        opponent: "Vorsaile Heuloix",
        unlock: ""
    }, {
        name: "Lightning",
        rarity: "★★★★★",
        type: "None",
        opponent: "Tataru",
        unlock: "Triple Triad Tournament Reward, Drops from Platinum Triad Card"
    }, {
        name: "Merlwyb Bloefhiswyn",
        rarity: "★★★★★",
        type: "None",
        opponent: "R'ashaht Rhiki, Mordyn",
        unlock: ""
    }, {
        name: "Midgardsormr",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Obtain Triple-Decker IV Achievement by obtaining 90 unique Triple Triad Cards."
    }, {
        name: "Nanamo Ul Namo",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Purchased from Triple Triad Trader for 400,000 MGP, Drops from Platinum Triad Card"
    }, {
        name: "Nidhogg",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from the final boss of The Aery dungeon."
    }, {
        name: "Noctis Lucis Caelum",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Purchased from Ironworks Vendor for 10,000 MPG, during A Nocturne for Heroes"
    }, {
        name: "Omega",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Alphascape V3.0 & V4.0"
    }, {
        name: "Onion Knight",
        rarity: "★★★★★",
        type: "None",
        opponent: "Lewena",
        unlock: "Drops from World of Darkness, Drops randomly from Mythril Triad Card"
    }, {
        name: "Raubahn Aldynn",
        rarity: "★★★★★",
        type: "None",
        opponent: "Swift",
        unlock: ""
    }, {
        name: "Raubahn and Pipin",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Bought from the Triple Triad Trader for 400,000 MGP"
    }, {
        name: "Regula van Hydrus",
        rarity: "★★★★★",
        type: "Garlean",
        opponent: "Idle Imperial",
        unlock: "Random from Imperial Triad Card"
    }, {
        name: "Shantotto",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Obtain Kumite Kumite Kumite Achievement by winning 30 Tournament Matches"
    }, {
        name: "Sophia",
        rarity: "★★★★★",
        type: "Primal",
        opponent: "",
        unlock: "Drops from Containment Bay P1T6 and Containment Bay P1T6 (Extreme)"
    }, {
        name: "Squall Leonhart",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Obtain Triple Team II Achievement by defeating 30 unique NPCs"
    }, {
        name: "Stormblood Alphinaud and Alisaie",
        rarity: "★★★★★",
        type: "Scion",
        opponent: "Mero Roggo",
        unlock: ""
    }, {
        name: "Terra Branford",
        rarity: "★★★★★",
        type: "None",
        opponent: "Lewena, Hall Overseer",
        unlock: "Drops from The Dragon's Neck"
    }, {
        name: "Therion",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Purchased from Goushs Ooan in The Ondo Cups for 250 Bicolor Gemstones"
    }, {
        name: "Tidus",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Triple Triad Tournament Reward, Drops from Platinum Triad Card"
    }, {
        name: "Ultima, the High Seraph",
        rarity: "★★★★★",
        type: "None",
        opponent: "Hanagasa",
        unlock: "Drops from The Orbonne Monastery"
    }, {
        name: "Vaan",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Obtain Wheel of Fortune V Achievement by winning 300 matches with Roulette rules."
    }, {
        name: "Warrior of Light",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Gold Triad Card"
    }, {
        name: "Yiazmat",
        rarity: "★★★★★",
        type: "None",
        opponent: "Hanagasa",
        unlock: "The Ridorana Lighthouse"
    }, {
        name: "Yojimbo & Daigaro",
        rarity: "★★★★★",
        type: "None",
        opponent: "Hokushin",
        unlock: ""
    }, {
        name: "Zenos yae Galvus",
        rarity: "★★★★★",
        type: "Garlean",
        opponent: "",
        unlock: "Ala Mhigo"
    }, {
        name: "Zidane Tribal",
        rarity: "★★★★★",
        type: "None",
        opponent: "",
        unlock: "Drops from Gold Triad Card"
    }, {
        name: "Zurvan",
        rarity: "★★★★★",
        type: "Primal",
        opponent: "",
        unlock: "Drops Containment Bay Z1T9, Containment Bay Z1T9 (Extreme)"
    }
];
