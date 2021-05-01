import { data } from "../../../data";
import { ChangeStore } from "./utils";

export const migrate_5_45_to_5_5 = () => {
    const overall = new ChangeStore('0.5.5');

    //--------------------------------- Leves
    const leves = 'duty.quests.levequests';
    overall.create(leves, 'grand-company');

    overall.change(`${leves}.battlecraft`, 'on-the-lamb-leve', 'on-the-lamb');
    overall.change(`${leves}.mining`, 'a-spire-for-new-hights-l', 'a-spire-for-new-heights-l');
    overall.change(`${leves}.mining`, 'crystalized-revenge', 'crystallized-revenge');
    // overall.change(`${leves}.botany`, 'penned-up-frustration', 'penned-up-frustration');
    overall.change(`${leves}.fishing`, 'a-shocking-soiree', 'a-shocking-soire');
    overall.change(`${leves}.fishing`, 'there-can-only-be-one', 'there-can-be-only-one');
    overall.change(`${leves}.blacksmithing`, 'riveting-runs', 'riveting-run');
    overall.change(`${leves}.armoring`, 'rivets-runs-through-it', 'rivets-run-through-it');
    overall.change(`${leves}.armoring`, 'dont-scuttle-with-scutums', 'dont-scuttle-with-scuta');
    overall.change(`${leves}.armoring`, 'smells-of-rich-tamahagane', 'smells-of-rich-tama-hagane');
    overall.change(`${leves}.goldsmithing`, 'halonic-hermeneutrics', 'halonic-hermeneutics');
    overall.change(`${leves}.leatherworking`, 'training-is-only-skin-tight-l', 'training-is-only-skintight-l');
    overall.change(`${leves}.leatherworking`, 'try-tricorn-again', 'try-tricorne-again');
    overall.change(`${leves}.leatherworking`, 'brace-yourself', 'brace-yourselves');
    overall.change(`${leves}.clothcrafting`, 'something-in-my-eyes', 'something-in-my-eye');
    overall.change(`${leves}.alchemy`, 'cleansing-the-wicked-humors', 'cleansing-the-wicked-humours');

    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "dont-touch-our-stuff");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "the-creeps-from-work");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "throw-the-book-at-him");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "victory-is-mine-not-yours");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "double-dose-of-impin");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "of-mice-and-demons");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "wrong-and-rite");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "youre-a-liar-mansel-black");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "its-better-for-you-under-the-sea");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "road-worriers");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "twenty-nine-was-the-cutoff");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "you-are-not-a-pirate");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "fanning-the-flames");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "fishing-off-the-company-pier");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "mad-about-you");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "an-imp-mobile");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "papal-dispensation");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "someones-got-a-big-mouth");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "go-home-to-mama");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "kill-the-messenger");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "one-big-problem-solved");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "a-little-constructive-exorcism");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "burn-it-down");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "mortal-munchies");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "shes-so-mean");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "a-real-wingnut");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "blinded-by-the-wight");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "go-with-the-flow");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "sylph-strands");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "creature-feature");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "dead-man-walking");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "it-goes-with-the-territory");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "this-is-going-to-sting-a-lot");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "feathered-foes");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "just-making-an-observation");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "roast-lamb-with-mint-and-hellfire");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "talk-to-my-voidsent");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "the-bloodhounds-of-coerthas");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "yellow-is-the-new-black");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "amateur-hour");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "get-off-our-lake");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "the-awry-salvages");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "a-cold-blooded-business");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "blood-in-the-water");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "the-burning-reason");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "watch-me-if-you-can");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "a-heart-aflame");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "dont-tear-down-this-wall");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "food-for-thought");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "the-third-prize-is-that-youre-slain");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "and-then-there-were-none");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "bridges-of-qiqirn-country");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "grapevine-of-wrath");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "the-cost-of-living");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "dress-for-aggress");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "pick-your-poison");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "the-baddest-brigade-in-town");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "if-you-put-it-that-way");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "no-big-whoop");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "you-dropped-something");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "science-shindig");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "the-museum-is-closed");
    overall.move(`${leves}.battlecraft`, `${leves}.grand-company`, "who-writes-history");

    //--------------------------------- Crystalline Mean
    const crystallineMean = 'duty.quests.class--job.crystalline-mean';
    overall.create(crystallineMean, 'facet-of-forging');
    overall.move(crystallineMean, `${crystallineMean}.facet-of-forging`, 'iola-forgemaster');
    overall.move(crystallineMean, `${crystallineMean}.facet-of-forging`, 'to-struggle-nu-mou');
    overall.move(crystallineMean, `${crystallineMean}.facet-of-forging`, 'the-iron-bellows');

    overall.create(crystallineMean, 'facet-of-crafting');
    overall.move(crystallineMean, `${crystallineMean}.facet-of-crafting`, 'cherished-memories');
    overall.move(crystallineMean, `${crystallineMean}.facet-of-crafting`, 'for-sentimental-reasons');
    overall.move(crystallineMean, `${crystallineMean}.facet-of-crafting`, 'the-notes-of-bond-restoring');

    overall.create(crystallineMean, 'facet-of-nourishing');
    overall.move(crystallineMean, `${crystallineMean}.facet-of-nourishing`, 'friends-of-a-feather');
    overall.move(crystallineMean, `${crystallineMean}.facet-of-nourishing`, 'where-we-belong');
    overall.move(crystallineMean, `${crystallineMean}.facet-of-nourishing`, 'healing-old-wounds');

    overall.create(crystallineMean, 'facet-of-gathering');
    overall.move(crystallineMean, `${crystallineMean}.facet-of-gathering`, 'on-the-trail-of-a-myth');
    overall.move(crystallineMean, `${crystallineMean}.facet-of-gathering`, 'shedding-light-on-the-myth');
    overall.move(crystallineMean, `${crystallineMean}.facet-of-gathering`, 'the-myth-takes-form');

    overall.create(crystallineMean, 'facet-of-fishing');
    overall.move(crystallineMean, `${crystallineMean}.facet-of-fishing`, 'well-eel-be-damned');
    overall.move(crystallineMean, `${crystallineMean}.facet-of-fishing`, 'fishing-for-confidence');
    overall.move(crystallineMean, `${crystallineMean}.facet-of-fishing`, 'morsel-of-the-deep');

    //--------------------------------- Lakeland
    const lakeland = "duty.quests.sidequests.lakeland";
    overall.create('duty.quests.sidequests.lakeland', 'lakeland');
    overall.move(lakeland, `${lakeland}.lakeland`, "stock-and-barrel");
    overall.move(lakeland, `${lakeland}.lakeland`, "classical-condition");
    overall.move(lakeland, `${lakeland}.lakeland`, "desperate-measures");
    overall.move(lakeland, `${lakeland}.lakeland`, "imperative-repairs");
    overall.move(lakeland, `${lakeland}.lakeland`, "the-astute-amaro");
    overall.move(lakeland, `${lakeland}.lakeland`, "an-unreasonable-request");
    overall.move(lakeland, `${lakeland}.lakeland`, "youve-got-the-tatch");
    overall.move(lakeland, `${lakeland}.lakeland`, "all-that-heavenly-glory");
    overall.move(lakeland, `${lakeland}.lakeland`, "beers-for-fears");
    overall.move(lakeland, `${lakeland}.lakeland`, "loot-justice-mode");
    overall.move(lakeland, `${lakeland}.lakeland`, "inglourious-bath-stewards");
    overall.move(lakeland, `${lakeland}.lakeland`, "lofty-goals");
    overall.move(lakeland, `${lakeland}.lakeland`, "you-had-one-jobb");
    overall.move(lakeland, `${lakeland}.lakeland`, "of-graveyards-and-gremlins");
    overall.move(lakeland, `${lakeland}.lakeland`, "on-her-own");
    overall.move(lakeland, `${lakeland}.lakeland`, "carrying-on");
    overall.move(lakeland, `${lakeland}.lakeland`, "in-fathers-footsteps");
    overall.move(lakeland, `${lakeland}.lakeland`, "her-true-calling");
    overall.move(lakeland, `${lakeland}.lakeland`, "his-secret-shame");
    overall.move(lakeland, `${lakeland}.lakeland`, "a-much-needed-respite");
    overall.move(lakeland, `${lakeland}.lakeland`, "resolve-regained");
    overall.move(lakeland, `${lakeland}.lakeland`, "flowering-friendships");
    overall.move(lakeland, `${lakeland}.lakeland`, "the-sullen-man");
    overall.move(lakeland, `${lakeland}.lakeland`, "rite-of-passage");
    overall.move(lakeland, `${lakeland}.lakeland`, "bigger-fish-to-dry");
    overall.move(lakeland, `${lakeland}.lakeland`, "treasure-hunting-tykes");
    overall.move(lakeland, `${lakeland}.lakeland`, "with-furious-anger");
    overall.move(lakeland, `${lakeland}.lakeland`, "scrumptious-squirmers");
    overall.move(lakeland, `${lakeland}.lakeland`, "simple-treasures");

    //--------------------------------- Kholusia
    const kholusia = "duty.quests.sidequests.kholusia";
    overall.create('duty.quests.sidequests.kholusia', 'kholusia');
    overall.move(kholusia, `${kholusia}.kholusia`, "before-the-tide-comes");
    overall.move(kholusia, `${kholusia}.kholusia`, "retaking-territory");
    overall.move(kholusia, `${kholusia}.kholusia`, "a-clam-to-die-for");
    overall.move(kholusia, `${kholusia}.kholusia`, "a-meating-long-overdue");
    overall.move(kholusia, `${kholusia}.kholusia`, "redolent-refuse");
    overall.move(kholusia, `${kholusia}.kholusia`, "a-feeling-in-the-belly");
    overall.move(kholusia, `${kholusia}.kholusia`, "songstress-of-the-sea");
    overall.move(kholusia, `${kholusia}.kholusia`, "witch-of-the-sea");
    overall.move(kholusia, `${kholusia}.kholusia`, "following-the-grain");
    overall.move(kholusia, `${kholusia}.kholusia`, "bridge-to-the-other-side");
    overall.move(kholusia, `${kholusia}.kholusia`, "a-drop-of-sunshine");
    overall.move(kholusia, `${kholusia}.kholusia`, "village-of-woe");
    overall.move(kholusia, `${kholusia}.kholusia`, "talos-interrupted");
    overall.move(kholusia, `${kholusia}.kholusia`, "the-cape-in-bloom");
    overall.move(kholusia, `${kholusia}.kholusia`, "wright-for-the-job");
    overall.move(kholusia, `${kholusia}.kholusia`, "a-plankless-task");
    overall.move(kholusia, `${kholusia}.kholusia`, "good-honest-dirt");
    overall.move(kholusia, `${kholusia}.kholusia`, "sisterly-concern");
    overall.move(kholusia, `${kholusia}.kholusia`, "supplying-estimates");
    overall.move(kholusia, `${kholusia}.kholusia`, "hobgob-smacker");
    overall.move(kholusia, `${kholusia}.kholusia`, "timber-for-the-taking");
    overall.move(kholusia, `${kholusia}.kholusia`, "fresh-off-the-wing");
    overall.move(kholusia, `${kholusia}.kholusia`, "fugitive-of-fear");
    overall.move(kholusia, `${kholusia}.kholusia`, "rising-to-her-apology");
    overall.move(kholusia, `${kholusia}.kholusia`, "small-nuisances");
    overall.move(kholusia, `${kholusia}.kholusia`, "a-rocky-relationship");
    overall.move(kholusia, `${kholusia}.kholusia`, "too-sweet-to-eat");
    overall.move(kholusia, `${kholusia}.kholusia`, "killer-on-the-loose");
    overall.move(kholusia, `${kholusia}.kholusia`, "all-for-the-boom");
    overall.move(kholusia, `${kholusia}.kholusia`, "distract-and-rescue");
    overall.move(kholusia, `${kholusia}.kholusia`, "beneath-the-beard");
    overall.move(kholusia, `${kholusia}.kholusia`, "short-on-courage");
    overall.move(kholusia, `${kholusia}.kholusia`, "knocking-the-knockers");
    overall.move(kholusia, `${kholusia}.kholusia`, "goggeo-and-tholliet");
    overall.move(kholusia, `${kholusia}.kholusia`, "with-ale-due-respect");
    overall.move(kholusia, `${kholusia}.kholusia`, "brew-as-the-tholl-do");
    overall.move(kholusia, `${kholusia}.kholusia`, "bringing-the-nibbles");
    overall.move(kholusia, `${kholusia}.kholusia`, "you-know-the-words");
    overall.move(kholusia, `${kholusia}.kholusia`, "a-disagreeable-dwarf");
    overall.move(kholusia, `${kholusia}.kholusia`, "almost-a-friend");
    overall.move(kholusia, `${kholusia}.kholusia`, "a-practiced-greeting");
    overall.move(kholusia, `${kholusia}.kholusia`, "learning-to-lali-ho");
    overall.move(kholusia, `${kholusia}.kholusia`, "ronitt-to-the-rescue");

    //--------------------------------- Crafting Corrections
    const crafting = "logs.crafting-log";
    const mr = "master-recipes.master-recipes";

    const carpenter = `${crafting}.carpenter`;
    overall.change(`${carpenter}.collectables.50-60`, 'raefied-holy-cedar-spinning-wheel', 'rarefied-holy-cedar-spinning-wheel');
    overall.change(`${carpenter}.collectables.61-70`, 'raefied-beech-composite-bow', 'rarefied-beech-composite-bow');
    overall.change(`${carpenter}.collectables.61-70`, 'rarefield-zelkova-spinning-wheel', 'rarefied-zelkova-spinning-wheel');
    overall.change(`${carpenter}.housing.housing-2`, 'hand-basket', 'handbasket');
    overall.change(`${carpenter}.ishgard-restoration.skysteel-tools`, 'doman-partition', 'oddly-specific-shaft');
    overall.change(`${carpenter}.level-based.71-75`, 'white-ash-erraing-of-aiming', 'white-ash-earring-of-aiming');
    overall.change(`${carpenter}.level-based.71-75`, 'white-ash-earring', 'white-ash-earrings');

    const blacksmith = `${crafting}.blacksmith`;
    overall.change(`${blacksmith}.housing.housing-1`, 'hingan-stone-fence', 'hingan-fence-mokuzo');
    overall.change(`${blacksmith}.level-based.76-80`, 'titanbronze-fist', 'titanbronze-fists');
    overall.change(`${blacksmith}.${mr}-5`, 'ala-mhiggan-saw', 'ala-mhigan-saw');

    const armorer = `${crafting}.armorer`;
    overall.change(`${armorer}.collectables.71-80`, 'rarefied-deepgold-curiass', 'rarefied-deepgold-cuirass');
    overall.change(`${armorer}.housing.housing-1`, 'hingan-kura-zukuri-fence', 'hingan-fence-kura-zukuri');
    overall.change(`${armorer}.ishgard-restoration.other`, 'replica-sky-pirates-mask-of-striking', 'replica-sky-rat-mask-of-striking');
    overall.change(`${armorer}.ishgard-restoration.other`, 'replica-sky-pirates-mask-of-scouting', 'replica-sky-rat-mask-of-scouting');
    overall.change(`${armorer}.ishgard-restoration.other`, 'replica-sky-rats-hook-of-fending', 'replica-sky-rat-hook-of-fending');
    overall.change(`${armorer}.ishgard-restoration.other`, 'replica-sky-rats-hook-of-maiming', 'replica-sky-rat-hook-of-maiming');
    overall.change(`${armorer}.ishgard-restoration.other`, 'replica-sky-rats-hook-of-scouting', 'replica-sky-rat-hook-of-scouting');
    overall.change(`${armorer}.ishgard-restoration.other`, 'replica-sky-rats-hook-of-healing', 'replica-sky-rat-hook-of-healing');
    overall.change(`${armorer}.level-based.56-60`, 'adamatite-scutum', 'adamantite-scutum');
    overall.change(`${armorer}.level-based.71-75`, 'deephold-surcoat-of-maiming', 'deepgold-surcoat-of-maiming');
    overall.change(`${armorer}.level-based.71-75`, 'bluespirit-sabatons-of-casting', 'bluespirit-greaves-of-casting');
    overall.change(`${armorer}.level-based.71-75`, 'bluespirit-cuirass-fending', 'bluespirit-cuirass-of-fending');
    overall.change(`${armorer}.level-based.71-75`, 'bluespirit-cuirass-maiming', 'bluespirit-cuirass-of-maiming');
    overall.change(`${armorer}.${mr}-4`, 'replica-dreadwym-barbut-of-maiming', 'replica-dreadwyrm-barbut-of-maiming');
    overall.change(`${armorer}.${mr}-4`, 'replica-dreadwym-armor-of-fending', 'replica-dreadwyrm-armor-of-fending');
    overall.change(`${armorer}.${mr}-4`, 'replica-dreadwym-mail-of-maiming', 'replica-dreadwyrm-mail-of-maiming');
    overall.change(`${armorer}.${mr}-4`, 'replica-dreadwym-gauntlets-of-fending', 'replica-dreadwyrm-gauntlets-of-fending');
    overall.change(`${armorer}.${mr}-4`, 'replica-dreadwym-vambraces-of-maiming', 'replica-dreadwyrm-vambraces-of-maiming');
    overall.change(`${armorer}.${mr}-4`, 'replica-dreadwym-sabatons-of-fending', 'replica-dreadwyrm-sabatons-of-fending');
    overall.change(`${armorer}.${mr}-4`, 'replica-dreadwym-greaves-of-maiming', 'replica-dreadwyrm-greaves-of-maiming');
    overall.change(`${armorer}.${mr}-4`, 'replica-dreadwym-greaves-of-aiming', 'replica-dreadwyrm-greaves-of-aiming');
    overall.change(`${armorer}.${mr}-6`, 'suzaka-barding', 'suzaku-barding');
    overall.change(`${armorer}.${mr}-8`, 'neo-ishgardian-gauntlets-of-maiming', 'neo-ishgardian-gloves-of-maiming');

    const goldsmith = `${crafting}.goldsmith`;
    overall.change(`${goldsmith}.${mr}-6`, 'hannya-mask', 'hanya-mask');
    overall.change(`${goldsmith}.${mr}-6`, 'silvergrace-earring-of-crafting', 'silvergrace-earrings-of-crafting');
    overall.change(`${goldsmith}.${mr}-6`, 'silvergrace-earring-of-gathering', 'silvergrace-earrings-of-gathering');
    overall.change(`${goldsmith}.${mr}-6`, 'rakshasa-earings-of-fending', 'rakshasa-earring-of-fending');
    overall.change(`${goldsmith}.${mr}-6`, 'rakshasa-earings-of-slaying', 'rakshasa-earring-of-slaying');
    overall.change(`${goldsmith}.${mr}-6`, 'rakshasa-earings-of-aiming', 'rakshasa-earring-of-aiming');
    overall.change(`${goldsmith}.${mr}-6`, 'rakshasa-earings-of-casting', 'rakshasa-earring-of-casting');
    overall.change(`${goldsmith}.${mr}-6`, 'rakshasa-earings-of-healing', 'rakshasa-earring-of-healing');
    overall.change(`${goldsmith}.${mr}-7`, 'alumina-whetsone', 'alumina-whetstone');
    overall.change(`${goldsmith}.${mr}-7`, 'marveilleuse', 'merveilleuse');

    const leatherworker = `${crafting}.leatherworker`;
    overall.change(`${leatherworker}.ishgard-restoration.other`, 'replica-sky-pirates-boots-of-healing', 'replica-sky-pirates-shoes-of-healing');
    overall.change(`${leatherworker}.ishgard-restoration.other`, 'replica-sky-pirates-boots-of-casting', 'replica-sky-pirates-shoes-of-casting');
    overall.change(`${leatherworker}.level-based.66-70`, 'gazelleskin-open-toe-boots-of-maiming', 'gazelleskin-open-toed-boots-of-maiming');
    overall.change(`${leatherworker}.level-based.66-70`, 'gazelleskin-open-toe-boots-of-striking', 'gazelleskin-open-toed-boots-of-striking');
    overall.change(`${leatherworker}.level-based.66-70`, 'gazelleskin-open-toe-boots-of-scouting', 'gazelleskin-open-toed-boots-of-scouting');
    overall.change(`${leatherworker}.${mr}-4`, 'hemiskin-open-toe-boots-of-casting', 'hemiskin-open-toed-boots-of-casting');
    overall.change(`${leatherworker}.${mr}-4`, 'hemiskin-open-toe-boots-of-healing', 'hemiskin-open-toed-boots-of-healing');
    overall.change(`${leatherworker}.${mr}-7`, 'dalmascan-leather-boots', 'dalmascan-leather-shoes');

    const weaver = `${crafting}.weaver`;
    overall.change(`${weaver}.housing.housing-1`, 'toymakers-shop-window', 'toymakers-show-window');
    overall.change(`${weaver}.level-based.36-40`, 'linen-bottom', 'linen-bottoms');
    overall.change(`${weaver}.level-based.66-70`, 'serge-sarouels-of-crafting', 'serge-sarouel-of-crafting');
    overall.change(`${weaver}.level-based.66-70`, 'serge-sarouels-of-gathering', 'serge-sarouel-of-gathering');

    const alchemist = `${crafting}.alchemist`;
    overall.change(`${alchemist}.collectables.71-80`, 'rareifed-syrup', 'rarefied-syrup');
    overall.change(`${alchemist}.level-based.46-50`, 'wind-wand-mega-potion', 'wind-ward-mega-potion');
    overall.change(`${alchemist}.level-based.76-80`, 'enchanted-dimuthrite-ink', 'enchanted-dimythrite-ink');
    overall.change(`${alchemist}.${mr}-6`, 'seiryus-sanctifed-grimoire', 'seiryus-sanctified-grimoire');
    overall.change(`${alchemist}.${mr}-6`, 'seiryus-sanctifed-codex', 'seiryus-sanctified-codex');
    overall.change(`${alchemist}.${mr}-7`, 'grade-2-intelligent-alkahest', 'grade-2-intelligence-alkahest');
    overall.change(`${alchemist}.${mr}-8`, 'grade-3-tinctures-of-strength', 'grade-3-tincture-of-strength');
    overall.change(`${alchemist}.${mr}-8`, 'grade-3-tinctures-of-dexterity', 'grade-3-tincture-of-dexterity');
    overall.change(`${alchemist}.${mr}-8`, 'grade-3-tinctures-of-vitality', 'grade-3-tincture-of-vitality');
    overall.change(`${alchemist}.${mr}-8`, 'grade-3-tinctures-of-intelligence', 'grade-3-tincture-of-intelligence');
    overall.change(`${alchemist}.${mr}-8`, 'grade-3-tinctures-of-mind', 'grade-3-tincture-of-mind');
    overall.change(`${alchemist}.${mr}-8`, 'the-black-wolf-strikes-again-orchestrion-roll', 'the-black-wolf-stalks-again-orchestrion-roll');

    const culinarian = `${crafting}.culinarian`;
    overall.change(`${culinarian}.housing.housing-2`, 'takoyaki-boat', 'tako-yaki-boat');
    overall.change(`${culinarian}.ishgard-restoration.skysteel-tools`, 'oddly-specific-oill', 'oddly-specific-oil');
    overall.change(`${culinarian}.${mr}-8`, 'sausage-and-saurkraut', 'sausage-and-sauerkraut');
    overall.change(`${culinarian}.${mr}-8`, 'mist-spinich-quiche', 'mist-spinach-quiche');

    const shared = `${crafting}.shared`;
    overall.change(`${shared}.beast-tribe-quests.dwarf`, 'steelplate-component', 'steel-plate-component');
    overall.change(`${shared}.beast-tribe-quests.moogle`, 'moogle-molifier', 'moogle-mollifier');
    overall.change(`${shared}.custom-deliveries.kurenai`, 'harpoon-materials', 'harpoon-components');
    overall.change(`${shared}.custom-deliveries.zhloe-aliapoh`, 'maelstrom-material-component', 'maelstrom-materiel-component');
    overall.change(`${shared}.custom-deliveries.zhloe-aliapoh`, 'maelstrom-material', 'maelstrom-materiel');

    //--------------------------------- Data Correction
    overall.change('character.character.title', 'canal-rider', 'canal-raider');
    overall.change('character.achievements.items.skysteel-tools', 'old-and-improved-pickaxe', 'old-and-improved-skysung-pickaxe');
    overall.change('duty.fates.gyr-abania.the-fringes', 'rasin-hell', 'raisin-hell');
    overall.change('duty.quests.sidequests.coerthan', 'coerthas-central--highlands', 'coerthas-central-highlands');
    overall.change('logs.sightseeing-log.sb', 'namal', 'namai');

    diveAndChange(data, overall);

    overall.write();

    function diveAndChange(group) {
        if(group.subGroups) {
            group.subGroups.forEach(diveAndChange);
        }

        if(group.tasks) {
            group.tasks.forEach((task) => {
                let path = task.oldFullStorageKey.split('.');
                const oldKey = path.pop();
                const newKey = task.fullStorageKey.split('.').pop()

                path.shift();
                path = path.join('.');

                overall.change(path, oldKey, newKey);
                // if(path.includes('beast-tribe')) console.log(path, oldKey, newKey);
                // console.log(`${path}: ${oldKey} > ${newKey}`);
            });
        }
    }
};
