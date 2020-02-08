import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Fishing_Log_La_Noscea = function(parent) {
    return new DataGroup("La Noscea", parent).initializeTasks(tasks);
};

const tasks = [
    //-------------------------------------------- Limsa Lominsa Upper Decks
    {
        level: "1",
        name: "Limsa Lominsa Upper Decks",
        zone: "Limsa Lominsa",
        location: "Limsa Lominsa Upper Decks",
        type: "Saltwater",
        req: ""
    },
    //-------------------------------------------- Limsa Lominsa Lower Decks
    {
        level: "1",
        name: "Limsa Lominsa Lower Decks",
        zone: "Limsa Lominsa",
        location: "Limsa Lominsa Lower Decks",
        type: "Saltwater",
        req: ""
    },
    //-------------------------------------------- Middle La Noscea
    {
        level: "1",
        name: "Zephyr Drift",
        zone: "Middle La Noscea",
        location: "Zephyr Drift (18,21)",
        type: "Saltwater",
        req: ""
    }, {
        level: "1",
        name: "Rogue River",
        zone: "Middle La Noscea",
        location: "Zephyr Drift (21,21)",
        type: "Saltwater",
        req: ""
    }, {
        level: "1",
        name: "West Agelyss River",
        zone: "Middle La Noscea",
        location: "Summerford (20,17)",
        type: "Freshwater",
        req: ""
    }, {
        level: "5",
        name: "Summerford",
        zone: "Middle La Noscea",
        location: "Summerford (14,15)",
        type: "Saltwater",
        req: ""
    }, {
        level: "5",
        name: "Nym River",
        zone: "Middle La Noscea",
        location: "Summerford (17,14)",
        type: "Freshwater",
        req: ""
    }, {
        level: "15",
        name: "Woad Whisper Canyon",
        zone: "Middle La Noscea",
        location: "Three-malm Bend (21,12)",
        type: "Freshwater",
        req: "Gulleye"
    },
    //-------------------------------------------- Lower La Noscea
    {
        level: "1",
        name: "The Mourning Widow",
        zone: "Lower La Noscea",
        location: "Moraby Bay (24,23)",
        type: "Freshwater",
        req: ""
    }, {
        level: "5",
        name: "Moraby Bay",
        zone: "Lower La Noscea",
        location: "Moraby Bay (26,25)",
        type: "Saltwater",
        req: ""
    }, {
        level: "10",
        name: "Cedarwood",
        zone: "Lower La Noscea",
        location: "Cedarwood (34,17)",
        type: "Saltwater",
        req: ""
    }, {
        level: "10",
        name: "Oschon's Torch",
        zone: "Lower La Noscea",
        location: "The Gods' Grip (24,39)",
        type: "Saltwater",
        req: ""
    }, {
        level: "10",
        name: "Candlekeep Quay",
        zone: "Lower La Noscea",
        location: "The Gods' Grip (20,38)",
        type: "Saltwater",
        req: ""
    }, {
        level: "15",
        name: "Moraby Drydocks",
        zone: "Lower La Noscea",
        location: "The Gods' Grip (26,34)",
        type: "Saltwater",
        req: ""
    }, {
        level: "15",
        name: "Empty Heart",
        zone: "Lower La Noscea",
        location: "The Gods' Grip (21,34)",
        type: "Freshwater",
        req: ""
    }, {
        level: "20",
        name: "The Salt Strand",
        zone: "Lower La Noscea",
        location: "The Gods' Grip (17,36)",
        type: "Saltwater",
        req: "Gulleye II"
    }, {
        level: "20",
        name: "Blind Iron Mines",
        zone: "Lower La Noscea",
        location: "Cedarwood (27,15)",
        type: "Freshwater",
        req: ""
    },
    //-------------------------------------------- Eastern La Noscea
    {
        level: "25",
        name: "South Bloodshore",
        zone: "Eastern La Noscea",
        location: "Bloodshore (32,34)",
        type: "Saltwater",
        req: ""
    }, {
        level: "30",
        name: "Costa del Sol",
        zone: "Eastern La Noscea",
        location: "Bloodshore (35,29)",
        type: "Saltwater",
        req: ""
    }, {
        level: "35",
        name: "North Bloodshore",
        zone: "Eastern La Noscea",
        location: "Bloodshore (32,24)",
        type: "Saltwater",
        req: ""
    }, {
        level: "50",
        name: "Rhotano Sea (Privateer Forecastle)",
        zone: "Eastern La Noscea",
        location: "Bloodshore (39,24)",
        type: "Saltwater",
        req: ""
    }, {
        level: "50",
        name: "Rhotano Sea (Privateer Sterncastle)",
        zone: "Eastern La Noscea",
        location: "Bloodshore (38,24)",
        type: "Saltwater",
        req: "Gulleye III"
    }, {
        level: "35",
        name: "Hidden Falls",
        zone: "Eastern La Noscea",
        location: "Bloodshore (30,23)",
        type: "Freshwater",
        req: ""
    }, {
        level: "40",
        name: "East Agelyss River",
        zone: "Eastern La Noscea",
        location: "Raincatcher Gully (22,25)",
        type: "Saltwater",
        req: ""
    }, {
        level: "40",
        name: "Raincatcher Gully",
        zone: "Eastern La Noscea",
        location: "Raincatcher Gully (20,30)",
        type: "Freshwater",
        req: ""
    }, {
        level: "40",
        name: "The Juggernaut",
        zone: "Eastern La Noscea",
        location: "Raincatcher Gully (17,32)",
        type: "Freshwater",
        req: ""
    }, {
        level: "45",
        name: "Red Mantis Falls",
        zone: "Eastern La Noscea",
        location: "Raincatcher Gully (15,27)",
        type: "Freshwater",
        req: "Gulleye III"
    }, {
        level: "50",
        name: "North Isle of Endless Summer",
        zone: "Eastern La Noscea",
        location: "Bloodshore (36,26)",
        type: "Saltwater",
        req: ""
    },
    //-------------------------------------------- Western La Noscea
    {
        level: "10",
        name: "Swiftperch",
        zone: "Western La Noscea",
        location: "Quarterstone (34,32)",
        type: "Saltwater",
        req: ""
    }, {
        level: "15",
        name: "Skull Valley",
        zone: "Western La Noscea",
        location: "Skull Valley (25,27)",
        type: "Saltwater",
        req: ""
    }, {
        level: "15",
        name: "The Brewer's Beacon",
        zone: "Western La Noscea",
        location: "Skull Valley (30,30)",
        type: "Saltwater",
        req: "Gulleye"
    }, {
        level: "35",
        name: "Halfstone",
        zone: "Western La Noscea",
        location: "Halfstone (17,20)",
        type: "Saltwater",
        req: ""
    }, {
        level: "40",
        name: "Isles of Umbra Northshore",
        zone: "Western La Noscea",
        location: "The Isles of Umbra (15,29)",
        type: "Saltwater",
        req: ""
    }, {
        level: "45",
        name: "The Ship Graveyard",
        zone: "Western La Noscea",
        location: "The Isles of Umbra (15,35)",
        type: "Saltwater",
        req: ""
    }, {
        level: "45",
        name: "Sapsa Spawning Grounds",
        zone: "Western La Noscea",
        location: "Sapsa Spawning Grounds (17,15)",
        type: "Saltwater",
        req: ""
    }, {
        level: "50",
        name: "Isles of Umbra Southshore",
        zone: "Western La Noscea",
        location: "The Isles of Umbra (12,36)",
        type: "Saltwater",
        req: "Gulleye III"
    }, {
        level: "50",
        name: "Reaver Hide",
        zone: "Western La Noscea",
        location: "Sapsa Spawning Grounds (14,12)",
        type: "Saltwater",
        req: ""
    },
    //-------------------------------------------- Upper La Noscea
    {
        level: "20",
        name: "Oakwood",
        zone: "Upper La Noscea",
        location: "Oakwood (13,24)",
        type: "Freshwater",
        req: ""
    }, {
        level: "20",
        name: "Fool Falls",
        zone: "Upper La Noscea",
        location: "Oakwood (9,20)",
        type: "Freshwater",
        req: ""
    }, {
        level: "30",
        name: "Bronze Lake Shallows",
        zone: "Upper La Noscea",
        location: "Bronze Lake (33,24)",
        type: "Freshwater",
        req: ""
    }, {
        level: "35",
        name: "Northeast Bronze Lake",
        zone: "Upper La Noscea",
        location: "Bronze Lake (27,22)",
        type: "Freshwater",
        req: ""
    },
    //-------------------------------------------- Outer La Noscea
    {
        level: "40",
        name: "The Long Climb",
        zone: "Outer La Noscea",
        location: "The Long Climb (15,11)",
        type: "Freshwater",
        req: "Gulleye III"
    }, {
        level: "35",
        name: "Northwest Bronze Lake",
        zone: "Outer La Noscea",
        location: "The Long Climb (19,18)",
        type: "Freshwater",
        req: ""
    },
    //-------------------------------------------- Mist
    {
        level: "30",
        name: "Mist",
        zone: "Mist",
        location: "Mist",
        type: "Saltwater",
        req: ""
    },
];
