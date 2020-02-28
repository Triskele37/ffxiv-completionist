import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Duty&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Exploration_Duty = function(parent) {
    return new DataGroup("Duty", parent).initializeTasks(tasks);
};

const tasks = [
    //----------------------------------------------------------------------------- ARR Dungeons
    {
        description: "Discover every location within Sastasha.",
        name: "Mapping the Realm: Sastasha",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Tam-Tara Deepcroft.",
        name: "Mapping the Realm: Tam-Tara Deepcroft",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Copperbell Mines.",
        name: "Mapping the Realm: Copperbell Mines",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Halatali.",
        name: "Mapping the Realm: Halatali",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Thousand Maws of Toto-Rak.",
        name: "Mapping the Realm: Thousand Maws of Toto-Rak",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Haukke Manor.",
        name: "Mapping the Realm: Haukke Manor",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Brayflox's Longstop.",
        name: "Mapping the Realm: Brayflox's Longstop",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Sunken Temple of Qarn.",
        name: "Mapping the Realm: Sunken Temple of Qarn",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Cutter's Cry.",
        name: "Mapping the Realm: Cutter's Cry",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Stone Vigil.",
        name: "Mapping the Realm: Stone Vigil",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Dzemael Darkhold.",
        name: "Mapping the Realm: Dzemael Darkhold",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Aurum Vale.",
        name: "Mapping the Realm: Aurum Vale",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Wanderer's Palace.",
        name: "Mapping the Realm: The Wanderer's Palace",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Castrum Meridianum.",
        name: "Mapping the Realm: Castrum Meridianum",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Praetorium.",
        name: "Mapping the Realm: Praetorium",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Amdapor Keep.",
        name: "Mapping the Realm: Amdapor Keep",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Pharos Sirius.",
        name: "Mapping the Realm: Pharos Sirius",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Copperbell Mines (Hard).",
        name: "Remapping the Realm: Copperbell Mines",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Haukke Manor (Hard).",
        name: "Remapping the Realm: Haukke Manor",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Lost City of Amdapor.",
        name: "Mapping the Realm: The Lost City of Amdapor",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Halatali (Hard).",
        name: "Remapping the Realm: Halatali",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Brayflox's Longstop (Hard).",
        name: "Remapping the Realm: Brayflox's Longstop",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location on Hullbreaker Isle.",
        name: "Mapping the Realm: Hullbreaker Isle",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in the Tam-Tara Deepcroft (Hard).",
        name: "Remapping the Realm: Tam-Tara Deepcroft",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in the Stone Vigil (Hard).",
        name: "Remapping the Realm: Stone Vigil",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Snowcloak.",
        name: "Mapping the Realm: Snowcloak",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Sastasha (Hard).",
        name: "Remapping the Realm: Sastasha",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Sunken Temple of Qarn (Hard).",
        name: "Remapping the Realm: Sunken Temple of Qarn",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the fallen Agrius.",
        name: "Mapping the Realm: The Keeper of the Lake",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Wanderer's Palace (Hard).",
        name: "Remapping the Realm: The Wanderer's Palace",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Amdapor Keep (Hard).",
        name: "Remapping the Realm: Amdapor Keep",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- HW Dungeons
    {
        description: "Discover every location in the Dusk Vigil.",
        name: "Mapping the Realm: Dusk Vigil",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Sohm Al.",
        name: "Mapping the Realm: Sohm Al",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in the Aery.",
        name: "Mapping the Realm: The Aery",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Vault.",
        name: "Mapping the Realm: The Vault",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in the Great Gubal Library.",
        name: "Mapping the Realm: Great Gubal Library",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in the Aetherochemical Research Facility.",
        name: "Mapping the Realm: Aetherochemical Research Facility",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location on Neverreap.",
        name: "Mapping the Realm: Neverreap",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in the Fractal Continuum.",
        name: "Mapping the Realm: Fractal Continuum",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Saint Mocianne's Arboretum.",
        name: "Mapping the Realm: Saint Mocianne's Arboretum",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Pharos Sirius (Hard).",
        name: "Remapping the Realm: Pharos Sirius",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Antitower.",
        name: "Mapping the Realm: The Antitower",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Lost City of Amdapor (Hard).",
        name: "Remapping the Realm: The Lost City of Amdapor",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in Sohr Khai.",
        name: "Mapping the Realm: Sohr Khai",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in Hullbreaker Isle (Hard).",
        name: "Remapping the Realm: Hullbreaker Isle",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Xelphatol.",
        name: "Mapping the Realm: Xelphatol",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Great Gubal Library (Hard).",
        name: "Remapping the Realm: Great Gubal Library",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Baelsar's Wall.",
        name: "Mapping the Realm: Baelsar's Wall",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Sohm Al (Hard).",
        name: "Remapping the Realm: Sohm Al",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- SB Dungeons
    {
        description: "Discover every location within the Ship Graveyard.",
        name: "Mapping the Realm: The Ship Graveyard",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Shisui of the Violet Tides.",
        name: "Mapping the Realm: Shisui of the Violet Tides",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Bardam's Mettle.",
        name: "Mapping the Realm: Bardam's Mettle",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Doma Castle.",
        name: "Mapping the Realm: Doma Castle",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Castrum Abania.",
        name: "Mapping the Realm: Castrum Abania",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Ala Mhigo.",
        name: "Mapping the Realm: Ala Mhigo",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Kugane Castle.",
        name: "Mapping the Realm: Kugane Castle",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Temple of the Fist.",
        name: "Mapping the Realm: The Temple of the Fist",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Drowned City of Skalla.",
        name: "Mapping the Realm: Skalla",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Hells' Lid.",
        name: "Mapping the Realm: Hells' Lid",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in the Fractal Continuum (Hard).",
        name: "Remapping the Realm: Fractal Continuum",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Swallow's Compass.",
        name: "Mapping the Realm: The Swallow's Compass",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Burn.",
        name: "Mapping the Realm: The Burn",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in Saint Mocianne's Arboretum (Hard).",
        name: "Remapping the Realm: Saint Mocianne's Arboretum",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Ghimlyt Dark.",
        name: "Mapping the Realm: The Ghimlyt Dark",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- ShB Dungeons
    {
        description: "Discover every location in Holminster Switch.",
        name: "Mapping the Realm: Holminster Switch",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Dohn Mheg.",
        name: "Mapping the Realm: Dohn Mheg",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Qitana Ravel.",
        name: "Mapping the Realm: The Qitana Ravel",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Malikah's Well.",
        name: "Mapping the Realm: Malikah's Well",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Mt. Gulg.",
        name: "Mapping the Realm: Mt. Gulg",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Amaurot.",
        name: "Mapping the Realm: Amaurot",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Twinning.",
        name: "Mapping the Realm: The Twinning",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Akadaemia Anyder.",
        name: "Mapping the Realm: Akadaemia Anyder",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Grand Cosmos.",
        name: "Mapping the Realm: The Grand Cosmos",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Anamnesis Anyder",
        name: "Mapping the Realm: Anamnesis Anyder",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- ARR 24 Raids
    {
        description: "Discover every location in the Labyrinth of the Ancients.",
        name: "Mapping the Realm: Labyrinth of the Ancients",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in Syrcus Tower.",
        name: "Mapping the Realm: Syrcus Tower",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the World of Darkness.",
        name: "Mapping the Realm: The World of Darkness",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- ARR 8 Raids
    {
        description: "Discover every location within the first turn of the Binding Coil of Bahamut.",
        name: "Mapping the Realm: The Binding Coil of Bahamut I",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the second turn of the Binding Coil of Bahamut.",
        name: "Mapping the Realm: The Binding Coil of Bahamut II",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the third turn of the Binding Coil of Bahamut.",
        name: "Mapping the Realm: The Binding Coil of Bahamut III",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the fifth turn of the Binding Coil of Bahamut.",
        name: "Mapping the Realm: The Binding Coil of Bahamut V",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the first turn of the Second Coil of Bahamut.",
        name: "Mapping the Realm: The Second Coil of Bahamut I",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the second turn of the Second Coil of Bahamut.",
        name: "Mapping the Realm: The Second Coil of Bahamut II",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the third turn of the Second Coil of Bahamut.",
        name: "Mapping the Realm: The Second Coil of Bahamut III",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the first turn of the Final Coil of Bahamut.",
        name: "Mapping the Realm: The Final Coil of Bahamut I",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the second turn of the Final Coil of Bahamut.",
        name: "Mapping the Realm: The Final Coil of Bahamut II",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- HW 24 Raids
    {
        description: "Discover every location on the Void Ark.",
        name: "Mapping the Realm: The Void Ark",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in the Weeping City of Mhach.",
        name: "Mapping the Realm: The Weeping City of Mhach",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Dun Scaith.",
        name: "Mapping the Realm: Dun Scaith",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- HW 8 Raids
    {
        description: "Discover every location within Alexander: Gordias - the Fist of the Father.",
        name: "Mapping the Realm: Gordias I",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Alexander: Gordias - the Cuff of the Father.",
        name: "Mapping the Realm: Gordias II",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Alexander: Gordias - the Arm of the Father.",
        name: "Mapping the Realm: Gordias III",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Alexander: Midas - the Fist of the Son.",
        name: "Mapping the Realm: Midas I",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Alexander: Midas - the Cuff of the Son.",
        name: "Mapping the Realm: Midas II",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Alexander: Midas - the Arm of the Son.",
        name: "Mapping the Realm: Midas III",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Alexander - the Eyes of the Creator.",
        name: "Mapping the Realm: Alexander I",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Alexander - the Breath of the Creator.",
        name: "Mapping the Realm: Alexander II",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Alexander - the Heart of the Creator.",
        name: "Mapping the Realm: Alexander III",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- SB 24 Raids
    {
        description: "Discover every location within the Royal City of Rabanastre.",
        name: "Mapping the Realm: Rabanastre",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Ridorana Lighthouse.",
        name: "Mapping the Realm: The Ridorana Lighthouse",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Orbonne Monastery.",
        name: "Mapping the Realm: The Orbonne Monastery",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- ShB 24 Raids
    {
        description: "Discover every location within the Copied Factory.",
        name: "Mapping the Realm: The Copied Factory",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Diadem
    {
        description: "Discover every location in the Diadem.",
        name: "Mapping the Realm: The Diadem",
        points: 10,
        reward: "-"
    }, {
        description: "Receive an evaluation of 200 or better on an exploratory mission to the Diadem.",
        name: "Foot in the Clouds I",
        points: 5,
        reward: "-"
    }, {
        description: "Receive an evaluation of 200 or better on a total of 10 exploratory missions to the Diadem.",
        name: "Foot in the Clouds II",
        points: 10,
        reward: "-"
    }, {
        description: "Receive an evaluation of 200 or better on a total of 100 exploratory missions to the Diadem.",
        name: "Foot in the Clouds III",
        points: 20,
        reward: "-"
    }, {
        description: "Receive an evaluation of 400 or better on an exploratory mission to the Diadem.",
        name: "Hand in the Clouds I",
        points: 5,
        reward: "-"
    }, {
        description: "Receive an evaluation of 400 or better on a total of 10 exploratory missions to the Diadem.",
        name: "Hand in the Clouds II",
        points: 10,
        reward: "-"
    }, {
        description: "Receive an evaluation of 400 or better on a total of 100 exploratory missions to the Diadem.",
        name: "Hand in the Clouds III",
        points: 20,
        reward: "-"
    }, {
        description: "Receive an evaluation of 600 or better on an exploratory mission to the Diadem.",
        name: "Head in the Clouds I",
        points: 5,
        reward: "-"
    }, {
        description: "Receive an evaluation of 600 or better on a total of 10 exploratory missions to the Diadem.",
        name: "Head in the Clouds II",
        points: 10,
        reward: "-"
    }, {
        description: "Receive an evaluation of 600 or better on a total of 100 exploratory missions to the Diadem.",
        name: "Head in the Clouds III",
        points: 20,
        reward: "-"
    }, {
        description: "Slay a notorious monster on an exploratory mission to the Diadem of any difficulty.",
        name: "Crown of Thorns I",
        points: 5,
        reward: "-"
    }, {
        description: "Slay a total of 5 notorious monsters on exploratory missions to the Diadem of any difficulty.",
        name: "Crown of Thorns II",
        points: 5,
        reward: "-"
    }, {
        description: "Slay a total of 10 notorious monsters on exploratory missions to the Diadem of any difficulty.",
        name: "Crown of Thorns III",
        points: 5,
        reward: "-"
    }, {
        description: "Slay a total of 50 notorious monsters on exploratory missions to the Diadem of any difficulty.",
        name: "Crown of Thorns IV",
        points: 10,
        reward: "-"
    }, {
        description: "Slay a total of 100 notorious monsters on exploratory missions to the Diadem of any difficulty.",
        name: "Crown of Thorns V",
        points: 20,
        reward: "Title: Notorious Monster Slayer"
    }, {
        description: "Complete a Haillenarte exploratory operation in the Diadem.",
        name: "Have a Haillenarte I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 Haillenarte exploratory operations in the Diadem.",
        name: "Have a Haillenarte II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 30 Haillenarte exploratory operations in the Diadem.",
        name: "Have a Haillenarte III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete 100 Haillenarte exploratory operations in the Diadem.",
        name: "Have a Haillenarte IV",
        points: 20,
        reward: "-"
    }, {
        description: "Successfully complete 30 FATEs in the Diadem.",
        name: "Crowning Achievement I",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully complete 100 FATEs in the Diadem.",
        name: "Crowning Achievement II",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully complete 300 FATEs in the Diadem.",
        name: "Crowning Achievement III",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully complete a Haillenarte exploratory operation on the Missing Gem.",
        name: "Gem and the Hallowed Lands",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Eureka
    {
        description: "Discover every location within the Forbidden Land, Eureka Anemos.",
        name: "Mapping the Realm: Eureka Anemos",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Forbidden Land, Eureka Pagos.",
        name: "Mapping the Realm: Eureka Pagos",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Forbidden Land, Eureka Pyros.",
        name: "Mapping the Realm: Eureka Pyros",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Forbidden Land, Eureka Hydatos.",
        name: "Mapping the Realm: Eureka Hydatos",
        points: 10,
        reward: "-"
    }, {
        description: "Complete all the scenario quests within the Forbidden Land, Eureka Anemos.",
        name: "Making the Most of Anemos",
        points: 10,
        reward: "-"
    }, {
        description: "Complete all the scenario quests within the Forbidden Land, Eureka Pagos.",
        name: "Making the Most of Pagos",
        points: 10,
        reward: "-"
    }, {
        description: "Complete all the scenario quests within the Forbidden Land, Eureka Pyros.",
        name: "Making the Most of Pyros",
        points: 10,
        reward: "-"
    }, {
        description: "Complete all the story objectives within the Forbidden Land, Eureka Hydatos.",
        name: "Making the Most of Hydatos",
        points: 10,
        reward: "Title: Eurekan Explorer"
    }, {
        description: "Truly complete all the story objectives within the Forbidden Land, Eureka Hydatos.",
        name: "Really Making the Most of Hydatos",
        points: 0,
        reward: "-"
    },
];
