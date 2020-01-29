import { HuntingLogColumnConfig } from "../columnConfigs";

export const ThaumaturgeHunting = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.thaumaturge`;

    return {
        name: "Thaumaturge",
    	storageKey,
        columns: HuntingLogColumnConfig,
        tasks: [{
            name: "Thaumaturge 01",
            rank: "1",
            mob: "Little Ladybug x3",
            zone: "Western Thanalan",
            location: "Hammerlea"
        }, {
            name: "Thaumaturge 02",
            rank: "1",
            mob: "Huge Hornet x3",
            zone: "Central Thanalan",
            location: "Spineless Basin"
        }, {
            name: "Thaumaturge 03",
            rank: "1",
            mob: "Cactuar x3",
            zone: "Western Thanalan",
            location: "The Eighty Sins of Sasamo (26,25)"
        }, {
            name: "Thaumaturge 04",
            rank: "1",
            mob: "Snapping Shrew x3",
            zone: "Central Thanalan",
            location: "Spineless Basin (22,26)"
        }, {
            name: "Thaumaturge 05",
            rank: "1",
            mob: "Syrphid Cloud x3",
            zone: "Central Thanalan",
            location: "Black Brush (19,17)"
        }, {
            name: "Thaumaturge 06",
            rank: "1",
            mob: "Yarzon Feeder x3",
            zone: "Western Thanalan",
            location: "Hammerlea (23,27)"
        }, {
            name: "Thaumaturge 07",
            rank: "1",
            mob: "Rusty Coblyn x3",
            zone: "Western Thanalan",
            location: "Hammerlea (21,26)"
        }, {
            name: "Thaumaturge 08",
            rank: "1",
            mob: "Spriggan Graverobber x3",
            zone: "Central Thanalan",
            location: "Black Brush (17,23)"
        }, {
            name: "Thaumaturge 09",
            rank: "1",
            mob: "Qiqirn Shellsweeper x3",
            zone: "Central Thanalan",
            location: "Black Brush (16,19)"
        }, {
            name: "Thaumaturge 10",
            rank: "1",
            mob: "Sun Bat x3",
            zone: "Central Thanalan",
            location: "The Clutch (25,19)"
        }, {
            name: "Thaumaturge 11",
            rank: "2",
            mob: "Bomb x3, Copper Coblyn x2",
            zone: "Western Thanalan",
            location: "Horizon's Edge (26,18), Horizon's Edge (26,16)"
        }, {
            name: "Thaumaturge 12",
            rank: "2",
            mob: "Cochineal Cactuar x3, Quiveron Attendant x2",
            zone: "Central Thanalan",
            location: "The Clutch (25,21), The Clutch (23,20)"
        }, {
            name: "Thaumaturge 13",
            rank: "2",
            mob: "Antling Sentry x3, Giant Tortoise x2",
            zone: "Central Thanalan, Western Thanalan",
            location: "Black Brush (16,15), Hammerlea (23,26)"
        }, {
            name: "Thaumaturge 14",
            rank: "2",
            mob: "Thickshell x3",
            zone: "Western Thanalan",
            location: "The Footfalls (15,15)"
        }, {
            name: "Thaumaturge 15",
            rank: "2",
            mob: "Toxic Toad x3",
            zone: "Central Thanalan",
            location: "The Clutch (26,19)"
        }, {
            name: "Thaumaturge 16",
            rank: "2",
            mob: "Tuco-tuco x3",
            zone: "Eastern Thanalan",
            location: "Drybone (12,16)"
        }, {
            name: "Thaumaturge 17",
            rank: "2",
            mob: "Myotragus Nanny x3",
            zone: "Eastern Thanalan",
            location: "Drybone (15,22)"
        }, {
            name: "Thaumaturge 18",
            rank: "2",
            mob: "Blowfly Swarm x3",
            zone: "Eastern Thanalan",
            location: "Drybone (12,23)"
        }, {
            name: "Thaumaturge 19",
            rank: "2",
            mob: "Rotting Corpse x3",
            zone: "Eastern Thanalan",
            location: "Drybone (14,16)"
        }, {
            name: "Thaumaturge 20",
            rank: "2",
            mob: "Bloated Bogy x3",
            zone: "Western Thanalan",
            location: "The Footfalls (13,11)"
        }, {
            name: "Thaumaturge 21",
            rank: "3",
            mob: "Overgrown Ivy x4, Kedtrap x2",
            zone: "East Shroud, South Shroud",
            location: "Nine Ivies (23,29), Upper Paths (22,21)"
        }, {
            name: "Thaumaturge 22",
            rank: "3",
            mob: "Forest Yarzon x4, Yarzon Scavenger x4",
            zone: "Upper La Noscea, Western Thanalan",
            location: "Oakwood (10,21), The Footfalls (15,7)"
        }, {
            name: "Thaumaturge 23",
            rank: "3",
            mob: "Laughing Toad x4, Bark Eft x2",
            zone: "Western Thanalan, South Shroud",
            location: "The Footfalls (14,6), Upper Paths (19,22)"
        }, {
            name: "Thaumaturge 24",
            rank: "3",
            mob: "Jumping Djigga x4, Glowfly x2",
            zone: "East Shroud",
            location: "The Bramble Patch (15,20)"
        }, {
            name: "Thaumaturge 25",
            rank: "3",
            mob: "River Yarzon x4",
            zone: "South Shroud",
            location: "Upper Paths (24,21)"
        }, {
            name: "Thaumaturge 26",
            rank: "3",
            mob: "Potter Wasp Swarm x4",
            zone: "Southern Thanalan",
            location: "Broken Water (20,11)"
        }, {
            name: "Thaumaturge 27",
            rank: "3",
            mob: "Phurble x4",
            zone: "Eastern Thanalan",
            location: "Wellwick Wood (24,20)"
        }, {
            name: "Thaumaturge 28",
            rank: "3",
            mob: "Corpse Brigade Knuckledancer x4",
            zone: "Southern Thanalan",
            location: "Broken Water (22,8)"
        }, {
            name: "Thaumaturge 29",
            rank: "3",
            mob: "Fire Sprite x4",
            zone: "Southern Thanalan",
            location: "The Red Labyrinth (13,20)"
        }, {
            name: "Thaumaturge 30",
            rank: "3",
            mob: "Stroper x4",
            zone: "Central Shroud",
            location: "Sorrel Haven (13,21)"
        }, {
            name: "Thaumaturge 31",
            rank: "4",
            mob: "Mamool Ja Executioner x5, Adamantoise x2",
            zone: "Upper La Noscea, South Shroud",
            location: "Bronze Lake (28,21), Lower Paths (20,27)"
        }, {
            name: "Thaumaturge 32",
            rank: "4",
            mob: "Russet Yarzon x5, Revenant x2",
            zone: "Southern Thanalan, Central Shroud",
            location: "Sagolii Desert (14,31), Sorrel Haven (11,20)"
        }, {
            name: "Thaumaturge 33",
            rank: "4",
            mob: "Smoke Bomb x3, Dung Midge Swarm x2",
            zone: "Southern Thanalan, Eastern La Noscea",
            location: "Sagolii Desert (18,36), Raincatcher Gully (19,31)"
        }, {
            name: "Thaumaturge 34",
            rank: "4",
            mob: "Gigantoad x5, Spriggan x2",
            zone: "Eastern La Noscea, Central Shroud",
            location: "Raincatcher Gully (17,26), The Standing Corses (12,16)"
        }, {
            name: "Thaumaturge 35",
            rank: "4",
            mob: "Salamander x5",
            zone: "Upper La Noscea",
            location: "Bronze Lake (28,24)"
        }, {
            name: "Thaumaturge 36",
            rank: "4",
            mob: "Plasmoid x5",
            zone: "Outer La Noscea",
            location: "Iron Lake (25,18)"
        }, {
            name: "Thaumaturge 37",
            rank: "4",
            mob: "Ice Sprite x5",
            zone: "Coerthas Central Highlands",
            location: "Dragonhead (27,13)"
        }, {
            name: "Thaumaturge 38",
            rank: "4",
            mob: "Feral Croc x5",
            zone: "Coerthas Central Highlands",
            location: "Dragonhead (26,24)"
        }, {
            name: "Thaumaturge 39",
            rank: "4",
            mob: "Will-o'-the-wisp x5",
            zone: "South Shroud",
            location: "Snakemolt (23,24)"
        }, {
            name: "Thaumaturge 40",
            rank: "4",
            mob: "Golden Fleece x5",
            zone: "Eastern Thanalan",
            location: "The Burning Wall (25,24)"
        }, {
            name: "Thaumaturge 41",
            rank: "5",
            mob: "Dragonfly x6, Old-growth Treant x2",
            zone: "Coerthas Central Highlands, East Shroud",
            location: "Whitebrim (9,14), Larkscall (27,22)"
        }, {
            name: "Thaumaturge 42",
            rank: "5",
            mob: "Dead Man's Moan x6 Crater Golem x1",
            zone: "Western La Noscea, Central Shroud",
            location: "The Isles of Umbra (14,35), The Standing Corses (9,18)"
        }, {
            name: "Thaumaturge 43",
            rank: "5",
            mob: "Morbol x6, 3rd Cohort Secutor x2",
            zone: "East Shroud",
            location: "Larkscall (23,21), Larkscall (32,20)"
        }, {
            name: "Thaumaturge 44",
            rank: "5",
            mob: "Nix x6, Lesser Kalong x2",
            zone: "Mor Dhona, South Shroud",
            location: "Fogfens (18,8), Urth's Gift (28,22)"
        }, {
            name: "Thaumaturge 45",
            rank: "5",
            mob: "Giant Logger x3, Gigas Sozu x2",
            zone: "Coerthas Central Highlands, Mor Dhona",
            location: "Boulder Downs (12,17), North Silvertear (28,13)"
        }, {
            name: "Thaumaturge 46",
            rank: "5",
            mob: "Iron Tortoise x6",
            zone: "Southern Thanalan",
            location: "Zanr'ak (20,23)"
        }, {
            name: "Thaumaturge 47",
            rank: "5",
            mob: "Synthetic Doblyn x6",
            zone: "Outer La Noscea",
            location: "U'Ghamaro Mines (21,6)"
        }, {
            name: "Thaumaturge 48",
            rank: "5",
            mob: "Ked x6",
            zone: "South Shroud",
            location: "Urth's Gift (31,24)"
        }, {
            name: "Thaumaturge 49",
            rank: "5",
            mob: "4th Cohort Hoplomachus x6",
            zone: "Western Thanalan",
            location: "Cape Westwind (12,7)"
        }, {
            name: "Thaumaturge 50",
            rank: "5",
            mob: "2nd Cohort Signifer x6",
            zone: "Eastern La Noscea",
            location: "Agelyss Wise (25,21)"
        }]
    };
};
