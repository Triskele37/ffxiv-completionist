import { HuntingLogColumnConfig } from "../columnConfigs";

export const TwinAdderHunting = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.twin-adder`;

    return {
        name: "Twin Adder",
    	storageKey,
        columns: HuntingLogColumnConfig,
        tasks: [{
            name: "01",
            rank: "1",
            mob: "Amalj'aa Javelinier x3",
            zone: "Eastern Thanalan",
            location: "Sandgate (18,27)"
        }, {
            name: "02",
            rank: "1",
            mob: "Heckler Imp x5",
            zone: "Eastern Thanalan",
            location: "Halatali (Instance)"
        }, {
            name: "03",
            rank: "1",
            mob: "Scythe Mantis x5",
            zone: "Eastern Thanalan",
            location: "Halatali (Instance)"
        }, {
            name: "04",
            rank: "1",
            mob: "Coliseum Python x5",
            zone: "Eastern Thanalan",
            location: "Halatali (Instance)"
        }, {
            name: "05",
            rank: "1",
            mob: "Sylvan Sough x3",
            zone: "East Shroud",
            location: "The Bramble Patch (19,21)"
        }, {
            name: "06",
            rank: "1",
            mob: "Kobold Pickman x3",
            zone: "Upper La Noscea",
            location: "Oakwood (12,22)"
        }, {
            name: "07",
            rank: "1",
            mob: "Amalj'aa Bruiser x3",
            zone: "Southern Thanalan",
            location: "Broken Water (21,15)"
        }, {
            name: "08",
            rank: "1",
            mob: "Ixali Deftalon x3",
            zone: "North Shroud",
            location: "Alder Springs (22,27)"
        }, {
            name: "09",
            rank: "1",
            mob: "Amalj'aa Ranger x3",
            zone: "Eastern Thanalan",
            location: "Wellwick Wood (25,20)"
        }, {
            name: "10",
            rank: "1",
            mob: "Ixali Fearcaller x1",
            zone: "Coerthas Central Highlands",
            location: "Dragonhead (31,27)"
        }, {
            name: "11",
            rank: "2",
            mob: "Amalj'aa Sniper x3",
            zone: "Southern Thanalan",
            location: "Sagolii Desert (25,33)"
        }, {
            name: "12",
            rank: "2",
            mob: "Kobold Missionary x3",
            zone: "Eastern La Noscea",
            location: "Bloodshore (28,25)"
        }, {
            name: "13",
            rank: "2",
            mob: "Kobold Sidesman x3",
            zone: "Upper La Noscea",
            location: "Zelma's Run (29,18)"
        }, {
            name: "14",
            rank: "2",
            mob: "Temple Bee x4",
            zone: "Southern Thanalan",
            location: "The Sunken Temple of Qarn (Instance)"
        }, {
            name: "15",
            rank: "2",
            mob: "Temple Guardian x1",
            zone: "Southern Thanalan",
            location: "The Sunken Temple of Qarn (Instance)"
        }, {
            name: "16",
            rank: "2",
            mob: "Kobold Roundsman x3",
            zone: "Outer La Noscea",
            location: "Iron Lake (22,15)"
        }, {
            name: "17",
            rank: "2",
            mob: "Sylpheed Snarl x3",
            zone: "East Shroud",
            location: "Sylphlands (28,17)"
        }, {
            name: "18",
            rank: "2",
            mob: "Shelfclaw Sahagin x3",
            zone: "Western La Noscea",
            location: "Halfstone (18,20)"
        }, {
            name: "19",
            rank: "2",
            mob: "Amalj'aa Lancer x3",
            zone: "Southern Thanalan",
            location: "Zanr'ak (18,23)"
        }, {
            name: "20",
            rank: "2",
            mob: "U'Ghamaro Roundsman x3",
            zone: "Outer La Noscea",
            location: "U'Ghamaro Mines (23,9)"
        }, {
            name: "21",
            rank: "3",
            mob: "Ixali Windtalon x3",
            zone: "North Shroud",
            location: "Proud Creek (20,20)"
        }, {
            name: "22",
            rank: "3",
            mob: "Sylpheed Snarl x3",
            zone: "East Shroud",
            location: "Sylphlands (28,17)"
        }, {
            name: "23",
            rank: "3",
            mob: "U'Ghamaro Quarryman x3",
            zone: "Outer La Noscea",
            location: "U'Ghamaro Mines (21,5)"
        }, {
            name: "24",
            rank: "3",
            mob: "Sapsa Shelftooth x3",
            zone: "Western La Noscea",
            location: "Sapsa Spawning Grounds (16,14)"
        }, {
            name: "25",
            rank: "3",
            mob: "Zahar'ak Pugilist x3",
            zone: "Southern Thanalan",
            location: "Zahar'ak (26,20)"
        }, {
            name: "26",
            rank: "3",
            mob: "Natalan Swiftbeak x4",
            zone: "Coerthas Central Highlands",
            location: "Natalan (31,17)"
        }, {
            name: "27",
            rank: "3",
            mob: "Natalan Boldwing x4",
            zone: "Coerthas Central Highlands",
            location: "Natalan (31,18)"
        }, {
            name: "28",
            rank: "3",
            mob: "Tonberry x7",
            zone: "Upper La Noscea",
            location: "The Wanderer's Palace (Instance)"
        }, {
            name: "29",
            rank: "3",
            mob: "Bronze Beetle x6",
            zone: "Upper La Noscea",
            location: "The Wanderer's Palace (Instance)"
        }, {
            name: "30",
            rank: "3",
            mob: "Keeper of Halidom",
            zone: "Upper La Noscea",
            location: "The Wanderer's Palace (Instance)"
        }]
    };
};
