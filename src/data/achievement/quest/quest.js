import { DataGroup } from "../../DataGroup";

// https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Disciples%20of%20Magic&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Quests_Quests = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        name: "Serving a Greater Cause I",
        points: "5",
        task: "Complete 5 guildhests.",
        reward: "",
    }, {
        name: "Serving a Greater Cause II",
        points: "5",
        task: "Complete 10 guildhests.",
        reward: "",
    }, {
        name: "Serving a Greater Cause III",
        points: "5",
        task: "Complete 20 guildhests.",
        reward: "",
    }, {
        name: "Serving a Greater Cause IV",
        points: "5",
        task: "Complete 30 guildhests.",
        reward: "",
    }, {
        name: "Serving a Greater Cause V",
        points: "5",
        task: "Complete 50 guildhests.",
        reward: "",
    }, {
        name: "Serving a Greater Cause VI",
        points: "10",
        task: "Complete 100 guildhests.",
        reward: "Title: The Last Resort",
    }, {
        name: "Enraptured Servitude",
        points: "20",
        task: "Complete 200 guildhests.",
        reward: "",
    }, {
        name: "Father Knows Hest I",
        points: "5",
        task: "Complete 3 unique guildhests.",
        reward: "",
    }, {
        name: "Father Knows Hest II",
        points: "5",
        task: "Complete 7 unique guildhests.",
        reward: "",
    }, {
        name: "Father Knows Hest III",
        points: "10",
        task: "Complete 14 unique guildhests.",
        reward: "",
    }, {
        name: "The Greatest Tales Ever Told",
        points: "20",
        task: "Complete all the class quests available at level 30.",
        reward: "Chronicler's Crown",
    }, {
        name: "Tales of Magic",
        points: "10",
        task: "Complete all the Disciple of Magic quests available at level 30.",
        reward: "Title: Seeker of Truth",
    }, {
        name: "Tales of the Land",
        points: "10",
        task: "Complete all the Disciple of the Land quests available at level 30.",
        reward: "Title: Seeker of Bounty",
    }, {
        name: "Tales of the Hand",
        points: "10",
        task: "Complete all the Disciple of the Hand quests available at level 30.",
        reward: "Title: Seeker of Skill",
    }, {
        name: "Tales of War",
        points: "10",
        task: "Complete all the Disciple of War quests available at level 30.",
        reward: "Title: Seeker of Blood",
    }, {
        name: "Career Opportunities",
        points: "20",
        task: "Obtain the following seven achievements: \"Like a Knight in Shining Armor I,\" \"Bulletproof I,\" \"I Am the Warrior I,\" Dragoon Age I,\" \"A Bard's Tale I,\" \"Seeing White I,\" and \"Back in Black I.\"",
        reward: "Title: The Professional",
    }, {
        name: "Anima Crossing",
        points: "20",
        task: "Complete the quest \"Coming into Its Own.\"",
        reward: "Title: The Noumenon",
    }, {
        name: "What's Nexus",
        points: "10",
        task: "Complete the quest \"His Dark Materia.\"",
        reward: "",
    }, {
        name: "Walking on Sunshine",
        points: "10",
        task: "Complete the quest \"I Believe I Can Fly.\"",
        reward: "Title: Lighter than Air",
    }, {
        name: "This One Time, at Level Thirty...",
        points: "5",
        task: "Complete any one of the Disciple of War or Magic class quests available at level 30.",
        reward: "",
    }, {
        name: "Back from the Wood",
        points: "5",
        task: "Complete the main scenario quest \"Back from the Wood.\"",
        reward: "",
    }, {
        name: "Skeletons",
        points: "5",
        task: "Complete the main scenario quest \"Skeletons in Her Closet.\"",
        reward: "",
    }, {
        name: "Those Who Wait",
        points: "5",
        task: "Complete the main scenario quest \"All Good Things.\"",
        reward: "",
    }, {
        name: "History Repeating",
        points: "5",
        task: "Complete the main scenario quest \"In Pursuit of the Past.\"",
        reward: "",
    }, {
        name: "Storyteller I",
        points: "5",
        task: "Complete 10 unique quests.",
        reward: "",
    }, {
        name: "Free Wing Night",
        points: "10",
        task: "Complete the main scenario quest \"Lady of the Vortex.\"",
        reward: "",
    }, {
        name: "Storyteller II",
        points: "10",
        task: "Complete 30 unique quests.",
        reward: "",
    }, {
        name: "The Truth Is Down There",
        points: "10",
        task: "Complete the quest \"Alisaie's Pledge.\"",
        reward: "",
    }, {
        name: "I Like Big Fish and I Cannot Lie",
        points: "10",
        task: "Complete the quest \"The Beast of Brewer's Beacon.\"",
        reward: "Title: The Ambitious Angler",
    }, {
        name: "The Postmoogle Always Rings Twice",
        points: "10",
        task: "Complete the quest \"Of Errant Epistles.\"",
        reward: "Title: The Postman/Postwoman",
    }, {
        name: "The Rest of the Story",
        points: "10",
        task: "Complete the quest \"The Greatest Story Never Told.\"",
        reward: "",
    }, {
        name: "Postal",
        points: "10",
        task: "Complete the quest \"The Little Postmoogle that Could.\"",
        reward: "Title: Postmaster",
    }, {
        name: "Awake the Metal",
        points: "10",
        task: "Complete the quest \"Enigma.\"",
        reward: "Title: Illuminati Quencher",
    }, {
        name: "The War Still Wageth On",
        points: "20",
        task: "Complete the quests \"Thok Around the Clock\" and \"The Diabolical Bismarck.\"",
        reward: "Title: Finder of False Gods",
    }, {
        name: "So it Goes",
        points: "10",
        task: "Complete the quest \"As Goes Light, So Goes Darkness.\"",
        reward: "Title: House Fortemps Knight",
    }, {
        name: "Paying the Bills",
        points: "10",
        task: "Complete the quest \"To Rule the Skies.\"",
        reward: "Title: Sky Pirate",
    }, {
        name: "Back to School I",
        points: "10",
        task: "Complete the quest \"More than Meets Her Eye.\"",
        reward: "Title: Special Advisor",
    }, {
        name: "First Gear",
        points: "10",
        task: "Complete the quest \"Causes and Costs.\"",
        reward: "Title: The Gear of Change",
    }, {
        name: "The Midas Touch",
        points: "10",
        task: "Complete the quest \"A Gob in the Machine.\"",
        reward: "Title: Allthoughts",
    }, {
        name: "I'll Sleep When I'm Dead",
        points: "10",
        task: "Complete the quest \"The Nightmare's End.\"",
        reward: "Title: The Chief Mourner",
    }, {
        name: "Floor the Horde",
        points: "10",
        task: "Complete the quest \"Litany of Peace.\"",
        reward: "Title: The Dragonsong",
    }, {
        name: "On the Road Again",
        points: "10",
        task: "Complete the quest \"The Burdens We Bear.\"",
        reward: "",
    }, {
        name: "Back to School II",
        points: "10",
        task: "Complete the quest \"Finding Ulaa.\"",
        reward: "",
    }, {
        name: "Back in Time",
        points: "10",
        task: "Complete the quest \"Of Endings and Beginnings.\"",
        reward: "Title: The Wings of Time",
    }, {
        name: "No Retreat, No Surrender",
        points: "10",
        task: "Complete the quest \"An Ending to Mark a New Beginning.\"",
        reward: "Title: Surrender of Souls",
    }, {
        name: "Dead Tired",
        points: "10",
        task: "Complete the quest \"Dead but Not Gone.\"",
        reward: "Title: Corpse Dancer",
    }, {
        name: "School's Out Forever",
        points: "10",
        task: "Complete the quest \"Louisoix's Finest Student.\"",
        reward: "Title: The Finest Pupil's Ally",
    }, {
        name: "Five Minutes of Fate",
        points: "10",
        task: "Complete the quest \"The Far Edge of Fate.\"",
        reward: "Title: Fatewalker",
    }, {
        name: "Back to School III",
        points: "10",
        task: "Complete the quest \"The Life and Lies of Father Saturnois.\"",
        reward: "Title: Of the Holy Body",
    }, {
        name: "That is What You Are",
        points: "10",
        task: "Complete the quest \"If I Could Turn Back Time.\"",
        reward: "Title: Gigi's Best Friend",
    }, {
        name: "Good Night, Sweet Hildy",
        points: "10",
        task: "Complete the quest \"Don't Do the Dewprism.\"",
        reward: "Title: Soboro",
    }, {
        name: "Delta Force",
        points: "10",
        task: "Complete the quest \"The Anonaly.\"",
        reward: "Title: Deltascape Deleter",
    }, {
        name: "Warrior of Light",
        points: "20",
        task: "Complete all the main scenario quests.",
        reward: "",
    }, {
        name: "Storyteller III",
        points: "20",
        task: "Complete 100 unique quests.",
        reward: "",
    }, {
        name: "A Realm Awoken",
        points: "20",
        task: "Complete the main scenario quest \"Build on the Stone.\"",
        reward: "",
    }, {
        name: "Through the Maelstrom",
        points: "20",
        task: "Complete the main scenario quest \"Through the Maelstrom.\"",
        reward: "",
    }, {
        name: "You Can Handle the Truth",
        points: "20",
        task: "Complete the quest \"Alisaie's Resolve.\"",
        reward: "",
    }, {
        name: "Eorzea Defended",
        points: "20",
        task: "Complete the quest \"Brave New Companions.\"",
        reward: "Title: Defender of Eorzea",
    }, {
        name: "Dreams of Ice",
        points: "20",
        task: "Complete the quest \"Let Us Cling Together.\"",
        reward: "Title: Icebreaker",
    }, {
        name: "Uncoiled",
        points: "20",
        task: "Complete the quest \"Alisaie's Path.\"",
        reward: "Title: The Final Witness",
    }, {
        name: "Out of the Dark",
        points: "20",
        task: "Complete the quest \"The Light of Hope.\"",
        reward: "Title: Of the Silver Lining",
    }, {
        name: "I'll Be There for You",
        points: "20",
        task: "Complete the quest \"Her Last Vow.\"",
        reward: "Title: Gentleman/Gentlewoman",
    }, {
        name: "Home of the Brave",
        points: "20",
        task: "Complete the quest \"The Vital Title.\"",
        reward: "",
    }, {
        name: "My Left Arm",
        points: "20",
        task: "Complete the quest \"Before the Dawn.\"",
        reward: "Title: Bearer of the Torch",
    }, {
        name: "Lucky Number 7",
        points: "20",
        task: "Complete the quest \"Disclosure.\"",
        reward: "Title: Unbeliever",
    }, {
        name: "Gaol Break",
        points: "20",
        task: "Complete the quest \"Keeping the Flame Alive.\"",
        reward: "Title: The Redeemed",
    }, {
        name: "Orthodox Mayhem",
        points: "20",
        task: "Complete the quest \"Unrest in Ishgard.\"",
        reward: "Title: Nidhogg Slayer",
    }, {
        name: "You Say You Want a Revolution",
        points: "20",
        task: "Complete the quest \"The Sins of Antiquity.\"",
        reward: "Title: Of the Silver Fuller",
    }, {
        name: "The Faith that Drives Us",
        points: "20",
        task: "Complete the quest \"One Good Turn.\"",
        reward: "Title: Imperial Nuisance",
    }, {
        name: "Hope Enkindled",
        points: "20",
        task: "Complete the quest \"Hour of Departure.\"",
        reward: "Title: Under-archon",
    }, {
        name: "Looking Up",
        points: "20",
        task: "Complete the quest \"Heavensward.\"",
        reward: "Title: The End of Ascalon",
    }, {
        name: "Incidentally Speaking",
        points: "20",
        task: "Complete the quest \"Not Without Incident.\"",
        reward: "Title: Survivor of the Song",
    }, {
        name: "Destination Unknown",
        points: "20",
        task: "Complete the quest \"Once More, To the Ruby See.\"",
        reward: "Title: Ijin Traveller",
    }, {
        name: "Unexplained",
        points: "20",
        task: "Complete the quest \"Tide Goes In, Imperials Go Out.\"",
        reward: "Title: Confederate",
    }, {
        name: "Put Your Wings Up",
        points: "20",
        task: "Complete the quest \"All the Little Angels.\"",
        reward: "Title: Adversary",
    }, {
        name: "Crimson Footprints",
        points: "20",
        task: "Complete the quest \"In Crimson They Walked.\"",
        reward: "Title: Steppe Warrior",
    }, {
        name: "Catch Me if You Can",
        points: "20",
        task: "Complete the quest \"A Swift and Secret Departure.\"",
        reward: "Title: The Returned",
    }, {
        name: "Cheek to Cheek",
        points: "20",
        task: "Complete the quest \"The Lady in Red.\"",
        reward: "Title: Lyse's Right Fist",
    }, {
        name: "The Measure of His Reach",
        points: "20",
        task: "Complete the quest \"Stormblood.\"",
        reward: "Title: The Liberator",
    }, {
        name: "More Heroes",
        points: "20",
        task: "Complete the quest \"Return of the Bull.\"",
        reward: "Title: Raubahn's Left Arm",
    }, {
        name: "Solar Cycle",
        points: "20",
        task: "Complete the quest \"Rise of a New Sun.\"",
        reward: "Title: The New Sun",
    }, {
        name: "Lunar Cycle",
        points: "20",
        task: "Complete the quest \"Under the Moonlight.\"",
        reward: "Title: Under the Moonlight",
    }, {
        name: "Imagine Dragon",
        points: "30",
        task: "Complete the quest \"Feast of Famine.\"",
        reward: "Title: Of Dragons Deep",
    }, {
        name: "A History of Violet",
        points: "20",
        task: "Complete the main quest \"Prelude in Violet\"",
        reward: "Title: Preluse in Violet",
    }, {
        name: "Swan Song",
        points: "20",
        task: "Complete the quest \"A Requiem for Heroes.\"",
        reward: "Title: A Requiem For Heroes",
    }, {
        name: "Between Two Worlds",
        points: "20",
        task: "Complete the quest \"Warrior of Darkness.\"",
        reward: "Title: Outlander",
    }, {
        name: "Realpolitik",
        points: "20",
        task: "Complete the quest \"The Wheel Turns.\"",
        reward: "Title: The Fae-touched",
    }, {
        name: "Journey to the Past",
        points: "20",
        task: "Complete the quest \"Out of the Wood.\"",
        reward: "Title: Seeker of Hidden Truths",
    }, {
        name: "Shrouded in Darkness",
        points: "20",
        task: "Complete the quest \"More than a Hunch.\"",
        reward: "Title: Of the Sunless Sea",
    }, {
        name: "Warden of Light",
        points: "20",
        task: "Complete the quest \"Extinguishing the Last Light.\"",
        reward: "Title: Enemy of Innocence",
    }, {
        name: "Shadowbringers",
        points: "20",
        task: "Complete the quest \"Shadowbringers.\"",
        reward: "Title: Shadowbringer",
    }, {
        name: "Black and White",
        points: "20",
        task: "Complete the quest \"Vows of Virtue, Deeds of Cruelty.\"",
        reward: "Title: Of Virtuous Deeds",
    }, {
        name: "Like a Knight in Shining Armor I",
        points: "5",
        task: "Complete the paladin job quest \"Keeping the Oath.\"",
        reward: "",
    }, {
        name: "Like a Knight in Shining Armor II",
        points: "5",
        task: "Complete the paladin job quest \"This Little Sword of Mine.\"",
        reward: "Title: The Oathkeeper",
    }, {
        name: "Like a Knight in Shining Armor III",
        points: "5",
        task: "Complete the paladin job quest \"Raising the Sword.\"",
        reward: "Title: UI Cup Champion",
    }, {
        name: "Like a Knight in Shining Armor IV",
        points: "5",
        task: "Complete the paladin job quest \"Worth Fighting For.\"",
        reward: "Title: Bulwark Between Worlds",
    }, {
        name: "Bulletproof I",
        points: "5",
        task: "Complete the monk job quest \"Five Easy Pieces.\"",
        reward: "",
    }, {
        name: "Bulletproof II",
        points: "5",
        task: "Complete the monk job quest \"Appetite for Destruction.\"",
        reward: "Title: Of the 14th Chakra",
    }, {
        name: "Bulletproof III",
        points: "5",
        task: "Complete the monk job quest \"The Power to Protect.\"",
        reward: "Title: The Fistful",
    }, {
        name: "Bulletproof IV",
        points: "5",
        task: "Complete the monk job quest \"A Monk's Legacy.\"",
        reward: "Title: The Transcendent",
    }, {
        name: "I Am the Warrior I",
        points: "5",
        task: "Complete the warrior job quest \"How to Quit You.\"",
        reward: "",
    }, {
        name: "I Am the Warrior II",
        points: "5",
        task: "Complete the warrior job quest \"And My Axe.\"",
        reward: "Title: The Mythril Heart",
    }, {
        name: "I Am the Warrior III",
        points: "5",
        task: "Complete the warrior job quest \"The Heart of the Problem.\"",
        reward: "Title: Loved by the Axe",
    }, {
        name: "I Am the Warrior IV",
        points: "5",
        task: "Complete the warrior job quest \"Once, Twice, Three Times a Warrior.\"",
        reward: "Title: Worldcleaver",
    }, {
        name: "Dragoon Age I",
        points: "5",
        task: "Complete the dragoon job quest \"Into the Dragon's Maw.\"",
        reward: "",
    }, {
        name: "Dragoon Age II",
        points: "5",
        task: "Complete the dragoon job quest \"Dragoon's Fate.\"",
        reward: "Title: The Azure Dragoon",
    }, {
        name: "Dragoon Age III",
        points: "5",
        task: "Complete the dragoon job quest \"Dragon Sound.\"",
        reward: "Title: The Blood Dragoon",
    }, {
        name: "Dragoon Age IV",
        points: "5",
        task: "Complete the dragoon job quest \"Gone but Not Forgiven.\"",
        reward: "Title: Bolt from the Black",
    }, {
        name: "A Bard's Tale I",
        points: "5",
        task: "Complete the bard job quest \"Requiem for the Fallen.\"",
        reward: "",
    }, {
        name: "A Bard's Tale II",
        points: "5",
        task: "Complete the bard job quest \"The Ballad of Oblivion.\"",
        reward: "Title: Skysinger",
    }, {
        name: "A Bard's Tale III",
        points: "5",
        task: "Complete the bard job quest \"Sweet Dreams Are Made of Peace.\"",
        reward: "Title: Of the True Autumn",
    }, {
        name: "A Bard's Tale IV",
        points: "5",
        task: "Complete the bard job quest \"A Harmony from the Heavens.\"",
        reward: "Title: The Song upon the Wind",
    }, {
        name: "Seeing White I",
        points: "5",
        task: "Complete the white mage job quest \"Heart of the Forest.\"",
        reward: "",
    }, {
        name: "Seeing White II",
        points: "5",
        task: "Complete the white mage job quest \"Hands of Healing.\"",
        reward: "Title: Pure White",
    }, {
        name: "Seeing White III",
        points: "5",
        task: "Complete the white mage job quest \"What She Always Wanted.\"",
        reward: "Title: Padjal Protector",
    }, {
        name: "Seeing White IV",
        points: "5",
        task: "Complete the white mage job quest \"Whence the Healing Springs.\"",
        reward: "Title: Firstblessed",
    }, {
        name: "Back in Black I",
        points: "5",
        task: "Complete the black mage job quest \"Always Bet on Black.\"",
        reward: "",
    }, {
        name: "Back in Black II",
        points: "5",
        task: "Complete the black mage job quest \"The Defiant Ones.\"",
        reward: "Title: Annihilator",
    }, {
        name: "Back in Black III",
        points: "5",
        task: "Complete the black mage job quest \"One Golem to Rule Them All.\"",
        reward: "Title: Gembreaker",
    }, {
        name: "Back in Black IV",
        points: "5",
        task: "Complete the black mage job quest \"A Home for a Tome.\"",
        reward: "Title: Of Stranger Shadow",
    }, {
        name: "Soul Summoner I",
        points: "5",
        task: "Complete the summoner job quest \"Primal Burdens.\"",
        reward: "",
    }, {
        name: "Soul Summoner II",
        points: "5",
        task: "Complete the summoner job quest \"A Flare for the Dramatic.\"",
        reward: "Title: Dreadspawn",
    }, {
        name: "Soul Summoner III",
        points: "5",
        task: "Complete the summoner job quest \"An Art for the Living.\"",
        reward: "Title: The First Caller",
    }, {
        name: "Soul Summoner IV",
        points: "5",
        task: "Complete the summoner job quest \"To Be Second Best.\"",
        reward: "Title: Farcaller",
    }, {
        name: "Flying Colors I",
        points: "5",
        task: "Complete the scholar job quest \"The Beast Within.\"",
        reward: "",
    }, {
        name: "Flying Colors II",
        points: "5",
        task: "Complete the scholar job quest \"Forward, the Royal Marines.\"",
        reward: "Title: Nymian Marine",
    }, {
        name: "Flying Colors III",
        points: "5",
        task: "Complete the scholar job quest \"Our Unsung Heroes.\"",
        reward: "Title: Keeper of the Lilacs",
    }, {
        name: "Flying Colors IV",
        points: "5",
        task: "Complete the scholar job quest \"True Beauty.\"",
        reward: "Title: Knower of Twin Worlds",
    }, {
        name: "Against the Ninja I",
        points: "5",
        task: "Complete the ninja job quest \"Master and Student.\"",
        reward: "",
    }, {
        name: "Against the Ninja II",
        points: "5",
        task: "Complete the ninja job quest \"In Her Defense.\"",
        reward: "Title: The Darkest Shadow",
    }, {
        name: "Against the Ninja III",
        points: "5",
        task: "Complete the ninja job quest \"When Clans Collide.\"",
        reward: "Title: Eorzean Ninja",
    }, {
        name: "Against the Ninja IV",
        points: "5",
        task: "Complete the ninja job quest \"Oboro's Big Idea.\"",
        reward: "Title: Shadow of the Other",
    }, {
        name: "A Dark Day's Knight I",
        points: "5",
        task: "Complete the dark knight job quest \"Our Answer.\"",
        reward: "",
    }, {
        name: "A Dark Day's Knight II",
        points: "5",
        task: "Complete the dark knight job quest \"Absolution.\"",
        reward: "Title: Blackblood",
    }, {
        name: "A Dark Day's Knight III",
        points: "5",
        task: "Complete the dark knight job quest \"Our Compromise.\"",
        reward: "Title: Of the Swirling Abyss",
    }, {
        name: "A Dark Day's Knight IV",
        points: "5",
        task: "Complete the dark knight job quest \"Our Closure.\"",
        reward: "Title: The Boundless Dark",
    }, {
        name: "I'm a Machinist, Not a Man I",
        points: "5",
        task: "Complete the machinist job quest \"The Power of a Tourney.\"",
        reward: "",
    }, {
        name: "I'm a Machinist, Not a Man II",
        points: "5",
        task: "Complete the machinist job quest \"Rise of the Machinists.\"",
        reward: "Title: Liberator",
    }, {
        name: "I'm a Machinist, Not a Man III",
        points: "5",
        task: "Complete the machinist job quest \"The Mongrel and the Knight.\"",
        reward: "Title: The Howling",
    }, {
        name: "I'm a Machinist, Not a Man IV",
        points: "5",
        task: "Complete the machinist job quest \"Machinists for the Morrow.\"",
        reward: "Title: The Shot Heard Across Worlds",
    }, {
        name: "The Stars in Our Faults I",
        points: "5",
        task: "Complete the astrologian job quest \"Spearheading Initiatives.\"",
        reward: "",
    }, {
        name: "The Stars in Our Faults II",
        points: "5",
        task: "Complete the astrologian job quest \"The Hands of Fate.\"",
        reward: "Title: Stargazer",
    }, {
        name: "The Stars in Our Faults III",
        points: "5",
        task: "Complete the astrologian job quest \"Foxfire.\"",
        reward: "Title: Of the Eastern Skies",
    }, {
        name: "The Stars in Our Faults IV",
        points: "5",
        task: "Complete the astrologian job quest \"Love, Astrologically.\"",
        reward: "Title: Distant Stargazer",
    }, {
        name: "SAM I Am I",
        points: "5",
        task: "Complete the samurai job quest \"The Face of True Evil.\"",
        reward: "",
    }, {
        name: "SAM I Am II",
        points: "5",
        task: "Complete the samurai job quest \"The Battle on Bekko.\"",
        reward: "Title: Muso",
    }, {
        name: "SAM I Am III",
        points: "5",
        task: "Complete the samurai job quest \"The Legend of Musosai.\"",
        reward: "Title: Samurai in a Strange Land",
    }, {
        name: "Red On Arrival I",
        points: "5",
        task: "Complete the red mage job quest \"Stained in Scarlet.\"",
        reward: "",
    }, {
        name: "Red On Arrival II",
        points: "5",
        task: "Complete the red mage job quest \"With Heart and Steel.\"",
        reward: "Title: The Red",
    }, {
        name: "Red On Arrival III",
        points: "5",
        task: "Complete the red mage job quest \"The Succession of Steel.\"",
        reward: "Title: Dualistic Duelist",
    }, {
        name: "Gunnhildr's Blade I",
        points: "5",
        task: "Complete the gunbreaker job quest \"Steel against Steel.\"",
        reward: "Title: Sworn Protector",
    }, {
        name: "Gunnhildr's Blade II",
        points: "5",
        task: "Complete the gunbreaker job quest \"Gunblades of the Patriots.\"",
        reward: "Title: Wandering Vanguard",
    }, {
        name: "No Friends of Mine I",
        points: "5",
        task: "Complete the dancer job quest \"Save the Lance Dance for Me.\"",
        reward: "Title: The Heart's Beat",
    }, {
        name: "No Friends of Mine II",
        points: "5",
        task: "Complete the dancer job quest \"Rising to the Occasion.\"",
        reward: "Title: Riftdancer",
    }, {
        name: "Speaker for the Righteous",
        points: "5",
        task: "Complete the role quest \"To Have Loved and Lost.\"",
        reward: "",
    }, {
        name: "Speaker for the Honorable",
        points: "5",
        task: "Complete the role quest \"The Soul of Temperance.\"",
        reward: "",
    }, {
        name: "Speaker for the Brave",
        points: "5",
        task: "Complete the role quest \"Courage Born of Fear.",
        reward: "",
    }, {
        name: "Speaker for the Wise",
        points: "5",
        task: "Complete the role quest \"A Tearful Reunion.\"",
        reward: "",
    }, {
        name: "A Watched Pot",
        points: "10",
        task: "Complete the quest \"Kettle to the Mettle.\"",
        reward: "Title: Carrier of the Kettle",
    }, {
        name: "Leaving Limsa Lominsa",
        points: "5",
        task: "Complete the main scenario quest \"The Lominsan Envoy.\"",
        reward: "",
    }, {
        name: "Gone from Gridania",
        points: "5",
        task: "Complete the main scenario quest \"The Gridanian Envoy.\"",
        reward: "",
    }, {
        name: "Out of Ul'dah",
        points: "5",
        task: "Complete the main scenario quest \"The Ul'dahn Envoy.\"",
        reward: "",
    }, {
        name: "The New King on the Block",
        points: "10",
        task: "Complete the quest \"The New King on the Block.\"",
        reward: "Title: Monster Hunter",
    }, {
        name: "Live to Serve",
        points: "10",
        task: "Complete the quest \"In Bad Taste.\"",
        reward: "Title: Lord/Lady of the Fetch",
    }, {
        name: "What is it Good For",
        points: "20",
        task: "Complete the quest \"The Face of War.\"",
        reward: "",
    }, {
        name: "Tales to Be Told",
        points: "10",
        task: "Complete the quest \"Shadow Walk with Me.\"",
        reward: "Title: Living Memory",
    }, {
        name: "Precious Metals",
        points: "5",
        task: "Complete the quest \"The Iron Bellows.\"",
        reward: "Title: Otherworld Smith",
    }, {
        name: "Thank You for the Music",
        points: "5",
        task: "Complete the quest \"The Notes of Bond Restoring.\"",
        reward: "Title: Otherworld Artisan",
    }, {
        name: "Amaro Whisperer",
        points: "5",
        task: "Complete the quest \"Healing Old Wounds.\"",
        reward: "Title: Otherworld Apothecary",
    }, {
        name: "The Lost World",
        points: "5",
        task: "Complete the quest \"The Myth Takes Form.\"",
        reward: "Title: Otherworld Seeker",
    }, {
        name: "Live Long and Prospero",
        points: "5",
        task: "Complete the quest \"Morsel of the Deep.\"",
        reward: "Title: Otherworld Angler",
    }, {
        name: "The Golden Mean",
        points: "10",
        task: "Complete the quest \"For Every Child a Star.\"",
        reward: "Title: The Multifaceted",
    },
];
