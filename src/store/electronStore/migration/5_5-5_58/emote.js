/** Emotes ingested from XIVAPI in this version
 * All IDs need to be updated to their actual ID
 * */
export const migrate_5_58_emotes = (overall) => {
    const emotePath = "social.emotes";

    // Remove old IDs that become unused
    for(let i = 0; i <= 58; i++) overall.deleteTask(emotePath, i);
    for(let i = 60; i <= 61; i++) overall.deleteTask(emotePath, i);
    for(let i = 68; i <= 80; i++) overall.deleteTask(emotePath, i);
    for(let i = 83; i <= 84; i++) overall.deleteTask(emotePath, i);
    for(let i = 86; i <= 100; i++) overall.deleteTask(emotePath, i);
    for(let i = 105; i <= 108; i++) overall.deleteTask(emotePath, i);
    overall.deleteTask(emotePath, 111);

    // Update with new IDs
    overall.changeKey(emotePath, 0, 171); // Aback
    overall.changeKey(emotePath, 1, 165); // At Ease
    overall.changeKey(emotePath, 2, 164); // Attention
    overall.changeKey(emotePath, 3, 123); // Backflip
    overall.changeKey(emotePath, 4, 103); // Ball Dance
    overall.changeKey(emotePath, 5, 121); // Battle Stance
    overall.changeKey(emotePath, 6, 216); // Bee's Knees
    overall.changeKey(emotePath, 7, 81); // Big Grin
    overall.changeKey(emotePath, 8, 131); // Black Ranger Pose A
    overall.changeKey(emotePath, 9, 135); // Black Ranger Pose B
    overall.changeKey(emotePath, 10, 109); // Bomb Dance
    overall.changeKey(emotePath, 11, 166); // Box
    overall.changeKey(emotePath, 12, 173); // Box Step
    overall.changeKey(emotePath, 13, 158); // Breath Control
    overall.changeKey(emotePath, 14, 64); // Charmed
    overall.changeKey(emotePath, 15, 67); // Cheer Jump
    overall.changeKey(emotePath, 16, 65); // Cheer On
    overall.changeKey(emotePath, 17, 66); // Cheer Wave
    overall.changeKey(emotePath, 18, 188); // Confirm
    overall.changeKey(emotePath, 19, 209); // Consider
    overall.changeKey(emotePath, 20, 63); // Crimson Lotus
    overall.changeKey(emotePath, 21, 144); // Diamond Dust
    overall.changeKey(emotePath, 22, 146); // Dote
    overall.changeKey(emotePath, 23, 154); // Eastern Bow
    overall.changeKey(emotePath, 24, 129); // Eastern Dance
    overall.changeKey(emotePath, 25, 124); // Eastern Greeting
    overall.changeKey(emotePath, 26, 128); // Eastern Stretch
    overall.changeKey(emotePath, 27, 221); // Eat Apple
    overall.changeKey(emotePath, 28, 206); // Break Fast
    overall.changeKey(emotePath, 29, 220); // Eat Rice Ball
    overall.changeKey(emotePath, 30, 182); // Elucidate
    overall.changeKey(emotePath, 31, 113); // Embrace
    overall.changeKey(emotePath, 32, 190); // Endure
    overall.changeKey(emotePath, 33, 125); // Eureka
    overall.changeKey(emotePath, 34, 115); // Fist Bump
    overall.changeKey(emotePath, 35, 195); // Fist Pump
    overall.changeKey(emotePath, 36, 212); // Flame Dance
    overall.changeKey(emotePath, 37, 185); // Get Fantasy
    overall.changeKey(emotePath, 38, 119); // Gold Dance
    overall.changeKey(emotePath, 39, 193); // Goobbue Do
    overall.changeKey(emotePath, 40, 194); // Gratuity
    overall.changeKey(emotePath, 41, 172); // Greeting
    overall.changeKey(emotePath, 42, 214); // Guard
    overall.changeKey(emotePath, 43, 102); // Harvest Dance
    overall.changeKey(emotePath, 44, 127); // Haurchefant
    overall.changeKey(emotePath, 45, 204); // Headache
    overall.changeKey(emotePath, 46, 192); // Heel Toe
    overall.changeKey(emotePath, 47, 213); // High Five
    overall.changeKey(emotePath, 48, 187); // Hum
    overall.changeKey(emotePath, 49, 110); // Huzzah
    overall.changeKey(emotePath, 50, 59); // Imperial Salute
    overall.changeKey(emotePath, 51, 208); // Insist
    overall.changeKey(emotePath, 52, 217); // Lali Hop
    overall.changeKey(emotePath, 53, 199); // Lali-ho
    overall.changeKey(emotePath, 54, 203); // Lean
    overall.changeKey(emotePath, 55, 215); // Malevolence
    overall.changeKey(emotePath, 56, 104); // Manderville Dance
    overall.changeKey(emotePath, 57, 198); // Manderville Mambo
    overall.changeKey(emotePath, 58, 62); // Megaflare
    overall.changeKey(emotePath, 59, 126); // Moogle Dance
    overall.changeKey(emotePath, 60, 145); // Moonlift Dance
    overall.changeKey(emotePath, 61, 114); // Most Gentlemanly
    overall.changeKey(emotePath, 62, 224); // Paint It Black
    overall.changeKey(emotePath, 63, 227); // Paint It Blue
    overall.changeKey(emotePath, 64, 225); // Paint It Red
    overall.changeKey(emotePath, 65, 226); // Paint It Yellow
    overall.changeKey(emotePath, 66, 143); // Play Dead
    overall.changeKey(emotePath, 67, 183); // Ponder
    overall.changeKey(emotePath, 68, 186); // Popoto Step
    overall.changeKey(emotePath, 69, 153); // Power Up
    overall.changeKey(emotePath, 70, 142); // Pretty Please
    overall.changeKey(emotePath, 71, 156); // Push-ups
    overall.changeKey(emotePath, 72, 207); // Read
    overall.changeKey(emotePath, 73, 130); // Red Ranger Pose A
    overall.changeKey(emotePath, 74, 134); // Red Ranger Pose B
    overall.changeKey(emotePath, 75, 82); // Reflect
    overall.changeKey(emotePath, 76, 196); // Reprimand
    overall.changeKey(emotePath, 77, 167); // Ritual Prayer
    overall.changeKey(emotePath, 78, 189); // Scheme
    overall.changeKey(emotePath, 79, 197); // Senor Sabotender
    overall.changeKey(emotePath, 80, 181); // Shiver
    overall.changeKey(emotePath, 81, 174); // Side Step
    overall.changeKey(emotePath, 82, 201); // Simulation F
    overall.changeKey(emotePath, 83, 200); // Simulation M
    overall.changeKey(emotePath, 84, 157); // Sit-ups
    overall.changeKey(emotePath, 85, 205); // Snap
    overall.changeKey(emotePath, 86, 149); // Songbird
    overall.changeKey(emotePath, 87, 148); // Spectacles
    overall.changeKey(emotePath, 88, 178); // Splash
    overall.changeKey(emotePath, 89, 155); // Squats
    overall.changeKey(emotePath, 90, 101); // Step Dance
    overall.changeKey(emotePath, 91, 120); // Sundrop Dance
    overall.changeKey(emotePath, 92, 180); // Sweat
    overall.changeKey(emotePath, 93, 223); // Sweep
    overall.changeKey(emotePath, 94, 118); // Thavnairian Dance
    overall.changeKey(emotePath, 95, 85); // Throw
    overall.changeKey(emotePath, 96, 202); // Toast
    overall.changeKey(emotePath, 97, 191); // Tomestone
    overall.changeKey(emotePath, 98, 169); // Tremble
    overall.changeKey(emotePath, 99, 175); // Ultima
    overall.changeKey(emotePath, 100, 122); // Victory
    overall.changeKey(emotePath, 101, 210); // Wasshoi
    overall.changeKey(emotePath, 102, 151); // Water Flip
    overall.changeKey(emotePath, 103, 170); // Winded
    overall.changeKey(emotePath, 104, 132); // Yellow Ranger Pose A
    overall.changeKey(emotePath, 105, 136); // Yellow Ranger Pose B
    overall.changeKey(emotePath, 106, 176); // Yol Dance
    overall.changeKey(emotePath, 107, 138); // Zantetsuken
    overall.changeKey(emotePath, 108, 232); // Eat Pizza
    overall.changeKey(emotePath, 109, 211); // Flower Shower
    overall.changeKey(emotePath, 110, 229); // Pantomime
    overall.changeKey(emotePath, 111, 230); // Vexed
};
