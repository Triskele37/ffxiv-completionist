import { HuntingLogColumnConfig } from "../columnConfigs";

export const ImmortalFlamesHunting = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.immortal-flames`;

    return {
        name: "Immortal Flames",
    	storageKey,
        columns: HuntingLogColumnConfig,
        tasks: [{
            name: "01",
            rank: "1",
            mob: "Amalj'aa Hunter x3",
            zone: "Eastern Thanalan",
            location: "Sandgate (20,27)"
        }, {
            name: "02",
            rank: "1",
            mob: "Doctore x3",
            zone: "Eastern Thanalan",
            location: "Halatali (Instance)"
        }, {
            name: "03",
            rank: "1",
            mob: "Firemane x1",
            zone: "Eastern Thanalan",
            location: "Halatali (Instance)"
        }, {
            name: "04",
            rank: "1",
            mob: "Thunderclap Guivre x1",
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
            mob: "Kobold Footman x7",
            zone: "Upper La Noscea",
            location: "Oakwood (11,22)"
        }, {
            name: "07",
            rank: "1",
            mob: "Kobold Pickman x3",
            zone: "Upper La Noscea",
            location: "Oakwood (12,22)"
        }, {
            name: "08",
            rank: "1",
            mob: "Amalj'aa Seer x3",
            zone: "Southern Thanalan",
            location: "Broken Water (20,15)"
        }, {
            name: "09",
            rank: "1",
            mob: "Ixali Lightwing x3",
            zone: "North Shroud",
            location: "Alder Springs (22,28)"
        }, {
            name: "10",
            rank: "1",
            mob: "Ixali Boundwing x1",
            zone: "Coerthas Central Highlands",
            location: "Dragonhead (32,27)"
        }, {
            name: "11",
            rank: "2",
            mob: "Amalj'aa Halberdier x3",
            zone: "Southern Thanalan",
            location: "Sagolii Desert (26,34)"
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
            mob: "Sand Bat x3",
            zone: "Central Thanalan",
            location: "Cutter's Cry (Instance)"
        }, {
            name: "15",
            rank: "2",
            mob: "Sabotender Desertor x2",
            zone: "Central Thanalan",
            location: "Cutter's Cry (Instance)"
        }, {
            name: "16",
            rank: "2",
            mob: "Myrmidon Princess x1",
            zone: "Central Thanalan",
            location: "Cutter's Cry (Instance)"
        }, {
            name: "17",
            rank: "2",
            mob: "Kobold Quarryman x3",
            zone: "Outer La Noscea",
            location: "Iron Lake (23,16)"
        }, {
            name: "18",
            rank: "2",
            mob: "Sylvan Screech x3",
            zone: "East Shroud",
            location: "Larkscall (25,24)"
        }, {
            name: "19",
            rank: "2",
            mob: "Shelfsprine Sahagin x3",
            zone: "Western La Noscea",
            location: "Halfstone (19,22)"
        }, {
            name: "20",
            rank: "2",
            mob: "Amalj'aa Archer x3",
            zone: "Southern Thanalan",
            location: "Zanr'ak (24,28)"
        }, {
            name: "21",
            rank: "3",
            mob: "Ixali Windtalon x3",
            zone: "North Shroud",
            location: "Proud Creek (20,20)"
        }, {
            name: "22",
            rank: "3",
            mob: "Sylpheed Sigh x3",
            zone: "East Shroud",
            location: "Sylphlands (21,10)"
        }, {
            name: "23",
            rank: "3",
            mob: "U'Ghamaro Priest x3",
            zone: "Outer La Noscea",
            location: "U'Ghamaro Mines (21,9)"
        }, {
            name: "24",
            rank: "3",
            mob: "Sapsa Shelfspine x3",
            zone: "Western La Noscea",
            location: "Sapsa Spawning Grounds (15,15)"
        }, {
            name: "25",
            rank: "3",
            mob: "Zahar'ak Thaumaturge x3",
            zone: "Southern Thanalan",
            location: "Zahar'ak (32,18)"
        }, {
            name: "26",
            rank: "3",
            mob: "Natalan Windtalon x4",
            zone: "Coerthas Central Highlands",
            location: "Natalan (31,17)"
        }, {
            name: "27",
            rank: "3",
            mob: "Natalan Boldwing x5",
            zone: "Coerthas Central Highlands",
            location: "Natalan (31,18)"
        }, {
            name: "28",
            rank: "3",
            mob: "Tonberry x8",
            zone: "Upper La Noscea",
            location: "The Wanderer's Palace (Instance)"
        }, {
            name: "29",
            rank: "3",
            mob: "Corrupted Nymian x3",
            zone: "Upper La Noscea",
            location: "The Wanderer's Palace (Instance)"
        }, {
            name: "30",
            rank: "3",
            mob: "Soldier of Nym x3",
            zone: "Upper La Noscea",
            location: "The Wanderer's Palace (Instance)"
        }]
    };
};
