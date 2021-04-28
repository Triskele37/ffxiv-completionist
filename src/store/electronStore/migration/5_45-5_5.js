import { ChangeStore } from "./utils";

export const migrate_5_45_to_5_5 = () => {
    const overall = new ChangeStore('0.5.5', true);

    //--------------------------------- Mount Speed Rework
    // overall.delete('travel', 'mount-speed');

    //--------------------------------- GC Leves
    const leves = 'duty.quests.levequests';
    overall.create(leves, 'grand-company');

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

    //--------------------------------- Data Correction
    overall.change('character.character.title', 'canal-rider', 'canal-raider');
    overall.change('character.achievements.items.skysteel-tools', 'old-and-improved-pickaxe', 'old-and-improved-skysung-pickaxe');
    overall.change('duty.fates.gyr-abania.the-fringes', 'rasin-hell', 'raisin-hell');
    overall.change('duty.quests.sidequests.coerthan', 'coerthas-central--highlands', 'coerthas-central-highlands');
    overall.change('logs.sightseeing-log.sb', 'namal', 'namai');
    overall.change('logs.crafting-log.armorer.master-recipes.master-recipes-8', 'neo-ishgardian-gauntlets-of-maiming', 'neo-ishgardian-gloves-of-maiming');
    overall.change('logs.crafting-log.culinarian.ishgard-restoration.skysteel-tools', 'oddly-specific-oill', 'oddly-specific-oil');

    overall.write();
};
