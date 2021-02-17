import { DataGroup } from "../../../../DataGroup";

export const Logs_Gathering_Log_Fishing_Log_La_Noscea = function(parent) {
    return new DataGroup("La Noscea", parent).initializeTasks(tasks);
};

const tasks = [
    //-------------------------------------------- Limsa Lominsa Upper Decks
    {
        "name": "Limsa Lominsa Upper Decks",
        "level": "1",
        "zone": "Limsa Lominsa",
        "location": "Limsa Lominsa Upper Decks",
        "type": "Saltwater"
    },
    //-------------------------------------------- Limsa Lominsa Lower Decks
    {
        "name": "Limsa Lominsa Lower Decks",
        "level": "1",
        "zone": "Limsa Lominsa",
        "location": "Limsa Lominsa Lower Decks",
        "type": "Saltwater"
    },
    //-------------------------------------------- Middle La Noscea
    {
        "name": "Zephyr Drift",
        "level": "1",
        "zone": "Middle La Noscea",
        "location": "Zephyr Drift (18,21)",
        "type": "Saltwater"
    },
    {
        "name": "Rogue River",
        "level": "1",
        "zone": "Middle La Noscea",
        "location": "Zephyr Drift (21,21)",
        "type": "Saltwater"
    },
    {
        "name": "West Agelyss River",
        "level": "1",
        "zone": "Middle La Noscea",
        "location": "Summerford (20,17)",
        "type": "Freshwater"
    },
    {
        "name": "Summerford",
        "level": "5",
        "zone": "Middle La Noscea",
        "location": "Summerford (14,15)",
        "type": "Saltwater"
    },
    {
        "name": "Nym River",
        "level": "5",
        "zone": "Middle La Noscea",
        "location": "Summerford (17,14)",
        "type": "Freshwater"
    },
    {
        "name": "Woad Whisper Canyon",
        "level": "15",
        "zone": "Middle La Noscea",
        "location": "Three-malm Bend (21,12)",
        "type": "Freshwater"
    },
    //-------------------------------------------- Lower La Noscea
    {
        "name": "The Mourning Widow",
        "level": "1",
        "zone": "Lower La Noscea",
        "location": "Moraby Bay (24,23)",
        "type": "Freshwater"
    },
    {
        "name": "Moraby Bay",
        "level": "5",
        "zone": "Lower La Noscea",
        "location": "Moraby Bay (26,25)",
        "type": "Saltwater"
    },
    {
        "name": "Cedarwood",
        "level": "10",
        "zone": "Lower La Noscea",
        "location": "Cedarwood (34,17)",
        "type": "Saltwater"
    },
    {
        "name": "Oschon's Torch",
        "level": "10",
        "zone": "Lower La Noscea",
        "location": "The Gods' Grip (24,39)",
        "type": "Saltwater"
    },
    {
        "name": "Candlekeep Quay",
        "level": "10",
        "zone": "Lower La Noscea",
        "location": "The Gods' Grip (20,38)",
        "type": "Saltwater"
    },
    {
        "name": "Moraby Drydocks",
        "level": "15",
        "zone": "Lower La Noscea",
        "location": "The Gods' Grip (26,34)",
        "type": "Saltwater"
    },
    {
        "name": "Empty Heart",
        "level": "15",
        "zone": "Lower La Noscea",
        "location": "The Gods' Grip (21,34)",
        "type": "Freshwater"
    },
    {
        "name": "The Salt Strand",
        "level": "20",
        "zone": "Lower La Noscea",
        "location": "The Gods' Grip (17,36)",
        "type": "Saltwater"
    },
    {
        "name": "Blind Iron Mines",
        "level": "20",
        "zone": "Lower La Noscea",
        "location": "Cedarwood (27,15)",
        "type": "Freshwater"
    },
    //-------------------------------------------- Eastern La Noscea
    {
        "name": "South Bloodshore",
        "level": "25",
        "zone": "Eastern La Noscea",
        "location": "Bloodshore (32,34)",
        "type": "Saltwater"
    },
    {
        "name": "Costa del Sol",
        "level": "30",
        "zone": "Eastern La Noscea",
        "location": "Bloodshore (35,29)",
        "type": "Saltwater"
    },
    {
        "name": "North Bloodshore",
        "level": "35",
        "zone": "Eastern La Noscea",
        "location": "Bloodshore (32,24)",
        "type": "Saltwater"
    },
    {
        "name": "Rhotano Sea (Privateer Forecastle)",
        "level": "50",
        "zone": "Eastern La Noscea",
        "location": "Bloodshore (39,24)",
        "type": "Saltwater"
    },
    {
        "name": "Rhotano Sea (Privateer Sterncastle)",
        "level": "50",
        "zone": "Eastern La Noscea",
        "location": "Bloodshore (38,24)",
        "type": "Saltwater"
    },
    {
        "name": "Hidden Falls",
        "level": "35",
        "zone": "Eastern La Noscea",
        "location": "Bloodshore (30,23)",
        "type": "Freshwater"
    },
    {
        "name": "East Agelyss River",
        "level": "40",
        "zone": "Eastern La Noscea",
        "location": "Raincatcher Gully (22,25)",
        "type": "Saltwater"
    },
    {
        "name": "Raincatcher Gully",
        "level": "40",
        "zone": "Eastern La Noscea",
        "location": "Raincatcher Gully (20,30)",
        "type": "Freshwater"
    },
    {
        "name": "The Juggernaut",
        "level": "40",
        "zone": "Eastern La Noscea",
        "location": "Raincatcher Gully (17,32)",
        "type": "Freshwater"
    },
    {
        "name": "Red Mantis Falls",
        "level": "45",
        "zone": "Eastern La Noscea",
        "location": "Raincatcher Gully (15,27)",
        "type": "Freshwater"
    },
    {
        "name": "North Isle of Endless Summer",
        "level": "50",
        "zone": "Eastern La Noscea",
        "location": "Bloodshore (36,26)",
        "type": "Saltwater"
    },
    //-------------------------------------------- Western La Noscea
    {
        "name": "Swiftperch",
        "level": "10",
        "zone": "Western La Noscea",
        "location": "Quarterstone (34,32)",
        "type": "Saltwater"
    },
    {
        "name": "Skull Valley",
        "level": "15",
        "zone": "Western La Noscea",
        "location": "Skull Valley (25,27)",
        "type": "Saltwater"
    },
    {
        "name": "The Brewer's Beacon",
        "level": "15",
        "zone": "Western La Noscea",
        "location": "Skull Valley (30,30)",
        "type": "Saltwater"
    },
    {
        "name": "Halfstone",
        "level": "35",
        "zone": "Western La Noscea",
        "location": "Halfstone (17,20)",
        "type": "Saltwater"
    },
    {
        "name": "Isles of Umbra Northshore",
        "level": "40",
        "zone": "Western La Noscea",
        "location": "The Isles of Umbra (15,29)",
        "type": "Saltwater"
    },
    {
        "name": "The Ship Graveyard",
        "level": "45",
        "zone": "Western La Noscea",
        "location": "The Isles of Umbra (15,35)",
        "type": "Saltwater"
    },
    {
        "name": "Sapsa Spawning Grounds",
        "level": "45",
        "zone": "Western La Noscea",
        "location": "Sapsa Spawning Grounds (17,15)",
        "type": "Saltwater"
    },
    {
        "name": "Isles of Umbra Southshore",
        "level": "50",
        "zone": "Western La Noscea",
        "location": "The Isles of Umbra (12,36)",
        "type": "Saltwater"
    },
    {
        "name": "Reaver Hide",
        "level": "50",
        "zone": "Western La Noscea",
        "location": "Sapsa Spawning Grounds (14,12)",
        "type": "Saltwater"
    },
    //-------------------------------------------- Upper La Noscea
    {
        "name": "Oakwood",
        "level": "20",
        "zone": "Upper La Noscea",
        "location": "Oakwood (13,24)",
        "type": "Freshwater"
    },
    {
        "name": "Fool Falls",
        "level": "20",
        "zone": "Upper La Noscea",
        "location": "Oakwood (9,20)",
        "type": "Freshwater"
    },
    {
        "name": "Bronze Lake Shallows",
        "level": "30",
        "zone": "Upper La Noscea",
        "location": "Bronze Lake (33,24)",
        "type": "Freshwater"
    },
    {
        "name": "Northeast Bronze Lake",
        "level": "35",
        "zone": "Upper La Noscea",
        "location": "Bronze Lake (27,22)",
        "type": "Freshwater"
    },
    //-------------------------------------------- Outer La Noscea
    {
        "name": "The Long Climb",
        "level": "40",
        "zone": "Outer La Noscea",
        "location": "The Long Climb (15,11)",
        "type": "Freshwater"
    },
    {
        "name": "Northwest Bronze Lake",
        "level": "35",
        "zone": "Outer La Noscea",
        "location": "The Long Climb (19,18)",
        "type": "Freshwater"
    },
    //-------------------------------------------- Mist
    {
        "name": "Mist",
        "level": "30",
        "zone": "Mist",
        "location": "Mist",
        "type": "Saltwater"
    },
];
