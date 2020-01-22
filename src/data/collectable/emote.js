export const Emotes = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.emote`;

    return {
        name: "Emote",
    	storageKey,
        columns: [
    		{ header: 'Emote', key: 'name', },
    		{ header: 'Command', key: 'command', },
    		{ header: 'Unlock', key: 'unlock' },
    	],
        tasks: [{
            name: "Aback",
            command: "/aback",
            unlock: "Purchased from Kasumi at the Gold Saucer for 5,000 gil"
        }, {
            name: "At Ease",
            command: "/atease",
            unlock: "Trade with Grand Company Quartermasters"
        }, {
            name: "Attention",
            command: "/attention",
            unlock: "Trade with Grand Company Quartermasters"
        }, {
            name: "Backflip",
            command: "/backflip, /bflip",
            unlock: "MogStation: 7 USD / 4.9 EUR"
        }, {
            name: "Ball Dance",
            command: "/balldance",
            unlock: "Level 14 side quest \"Help Me, Lord of the Dance\""
        }, {
            name: "Battle Stance",
            command: "/battlestance, /bstance",
            unlock: "Level 60 main quest \"Causes and Costs\""
        }, {
            name: "Big Grin",
            command: "/biggrin",
            unlock: "Bought from the main counter in the Gold Saucer for 20,000 MPG"
        }, {
            name: "Black Ranger Pose A",
            command: "/blackrangerposea, /brpa",
            unlock: "Moonfire Faire (2016), MogStation: 3 USD / 2.1 EUR"
        }, {
            name: "Black Ranger Pose B",
            command: "/blackrangerposeb, /brpb",
            unlock: "Moonfire Faire (2016), MogStation: 3 USD / 2.1 EUR"
        }, {
            name: "Bomb Dance",
            command: "/bombdance",
            unlock: "Moonfire Faire (2014), MogStation: 2 USD / 1.4 EUR"
        }, {
            name: "Box",
            command: "/box",
            unlock: "Level 70 main quest \"Arenvald's Adventure\""
        }, {
            name: "Box Step",
            command: "/boxstep",
            unlock: "MogStation: 7 USD / 4.9 EUR"
        }, {
            name: "Breath Control",
            command: "/breathcontrol",
            unlock: "Achievement \"Dear Leader I\""
        }, {
            name: "Charmed",
            command: "/charmed",
            unlock: "Trade with Madhura at Castellum Velodyna"
        }, {
            name: "Cheer Jump",
            command: "/cheerjump",
            unlock: "Little Ladies' Day (2018)"
        }, {
            name: "Cheer On",
            command: "/cheeron",
            unlock: "Little Ladies' Day (2018)"
        }, {
            name: "Cheer Wave",
            command: "/cheerwave",
            unlock: "Little Ladies' Day (2018)"
        }, {
            name: "Confirm",
            command: "/confirm",
            unlock: "Treasure Maps - Lost Canals of Uznair"
        }, {
            name: "Crimson Lotus",
            command: "/crimsonlotus",
            unlock: "MogStation: 7 USD / 4.9 EUR"
        }, {
            name: "Diamond Dust",
            command: "/iceheart",
            unlock: "Meister Quality Shiva Figure Order Bonus"
        }, {
            name: "Dote",
            command: "/dote",
            unlock: "Level 15 Valentione's Day (2017) quest \"Once More with Feeling\". MogStation: 2 USD / 1.4 EUR"
        }, {
            name: "Eastern Bow",
            command: "/easternbow, /ebow",
            unlock: "Level 62 main quest \"Confederate Consternation\""
        }, {
            name: "Eastern Dance",
            command: "/edance",
            unlock: "MogStation: 7 USD / 4.9 EUR"
        }, {
            name: "Eastern Greeting",
            command: "/easterngreeting",
            unlock: "MogStation: 7 USD / 4.9 EUR"
        }, {
            name: "Eastern Stretch",
            command: "/estretch",
            unlock: "MogStation: 7 USD / 4.9 EUR"
        }, {
            name: "Egi Glamour",
            command: "/egiglamour",
            unlock: "Level 50 side quest \"An Egi by Any Other Name\""
        }, {
            name: "Elucidate",
            command: "/elucidate",
            unlock: "Bought from the Storm Sergeant (Wolves' Den Provisioner) in Wolves' Den Pier for 15,000 Wolf Marks"
        }, {
            name: "Embrace",
            command: "/embrace",
            unlock: "Level 1 quest \"The Ties that Bind\".  Get married."
        }, {
            name: "Endure",
            command: "/endure",
            unlock: "Level 70 Main Quest \"The Call\""
        }, {
            name: "Eureka",
            command: "/eureka",
            unlock: "Level 15 Make it Rain Campain (2016) quest \"An Inspector's Gadget\". MogStation: 2 USD / 1.4 EUR"
        }, {
            name: "Fist Bump",
            command: "/fistbump",
            unlock: "Received from the \"Recruit a Friend Campaign\" as either recruiter or recruited."
        }, {
            name: "Fist Pump",
            command: "/fistpump",
            unlock: "Duty \"The Forbidden Land, Eureka Hydatos\""
        }, {
            name: "Get Fantasy",
            command: "/getfantasy",
            unlock: "MogStation: 7 USD / 4.9 EUR"
        }, {
            name: "Gold Dance",
            command: "/golddance, /gdance",
            unlock: "Bought from the main counter in the Gold Saucer for 80,000 MPG"
        }, {
            name: "Gratuity",
            command: "/gratuity, /makeithail",
            unlock: "Level 70 side quest \"What a Wonder-full World\""
        }, {
            name: "Greeting",
            command: "/greet",
            unlock: "Level 70 main quest \"Tidings from the East\""
        }, {
            name: "Harvest Dance",
            command: "/harvestdance",
            unlock: "Level 14 side quest \"Saw That One Coming\""
        }, {
            name: "Haurchefant",
            command: "/haurchefant",
            unlock: "Level 60 side quest \"The Burdens We Bear\""
        }, {
            name: "Headache",
            command: "/headache",
            unlock: "Purchased from Maudlin Latool Ja in Ul'dah for 400 Allied Seals"
        }, {
            name: "Hum",
            command: "/hum",
            unlock: "Quest \"Hell's Kier (Normal)\""
        }, {
            name: "Huzzah",
            command: "/huzzah, /hurray",
            unlock: "Level 15 The Rising (2014) quest \"What Blooms in the Night\". MogStation: 2 USD / 1.4 EUR"
        }, {
            name: "Imperial Salute",
            command: "/imperialsalute",
            unlock: "Level 45 main quest \"Acting the Part\""
        }, {
            name: "Lali-ho",
            command: "/laliho",
            unlock: "Sidequest chain continuing on form lvl 78 Aether Current quest"
        }, {
            name: "Lean",
            command: "/lean",
            unlock: "Purchased from Enie in The Firmament for 1,800 Skybuilders' Scrips"
        }, {
            name: "Manderville Dance",
            command: "/mandervilledance",
            unlock: "Level 50 side story quest \"The Hammer\""
        }, {
            name: "Manderville Mambo",
            command: "/mandervillemambo, /mmambo",
            unlock: "Level 70 side story quest \"Don't Do the Dewprism\""
        }, {
            name: "Megaflare",
            command: "/megaflare",
            unlock: "Mogstation: 12 USD / 9 EUR"
        }, {
            name: "Moogle Dance",
            command: "/mogdance",
            unlock: "Level 50 moogle quest \"Piecing Together the Past\""
        }, {
            name: "Moonlift Dance",
            command: "/moonlift",
            unlock: "Level 60 side story quest \"Eternity, Loyalty, Honesty\""
        }, {
            name: "Most Gentlemanly",
            command: "/hildy",
            unlock: "Level 50 side story quest \"Her Last Vow\""
        }, {
            name: "Play Dead",
            command: "/playdead, /pdead",
            unlock: "MogStation: 7 USD / 4.9 EUR"
        }, {
            name: "Ponder",
            command: "/ponder, /makeyougohmmm",
            unlock: "Level 70 main quest \"Emmisary of the Dawn\""
        }, {
            name: "Popoto Step",
            command: "/popotostep",
            unlock: "MogStation: 7 USD / 4.9 EUR"
        }, {
            name: "Power Up",
            command: "/powerup",
            unlock: "MogStation: 7 USD / 4.9 EUR"
        }, {
            name: "Pretty Please",
            command: "/prettyplease, /pplease",
            unlock: "MogStation: 7 USD / 4.9 EUR"
        }, {
            name: "Push-ups ",
            command: "/pushups",
            unlock: "Achievement \"Dear Leader I\""
        }, {
            name: "Red Ranger Pose A",
            command: "/redrangerposea, /rrpa",
            unlock: "Moonfire Faire (2016), MogStation: 3 USD / 2.1 EUR"
        }, {
            name: "Red Ranger Pose B",
            command: "/redrangerposeb, /rrpb",
            unlock: "Moonfire Faire (2016), MogStation: 3 USD / 2.1 EUR"
        }, {
            name: "Reflect",
            command: "/reflect",
            unlock: "10,000 Company Seals"
        }, {
            name: "Reprimand",
            command: "/reprimand",
            unlock: "15,0000 Wolf Marks Exchange"
        }, {
            name: "Ritual Prayer",
            command: "/ritualprayer",
            unlock: "Trade with Shikitahe in Tamamizu"
        }, {
            name: "Scheme",
            command: "/scheme",
            unlock: "Duty \"The Forbidden Land, Eureka Pyros\""
        }, {
            name: "Senor Sabotender",
            command: "/sabotender",
            unlock: "\"Make It Rain\" 2019 Event"
        }, {
            name: "Shiver",
            command: "/shiver",
            unlock: "Duty \"The Forbidden Land, Eureka Pagos\""
        }, {
            name: "Side Step",
            command: "/sidestep",
            unlock: "MogStation: 7 USD / 4.9 EUR"
        }, {
            name: "Sit-ups",
            command: "/situps",
            unlock: "Achievement \"Dear Leader I\""
        }, {
            name: "Songbird",
            command: "/songbird",
            unlock: "Little Ladies' Day (2017), MogStation: 2 USD / 1.4 EUR"
        }, {
            name: "Spectacles",
            command: "/spectacles",
            unlock: "Level 60 side story quest \"Letters from No One\""
        }, {
            name: "Splash",
            command: "/splash",
            unlock: "Moonfire Faire (2018), MogStation: 3 USD / 2.1 EUR"
        }, {
            name: "Squats",
            command: "/squats",
            unlock: "Achievement \"Dear Leader I\""
        }, {
            name: "Step Dance",
            command: "/stepdance",
            unlock: "Level 14 side quest \"Good for What Ales You\""
        }, {
            name: "Sundrop Dance",
            command: "/sundance, /sundropdance",
            unlock: "Level 50 Vanu Vanu quest \"Sundrop the Beat\""
        }, {
            name: "Sweat",
            command: "/sweat",
            unlock: "Trade with Confederate Custodian in Crick."
        }, {
            name: "Thavnairian Dance",
            command: "/thavnairiandance",
            unlock: "Bought from the main counter in the Gold Saucer for 80,000 MPG"
        }, {
            name: "Throw",
            command: "/throw",
            unlock: "Level 36 side quest \"Toss Fit Workout\""
        }, {
            name: "Toast",
            command: "",
            unlock: "Unknown"
        }, {
            name: "Tomestone",
            command: "/tomestone",
            unlock: "Connect your account to the FFXIV mobile app"
        }, {
            name: "Tremble",
            command: "/tremble",
            unlock: "Trade with Eschidna in Rhalgr's Reach"
        }, {
            name: "Ultima",
            command: "/ultima",
            unlock: "Meister Quality Ultima Figure order bonus"
        }, {
            name: "Victory",
            command: "/vpose",
            unlock: "Level 60 main quest \"A Spectacle for the Ages\""
        }, {
            name: "Water Flip",
            command: "/waterflip",
            unlock: "Level 63 main quest \"In Soroban We Trust\""
        }, {
            name: "Winded",
            command: "/winded",
            unlock: "Trade with Eschidna in Rhalgr's Reach"
        }, {
            name: "Yellow Ranger Pose A",
            command: "/yellowrangerposea, /yrpa",
            unlock: "Moonfire Faire (2016), MogStation: 3 USD / 2.1 EUR"
        }, {
            name: "Yellow Ranger Pose B",
            command: "/yellowrangerposeb, /yrpb",
            unlock: "Moonfire Faire (2016), MogStation: 3 USD / 2.1 EUR"
        }, {
            name: "Yol Dance",
            command: "/yoldance",
            unlock: "Trade with Gyosho in Dhoro Iloh"
        }, {
            name: "Zantetsuken",
            command: "/zantetsuken, /ztk",
            unlock: "Item code from purchasing Meister Quality Odin Figure"
        }]
    };
};
