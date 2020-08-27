import { DataGroup } from "../DataGroup";

export const Collectables_Emotes = function(parent) {
    return new DataGroup("Emotes", parent).initializeTasks(tasks, [
        { header: 'Emote', key: 'name', },
        { header: 'Command', key: 'command', },
        { header: 'Unlock', key: 'unlock' },
    ]);
};

const tasks = [
    {
        name: "Aback",
        command: "/aback",
        unlock: "Kasumi - Gold Saucer - 5,000 gil"
    }, {
        name: "At Ease",
        command: "/atease",
        unlock: "40,000 Company Seals"
    }, {
        name: "Attention",
        command: "/attention",
        unlock: "40,000 Company Seals"
    }, {
        name: "Backflip",
        command: "/backflip, /bflip",
        unlock: "Final Fantasy XIV Online Store"
    }, {
        name: "Ball Dance",
        command: "/balldance",
        unlock: "Quest: Help Me, Lord of the Dance (Level 14 Thanalan Sidequest)"
    }, {
        name: "Battle Stance",
        command: "/battlestance, /bstance",
        unlock: "Quest: Causes and Costs (Level 60 Main Scenario Quest)"
    }, {
        name: "Bee's Knees",
        command: "/beesknees",
        unlock: "80,000 MGP"
    }, {
        name: "Big Grin",
        command: "/biggrin",
        unlock: "20,000 MPG"
    }, {
        name: "Black Ranger Pose A",
        command: "/blackrangerposea, /brpa",
        unlock: "Moonfire Faire (2016), Final Fantasy XIV Online Store"
    }, {
        name: "Black Ranger Pose B",
        command: "/blackrangerposeb, /brpb",
        unlock: "Moonfire Faire (2016), Final Fantasy XIV Online Store"
    }, {
        name: "Bomb Dance",
        command: "/bombdance",
        unlock: "Moonfire Faire (2014), Final Fantasy XIV Online Store"
    }, {
        name: "Box",
        command: "/box",
        unlock: "Quest: Arenvald's Adventure (Level 70 Main Scenario Quest)"
    }, {
        name: "Box Step",
        command: "/boxstep",
        unlock: "Final Fantasy XIV Online Store"
    }, {
        name: "Breath Control",
        command: "/breathcontrol",
        unlock: "Achievement: Dear Leader I"
    }, {
        name: "Charmed",
        command: "/charmed",
        unlock: "Madhura - Castellum Velodyna - 5 Ananta Dreamstaffs"
    }, {
        name: "Cheer Jump",
        command: "/cheerjump",
        unlock: "Little Ladies' Day (2018), Final Fantasy XIV Online Store"
    }, {
        name: "Cheer On",
        command: "/cheeron",
        unlock: "Little Ladies' Day (2018), Final Fantasy XIV Online Store"
    }, {
        name: "Cheer Wave",
        command: "/cheerwave",
        unlock: "Little Ladies' Day (2018), Final Fantasy XIV Online Store"
    }, {
        name: "Confirm",
        command: "/confirm",
        unlock: "The Lost Canals Of Uznair, The Hidden Canals Of Uznair, The Shifting Altars Of Uznair"
    }, {
        name: "Consider",
        command: "/consider, /hmm",
        unlock: ""
    }, {
        name: "Crimson Lotus",
        command: "/crimsonlotus",
        unlock: "Final Fantasy XIV Online Store"
    }, {
        name: "Diamond Dust",
        command: "/iceheart",
        unlock: "Item code included with Meister Quality Figure Shiva"
    }, {
        name: "Dote",
        command: "/dote",
        unlock: "Valentione's Day (2017), Final Fantasy XIV Online Store"
    }, {
        name: "Eastern Bow",
        command: "/easternbow, /ebow",
        unlock: "Quest: Confederate Consternation (Level 62 Main Scenario Quest)"
    }, {
        name: "Eastern Dance",
        command: "/edance",
        unlock: "Final Fantasy XIV Online Store"
    }, {
        name: "Eastern Greeting",
        command: "/easterngreeting",
        unlock: "Final Fantasy XIV Online Store"
    }, {
        name: "Eastern Stretch",
        command: "/estretch",
        unlock: "Final Fantasy XIV Online Store"
    }, {
        name: "Eat Bread",
        command: "/bread, /breakfast",
        unlock: "Kupo of Fortune"
    }, {
        name: "Egi Glamour",
        command: "/egiglamour",
        unlock: "Level 50 side quest \"An Egi by Any Other Name\""
    }, {
        name: "Elucidate",
        command: "/elucidate",
        unlock: "15,000 Wolf Marks"
    }, {
        name: "Embrace",
        command: "/embrace",
        unlock: "Quest: The Ties That Bind (Level 1 Other Quest)"
    }, {
        name: "Endure",
        command: "/endure",
        unlock: "Quest: The Call (Level 70 Main Scenario Quest)"
    }, {
        name: "Eureka",
        command: "/eureka",
        unlock: "The Make It Rain Campain (2016), Final Fantasy XIV Online Store"
    }, {
        name: "Fist Bump",
        command: "/fistbump",
        unlock: "Recruit a Friend Campaign reward"
    }, {
        name: "Fist Pump",
        command: "/fistpump",
        unlock: "Moisture-warped Lockbox - Eureka Hydatos"
    }, {
        name: "Flame Dance",
        command: "/flamedance",
        unlock: "Moonfire Faire (2020)"
    }, {
        name: "Get Fantasy",
        command: "/getfantasy",
        unlock: "Final Fantasy XIV Online Store"
    }, {
        name: "Gold Dance",
        command: "/golddance, /gdance",
        unlock: "80,000 MPG"
    }, {
        name: "Goobbue Do",
        command: "/mysterymachine, /goobbuedo",
        unlock: "Final Fantasy XIV Online Store"
    }, {
        name: "Gratuity",
        command: "/gratuity, /makeithail",
        unlock: "Quest: What a Wonder-full World (Level 70 Side Story Quest)"
    }, {
        name: "Greeting",
        command: "/greet",
        unlock: "Quest: Tidings from the East (Level 70 Main Scenario Quest)"
    }, {
        name: "Harvest Dance",
        command: "/harvestdance",
        unlock: "Quest: Saw That One Coming (Level 14 Black Shroud Sidequest)"
    }, {
        name: "Haurchefant",
        command: "/haurchefant",
        unlock: "Quest: The Burdens We Bear (Level 60 Side Story Quest)"
    }, {
        name: "Headache",
        command: "/headache",
        unlock: "Maudlin Latool Ja - Ul'dah - 400 Allied Seals (60 BLU)"
    }, {
        name: "Heel Toe",
        command: "/heeltoe",
        unlock: "Final Fantasy XIV Online Store"
    }, {
        name: "Hum",
        command: "/hum",
        unlock: "Quest: The Fire-bird Down Below (Level 70 Chronicles of a New Era Quest)"
    }, {
        name: "Huzzah",
        command: "/huzzah, /hurray",
        unlock: "The Rising (2014), Final Fantasy XIV Online Store"
    }, {
        name: "Imperial Salute",
        command: "/imperialsalute",
        unlock: "Quest: Acting the Part (Level 45 Main Scenario Quest)"
    }, {
        name: "Insist",
        command: "/insist",
        unlock: "1,800 Skybuilders' Scrips"
    }, {
        name: "Lali-ho",
        command: "/laliho",
        unlock: "Quest: Learning to Lali-ho (Level 70 Kholusia Sidequest)"
    }, {
        name: "Lali-hop",
        command: "/lalihop",
        unlock: "8 Hammered Frogments"
    }, {
        name: "Lean",
        command: "/lean",
        unlock: "1,800 Skybuilders' Scrips"
    }, {
        name: "Manderville Dance",
        command: "/mandervilledance",
        unlock: "Quest: The Hammer (Level 50 Side Story Quest)"
    }, {
        name: "Manderville Mambo",
        command: "/mandervillemambo, /mmambo",
        unlock: "Quest: Don't Do the Dewprism (Level 70 Side Story Quest)"
    }, {
        name: "Megaflare",
        command: "/megaflare",
        unlock: "Final Fantasy XIV Online Store"
    }, {
        name: "Moogle Dance",
        command: "/mogdance",
        unlock: "Quest: Piecing Together the Past (Level 50 Beast Tribe Quest)"
    }, {
        name: "Moonlift Dance",
        command: "/moonlift",
        unlock: "Quest: Eternity, Loyalty, Honesty (Level 60 Side Story Quest)"
    }, {
        name: "Most Gentlemanly",
        command: "/hildy",
        unlock: "Quest: Her Last Vow (Level 50 Side Story Quest)"
    }, {
        name: "Play Dead",
        command: "/playdead, /pdead",
        unlock: "Final Fantasy XIV Online Store"
    }, {
        name: "Ponder",
        command: "/ponder, /makeyougohmmm",
        unlock: "Quest: Emmisary of the Dawn (Level 70 Main Scenario Quest)"
    }, {
        name: "Popoto Step",
        command: "/popotostep",
        unlock: "Final Fantasy XIV Online Store"
    }, {
        name: "Power Up",
        command: "/powerup",
        unlock: "Final Fantasy XIV Online Store"
    }, {
        name: "Pretty Please",
        command: "/prettyplease, /pplease",
        unlock: "Final Fantasy XIV Online Store"
    }, {
        name: "Push-ups",
        command: "/pushups",
        unlock: "Achievement: Dear Leader I"
    }, {
        name: "Read A Book",
        command: "/read",
        unlock: "1,800 Skybuilders' Scrips"
    }, {
        name: "Red Ranger Pose A",
        command: "/redrangerposea, /rrpa",
        unlock: "Moonfire Faire (2016), Final Fantasy XIV Online Store"
    }, {
        name: "Red Ranger Pose B",
        command: "/redrangerposeb, /rrpb",
        unlock: "Moonfire Faire (2016), Final Fantasy XIV Online Store"
    }, {
        name: "Reflect",
        command: "/reflect",
        unlock: "10,000 Company Seals"
    }, {
        name: "Reprimand",
        command: "/reprimand",
        unlock: "15,0000 Wolf Marks"
    }, {
        name: "Ritual Prayer",
        command: "/ritualprayer",
        unlock: "Shikitahe - Tamamizu - 3 Kojin Sango"
    }, {
        name: "Scheme",
        command: "/scheme",
        unlock: "Heat-warped Lockbox - Eureka Pyros"
    }, {
        name: "Senor Sabotender",
        command: "/sabotender",
        unlock: "The Make It Rain Campaign (2019)"
    }, {
        name: "Shiver",
        command: "/shiver",
        unlock: "Cold-warped Lockbox - Eureka Pagos"
    }, {
        name: "Side Step",
        command: "/sidestep",
        unlock: "Final Fantasy XIV Online Store"
    }, {
        name: "Sit-ups",
        command: "/situps",
        unlock: "Achievement: Dear Leader I"
    }, {
        name: "Snap",
        command: "",
        unlock: ""
    }, {
        name: "Songbird",
        command: "/songbird",
        unlock: "Little Ladies' Day (2017), Final Fantasy XIV Online Store"
    }, {
        name: "Spectacles",
        command: "/spectacles",
        unlock: "Quest: Letters from No One (Level 60 Side Story Quest)"
    }, {
        name: "Splash",
        command: "/splash",
        unlock: "Moonfire Faire (2018), Final Fantasy XIV Online Store"
    }, {
        name: "Squats",
        command: "/squats",
        unlock: "Achievement: Dear Leader I"
    }, {
        name: "Step Dance",
        command: "/stepdance",
        unlock: "Quest: Good for What Ales You (Level 14 La Noscea Sidequest)"
    }, {
        name: "Sundrop Dance",
        command: "/sundance, /sundropdance",
        unlock: "Quest: Sundrop the Beat (Level 50 Beast Tribe Quest)"
    }, {
        name: "Sweat",
        command: "/sweat",
        unlock: "Confederate Custodian - Crick - 10 Empyrean Potsherds"
    }, {
        name: "Thavnairian Dance",
        command: "/thavnairiandance",
        unlock: "80,000 MGP"
    }, {
        name: "Throw",
        command: "/throw",
        unlock: "Quest: Toss Fit Workout (Level 36 Coerthas Sidequest)"
    }, {
        name: "Toast",
        command: "/toast",
        unlock: "Final Fantasy XIV Online Store"
    }, {
        name: "Tomestone",
        command: "/tomestone",
        unlock: "Available if registered in the Companion app"
    }, {
        name: "Tremble",
        command: "/tremble",
        unlock: "Eschina - Rhalgr's Reach - 6 Mythic Clan Mark Logs"
    }, {
        name: "Ultima",
        command: "/ultima",
        unlock: "Item code included with Meister Quality Figure Ultima, the High Seraph"
    }, {
        name: "Victory",
        command: "/vpose",
        unlock: "Quest: A Spectacle for the Ages (Level 60 Main Scenario Quest)"
    }, {
        name: "Water Flip",
        command: "/waterflip",
        unlock: "Quest: In Soroban We Trust (Level 63 Main Scenario Quest)"
    }, {
        name: "Winded",
        command: "/winded",
        unlock: "Eschina - Rhalgr's Reach - 6 Mythic Clan Mark Logs"
    }, {
        name: "Yellow Ranger Pose A",
        command: "/yellowrangerposea, /yrpa",
        unlock: "Moonfire Faire (2016), Final Fantasy XIV Online Store"
    }, {
        name: "Yellow Ranger Pose B",
        command: "/yellowrangerposeb, /yrpb",
        unlock: "Moonfire Faire (2016), Final Fantasy XIV Online Store"
    }, {
        name: "Yol Dance",
        command: "/yoldance",
        unlock: "Gyosho - Dhoro Iloh - 8 Namazu Koban"
    }, {
        name: "Zantetsuken",
        command: "/zantetsuken, /ztk",
        unlock: "Item code included with Meister Quality Figure Odin"
    }
];
