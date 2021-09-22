/** Emotes ingested from XIVAPI in this version
 * All IDs need to be updated to their actual ID
 * */
export function migrate_5_58_emotes(store): void {
    const emotePath = 'social.emotes';

    // Remove old IDs that become unused
    for(let i = 0; i <= 58; i++) store.deleteTask(emotePath, i);
    for(let i = 60; i <= 61; i++) store.deleteTask(emotePath, i);
    for(let i = 68; i <= 80; i++) store.deleteTask(emotePath, i);
    for(let i = 83; i <= 84; i++) store.deleteTask(emotePath, i);
    for(let i = 86; i <= 100; i++) store.deleteTask(emotePath, i);
    for(let i = 105; i <= 108; i++) store.deleteTask(emotePath, i);
    store.deleteTask(emotePath, 111);

    // Update with new IDs
    store.changeKey(emotePath, 0, 171); // Aback
    store.changeKey(emotePath, 1, 165); // At Ease
    store.changeKey(emotePath, 2, 164); // Attention
    store.changeKey(emotePath, 3, 123); // Backflip
    store.changeKey(emotePath, 4, 103); // Ball Dance
    store.changeKey(emotePath, 5, 121); // Battle Stance
    store.changeKey(emotePath, 6, 216); // Bee's Knees
    store.changeKey(emotePath, 7, 81); // Big Grin
    store.changeKey(emotePath, 8, 131); // Black Ranger Pose A
    store.changeKey(emotePath, 9, 135); // Black Ranger Pose B
    store.changeKey(emotePath, 10, 109); // Bomb Dance
    store.changeKey(emotePath, 11, 166); // Box
    store.changeKey(emotePath, 12, 173); // Box Step
    store.changeKey(emotePath, 13, 158); // Breath Control
    store.changeKey(emotePath, 14, 64); // Charmed
    store.changeKey(emotePath, 15, 67); // Cheer Jump
    store.changeKey(emotePath, 16, 65); // Cheer On
    store.changeKey(emotePath, 17, 66); // Cheer Wave
    store.changeKey(emotePath, 18, 188); // Confirm
    store.changeKey(emotePath, 19, 209); // Consider
    store.changeKey(emotePath, 20, 63); // Crimson Lotus
    store.changeKey(emotePath, 21, 144); // Diamond Dust
    store.changeKey(emotePath, 22, 146); // Dote
    store.changeKey(emotePath, 23, 154); // Eastern Bow
    store.changeKey(emotePath, 24, 129); // Eastern Dance
    store.changeKey(emotePath, 25, 124); // Eastern Greeting
    store.changeKey(emotePath, 26, 128); // Eastern Stretch
    store.changeKey(emotePath, 27, 221); // Eat Apple
    store.changeKey(emotePath, 28, 206); // Break Fast
    store.changeKey(emotePath, 29, 220); // Eat Rice Ball
    store.changeKey(emotePath, 30, 182); // Elucidate
    store.changeKey(emotePath, 31, 113); // Embrace
    store.changeKey(emotePath, 32, 190); // Endure
    store.changeKey(emotePath, 33, 125); // Eureka
    store.changeKey(emotePath, 34, 115); // Fist Bump
    store.changeKey(emotePath, 35, 195); // Fist Pump
    store.changeKey(emotePath, 36, 212); // Flame Dance
    store.changeKey(emotePath, 37, 185); // Get Fantasy
    store.changeKey(emotePath, 38, 119); // Gold Dance
    store.changeKey(emotePath, 39, 193); // Goobbue Do
    store.changeKey(emotePath, 40, 194); // Gratuity
    store.changeKey(emotePath, 41, 172); // Greeting
    store.changeKey(emotePath, 42, 214); // Guard
    store.changeKey(emotePath, 43, 102); // Harvest Dance
    store.changeKey(emotePath, 44, 127); // Haurchefant
    store.changeKey(emotePath, 45, 204); // Headache
    store.changeKey(emotePath, 46, 192); // Heel Toe
    store.changeKey(emotePath, 47, 213); // High Five
    store.changeKey(emotePath, 48, 187); // Hum
    store.changeKey(emotePath, 49, 110); // Huzzah
    store.changeKey(emotePath, 50, 59); // Imperial Salute
    store.changeKey(emotePath, 51, 208); // Insist
    store.changeKey(emotePath, 52, 217); // Lali Hop
    store.changeKey(emotePath, 53, 199); // Lali-ho
    store.changeKey(emotePath, 54, 203); // Lean
    store.changeKey(emotePath, 55, 215); // Malevolence
    store.changeKey(emotePath, 56, 104); // Manderville Dance
    store.changeKey(emotePath, 57, 198); // Manderville Mambo
    store.changeKey(emotePath, 58, 62); // Megaflare
    store.changeKey(emotePath, 59, 126); // Moogle Dance
    store.changeKey(emotePath, 60, 145); // Moonlift Dance
    store.changeKey(emotePath, 61, 114); // Most Gentlemanly
    store.changeKey(emotePath, 62, 224); // Paint It Black
    store.changeKey(emotePath, 63, 227); // Paint It Blue
    store.changeKey(emotePath, 64, 225); // Paint It Red
    store.changeKey(emotePath, 65, 226); // Paint It Yellow
    store.changeKey(emotePath, 66, 143); // Play Dead
    store.changeKey(emotePath, 67, 183); // Ponder
    store.changeKey(emotePath, 68, 186); // Popoto Step
    store.changeKey(emotePath, 69, 153); // Power Up
    store.changeKey(emotePath, 70, 142); // Pretty Please
    store.changeKey(emotePath, 71, 156); // Push-ups
    store.changeKey(emotePath, 72, 207); // Read
    store.changeKey(emotePath, 73, 130); // Red Ranger Pose A
    store.changeKey(emotePath, 74, 134); // Red Ranger Pose B
    store.changeKey(emotePath, 75, 82); // Reflect
    store.changeKey(emotePath, 76, 196); // Reprimand
    store.changeKey(emotePath, 77, 167); // Ritual Prayer
    store.changeKey(emotePath, 78, 189); // Scheme
    store.changeKey(emotePath, 79, 197); // Senor Sabotender
    store.changeKey(emotePath, 80, 181); // Shiver
    store.changeKey(emotePath, 81, 174); // Side Step
    store.changeKey(emotePath, 82, 201); // Simulation F
    store.changeKey(emotePath, 83, 200); // Simulation M
    store.changeKey(emotePath, 84, 157); // Sit-ups
    store.changeKey(emotePath, 85, 205); // Snap
    store.changeKey(emotePath, 86, 149); // Songbird
    store.changeKey(emotePath, 87, 148); // Spectacles
    store.changeKey(emotePath, 88, 178); // Splash
    store.changeKey(emotePath, 89, 155); // Squats
    store.changeKey(emotePath, 90, 101); // Step Dance
    store.changeKey(emotePath, 91, 120); // Sundrop Dance
    store.changeKey(emotePath, 92, 180); // Sweat
    store.changeKey(emotePath, 93, 223); // Sweep
    store.changeKey(emotePath, 94, 118); // Thavnairian Dance
    store.changeKey(emotePath, 95, 85); // Throw
    store.changeKey(emotePath, 96, 202); // Toast
    store.changeKey(emotePath, 97, 191); // Tomestone
    store.changeKey(emotePath, 98, 169); // Tremble
    store.changeKey(emotePath, 99, 175); // Ultima
    store.changeKey(emotePath, 100, 122); // Victory
    store.changeKey(emotePath, 101, 210); // Wasshoi
    store.changeKey(emotePath, 102, 151); // Water Flip
    store.changeKey(emotePath, 103, 170); // Winded
    store.changeKey(emotePath, 104, 132); // Yellow Ranger Pose A
    store.changeKey(emotePath, 105, 136); // Yellow Ranger Pose B
    store.changeKey(emotePath, 106, 176); // Yol Dance
    store.changeKey(emotePath, 107, 138); // Zantetsuken
    store.changeKey(emotePath, 108, 232); // Eat Pizza
    store.changeKey(emotePath, 109, 211); // Flower Shower
    store.changeKey(emotePath, 110, 229); // Pantomime
    store.changeKey(emotePath, 111, 230); // Vexed
}
