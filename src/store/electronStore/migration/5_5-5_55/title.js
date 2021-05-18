/** Titles ingested from XIVAPI in this version
 * All IDs need to be updated to their actual ID
 * */
export const migrate_5_55_titles = (overall) => {
    const titlePath = "character.character.title";

    // Remove old IDs that become unused
    overall.deleteTask(titlePath, "0");
    overall.deleteTask(titlePath, "399");
    overall.deleteTask(titlePath, "400");
    overall.deleteTask(titlePath, "401");

    // Update with new IDs
    overall.changeKey(titlePath, 0, 1); // The Insatiable
    overall.changeKey(titlePath, 1, 2); // The True
    overall.changeKey(titlePath, 2, 3); // Coeurlfist
    overall.changeKey(titlePath, 3, 4); // Ironeater
    overall.changeKey(titlePath, 4, 5); // Of the Vengeful Lance
    overall.changeKey(titlePath, 5, 6); // The Godsbow
    overall.changeKey(titlePath, 6, 7); // The White
    overall.changeKey(titlePath, 7, 8); // Starcaller
    overall.changeKey(titlePath, 8, 9); // The Exterminator
    overall.changeKey(titlePath, 9, 10); // Notorious Monster Hunter
    overall.changeKey(titlePath, 10, 11); // Honest Gillionaire
    overall.changeKey(titlePath, 11, 12); // Ruthless Gillionaire
    overall.changeKey(titlePath, 12, 13); // Warmonger
    overall.changeKey(titlePath, 13, 14); // Archmage
    overall.changeKey(titlePath, 14, 15); // Builder of the Realm
    overall.changeKey(titlePath, 15, 16); // Provider of the Realm
    overall.changeKey(titlePath, 16, 17); // Of the Golden Saw
    overall.changeKey(titlePath, 17, 18); // Of the Golden Anvil
    overall.changeKey(titlePath, 18, 19); // Of the Golden Hammer
    overall.changeKey(titlePath, 19, 20); // Of the Golden Leaf
    overall.changeKey(titlePath, 20, 21); // Of the Golden Hide
    overall.changeKey(titlePath, 21, 22); // Of the Golden Needle
    overall.changeKey(titlePath, 22, 23); // Of the Golden Lead
    overall.changeKey(titlePath, 23, 24); // Of the Golden Ladle
    overall.changeKey(titlePath, 24, 25); // Meadowbreaker
    overall.changeKey(titlePath, 25, 26); // Forestbreaker
    overall.changeKey(titlePath, 26, 27); // Desertbreaker
    overall.changeKey(titlePath, 27, 28); // Of the Meadow Mines
    overall.changeKey(titlePath, 28, 29); // Of the Forest Mines
    overall.changeKey(titlePath, 29, 30); // Of the Desert Mines
    overall.changeKey(titlePath, 30, 31); // Meadowreaper
    overall.changeKey(titlePath, 31, 32); // Forestreaper
    overall.changeKey(titlePath, 32, 33); // Desertreaper
    overall.changeKey(titlePath, 33, 34); // Of the Meadow Grasses
    overall.changeKey(titlePath, 34, 35); // Of the Forest Grasses
    overall.changeKey(titlePath, 35, 36); // Of the Desert Grasses
    overall.changeKey(titlePath, 36, 37); // Meadowcaster
    overall.changeKey(titlePath, 37, 38); // Forestcaster
    overall.changeKey(titlePath, 38, 39); // Desertcaster
    overall.changeKey(titlePath, 39, 40); // Of the Meadow Pools
    overall.changeKey(titlePath, 40, 41); // Of the Forest Pools
    overall.changeKey(titlePath, 41, 42); // Of the Desert Pools
    overall.changeKey(titlePath, 42, 43); // Carrier of the Cauldron
    overall.changeKey(titlePath, 43, 44); // The Assimilator
    overall.changeKey(titlePath, 44, 45); // Seeker of Blood
    overall.changeKey(titlePath, 45, 46); // Seeker of Truth
    overall.changeKey(titlePath, 46, 47); // Seeker of Skill
    overall.changeKey(titlePath, 47, 48); // Seeker of Bounty
    overall.changeKey(titlePath, 48, 49); // Sidestepper
    overall.changeKey(titlePath, 49, 50); // Lord Protector
    overall.changeKey(titlePath, 50, 51); // Lord Creator
    overall.changeKey(titlePath, 51, 52); // Peacemaker
    overall.changeKey(titlePath, 52, 53); // The Last Resort
    overall.changeKey(titlePath, 53, 54); // The Sword of La Noscea
    overall.changeKey(titlePath, 54, 55); // The Sword of the Shroud
    overall.changeKey(titlePath, 55, 56); // The Sword of Thanalan
    overall.changeKey(titlePath, 56, 57); // The Sword of Eorzea
    overall.changeKey(titlePath, 57, 58); // The Shield of La Noscea
    overall.changeKey(titlePath, 58, 59); // The Shield of the Shroud
    overall.changeKey(titlePath, 59, 60); // The Shield of Thanalan
    overall.changeKey(titlePath, 60, 61); // The Shield of Eorzea
    overall.changeKey(titlePath, 61, 62); // Brother of the Broken Blade
    overall.changeKey(titlePath, 62, 63); // The Warden's Wall
    overall.changeKey(titlePath, 63, 64); // Bearer of the Horn
    overall.changeKey(titlePath, 64, 65); // The Uncommitted
    overall.changeKey(titlePath, 65, 66); // The Professional
    overall.changeKey(titlePath, 66, 67); // Inquisitor
    overall.changeKey(titlePath, 67, 68); // Divine Crusher
    overall.changeKey(titlePath, 68, 69); // Stonesplitter
    overall.changeKey(titlePath, 69, 70); // A Kobold's Worst Nightmare
    overall.changeKey(titlePath, 70, 71); // An Ixal's Worst Nightmare
    overall.changeKey(titlePath, 71, 72); // An Amalj'aa's Worst Nightmare
    overall.changeKey(titlePath, 72, 73); // The Guardian of Aleport
    overall.changeKey(titlePath, 73, 74); // The Guardian of Hyrstmill
    overall.changeKey(titlePath, 74, 75); // The Guardian of the Golden Bazaar
    overall.changeKey(titlePath, 75, 76); // The Wind of Aleport
    overall.changeKey(titlePath, 76, 77); // The Wind of Hyrstmill
    overall.changeKey(titlePath, 77, 78); // The Wind of the Golden Bazaar
    overall.changeKey(titlePath, 78, 79); // The Hand of Aleport
    overall.changeKey(titlePath, 79, 80); // The Hand of Hyrstmill
    overall.changeKey(titlePath, 80, 81); // The Hand of the Golden Bazaar
    overall.changeKey(titlePath, 81, 82); // Wild Thing
    overall.changeKey(titlePath, 82, 83); // The Winter Wyrm
    overall.changeKey(titlePath, 83, 84); // Messenger of Love
    overall.changeKey(titlePath, 84, 85); // Royal Seneschal
    overall.changeKey(titlePath, 85, 86); // Dreamseeker
    overall.changeKey(titlePath, 86, 87); // Cascadier
    overall.changeKey(titlePath, 87, 88); // Crystal Bearer
    overall.changeKey(titlePath, 88, 89); // Stormlord
    overall.changeKey(titlePath, 89, 90); // Serpentlord
    overall.changeKey(titlePath, 90, 91); // Flamelord
    overall.changeKey(titlePath, 91, 92); // The Stormsworn
    overall.changeKey(titlePath, 92, 93); // The Serpentsworn
    overall.changeKey(titlePath, 93, 94); // The Flamesworn
    overall.changeKey(titlePath, 94, 95); // Stormcarrier
    overall.changeKey(titlePath, 95, 96); // Serpentcarrier
    overall.changeKey(titlePath, 96, 97); // Flamecarrier
    overall.changeKey(titlePath, 97, 98); // Stormbringer
    overall.changeKey(titlePath, 98, 99); // Serpentbringer
    overall.changeKey(titlePath, 99, 100); // Flamebringer
    overall.changeKey(titlePath, 100, 101); // Featherfoot
    overall.changeKey(titlePath, 101, 102); // A Bo's Best Friend
    overall.changeKey(titlePath, 102, 103); // Lightning
    overall.changeKey(titlePath, 103, 104); // Cavalier
    overall.changeKey(titlePath, 104, 105); // The Wanderer's Shadow
    overall.changeKey(titlePath, 105, 106); // Green Eyes
    overall.changeKey(titlePath, 106, 107); // The Strategist
    overall.changeKey(titlePath, 107, 108); // The Reaper
    overall.changeKey(titlePath, 108, 109); // Dungeon Master
    overall.changeKey(titlePath, 109, 110); // Tempter of Fate
    overall.changeKey(titlePath, 110, 111); // Elite Cascadier
    overall.changeKey(titlePath, 111, 112); // Storm Puppy
    overall.changeKey(titlePath, 112, 113); // Storm Howler
    overall.changeKey(titlePath, 113, 114); // Storm Growler
    overall.changeKey(titlePath, 114, 115); // Storm Hound
    overall.changeKey(titlePath, 115, 116); // Storm Stalker
    overall.changeKey(titlePath, 116, 117); // Storm Chaser
    overall.changeKey(titlePath, 117, 122); // Serpent Puppy
    overall.changeKey(titlePath, 118, 123); // Serpent Howler
    overall.changeKey(titlePath, 119, 124); // Serpent Growler
    overall.changeKey(titlePath, 120, 125); // Serpent Hound
    overall.changeKey(titlePath, 121, 126); // Serpent Stalker
    overall.changeKey(titlePath, 122, 127); // Serpent Chaser
    overall.changeKey(titlePath, 123, 132); // Flame Puppy
    overall.changeKey(titlePath, 124, 133); // Flame Howler
    overall.changeKey(titlePath, 125, 134); // Flame Growler
    overall.changeKey(titlePath, 126, 135); // Flame Hound
    overall.changeKey(titlePath, 127, 136); // Flame Stalker
    overall.changeKey(titlePath, 128, 137); // Flame Chaser
    overall.changeKey(titlePath, 129, 142); // The Ravenous Wolf
    overall.changeKey(titlePath, 130, 143); // The Alpha Wolf
    overall.changeKey(titlePath, 131, 144); // The Heart of the Party
    overall.changeKey(titlePath, 132, 145); // Brother of Ash
    overall.changeKey(titlePath, 133, 146); // Sylph-Friend
    overall.changeKey(titlePath, 134, 147); // Treasure Hunter
    overall.changeKey(titlePath, 135, 148); // 789th Order Champion
    overall.changeKey(titlePath, 136, 149); // Novv Clutchmate
    overall.changeKey(titlePath, 137, 150); // The Ambitious Angler
    overall.changeKey(titlePath, 138, 151); // The Meat Shield
    overall.changeKey(titlePath, 139, 152); // The Meat Axe
    overall.changeKey(titlePath, 140, 153); // Of the Stalwart Shield
    overall.changeKey(titlePath, 141, 154); // Of the Stalwart Axe
    overall.changeKey(titlePath, 142, 155); // Frontline Forerunner
    overall.changeKey(titlePath, 143, 156); // Storm Forerunner
    overall.changeKey(titlePath, 144, 158); // Serpent Forerunner
    overall.changeKey(titlePath, 145, 157); // Flame Forerunner
    overall.changeKey(titlePath, 146, 159); // Drone Sniper
    overall.changeKey(titlePath, 147, 160); // Heliodrome Hero
    overall.changeKey(titlePath, 148, 161); // Hunter for Hire
    overall.changeKey(titlePath, 149, 162); // Seeker of Fortune
    overall.changeKey(titlePath, 150, 163); // Seasoned Tracker
    overall.changeKey(titlePath, 151, 164); // Bounty Hunter
    overall.changeKey(titlePath, 152, 165); // Soldier of Fortune
    overall.changeKey(titlePath, 153, 166); // Captain of the Hunt
    overall.changeKey(titlePath, 154, 167); // Rafflesia Reaper
    overall.changeKey(titlePath, 155, 168); // Melusine Mauler
    overall.changeKey(titlePath, 156, 169); // The Avatar
    overall.changeKey(titlePath, 157, 170); // Domitor
    overall.changeKey(titlePath, 158, 171); // The Disassembler
    overall.changeKey(titlePath, 159, 173); // Bearer of the Coffer
    overall.changeKey(titlePath, 160, 174); // Defender of Eorzea
    overall.changeKey(titlePath, 161, 175); // The Postman
    overall.changeKey(titlePath, 162, 176); // Ehcatl Blackguard
    overall.changeKey(titlePath, 163, 177); // The Negotiator
    overall.changeKey(titlePath, 164, 178); // The Final Witness
    overall.changeKey(titlePath, 165, 179); // Of Dragons Deep
    overall.changeKey(titlePath, 166, 180); // Master Caster
    overall.changeKey(titlePath, 167, 182); // The Shadow
    overall.changeKey(titlePath, 168, 183); // Icebreaker
    overall.changeKey(titlePath, 169, 184); // Of the Silver Lining
    overall.changeKey(titlePath, 170, 185); // Gentleman
    overall.changeKey(titlePath, 171, 186); // Cupid
    overall.changeKey(titlePath, 172, 187); // Tamer of Steeds
    overall.changeKey(titlePath, 173, 188); // The Unsevered
    overall.changeKey(titlePath, 174, 189); // Slaughterhouse
    overall.changeKey(titlePath, 175, 190); // The Hand of Mercy
    overall.changeKey(titlePath, 176, 191); // The Light in Hand
    overall.changeKey(titlePath, 177, 192); // The Light of the Land
    overall.changeKey(titlePath, 178, 193); // Z
    overall.changeKey(titlePath, 179, 194); // Golemancer
    overall.changeKey(titlePath, 180, 195); // Gambler
    overall.changeKey(titlePath, 181, 196); // High Roller
    overall.changeKey(titlePath, 182, 197); // Chocobo Breeder
    overall.changeKey(titlePath, 183, 198); // Chocobo Trainer
    overall.changeKey(titlePath, 184, 199); // Bug Boy
    overall.changeKey(titlePath, 185, 200); // Senior Jockey
    overall.changeKey(titlePath, 186, 201); // Veteran Jockey
    overall.changeKey(titlePath, 187, 202); // The First Across
    overall.changeKey(titlePath, 188, 203); // Deck Holder
    overall.changeKey(titlePath, 189, 204); // Deck Hoarder
    overall.changeKey(titlePath, 190, 205); // The Trinity
    overall.changeKey(titlePath, 191, 206); // Duelist
    overall.changeKey(titlePath, 192, 207); // Keymaster
    overall.changeKey(titlePath, 193, 208); // The Fungah
    overall.changeKey(titlePath, 194, 209); // Moneybags
    overall.changeKey(titlePath, 195, 210); // Raiser of Mountains
    overall.changeKey(titlePath, 196, 211); // Bearer of the Torch
    overall.changeKey(titlePath, 197, 212); // Postmaster
    overall.changeKey(titlePath, 198, 213); // Half-boiled Hero
    overall.changeKey(titlePath, 199, 214); // Unbeliever
    overall.changeKey(titlePath, 200, 215); // The Redeemed
    overall.changeKey(titlePath, 201, 216); // Nidhogg Slayer
    overall.changeKey(titlePath, 202, 217); // Of the Silver Fuller
    overall.changeKey(titlePath, 203, 218); // Imperial Nuisance
    overall.changeKey(titlePath, 204, 219); // Under-archon
    overall.changeKey(titlePath, 205, 220); // The End of Ascalon
    overall.changeKey(titlePath, 206, 222); // The Oathkeeper
    overall.changeKey(titlePath, 207, 223); // Of the 14th Chakra
    overall.changeKey(titlePath, 208, 224); // The Mythril Heart
    overall.changeKey(titlePath, 209, 225); // The Azure Dragoon
    overall.changeKey(titlePath, 210, 226); // Skysinger
    overall.changeKey(titlePath, 211, 227); // Pure White
    overall.changeKey(titlePath, 212, 228); // Annihilator
    overall.changeKey(titlePath, 213, 229); // Dreadspawn
    overall.changeKey(titlePath, 214, 230); // Nymian Marine
    overall.changeKey(titlePath, 215, 231); // The Darkest Shadow
    overall.changeKey(titlePath, 216, 232); // Blackblood
    overall.changeKey(titlePath, 217, 233); // Liberator
    overall.changeKey(titlePath, 218, 234); // Stargazer
    overall.changeKey(titlePath, 219, 235); // Illuminati Quencher
    overall.changeKey(titlePath, 220, 236); // Finder of False Gods
    overall.changeKey(titlePath, 221, 237); // Lighter than Air
    overall.changeKey(titlePath, 222, 239); // Grandmaster of War
    overall.changeKey(titlePath, 223, 240); // Grandmaster of Magic
    overall.changeKey(titlePath, 224, 241); // Dark Driver
    overall.changeKey(titlePath, 225, 242); // Of the Stalwart Sword
    overall.changeKey(titlePath, 226, 243); // Keeper of Knowledge
    overall.changeKey(titlePath, 227, 248); // Grandmaster of the Hand
    overall.changeKey(titlePath, 228, 249); // Grandmaster of the Land
    overall.changeKey(titlePath, 229, 250); // Molder of Masterpieces
    overall.changeKey(titlePath, 230, 251); // Amasser of Masterpieces
    overall.changeKey(titlePath, 231, 252); // Business Associate
    overall.changeKey(titlePath, 232, 253); // Master Carpenter
    overall.changeKey(titlePath, 233, 254); // Master Blacksmith
    overall.changeKey(titlePath, 234, 255); // Master Armorer
    overall.changeKey(titlePath, 235, 256); // Master Goldsmith
    overall.changeKey(titlePath, 236, 257); // Master Leatherworker
    overall.changeKey(titlePath, 237, 258); // Master Weaver
    overall.changeKey(titlePath, 238, 259); // Master Alchemist
    overall.changeKey(titlePath, 239, 260); // Master Culinarian
    overall.changeKey(titlePath, 240, 261); // Master Miner
    overall.changeKey(titlePath, 241, 262); // Master Botanist
    overall.changeKey(titlePath, 242, 263); // Master Fisher
    overall.changeKey(titlePath, 243, 264); // The Fortunate
    overall.changeKey(titlePath, 244, 265); // Good Samaritan
    overall.changeKey(titlePath, 245, 266); // Minion Collector
    overall.changeKey(titlePath, 246, 267); // Minion Master
    overall.changeKey(titlePath, 247, 268); // Mammeteer
    overall.changeKey(titlePath, 248, 269); // Prince of Verminion
    overall.changeKey(titlePath, 249, 270); // Lord of Verminion
    overall.changeKey(titlePath, 250, 271); // House Fortemps Knight
    overall.changeKey(titlePath, 251, 272); // Sky Pirate
    overall.changeKey(titlePath, 252, 273); // The Noumenon
    overall.changeKey(titlePath, 253, 274); // Sundrop Dancer
    overall.changeKey(titlePath, 254, 275); // Myth Breaker
    overall.changeKey(titlePath, 255, 276); // Veteran Explorer
    overall.changeKey(titlePath, 256, 277); // Special Advisor
    overall.changeKey(titlePath, 257, 278); // Notorious Monster Slayer
    overall.changeKey(titlePath, 258, 279); // Hungry Wolf
    overall.changeKey(titlePath, 259, 280); // The Devourer
    overall.changeKey(titlePath, 260, 281); // The Unmoving
    overall.changeKey(titlePath, 261, 282); // The Unrelenting
    overall.changeKey(titlePath, 262, 283); // The Unseen
    overall.changeKey(titlePath, 263, 284); // The Unleashed
    overall.changeKey(titlePath, 264, 285); // The Undamaged
    overall.changeKey(titlePath, 265, 286); // Mentor
    overall.changeKey(titlePath, 266, 287); // Mentor of Mentors
    overall.changeKey(titlePath, 267, 288); // Carrier of the Kettle
    overall.changeKey(titlePath, 268, 289); // The Gear of Change
    overall.changeKey(titlePath, 269, 290); // Allthoughts
    overall.changeKey(titlePath, 270, 291); // The Newmind
    overall.changeKey(titlePath, 271, 292); // The Dragonsong
    overall.changeKey(titlePath, 272, 293); // Polis Raider
    overall.changeKey(titlePath, 273, 294); // Polis Dweller
    overall.changeKey(titlePath, 274, 295); // Polis Lord
    overall.changeKey(titlePath, 275, 296); // Pom Friend
    overall.changeKey(titlePath, 276, 297); // Leader of the Pack
    overall.changeKey(titlePath, 277, 298); // Beta Wolf
    overall.changeKey(titlePath, 278, 299); // Hunter Wolf
    overall.changeKey(titlePath, 279, 300); // Bronze Wolf
    overall.changeKey(titlePath, 280, 301); // Silver Wolf
    overall.changeKey(titlePath, 281, 302); // Gold Wolf
    overall.changeKey(titlePath, 282, 303); // Platinum Wolf
    overall.changeKey(titlePath, 283, 304); // Diamond Wolf
    overall.changeKey(titlePath, 284, 305); // Of the First Pack
    overall.changeKey(titlePath, 285, 306); // Of the Second Pack
    overall.changeKey(titlePath, 286, 307); // Of the Hungry Pack
    overall.changeKey(titlePath, 287, 308); // Of the Bronze Pack
    overall.changeKey(titlePath, 288, 309); // Of the Silver Pack
    overall.changeKey(titlePath, 289, 310); // Of the Gold Pack
    overall.changeKey(titlePath, 290, 311); // Of the Platinum Pack
    overall.changeKey(titlePath, 291, 312); // Of the Diamond Pack
    overall.changeKey(titlePath, 292, 313); // The Knight of Glory
    overall.changeKey(titlePath, 293, 314); // The Chief Mourner
    overall.changeKey(titlePath, 294, 315); // The Wings of Time
    overall.changeKey(titlePath, 295, 316); // Surrenderer of Souls
    overall.changeKey(titlePath, 296, 317); // Khloe's Friend
    overall.changeKey(titlePath, 297, 318); // Khloe's Best Friend
    overall.changeKey(titlePath, 298, 319); // Hero of Gelmorra
    overall.changeKey(titlePath, 299, 320); // Lightbringer
    overall.changeKey(titlePath, 300, 321); // Lonely Explorer
    overall.changeKey(titlePath, 301, 322); // The Lucky
    overall.changeKey(titlePath, 302, 323); // Of the Sixth Sense
    overall.changeKey(titlePath, 303, 324); // Corpse Dancer
    overall.changeKey(titlePath, 304, 325); // Makai Master
    overall.changeKey(titlePath, 305, 326); // Garo
    overall.changeKey(titlePath, 306, 327); // Makai Monk
    overall.changeKey(titlePath, 307, 328); // Barago
    overall.changeKey(titlePath, 308, 329); // Dan
    overall.changeKey(titlePath, 309, 330); // Makai Bard
    overall.changeKey(titlePath, 310, 331); // Makai Black Mage
    overall.changeKey(titlePath, 311, 332); // Makai White Mage
    overall.changeKey(titlePath, 312, 333); // Zero
    overall.changeKey(titlePath, 313, 334); // Makai Summoner
    overall.changeKey(titlePath, 314, 335); // Makai Scholar
    overall.changeKey(titlePath, 315, 336); // Kiba
    overall.changeKey(titlePath, 316, 337); // Makai Machinist
    overall.changeKey(titlePath, 317, 338); // Makai Astrologian
    overall.changeKey(titlePath, 318, 339); // Moonlifter
    overall.changeKey(titlePath, 319, 340); // The Finest Pupil's Ally
    overall.changeKey(titlePath, 320, 341); // Fatewalker
    overall.changeKey(titlePath, 321, 342); // Of the Holy Body
    overall.changeKey(titlePath, 322, 343); // Gigi's Best Friend
    overall.changeKey(titlePath, 323, 344); // Tamer of the Undying Flame
    overall.changeKey(titlePath, 324, 345); // Mortal Fist
    overall.changeKey(titlePath, 325, 346); // Rhalgr's Right Fist
    overall.changeKey(titlePath, 326, 347); // Tablesetter
    overall.changeKey(titlePath, 327, 348); // Halone's Cup Bearer
    overall.changeKey(titlePath, 328, 349); // Zhloe's Friend
    overall.changeKey(titlePath, 329, 350); // Zhloe's Best Friend
    overall.changeKey(titlePath, 330, 351); // Survivor of the Song
    overall.changeKey(titlePath, 331, 352); // Ijin Traveler
    overall.changeKey(titlePath, 332, 353); // Confederate
    overall.changeKey(titlePath, 333, 354); // Adversary
    overall.changeKey(titlePath, 334, 355); // Steppe Warrior
    overall.changeKey(titlePath, 335, 356); // The Returned
    overall.changeKey(titlePath, 336, 357); // Lyse's Right Fist
    overall.changeKey(titlePath, 337, 358); // The Liberator
    overall.changeKey(titlePath, 338, 359); // Deltascape Deleter
    overall.changeKey(titlePath, 339, 360); // Ul Cup Champion
    overall.changeKey(titlePath, 340, 361); // The Fistful
    overall.changeKey(titlePath, 341, 362); // Loved by the Axe
    overall.changeKey(titlePath, 342, 363); // The Blood Dragoon
    overall.changeKey(titlePath, 343, 364); // Of the True Autumn
    overall.changeKey(titlePath, 344, 365); // Padjal Protector
    overall.changeKey(titlePath, 345, 366); // Gembreaker
    overall.changeKey(titlePath, 346, 367); // The First Caller
    overall.changeKey(titlePath, 347, 368); // Keeper of the Lilacs
    overall.changeKey(titlePath, 348, 369); // Eorzean Ninja
    overall.changeKey(titlePath, 349, 370); // Of the Swirling Abyss
    overall.changeKey(titlePath, 350, 371); // The Howler
    overall.changeKey(titlePath, 351, 372); // Of the Eastern Skies
    overall.changeKey(titlePath, 352, 373); // The Red
    overall.changeKey(titlePath, 353, 374); // Muso
    overall.changeKey(titlePath, 354, 375); // God of War
    overall.changeKey(titlePath, 355, 376); // God of Magic
    overall.changeKey(titlePath, 356, 377); // God of the Hand
    overall.changeKey(titlePath, 357, 378); // God of the Land
    overall.changeKey(titlePath, 358, 379); // Of the Longest Hunt
    overall.changeKey(titlePath, 359, 380); // Of the Endless Hunt
    overall.changeKey(titlePath, 360, 381); // Thrillseeker
    overall.changeKey(titlePath, 361, 382); // Ultimate Thrillseeker
    overall.changeKey(titlePath, 362, 383); // Canal Raider
    overall.changeKey(titlePath, 363, 244); // Canal Dweller
    overall.changeKey(titlePath, 364, 245); // Canal Lord
    overall.changeKey(titlePath, 365, 246); // The Necromancer
    overall.changeKey(titlePath, 366, 118); // Naago's Friend
    overall.changeKey(titlePath, 367, 119); // Naago's Partner
    overall.changeKey(titlePath, 368, 120); // Wings of Steel
    overall.changeKey(titlePath, 369, 121); // Wings of Fire
    overall.changeKey(titlePath, 370, 128); // Deep Canal Raider
    overall.changeKey(titlePath, 371, 129); // Deep Canal Dweller
    overall.changeKey(titlePath, 372, 130); // The Luckiest of Lords
    overall.changeKey(titlePath, 373, 131); // Crimson Explorer
    overall.changeKey(titlePath, 374, 138); // The Legend
    overall.changeKey(titlePath, 375, 139); // Raubahn's Left Arm
    overall.changeKey(titlePath, 376, 140); // Of the Blue
    overall.changeKey(titlePath, 377, 141); // Fashion Leader
    overall.changeKey(titlePath, 378, 172); // Eversharp
    overall.changeKey(titlePath, 379, 181); // The New Sun
    overall.changeKey(titlePath, 380, 221); // Snake in the Grass
    overall.changeKey(titlePath, 381, 393); // Siltwater Socialite
    overall.changeKey(titlePath, 382, 394); // Matchmaker
    overall.changeKey(titlePath, 383, 395); // Eorzean Ninja Warrior
    overall.changeKey(titlePath, 384, 389); // Vanguard
    overall.changeKey(titlePath, 385, 390); // Kurenai's Best Friend
    overall.changeKey(titlePath, 386, 391); // Kurenai's Partner
    overall.changeKey(titlePath, 387, 392); // Under the Moonlight
    overall.changeKey(titlePath, 388, 397); // The Ultimate Legend
    overall.changeKey(titlePath, 389, 396); // Calamatologist
    overall.changeKey(titlePath, 390, 384); // Hiruko Hunter
    overall.changeKey(titlePath, 391, 385); // Heavenly Gate Crasher
    overall.changeKey(titlePath, 392, 386); // True Hero
    overall.changeKey(titlePath, 393, 387); // Lone Hero
    overall.changeKey(titlePath, 394, 388); // Hoarder
    overall.changeKey(titlePath, 395, 398); // Monster Hunter
    overall.changeKey(titlePath, 396, 402); // Prelude in Violet
    overall.changeKey(titlePath, 397, 403); // Philanthropist
    overall.changeKey(titlePath, 398, 404); // Altar Boy
    overall.changeKey(titlePath, 399, 405); // The Devout
    overall.changeKey(titlePath, 400, 406); // Invoker of Gods
    overall.changeKey(titlePath, 401, 408); // Kyubi Tamer
    overall.changeKey(titlePath, 402, 409); // Mahjong Enthusiast
    overall.changeKey(titlePath, 403, 410); // Mahjong Master
    overall.changeKey(titlePath, 404, 411); // Little Piggy
    overall.changeKey(titlePath, 405, 412); // Tough Customer
    overall.changeKey(titlePath, 406, 413); // Blue Blood
    overall.changeKey(titlePath, 407, 414); // Mask of the Blue
    overall.changeKey(titlePath, 408, 415); // Perfect Blue
    overall.changeKey(titlePath, 409, 416); // Eurekan Explorer
    overall.changeKey(titlePath, 410, 417); // A Requiem For Heroes
    overall.changeKey(titlePath, 411, 418); // The Soboro
    overall.changeKey(titlePath, 412, 419); // Kageyama Killer
    overall.changeKey(titlePath, 413, 420); // Kingsglaive
    overall.changeKey(titlePath, 414, 421); // Lord of the Fetch
    overall.changeKey(titlePath, 415, 407); // Grandmaster Caster
    overall.changeKey(titlePath, 416, 422); // Soul of War
    overall.changeKey(titlePath, 417, 423); // Soul of Magic
    overall.changeKey(titlePath, 418, 424); // Soul of the Craft
    overall.changeKey(titlePath, 419, 425); // Soul of the Harvest
    overall.changeKey(titlePath, 420, 426); // Outlander
    overall.changeKey(titlePath, 421, 427); // The Fae-touched
    overall.changeKey(titlePath, 422, 428); // Seeker of Hidden Truths
    overall.changeKey(titlePath, 423, 429); // Of the Sunless Sea
    overall.changeKey(titlePath, 424, 430); // Enemy of Innocence
    overall.changeKey(titlePath, 425, 431); // Shadowbringer
    overall.changeKey(titlePath, 426, 432); // Sworn Protector
    overall.changeKey(titlePath, 427, 433); // The Heart's Beat
    overall.changeKey(titlePath, 428, 434); // Living Memory
    overall.changeKey(titlePath, 429, 435); // Bulwark between Worlds
    overall.changeKey(titlePath, 430, 436); // The Transcendent
    overall.changeKey(titlePath, 431, 437); // Worldcleaver
    overall.changeKey(titlePath, 432, 438); // Bolt from the Black
    overall.changeKey(titlePath, 433, 439); // The Song upon the Wind
    overall.changeKey(titlePath, 434, 440); // Firstblessed
    overall.changeKey(titlePath, 435, 441); // Of Stranger Shadow
    overall.changeKey(titlePath, 436, 442); // Farcaller
    overall.changeKey(titlePath, 437, 443); // Knower of Twin Worlds
    overall.changeKey(titlePath, 438, 444); // Shadow of the Other
    overall.changeKey(titlePath, 439, 445); // The Boundless Dark
    overall.changeKey(titlePath, 440, 446); // The Shot Heard Across Worlds
    overall.changeKey(titlePath, 441, 447); // Distant Stargazer
    overall.changeKey(titlePath, 442, 448); // Dualistic Duelist
    overall.changeKey(titlePath, 443, 449); // Samurai in a Strange Land
    overall.changeKey(titlePath, 444, 450); // Wandering Vanguard
    overall.changeKey(titlePath, 445, 451); // Riftdancer
    overall.changeKey(titlePath, 446, 452); // Otherworld Smith
    overall.changeKey(titlePath, 447, 453); // Otherworld Artisan
    overall.changeKey(titlePath, 448, 454); // Otherworld Apothecary
    overall.changeKey(titlePath, 449, 455); // Otherworld Seeker
    overall.changeKey(titlePath, 450, 456); // Otherworld Angler
    overall.changeKey(titlePath, 451, 457); // The Multifaceted
    overall.changeKey(titlePath, 452, 458); // Trusted Friend
    overall.changeKey(titlePath, 453, 459); // The Invisible Hand
    overall.changeKey(titlePath, 454, 460); // Charming Brute
    overall.changeKey(titlePath, 455, 461); // The Fabulously Feral
    overall.changeKey(titlePath, 456, 462); // Of Unyielding Oath
    overall.changeKey(titlePath, 457, 463); // Of Unyielding Steel
    overall.changeKey(titlePath, 458, 464); // Of Unyielding Principle
    overall.changeKey(titlePath, 459, 465); // Of Unyielding Lealty
    overall.changeKey(titlePath, 460, 466); // Dungeon Raider
    overall.changeKey(titlePath, 461, 467); // Dungeon Dweller
    overall.changeKey(titlePath, 462, 468); // Dungeon Lord
    overall.changeKey(titlePath, 463, 469); // Kindred Sword
    overall.changeKey(titlePath, 464, 476); // Of Virtuous Deeds
    overall.changeKey(titlePath, 465, 477); // Kai-Shirr's Best Mate
    overall.changeKey(titlePath, 466, 478); // Honeybee
    overall.changeKey(titlePath, 467, 479); // Sweet Dreamer
    overall.changeKey(titlePath, 468, 480); // The Perfect Legend
    overall.changeKey(titlePath, 469, 481); // Blue to the Bone
    overall.changeKey(titlePath, 470, 482); // Blue Luminary
    overall.changeKey(titlePath, 471, 483); // Masked of the Round
    overall.changeKey(titlePath, 472, 484); // Unbound Blue
    overall.changeKey(titlePath, 473, 485); // Blue Justice
    overall.changeKey(titlePath, 474, 486); // The Battleforged
    overall.changeKey(titlePath, 475, 487); // Champion of the Blue
    overall.changeKey(titlePath, 476, 490); // Frame of the Firmament
    overall.changeKey(titlePath, 477, 491); // Forge of the Firmament
    overall.changeKey(titlePath, 478, 492); // Hammer of the Firmament
    overall.changeKey(titlePath, 479, 493); // Jewel of the Firmament
    overall.changeKey(titlePath, 480, 494); // Knife of the Firmament
    overall.changeKey(titlePath, 481, 495); // Weave of the Firmament
    overall.changeKey(titlePath, 482, 496); // Panacea of the Firmament
    overall.changeKey(titlePath, 483, 497); // Pan of the Firmament
    overall.changeKey(titlePath, 484, 498); // Pick of the Firmament
    overall.changeKey(titlePath, 485, 499); // Hatchet of the Firmament
    overall.changeKey(titlePath, 486, 500); // Rod of the Firmament
    overall.changeKey(titlePath, 487, 501); // The Hand of Creation
    overall.changeKey(titlePath, 488, 502); // Divine Provider
    overall.changeKey(titlePath, 489, 503); // The Nest's Own Carpenter
    overall.changeKey(titlePath, 490, 504); // The Nest's Own Blacksmith
    overall.changeKey(titlePath, 491, 505); // The Nest's Own Armorer
    overall.changeKey(titlePath, 492, 506); // The Nest's Own Goldsmith
    overall.changeKey(titlePath, 493, 507); // The Nest's Own Leatherworker
    overall.changeKey(titlePath, 494, 508); // The Nest's Own Weaver
    overall.changeKey(titlePath, 495, 509); // The Nest's Own Alchemist
    overall.changeKey(titlePath, 496, 510); // The Nest's Own Culinarian
    overall.changeKey(titlePath, 497, 511); // The Nest's Own Miner
    overall.changeKey(titlePath, 498, 512); // The Nest's Own Botanist
    overall.changeKey(titlePath, 499, 513); // The Nest's Own Fisher
    overall.changeKey(titlePath, 500, 514); // Fortune's Favored Kupo
    overall.changeKey(titlePath, 501, 515); // Ocean Fisher
    overall.changeKey(titlePath, 502, 516); // Octopus Traveler
    overall.changeKey(titlePath, 503, 517); // Shark Hunter
    overall.changeKey(titlePath, 504, 518); // Jellyfish Fanatic
    overall.changeKey(titlePath, 505, 519); // Sea Dragoon
    overall.changeKey(titlePath, 506, 520); // Echo of a Fallen Star
    overall.changeKey(titlePath, 507, 521); // Ronkan Historian
    overall.changeKey(titlePath, 508, 522); // A Dragon's Best Friend
    overall.changeKey(titlePath, 509, 523); // Tinker Tutor
    overall.changeKey(titlePath, 510, 524); // Partner in Teatime
    overall.changeKey(titlePath, 511, 525); // Vrai Ami
    overall.changeKey(titlePath, 512, 526); // Tank Technician
    overall.changeKey(titlePath, 513, 527); // Shepherd to the Stars
    overall.changeKey(titlePath, 514, 528); // Featherfall's Finest Carpenter
    overall.changeKey(titlePath, 515, 529); // Featherfall's Finest Blacksmith
    overall.changeKey(titlePath, 516, 530); // Featherfall's Finest Armorer
    overall.changeKey(titlePath, 517, 531); // Featherfall's Finest Goldsmith
    overall.changeKey(titlePath, 518, 532); // Featherfall's Finest Leatherworker
    overall.changeKey(titlePath, 519, 533); // Featherfall's Finest Weaver
    overall.changeKey(titlePath, 520, 534); // Featherfall's Finest Alchemist
    overall.changeKey(titlePath, 521, 535); // Featherfall's Finest Culinarian
    overall.changeKey(titlePath, 522, 536); // Featherfall's Finest Miner
    overall.changeKey(titlePath, 523, 537); // Featherfall's Finest Botanist
    overall.changeKey(titlePath, 524, 538); // Featherfall's Finest Fisher
    overall.changeKey(titlePath, 525, 539); // The Decisive Blow
    overall.changeKey(titlePath, 526, 540); // Skirmisher
    overall.changeKey(titlePath, 527, 541); // Siege Liege
    overall.changeKey(titlePath, 528, 542); // Gabriel's Downfall
    overall.changeKey(titlePath, 529, 543); // Queller of Beasts
    overall.changeKey(titlePath, 530, 544); // The Death of Flame
    overall.changeKey(titlePath, 531, 545); // Sword of the South
    overall.changeKey(titlePath, 532, 546); // Guardian Angel
    overall.changeKey(titlePath, 533, 549); // Writer of Histories
    overall.changeKey(titlePath, 534, 550); // Of the Truest Blue
    overall.changeKey(titlePath, 535, 551); // Blue Ranger
    overall.changeKey(titlePath, 536, 552); // The Azure and Omega
    overall.changeKey(titlePath, 537, 553); // Balloon Catcher
    overall.changeKey(titlePath, 538, 554); // Deadliest Catcher
    overall.changeKey(titlePath, 539, 555); // Manta Maniac
    overall.changeKey(titlePath, 540, 556); // World-class Troller
    overall.changeKey(titlePath, 541, 559); // Tournament Leader
    overall.changeKey(titlePath, 542, 560); // Secret Finder
    overall.changeKey(titlePath, 543, 561); // Secret Keeper
    overall.changeKey(titlePath, 544, 562); // Gaolbreaker
    overall.changeKey(titlePath, 545, 563); // Master of the Sea
    overall.changeKey(titlePath, 546, 564); // Delubrum Delver
    overall.changeKey(titlePath, 547, 565); // The Risensung Carpenter
    overall.changeKey(titlePath, 548, 566); // The Risensung Blacksmith
    overall.changeKey(titlePath, 549, 567); // The Risensung Armorer
    overall.changeKey(titlePath, 550, 568); // The Risensung Goldsmith
    overall.changeKey(titlePath, 551, 569); // The Risensung Leatherworker
    overall.changeKey(titlePath, 552, 570); // The Risensung Weaver
    overall.changeKey(titlePath, 553, 571); // The Risensung Alchemist
    overall.changeKey(titlePath, 554, 572); // The Risensung Culinarian
    overall.changeKey(titlePath, 555, 573); // The Risensung Miner
    overall.changeKey(titlePath, 556, 574); // The Risensung Botanist
    overall.changeKey(titlePath, 557, 575); // The Risensung Fisher
    overall.changeKey(titlePath, 558, 488); // Saint of the Firmament
    overall.changeKey(titlePath, 559, 547); // Saint of the Firmament
    overall.changeKey(titlePath, 560, 557); // Saint of the Firmament
    overall.changeKey(titlePath, 561, 489); // Beatus of the Firmament
    overall.changeKey(titlePath, 562, 548); // Beatus of the Firmament
    overall.changeKey(titlePath, 563, 558); // Beatus of the Firmament
};
