import { HuntingLogColumnConfig } from "../columnConfigs";

export const RogueHunting = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.rogue`;

    return {
        name: "Rogue",
    	storageKey,
        columns: HuntingLogColumnConfig,
        tasks: [{
            name: "Rogue 01",
            rank: "1",
            mob: "Wharf Rat x3",
            zone: "Middle La Noscea",
            location: "Zephyr Drift (22,22)"
        }, {
            name: "Rogue 02",
            rank: "1",
            mob: "Lost Lamb x3",
            zone: "Middle La Noscea",
            location: "Zephyr Drift"
        }, {
            name: "Rogue 03",
            rank: "1",
            mob: "Aurelia x3",
            zone: "Lower La Noscea",
            location: "Moraby Bay (25,24)"
        }, {
            name: "Rogue 04",
            rank: "1",
            mob: "Wild Dodo x3",
            zone: "Lower La Noscea",
            location: "Cedarwood (28,20)"
        }, {
            name: "Rogue 05",
            rank: "1",
            mob: "Pugil x2, Goblin Fisher x1",
            zone: "Middle La Noscea",
            location: "Summerford (23,22), Summerford (23,21)"
        }, {
            name: "Rogue 06",
            rank: "1",
            mob: "Tiny Mandragora x3",
            zone: "Middle La Noscea",
            location: "Summerford (22,17)"
        }, {
            name: "Rogue 07",
            rank: "1",
            mob: "Cave Bat x3",
            zone: "Lower La Noscea",
            location: "Cedarwood (26,15)"
        }, {
            name: "Rogue 08",
            rank: "1",
            mob: "Galago x3",
            zone: "Lower La Noscea",
            location: "Cedarwood (30,14)"
        }, {
            name: "Rogue 09",
            rank: "1",
            mob: "Grounded Pirate x1, Grounded Raider x1",
            zone: "Middle La Noscea",
            location: "Summerford (19,17)"
        }, {
            name: "Rogue 10",
            rank: "1",
            mob: "Megalocrab x3",
            zone: "Middle La Noscea",
            location: "Three-malm Bend (16,14)"
        }, {
            name: "Rogue 11",
            rank: "2",
            mob: "Wild Jackal",
            zone: "Lower La Noscea",
            location: "The Gods' Grip (21,35)"
        }, {
            name: "Rogue 12",
            rank: "2",
            mob: "Roseling x1, Sewer Mole x2",
            zone: "Western La Noscea",
            location: "Quarterstone (35,30), Quarterstone (33,28)"
        }, {
            name: "Rogue 13",
            rank: "2",
            mob: "Fat Dodo x3",
            zone: "Western La Noscea",
            location: "Quarterstone (32,28)"
        }, {
            name: "Rogue 14",
            rank: "2",
            mob: "Moraby Mole x3",
            zone: "Lower La Noscea",
            location: "The Gods' Grip (21,34)"
        }, {
            name: "Rogue 15",
            rank: "2",
            mob: "Qiqirn Eggdigger x3",
            zone: "Lower La Noscea",
            location: "The Gods' Grip (18,35)"
        }, {
            name: "Rogue 16",
            rank: "2",
            mob: "Puk Hatchling x3",
            zone: "Western La Noscea",
            location: "Skull Valley (27,24)"
        }, {
            name: "Rogue 17",
            rank: "2",
            mob: "Rothlyt Pelican x4",
            zone: "Western La Noscea",
            location: "Skull Valley (24,22)"
        }, {
            name: "Rogue 18",
            rank: "2",
            mob: "Killer Mantis x2, Hedgemole x1",
            zone: "Western La Noscea",
            location: "Skull Valley (23,21), Skul Valley (25,23)"
        }, {
            name: "Rogue 19",
            rank: "2",
            mob: "Wild Wolf x3",
            zone: "Upper La Noscea",
            location: "Oakwood (13,25)"
        }, {
            name: "Rogue 20",
            rank: "2",
            mob: "Bumble Beetle x3",
            zone: "Upper La Noscea",
            location: "Oakwood (13,25)"
        }, {
            name: "Rogue 21",
            rank: "3",
            mob: "Black Bat x3",
            zone: "East Shroud",
            location: "The Bramble Patch (16,21)"
        }, {
            name: "Rogue 22",
            rank: "3",
            mob: "Gall Gnat x3",
            zone: "East Shroud",
            location: "Nine Ivies (23,30)"
        }, {
            name: "Rogue 23",
            rank: "3",
            mob: "Overgrown Ivy x3",
            zone: "East Shroud",
            location: "Nine Ivies (23,29)"
        }, {
            name: "Rogue 24",
            rank: "3",
            mob: "Bark Eft x3",
            zone: "South Shroud",
            location: "Upper Paths (19,22)"
        }, {
            name: "Rogue 25",
            rank: "3",
            mob: "Redbelly Larcener x2, Redbelly Lookout x1",
            zone: "South Shroud",
            location: "Upper Paths (16,22), Upper Paths (15,22)"
        }, {
            name: "Rogue 26",
            rank: "3",
            mob: "Antelope Stag x3",
            zone: "South Shroud",
            location: "Silent Arbor (23,20)"
        }, {
            name: "Rogue 27",
            rank: "3",
            mob: "River Yarzon x3",
            zone: "South Shroud",
            location: "Upper Paths (24,21)"
        }, {
            name: "Rogue 28",
            rank: "3",
            mob: "Corpse Brigade Knuckledancer x2, Corpse Brigade Firedancer x2",
            zone: "Southern Thanalan",
            location: "Broken Water (22,8), Broken Water (22,11)"
        }, {
            name: "Rogue 29",
            rank: "3",
            mob: "Coeurlclaw Cutter x2, Coeurlclaw Hunter x2",
            zone: "South Shroud",
            location: "Silent Arbor (28,21)"
        }, {
            name: "Rogue 30",
            rank: "3",
            mob: "Sandstone Golem x2",
            zone: "Southern Thanalan",
            location: "Broken Water (22,12)"
        }, {
            name: "Rogue 31",
            rank: "4",
            mob: "Large Buffalo x3",
            zone: "Eastern La Noscea",
            location: "Bloodshore (28,32)"
        }, {
            name: "Rogue 32",
            rank: "4",
            mob: "Grass Raptor x3",
            zone: "Eastern La Noscea",
            location: "Raincatcher Gully (16,26)"
        }, {
            name: "Rogue 33",
            rank: "4",
            mob: "Qiqirn Gullroaster x4, Colibri x2",
            zone: "Eastern La Noscea",
            location: "Bloodshore (26,32) Bloodshore (29,24)"
        }, {
            name: "Rogue 34",
            rank: "4",
            mob: "Coeurl x1, Highland Condor x2",
            zone: "Outer La Noscea",
            location: "The Long Climb (14,14), The Long Climb (17,16)"
        }, {
            name: "Rogue 35",
            rank: "4",
            mob: "Basalt Golem x3",
            zone: "Outer La Noscea",
            location: "The Long Climb (15,16)"
        }, {
            name: "Rogue 36",
            rank: "4",
            mob: "Velociraptor x4",
            zone: "Outer La Noscea",
            location: "The Long Climb (20,15)"
        }, {
            name: "Rogue 37",
            rank: "4",
            mob: "Highland Goobbue x2, Feral Croc x2",
            zone: "Coerthas Central Highlands",
            location: "Dragonhead (24,20), Dragonhead (26,24)"
        }, {
            name: "Rogue 38",
            rank: "4",
            mob: "Redhorn Ogre x3",
            zone: "Coerthas Central Highlands",
            location: "Providence Point (29,11)"
        }, {
            name: "Rogue 39",
            rank: "4",
            mob: "Taurus x3",
            zone: "Coerthas Central Highlands",
            location: "Providence Point (32,12)"
        }, {
            name: "Rogue 40",
            rank: "4",
            mob: "Chinchilla x2, Bateleur x2",
            zone: "Coerthas Central Highlands",
            location: "Whitebrim (18,16)"
        }, {
            name: "Rogue 41",
            rank: "5",
            mob: "Golden Fleece x4",
            zone: "Eastern Thanalan",
            location: "The Burning Wall (25,24)"
        }, {
            name: "Rogue 42",
            rank: "5",
            mob: "Quartz Doblyn x4",
            zone: "Eastern Thanalan",
            location: "The Burning Wall (29,26)"
        }, {
            name: "Rogue 43",
            rank: "5",
            mob: "Nix x4",
            zone: "Mor Dhona",
            location: "Fogfens (18,8)"
        }, {
            name: "Rogue 44",
            rank: "5",
            mob: "Mudpuppy x4",
            zone: "Mor Dhona",
            location: "Fogfens (13,10)"
        }, {
            name: "Rogue 45",
            rank: "5",
            mob: "Daring Harrier x2, Raging Harrier x2",
            zone: "Mor Dhona",
            location: "Fogfens (16,15)"
        }, {
            name: "Rogue 46",
            rank: "5",
            mob: "Gigas Shramana x3, Gigas Sozu x2",
            zone: "Mor Dhona",
            location: "North Silvertear (28,12), North Silvertear (28,13)"
        }, {
            name: "Rogue 47",
            rank: "5",
            mob: "Hippogryph x4",
            zone: "Mor Dhona",
            location: "North Silvertear (32,8)"
        }, {
            name: "Rogue 48",
            rank: "5",
            mob: "Hapalit x4",
            zone: "Mor Dhona",
            location: "North Silvertear (30,5)"
        }, {
            name: "Rogue 49",
            rank: "5",
            mob: "2nd Cohort Eques x5, 2nd Cohort Signifer x2",
            zone: "Eastern La Noscea",
            location: "Agelyss Wise (28,20), Agelyss Wise (25,21)"
        }, {
            name: "Rogue 50",
            rank: "5",
            mob: "2nd Cohort Secutor x2, 2nd Cohort Vanguard x4",
            zone: "Eastern La Noscea",
            location: "Agelyss Wise (30,19), Agelyss Wise (30,20)"
        }]
    };
};
