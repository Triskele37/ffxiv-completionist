import type { ChangeStore } from '@service/store/migration/ChangeStore';

/** Titles ingested from XIVAPI in this version
 * All IDs need to be updated to their actual ID
 * */
export function migrateTitles(store: ChangeStore): void {
    const titlePath = 'character.character.title';

    // Remove old IDs that become unused
    store.deleteTask(titlePath, '0');
    store.deleteTask(titlePath, '399');
    store.deleteTask(titlePath, '400');
    store.deleteTask(titlePath, '401');

    // Update with new IDs
    store.changeKey(titlePath, 0, 1); // The Insatiable
    store.changeKey(titlePath, 1, 2); // The True
    store.changeKey(titlePath, 2, 3); // Coeurlfist
    store.changeKey(titlePath, 3, 4); // Ironeater
    store.changeKey(titlePath, 4, 5); // Of the Vengeful Lance
    store.changeKey(titlePath, 5, 6); // The Godsbow
    store.changeKey(titlePath, 6, 7); // The White
    store.changeKey(titlePath, 7, 8); // Starcaller
    store.changeKey(titlePath, 8, 9); // The Exterminator
    store.changeKey(titlePath, 9, 10); // Notorious Monster Hunter
    store.changeKey(titlePath, 10, 11); // Honest Gillionaire
    store.changeKey(titlePath, 11, 12); // Ruthless Gillionaire
    store.changeKey(titlePath, 12, 13); // Warmonger
    store.changeKey(titlePath, 13, 14); // Archmage
    store.changeKey(titlePath, 14, 15); // Builder of the Realm
    store.changeKey(titlePath, 15, 16); // Provider of the Realm
    store.changeKey(titlePath, 16, 17); // Of the Golden Saw
    store.changeKey(titlePath, 17, 18); // Of the Golden Anvil
    store.changeKey(titlePath, 18, 19); // Of the Golden Hammer
    store.changeKey(titlePath, 19, 20); // Of the Golden Leaf
    store.changeKey(titlePath, 20, 21); // Of the Golden Hide
    store.changeKey(titlePath, 21, 22); // Of the Golden Needle
    store.changeKey(titlePath, 22, 23); // Of the Golden Lead
    store.changeKey(titlePath, 23, 24); // Of the Golden Ladle
    store.changeKey(titlePath, 24, 25); // Meadowbreaker
    store.changeKey(titlePath, 25, 26); // Forestbreaker
    store.changeKey(titlePath, 26, 27); // Desertbreaker
    store.changeKey(titlePath, 27, 28); // Of the Meadow Mines
    store.changeKey(titlePath, 28, 29); // Of the Forest Mines
    store.changeKey(titlePath, 29, 30); // Of the Desert Mines
    store.changeKey(titlePath, 30, 31); // Meadowreaper
    store.changeKey(titlePath, 31, 32); // Forestreaper
    store.changeKey(titlePath, 32, 33); // Desertreaper
    store.changeKey(titlePath, 33, 34); // Of the Meadow Grasses
    store.changeKey(titlePath, 34, 35); // Of the Forest Grasses
    store.changeKey(titlePath, 35, 36); // Of the Desert Grasses
    store.changeKey(titlePath, 36, 37); // Meadowcaster
    store.changeKey(titlePath, 37, 38); // Forestcaster
    store.changeKey(titlePath, 38, 39); // Desertcaster
    store.changeKey(titlePath, 39, 40); // Of the Meadow Pools
    store.changeKey(titlePath, 40, 41); // Of the Forest Pools
    store.changeKey(titlePath, 41, 42); // Of the Desert Pools
    store.changeKey(titlePath, 42, 43); // Carrier of the Cauldron
    store.changeKey(titlePath, 43, 44); // The Assimilator
    store.changeKey(titlePath, 44, 45); // Seeker of Blood
    store.changeKey(titlePath, 45, 46); // Seeker of Truth
    store.changeKey(titlePath, 46, 47); // Seeker of Skill
    store.changeKey(titlePath, 47, 48); // Seeker of Bounty
    store.changeKey(titlePath, 48, 49); // Sidestepper
    store.changeKey(titlePath, 49, 50); // Lord Protector
    store.changeKey(titlePath, 50, 51); // Lord Creator
    store.changeKey(titlePath, 51, 52); // Peacemaker
    store.changeKey(titlePath, 52, 53); // The Last Resort
    store.changeKey(titlePath, 53, 54); // The Sword of La Noscea
    store.changeKey(titlePath, 54, 55); // The Sword of the Shroud
    store.changeKey(titlePath, 55, 56); // The Sword of Thanalan
    store.changeKey(titlePath, 56, 57); // The Sword of Eorzea
    store.changeKey(titlePath, 57, 58); // The Shield of La Noscea
    store.changeKey(titlePath, 58, 59); // The Shield of the Shroud
    store.changeKey(titlePath, 59, 60); // The Shield of Thanalan
    store.changeKey(titlePath, 60, 61); // The Shield of Eorzea
    store.changeKey(titlePath, 61, 62); // Brother of the Broken Blade
    store.changeKey(titlePath, 62, 63); // The Warden's Wall
    store.changeKey(titlePath, 63, 64); // Bearer of the Horn
    store.changeKey(titlePath, 64, 65); // The Uncommitted
    store.changeKey(titlePath, 65, 66); // The Professional
    store.changeKey(titlePath, 66, 67); // Inquisitor
    store.changeKey(titlePath, 67, 68); // Divine Crusher
    store.changeKey(titlePath, 68, 69); // Stonesplitter
    store.changeKey(titlePath, 69, 70); // A Kobold's Worst Nightmare
    store.changeKey(titlePath, 70, 71); // An Ixal's Worst Nightmare
    store.changeKey(titlePath, 71, 72); // An Amalj'aa's Worst Nightmare
    store.changeKey(titlePath, 72, 73); // The Guardian of Aleport
    store.changeKey(titlePath, 73, 74); // The Guardian of Hyrstmill
    store.changeKey(titlePath, 74, 75); // The Guardian of the Golden Bazaar
    store.changeKey(titlePath, 75, 76); // The Wind of Aleport
    store.changeKey(titlePath, 76, 77); // The Wind of Hyrstmill
    store.changeKey(titlePath, 77, 78); // The Wind of the Golden Bazaar
    store.changeKey(titlePath, 78, 79); // The Hand of Aleport
    store.changeKey(titlePath, 79, 80); // The Hand of Hyrstmill
    store.changeKey(titlePath, 80, 81); // The Hand of the Golden Bazaar
    store.changeKey(titlePath, 81, 82); // Wild Thing
    store.changeKey(titlePath, 82, 83); // The Winter Wyrm
    store.changeKey(titlePath, 83, 84); // Messenger of Love
    store.changeKey(titlePath, 84, 85); // Royal Seneschal
    store.changeKey(titlePath, 85, 86); // Dreamseeker
    store.changeKey(titlePath, 86, 87); // Cascadier
    store.changeKey(titlePath, 87, 88); // Crystal Bearer
    store.changeKey(titlePath, 88, 89); // Stormlord
    store.changeKey(titlePath, 89, 90); // Serpentlord
    store.changeKey(titlePath, 90, 91); // Flamelord
    store.changeKey(titlePath, 91, 92); // The Stormsworn
    store.changeKey(titlePath, 92, 93); // The Serpentsworn
    store.changeKey(titlePath, 93, 94); // The Flamesworn
    store.changeKey(titlePath, 94, 95); // Stormcarrier
    store.changeKey(titlePath, 95, 96); // Serpentcarrier
    store.changeKey(titlePath, 96, 97); // Flamecarrier
    store.changeKey(titlePath, 97, 98); // Stormbringer
    store.changeKey(titlePath, 98, 99); // Serpentbringer
    store.changeKey(titlePath, 99, 100); // Flamebringer
    store.changeKey(titlePath, 100, 101); // Featherfoot
    store.changeKey(titlePath, 101, 102); // A Bo's Best Friend
    store.changeKey(titlePath, 102, 103); // Lightning
    store.changeKey(titlePath, 103, 104); // Cavalier
    store.changeKey(titlePath, 104, 105); // The Wanderer's Shadow
    store.changeKey(titlePath, 105, 106); // Green Eyes
    store.changeKey(titlePath, 106, 107); // The Strategist
    store.changeKey(titlePath, 107, 108); // The Reaper
    store.changeKey(titlePath, 108, 109); // Dungeon Master
    store.changeKey(titlePath, 109, 110); // Tempter of Fate
    store.changeKey(titlePath, 110, 111); // Elite Cascadier
    store.changeKey(titlePath, 111, 112); // Storm Puppy
    store.changeKey(titlePath, 112, 113); // Storm Howler
    store.changeKey(titlePath, 113, 114); // Storm Growler
    store.changeKey(titlePath, 114, 115); // Storm Hound
    store.changeKey(titlePath, 115, 116); // Storm Stalker
    store.changeKey(titlePath, 116, 117); // Storm Chaser
    store.changeKey(titlePath, 117, 122); // Serpent Puppy
    store.changeKey(titlePath, 118, 123); // Serpent Howler
    store.changeKey(titlePath, 119, 124); // Serpent Growler
    store.changeKey(titlePath, 120, 125); // Serpent Hound
    store.changeKey(titlePath, 121, 126); // Serpent Stalker
    store.changeKey(titlePath, 122, 127); // Serpent Chaser
    store.changeKey(titlePath, 123, 132); // Flame Puppy
    store.changeKey(titlePath, 124, 133); // Flame Howler
    store.changeKey(titlePath, 125, 134); // Flame Growler
    store.changeKey(titlePath, 126, 135); // Flame Hound
    store.changeKey(titlePath, 127, 136); // Flame Stalker
    store.changeKey(titlePath, 128, 137); // Flame Chaser
    store.changeKey(titlePath, 129, 142); // The Ravenous Wolf
    store.changeKey(titlePath, 130, 143); // The Alpha Wolf
    store.changeKey(titlePath, 131, 144); // The Heart of the Party
    store.changeKey(titlePath, 132, 145); // Brother of Ash
    store.changeKey(titlePath, 133, 146); // Sylph-Friend
    store.changeKey(titlePath, 134, 147); // Treasure Hunter
    store.changeKey(titlePath, 135, 148); // 789th Order Champion
    store.changeKey(titlePath, 136, 149); // Novv Clutchmate
    store.changeKey(titlePath, 137, 150); // The Ambitious Angler
    store.changeKey(titlePath, 138, 151); // The Meat Shield
    store.changeKey(titlePath, 139, 152); // The Meat Axe
    store.changeKey(titlePath, 140, 153); // Of the Stalwart Shield
    store.changeKey(titlePath, 141, 154); // Of the Stalwart Axe
    store.changeKey(titlePath, 142, 155); // Frontline Forerunner
    store.changeKey(titlePath, 143, 156); // Storm Forerunner
    store.changeKey(titlePath, 144, 158); // Serpent Forerunner
    store.changeKey(titlePath, 145, 157); // Flame Forerunner
    store.changeKey(titlePath, 146, 159); // Drone Sniper
    store.changeKey(titlePath, 147, 160); // Heliodrome Hero
    store.changeKey(titlePath, 148, 161); // Hunter for Hire
    store.changeKey(titlePath, 149, 162); // Seeker of Fortune
    store.changeKey(titlePath, 150, 163); // Seasoned Tracker
    store.changeKey(titlePath, 151, 164); // Bounty Hunter
    store.changeKey(titlePath, 152, 165); // Soldier of Fortune
    store.changeKey(titlePath, 153, 166); // Captain of the Hunt
    store.changeKey(titlePath, 154, 167); // Rafflesia Reaper
    store.changeKey(titlePath, 155, 168); // Melusine Mauler
    store.changeKey(titlePath, 156, 169); // The Avatar
    store.changeKey(titlePath, 157, 170); // Domitor
    store.changeKey(titlePath, 158, 171); // The Disassembler
    store.changeKey(titlePath, 159, 173); // Bearer of the Coffer
    store.changeKey(titlePath, 160, 174); // Defender of Eorzea
    store.changeKey(titlePath, 161, 175); // The Postman
    store.changeKey(titlePath, 162, 176); // Ehcatl Blackguard
    store.changeKey(titlePath, 163, 177); // The Negotiator
    store.changeKey(titlePath, 164, 178); // The Final Witness
    store.changeKey(titlePath, 165, 179); // Of Dragons Deep
    store.changeKey(titlePath, 166, 180); // Master Caster
    store.changeKey(titlePath, 167, 182); // The Shadow
    store.changeKey(titlePath, 168, 183); // Icebreaker
    store.changeKey(titlePath, 169, 184); // Of the Silver Lining
    store.changeKey(titlePath, 170, 185); // Gentleman
    store.changeKey(titlePath, 171, 186); // Cupid
    store.changeKey(titlePath, 172, 187); // Tamer of Steeds
    store.changeKey(titlePath, 173, 188); // The Unsevered
    store.changeKey(titlePath, 174, 189); // Slaughterhouse
    store.changeKey(titlePath, 175, 190); // The Hand of Mercy
    store.changeKey(titlePath, 176, 191); // The Light in Hand
    store.changeKey(titlePath, 177, 192); // The Light of the Land
    store.changeKey(titlePath, 178, 193); // Z
    store.changeKey(titlePath, 179, 194); // Golemancer
    store.changeKey(titlePath, 180, 195); // Gambler
    store.changeKey(titlePath, 181, 196); // High Roller
    store.changeKey(titlePath, 182, 197); // Chocobo Breeder
    store.changeKey(titlePath, 183, 198); // Chocobo Trainer
    store.changeKey(titlePath, 184, 199); // Bug Boy
    store.changeKey(titlePath, 185, 200); // Senior Jockey
    store.changeKey(titlePath, 186, 201); // Veteran Jockey
    store.changeKey(titlePath, 187, 202); // The First Across
    store.changeKey(titlePath, 188, 203); // Deck Holder
    store.changeKey(titlePath, 189, 204); // Deck Hoarder
    store.changeKey(titlePath, 190, 205); // The Trinity
    store.changeKey(titlePath, 191, 206); // Duelist
    store.changeKey(titlePath, 192, 207); // Keymaster
    store.changeKey(titlePath, 193, 208); // The Fungah
    store.changeKey(titlePath, 194, 209); // Moneybags
    store.changeKey(titlePath, 195, 210); // Raiser of Mountains
    store.changeKey(titlePath, 196, 211); // Bearer of the Torch
    store.changeKey(titlePath, 197, 212); // Postmaster
    store.changeKey(titlePath, 198, 213); // Half-boiled Hero
    store.changeKey(titlePath, 199, 214); // Unbeliever
    store.changeKey(titlePath, 200, 215); // The Redeemed
    store.changeKey(titlePath, 201, 216); // Nidhogg Slayer
    store.changeKey(titlePath, 202, 217); // Of the Silver Fuller
    store.changeKey(titlePath, 203, 218); // Imperial Nuisance
    store.changeKey(titlePath, 204, 219); // Under-archon
    store.changeKey(titlePath, 205, 220); // The End of Ascalon
    store.changeKey(titlePath, 206, 222); // The Oathkeeper
    store.changeKey(titlePath, 207, 223); // Of the 14th Chakra
    store.changeKey(titlePath, 208, 224); // The Mythril Heart
    store.changeKey(titlePath, 209, 225); // The Azure Dragoon
    store.changeKey(titlePath, 210, 226); // Skysinger
    store.changeKey(titlePath, 211, 227); // Pure White
    store.changeKey(titlePath, 212, 228); // Annihilator
    store.changeKey(titlePath, 213, 229); // Dreadspawn
    store.changeKey(titlePath, 214, 230); // Nymian Marine
    store.changeKey(titlePath, 215, 231); // The Darkest Shadow
    store.changeKey(titlePath, 216, 232); // Blackblood
    store.changeKey(titlePath, 217, 233); // Liberator
    store.changeKey(titlePath, 218, 234); // Stargazer
    store.changeKey(titlePath, 219, 235); // Illuminati Quencher
    store.changeKey(titlePath, 220, 236); // Finder of False Gods
    store.changeKey(titlePath, 221, 237); // Lighter than Air
    store.changeKey(titlePath, 222, 239); // Grandmaster of War
    store.changeKey(titlePath, 223, 240); // Grandmaster of Magic
    store.changeKey(titlePath, 224, 241); // Dark Driver
    store.changeKey(titlePath, 225, 242); // Of the Stalwart Sword
    store.changeKey(titlePath, 226, 243); // Keeper of Knowledge
    store.changeKey(titlePath, 227, 248); // Grandmaster of the Hand
    store.changeKey(titlePath, 228, 249); // Grandmaster of the Land
    store.changeKey(titlePath, 229, 250); // Molder of Masterpieces
    store.changeKey(titlePath, 230, 251); // Amasser of Masterpieces
    store.changeKey(titlePath, 231, 252); // Business Associate
    store.changeKey(titlePath, 232, 253); // Master Carpenter
    store.changeKey(titlePath, 233, 254); // Master Blacksmith
    store.changeKey(titlePath, 234, 255); // Master Armorer
    store.changeKey(titlePath, 235, 256); // Master Goldsmith
    store.changeKey(titlePath, 236, 257); // Master Leatherworker
    store.changeKey(titlePath, 237, 258); // Master Weaver
    store.changeKey(titlePath, 238, 259); // Master Alchemist
    store.changeKey(titlePath, 239, 260); // Master Culinarian
    store.changeKey(titlePath, 240, 261); // Master Miner
    store.changeKey(titlePath, 241, 262); // Master Botanist
    store.changeKey(titlePath, 242, 263); // Master Fisher
    store.changeKey(titlePath, 243, 264); // The Fortunate
    store.changeKey(titlePath, 244, 265); // Good Samaritan
    store.changeKey(titlePath, 245, 266); // Minion Collector
    store.changeKey(titlePath, 246, 267); // Minion Master
    store.changeKey(titlePath, 247, 268); // Mammeteer
    store.changeKey(titlePath, 248, 269); // Prince of Verminion
    store.changeKey(titlePath, 249, 270); // Lord of Verminion
    store.changeKey(titlePath, 250, 271); // House Fortemps Knight
    store.changeKey(titlePath, 251, 272); // Sky Pirate
    store.changeKey(titlePath, 252, 273); // The Noumenon
    store.changeKey(titlePath, 253, 274); // Sundrop Dancer
    store.changeKey(titlePath, 254, 275); // Myth Breaker
    store.changeKey(titlePath, 255, 276); // Veteran Explorer
    store.changeKey(titlePath, 256, 277); // Special Advisor
    store.changeKey(titlePath, 257, 278); // Notorious Monster Slayer
    store.changeKey(titlePath, 258, 279); // Hungry Wolf
    store.changeKey(titlePath, 259, 280); // The Devourer
    store.changeKey(titlePath, 260, 281); // The Unmoving
    store.changeKey(titlePath, 261, 282); // The Unrelenting
    store.changeKey(titlePath, 262, 283); // The Unseen
    store.changeKey(titlePath, 263, 284); // The Unleashed
    store.changeKey(titlePath, 264, 285); // The Undamaged
    store.changeKey(titlePath, 265, 286); // Mentor
    store.changeKey(titlePath, 266, 287); // Mentor of Mentors
    store.changeKey(titlePath, 267, 288); // Carrier of the Kettle
    store.changeKey(titlePath, 268, 289); // The Gear of Change
    store.changeKey(titlePath, 269, 290); // Allthoughts
    store.changeKey(titlePath, 270, 291); // The Newmind
    store.changeKey(titlePath, 271, 292); // The Dragonsong
    store.changeKey(titlePath, 272, 293); // Polis Raider
    store.changeKey(titlePath, 273, 294); // Polis Dweller
    store.changeKey(titlePath, 274, 295); // Polis Lord
    store.changeKey(titlePath, 275, 296); // Pom Friend
    store.changeKey(titlePath, 276, 297); // Leader of the Pack
    store.changeKey(titlePath, 277, 298); // Beta Wolf
    store.changeKey(titlePath, 278, 299); // Hunter Wolf
    store.changeKey(titlePath, 279, 300); // Bronze Wolf
    store.changeKey(titlePath, 280, 301); // Silver Wolf
    store.changeKey(titlePath, 281, 302); // Gold Wolf
    store.changeKey(titlePath, 282, 303); // Platinum Wolf
    store.changeKey(titlePath, 283, 304); // Diamond Wolf
    store.changeKey(titlePath, 284, 305); // Of the First Pack
    store.changeKey(titlePath, 285, 306); // Of the Second Pack
    store.changeKey(titlePath, 286, 307); // Of the Hungry Pack
    store.changeKey(titlePath, 287, 308); // Of the Bronze Pack
    store.changeKey(titlePath, 288, 309); // Of the Silver Pack
    store.changeKey(titlePath, 289, 310); // Of the Gold Pack
    store.changeKey(titlePath, 290, 311); // Of the Platinum Pack
    store.changeKey(titlePath, 291, 312); // Of the Diamond Pack
    store.changeKey(titlePath, 292, 313); // The Knight of Glory
    store.changeKey(titlePath, 293, 314); // The Chief Mourner
    store.changeKey(titlePath, 294, 315); // The Wings of Time
    store.changeKey(titlePath, 295, 316); // Surrenderer of Souls
    store.changeKey(titlePath, 296, 317); // Khloe's Friend
    store.changeKey(titlePath, 297, 318); // Khloe's Best Friend
    store.changeKey(titlePath, 298, 319); // Hero of Gelmorra
    store.changeKey(titlePath, 299, 320); // Lightbringer
    store.changeKey(titlePath, 300, 321); // Lonely Explorer
    store.changeKey(titlePath, 301, 322); // The Lucky
    store.changeKey(titlePath, 302, 323); // Of the Sixth Sense
    store.changeKey(titlePath, 303, 324); // Corpse Dancer
    store.changeKey(titlePath, 304, 325); // Makai Master
    store.changeKey(titlePath, 305, 326); // Garo
    store.changeKey(titlePath, 306, 327); // Makai Monk
    store.changeKey(titlePath, 307, 328); // Barago
    store.changeKey(titlePath, 308, 329); // Dan
    store.changeKey(titlePath, 309, 330); // Makai Bard
    store.changeKey(titlePath, 310, 331); // Makai Black Mage
    store.changeKey(titlePath, 311, 332); // Makai White Mage
    store.changeKey(titlePath, 312, 333); // Zero
    store.changeKey(titlePath, 313, 334); // Makai Summoner
    store.changeKey(titlePath, 314, 335); // Makai Scholar
    store.changeKey(titlePath, 315, 336); // Kiba
    store.changeKey(titlePath, 316, 337); // Makai Machinist
    store.changeKey(titlePath, 317, 338); // Makai Astrologian
    store.changeKey(titlePath, 318, 339); // Moonlifter
    store.changeKey(titlePath, 319, 340); // The Finest Pupil's Ally
    store.changeKey(titlePath, 320, 341); // Fatewalker
    store.changeKey(titlePath, 321, 342); // Of the Holy Body
    store.changeKey(titlePath, 322, 343); // Gigi's Best Friend
    store.changeKey(titlePath, 323, 344); // Tamer of the Undying Flame
    store.changeKey(titlePath, 324, 345); // Mortal Fist
    store.changeKey(titlePath, 325, 346); // Rhalgr's Right Fist
    store.changeKey(titlePath, 326, 347); // Tablesetter
    store.changeKey(titlePath, 327, 348); // Halone's Cup Bearer
    store.changeKey(titlePath, 328, 349); // Zhloe's Friend
    store.changeKey(titlePath, 329, 350); // Zhloe's Best Friend
    store.changeKey(titlePath, 330, 351); // Survivor of the Song
    store.changeKey(titlePath, 331, 352); // Ijin Traveler
    store.changeKey(titlePath, 332, 353); // Confederate
    store.changeKey(titlePath, 333, 354); // Adversary
    store.changeKey(titlePath, 334, 355); // Steppe Warrior
    store.changeKey(titlePath, 335, 356); // The Returned
    store.changeKey(titlePath, 336, 357); // Lyse's Right Fist
    store.changeKey(titlePath, 337, 358); // The Liberator
    store.changeKey(titlePath, 338, 359); // Deltascape Deleter
    store.changeKey(titlePath, 339, 360); // Ul Cup Champion
    store.changeKey(titlePath, 340, 361); // The Fistful
    store.changeKey(titlePath, 341, 362); // Loved by the Axe
    store.changeKey(titlePath, 342, 363); // The Blood Dragoon
    store.changeKey(titlePath, 343, 364); // Of the True Autumn
    store.changeKey(titlePath, 344, 365); // Padjal Protector
    store.changeKey(titlePath, 345, 366); // Gembreaker
    store.changeKey(titlePath, 346, 367); // The First Caller
    store.changeKey(titlePath, 347, 368); // Keeper of the Lilacs
    store.changeKey(titlePath, 348, 369); // Eorzean Ninja
    store.changeKey(titlePath, 349, 370); // Of the Swirling Abyss
    store.changeKey(titlePath, 350, 371); // The Howler
    store.changeKey(titlePath, 351, 372); // Of the Eastern Skies
    store.changeKey(titlePath, 352, 373); // The Red
    store.changeKey(titlePath, 353, 374); // Muso
    store.changeKey(titlePath, 354, 375); // God of War
    store.changeKey(titlePath, 355, 376); // God of Magic
    store.changeKey(titlePath, 356, 377); // God of the Hand
    store.changeKey(titlePath, 357, 378); // God of the Land
    store.changeKey(titlePath, 358, 379); // Of the Longest Hunt
    store.changeKey(titlePath, 359, 380); // Of the Endless Hunt
    store.changeKey(titlePath, 360, 381); // Thrillseeker
    store.changeKey(titlePath, 361, 382); // Ultimate Thrillseeker
    store.changeKey(titlePath, 362, 383); // Canal Raider
    store.changeKey(titlePath, 363, 244); // Canal Dweller
    store.changeKey(titlePath, 364, 245); // Canal Lord
    store.changeKey(titlePath, 365, 246); // The Necromancer
    store.changeKey(titlePath, 366, 118); // Naago's Friend
    store.changeKey(titlePath, 367, 119); // Naago's Partner
    store.changeKey(titlePath, 368, 120); // Wings of Steel
    store.changeKey(titlePath, 369, 121); // Wings of Fire
    store.changeKey(titlePath, 370, 128); // Deep Canal Raider
    store.changeKey(titlePath, 371, 129); // Deep Canal Dweller
    store.changeKey(titlePath, 372, 130); // The Luckiest of Lords
    store.changeKey(titlePath, 373, 131); // Crimson Explorer
    store.changeKey(titlePath, 374, 138); // The Legend
    store.changeKey(titlePath, 375, 139); // Raubahn's Left Arm
    store.changeKey(titlePath, 376, 140); // Of the Blue
    store.changeKey(titlePath, 377, 141); // Fashion Leader
    store.changeKey(titlePath, 378, 172); // Eversharp
    store.changeKey(titlePath, 379, 181); // The New Sun
    store.changeKey(titlePath, 380, 221); // Snake in the Grass
    store.changeKey(titlePath, 381, 393); // Siltwater Socialite
    store.changeKey(titlePath, 382, 394); // Matchmaker
    store.changeKey(titlePath, 383, 395); // Eorzean Ninja Warrior
    store.changeKey(titlePath, 384, 389); // Vanguard
    store.changeKey(titlePath, 385, 390); // Kurenai's Best Friend
    store.changeKey(titlePath, 386, 391); // Kurenai's Partner
    store.changeKey(titlePath, 387, 392); // Under the Moonlight
    store.changeKey(titlePath, 388, 397); // The Ultimate Legend
    store.changeKey(titlePath, 389, 396); // Calamatologist
    store.changeKey(titlePath, 390, 384); // Hiruko Hunter
    store.changeKey(titlePath, 391, 385); // Heavenly Gate Crasher
    store.changeKey(titlePath, 392, 386); // True Hero
    store.changeKey(titlePath, 393, 387); // Lone Hero
    store.changeKey(titlePath, 394, 388); // Hoarder
    store.changeKey(titlePath, 395, 398); // Monster Hunter
    store.changeKey(titlePath, 396, 402); // Prelude in Violet
    store.changeKey(titlePath, 397, 403); // Philanthropist
    store.changeKey(titlePath, 398, 404); // Altar Boy
    store.changeKey(titlePath, 399, 405); // The Devout
    store.changeKey(titlePath, 400, 406); // Invoker of Gods
    store.changeKey(titlePath, 401, 408); // Kyubi Tamer
    store.changeKey(titlePath, 402, 409); // Mahjong Enthusiast
    store.changeKey(titlePath, 403, 410); // Mahjong Master
    store.changeKey(titlePath, 404, 411); // Little Piggy
    store.changeKey(titlePath, 405, 412); // Tough Customer
    store.changeKey(titlePath, 406, 413); // Blue Blood
    store.changeKey(titlePath, 407, 414); // Mask of the Blue
    store.changeKey(titlePath, 408, 415); // Perfect Blue
    store.changeKey(titlePath, 409, 416); // Eurekan Explorer
    store.changeKey(titlePath, 410, 417); // A Requiem For Heroes
    store.changeKey(titlePath, 411, 418); // The Soboro
    store.changeKey(titlePath, 412, 419); // Kageyama Killer
    store.changeKey(titlePath, 413, 420); // Kingsglaive
    store.changeKey(titlePath, 414, 421); // Lord of the Fetch
    store.changeKey(titlePath, 415, 407); // Grandmaster Caster
    store.changeKey(titlePath, 416, 422); // Soul of War
    store.changeKey(titlePath, 417, 423); // Soul of Magic
    store.changeKey(titlePath, 418, 424); // Soul of the Craft
    store.changeKey(titlePath, 419, 425); // Soul of the Harvest
    store.changeKey(titlePath, 420, 426); // Outlander
    store.changeKey(titlePath, 421, 427); // The Fae-touched
    store.changeKey(titlePath, 422, 428); // Seeker of Hidden Truths
    store.changeKey(titlePath, 423, 429); // Of the Sunless Sea
    store.changeKey(titlePath, 424, 430); // Enemy of Innocence
    store.changeKey(titlePath, 425, 431); // Shadowbringer
    store.changeKey(titlePath, 426, 432); // Sworn Protector
    store.changeKey(titlePath, 427, 433); // The Heart's Beat
    store.changeKey(titlePath, 428, 434); // Living Memory
    store.changeKey(titlePath, 429, 435); // Bulwark between Worlds
    store.changeKey(titlePath, 430, 436); // The Transcendent
    store.changeKey(titlePath, 431, 437); // Worldcleaver
    store.changeKey(titlePath, 432, 438); // Bolt from the Black
    store.changeKey(titlePath, 433, 439); // The Song upon the Wind
    store.changeKey(titlePath, 434, 440); // Firstblessed
    store.changeKey(titlePath, 435, 441); // Of Stranger Shadow
    store.changeKey(titlePath, 436, 442); // Farcaller
    store.changeKey(titlePath, 437, 443); // Knower of Twin Worlds
    store.changeKey(titlePath, 438, 444); // Shadow of the Other
    store.changeKey(titlePath, 439, 445); // The Boundless Dark
    store.changeKey(titlePath, 440, 446); // The Shot Heard Across Worlds
    store.changeKey(titlePath, 441, 447); // Distant Stargazer
    store.changeKey(titlePath, 442, 448); // Dualistic Duelist
    store.changeKey(titlePath, 443, 449); // Samurai in a Strange Land
    store.changeKey(titlePath, 444, 450); // Wandering Vanguard
    store.changeKey(titlePath, 445, 451); // Riftdancer
    store.changeKey(titlePath, 446, 452); // Otherworld Smith
    store.changeKey(titlePath, 447, 453); // Otherworld Artisan
    store.changeKey(titlePath, 448, 454); // Otherworld Apothecary
    store.changeKey(titlePath, 449, 455); // Otherworld Seeker
    store.changeKey(titlePath, 450, 456); // Otherworld Angler
    store.changeKey(titlePath, 451, 457); // The Multifaceted
    store.changeKey(titlePath, 452, 458); // Trusted Friend
    store.changeKey(titlePath, 453, 459); // The Invisible Hand
    store.changeKey(titlePath, 454, 460); // Charming Brute
    store.changeKey(titlePath, 455, 461); // The Fabulously Feral
    store.changeKey(titlePath, 456, 462); // Of Unyielding Oath
    store.changeKey(titlePath, 457, 463); // Of Unyielding Steel
    store.changeKey(titlePath, 458, 464); // Of Unyielding Principle
    store.changeKey(titlePath, 459, 465); // Of Unyielding Lealty
    store.changeKey(titlePath, 460, 466); // Dungeon Raider
    store.changeKey(titlePath, 461, 467); // Dungeon Dweller
    store.changeKey(titlePath, 462, 468); // Dungeon Lord
    store.changeKey(titlePath, 463, 469); // Kindred Sword
    store.changeKey(titlePath, 464, 476); // Of Virtuous Deeds
    store.changeKey(titlePath, 465, 477); // Kai-Shirr's Best Mate
    store.changeKey(titlePath, 466, 478); // Honeybee
    store.changeKey(titlePath, 467, 479); // Sweet Dreamer
    store.changeKey(titlePath, 468, 480); // The Perfect Legend
    store.changeKey(titlePath, 469, 481); // Blue to the Bone
    store.changeKey(titlePath, 470, 482); // Blue Luminary
    store.changeKey(titlePath, 471, 483); // Masked of the Round
    store.changeKey(titlePath, 472, 484); // Unbound Blue
    store.changeKey(titlePath, 473, 485); // Blue Justice
    store.changeKey(titlePath, 474, 486); // The Battleforged
    store.changeKey(titlePath, 475, 487); // Champion of the Blue
    store.changeKey(titlePath, 476, 490); // Frame of the Firmament
    store.changeKey(titlePath, 477, 491); // Forge of the Firmament
    store.changeKey(titlePath, 478, 492); // Hammer of the Firmament
    store.changeKey(titlePath, 479, 493); // Jewel of the Firmament
    store.changeKey(titlePath, 480, 494); // Knife of the Firmament
    store.changeKey(titlePath, 481, 495); // Weave of the Firmament
    store.changeKey(titlePath, 482, 496); // Panacea of the Firmament
    store.changeKey(titlePath, 483, 497); // Pan of the Firmament
    store.changeKey(titlePath, 484, 498); // Pick of the Firmament
    store.changeKey(titlePath, 485, 499); // Hatchet of the Firmament
    store.changeKey(titlePath, 486, 500); // Rod of the Firmament
    store.changeKey(titlePath, 487, 501); // The Hand of Creation
    store.changeKey(titlePath, 488, 502); // Divine Provider
    store.changeKey(titlePath, 489, 503); // The Nest's Own Carpenter
    store.changeKey(titlePath, 490, 504); // The Nest's Own Blacksmith
    store.changeKey(titlePath, 491, 505); // The Nest's Own Armorer
    store.changeKey(titlePath, 492, 506); // The Nest's Own Goldsmith
    store.changeKey(titlePath, 493, 507); // The Nest's Own Leatherworker
    store.changeKey(titlePath, 494, 508); // The Nest's Own Weaver
    store.changeKey(titlePath, 495, 509); // The Nest's Own Alchemist
    store.changeKey(titlePath, 496, 510); // The Nest's Own Culinarian
    store.changeKey(titlePath, 497, 511); // The Nest's Own Miner
    store.changeKey(titlePath, 498, 512); // The Nest's Own Botanist
    store.changeKey(titlePath, 499, 513); // The Nest's Own Fisher
    store.changeKey(titlePath, 500, 514); // Fortune's Favored Kupo
    store.changeKey(titlePath, 501, 515); // Ocean Fisher
    store.changeKey(titlePath, 502, 516); // Octopus Traveler
    store.changeKey(titlePath, 503, 517); // Shark Hunter
    store.changeKey(titlePath, 504, 518); // Jellyfish Fanatic
    store.changeKey(titlePath, 505, 519); // Sea Dragoon
    store.changeKey(titlePath, 506, 520); // Echo of a Fallen Star
    store.changeKey(titlePath, 507, 521); // Ronkan Historian
    store.changeKey(titlePath, 508, 522); // A Dragon's Best Friend
    store.changeKey(titlePath, 509, 523); // Tinker Tutor
    store.changeKey(titlePath, 510, 524); // Partner in Teatime
    store.changeKey(titlePath, 511, 525); // Vrai Ami
    store.changeKey(titlePath, 512, 526); // Tank Technician
    store.changeKey(titlePath, 513, 527); // Shepherd to the Stars
    store.changeKey(titlePath, 514, 528); // Featherfall's Finest Carpenter
    store.changeKey(titlePath, 515, 529); // Featherfall's Finest Blacksmith
    store.changeKey(titlePath, 516, 530); // Featherfall's Finest Armorer
    store.changeKey(titlePath, 517, 531); // Featherfall's Finest Goldsmith
    store.changeKey(titlePath, 518, 532); // Featherfall's Finest Leatherworker
    store.changeKey(titlePath, 519, 533); // Featherfall's Finest Weaver
    store.changeKey(titlePath, 520, 534); // Featherfall's Finest Alchemist
    store.changeKey(titlePath, 521, 535); // Featherfall's Finest Culinarian
    store.changeKey(titlePath, 522, 536); // Featherfall's Finest Miner
    store.changeKey(titlePath, 523, 537); // Featherfall's Finest Botanist
    store.changeKey(titlePath, 524, 538); // Featherfall's Finest Fisher
    store.changeKey(titlePath, 525, 539); // The Decisive Blow
    store.changeKey(titlePath, 526, 540); // Skirmisher
    store.changeKey(titlePath, 527, 541); // Siege Liege
    store.changeKey(titlePath, 528, 542); // Gabriel's Downfall
    store.changeKey(titlePath, 529, 543); // Queller of Beasts
    store.changeKey(titlePath, 530, 544); // The Death of Flame
    store.changeKey(titlePath, 531, 545); // Sword of the South
    store.changeKey(titlePath, 532, 546); // Guardian Angel
    store.changeKey(titlePath, 533, 549); // Writer of Histories
    store.changeKey(titlePath, 534, 550); // Of the Truest Blue
    store.changeKey(titlePath, 535, 551); // Blue Ranger
    store.changeKey(titlePath, 536, 552); // The Azure and Omega
    store.changeKey(titlePath, 537, 553); // Balloon Catcher
    store.changeKey(titlePath, 538, 554); // Deadliest Catcher
    store.changeKey(titlePath, 539, 555); // Manta Maniac
    store.changeKey(titlePath, 540, 556); // World-class Troller
    store.changeKey(titlePath, 541, 559); // Tournament Leader
    store.changeKey(titlePath, 542, 560); // Secret Finder
    store.changeKey(titlePath, 543, 561); // Secret Keeper
    store.changeKey(titlePath, 544, 562); // Gaolbreaker
    store.changeKey(titlePath, 545, 563); // Master of the Sea
    store.changeKey(titlePath, 546, 564); // Delubrum Delver
    store.changeKey(titlePath, 547, 565); // The Risensung Carpenter
    store.changeKey(titlePath, 548, 566); // The Risensung Blacksmith
    store.changeKey(titlePath, 549, 567); // The Risensung Armorer
    store.changeKey(titlePath, 550, 568); // The Risensung Goldsmith
    store.changeKey(titlePath, 551, 569); // The Risensung Leatherworker
    store.changeKey(titlePath, 552, 570); // The Risensung Weaver
    store.changeKey(titlePath, 553, 571); // The Risensung Alchemist
    store.changeKey(titlePath, 554, 572); // The Risensung Culinarian
    store.changeKey(titlePath, 555, 573); // The Risensung Miner
    store.changeKey(titlePath, 556, 574); // The Risensung Botanist
    store.changeKey(titlePath, 557, 575); // The Risensung Fisher
    store.changeKey(titlePath, 558, 488); // Saint of the Firmament
    store.changeKey(titlePath, 559, 547); // Saint of the Firmament
    store.changeKey(titlePath, 560, 557); // Saint of the Firmament
    store.changeKey(titlePath, 561, 489); // Beatus of the Firmament
    store.changeKey(titlePath, 562, 548); // Beatus of the Firmament
    store.changeKey(titlePath, 563, 558); // Beatus of the Firmament
}
