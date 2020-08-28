import { ChangeStore } from "./utils";

export const migrate_5_25_to_5_3 = () => {
    const overall = new ChangeStore('0.5.3');

    // Removed ARR MSQ
    overall.delete('quests.main-scenario.seventh-umbral-era', 'an-eft-for-effort');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'disorderly-conduct');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'further-afield');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'until-a-quieter-time');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'butcher-of-greentear');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'spriggan-cleaning');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'feeding-time');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'courier-for-a-day');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'farmer-of-fortune');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'skeletons-in-my-deepcroft');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'lights-out');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'compulsory-catering');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'ruffle-feathers');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'ratting-it-out');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'the-penitent-man');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'changing-of-the-guard');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'the-drake-exception');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'not-my-war');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'a-final-ignominy');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'with-a-little-elbow-grease');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'a-tall-drink-of-aqua-del-sol');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'the-warden-works-in-mysterious-ways');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'feats-of-strength');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'opportunity-knocks');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'all-by-ourselves');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'all-due-precautions');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'of-sylphs-and-spriggans');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'crazy-enough-to-work');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'the-ladle-in-the-darkness');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'all-upon-the-watchtowers');
    overall.delete('quests.main-scenario.seventh-umbral-era', 'setting-the-stage');

    overall.delete('quests.main-scenario.sevent-astral-era', 'flowers-for-one');
    overall.delete('quests.main-scenario.sevent-astral-era', 'the-resolute');
    overall.delete('quests.main-scenario.sevent-astral-era', 'rock-solid-protection');
    overall.delete('quests.main-scenario.sevent-astral-era', 'crate-go-kaboom');
    overall.delete('quests.main-scenario.sevent-astral-era', 'better-late-than-sever');
    overall.delete('quests.main-scenario.sevent-astral-era', 'welcome-to-morbol-country');
    overall.delete('quests.main-scenario.sevent-astral-era', 'answering-the-call');
    overall.delete('quests.main-scenario.sevent-astral-era', 'youre-gonna-carry-that');
    overall.delete('quests.main-scenario.sevent-astral-era', 'the-things-we-do-for-tea');
    overall.delete('quests.main-scenario.sevent-astral-era', 'a-small-scale-operation');
    overall.delete('quests.main-scenario.sevent-astral-era', 'if-wishes-were-horsebirds');
    overall.delete('quests.main-scenario.sevent-astral-era', 'full-belly-happy-heart');
    overall.delete('quests.main-scenario.sevent-astral-era', 'writhing-in-the-dark');
    overall.delete('quests.main-scenario.sevent-astral-era', 'fireworks-and-fish-dont-mix');
    overall.delete('quests.main-scenario.sevent-astral-era', 'a-sylphlands-sting');
    overall.delete('quests.main-scenario.sevent-astral-era', 'scattered-scions');
    overall.delete('quests.main-scenario.sevent-astral-era', 'true-to-form');
    overall.delete('quests.main-scenario.sevent-astral-era', 'a-hard-hapalit-to-break');
    overall.delete('quests.main-scenario.sevent-astral-era', 'picking-up-the-sledge');
    overall.delete('quests.main-scenario.sevent-astral-era', 'doman-connection');

    overall.move('quests.main-scenario.seventh-umbral-era', 'quests.main-scenario.seventh-umbral-era.gridania', 'the-gridanian-envoy');
    overall.move('quests.main-scenario.seventh-umbral-era', 'quests.main-scenario.seventh-umbral-era.limsa-lominsa', 'the-lominsan-envoy');
    overall.move('quests.main-scenario.seventh-umbral-era', 'quests.main-scenario.seventh-umbral-era.uldah', 'the-uldahn-envoy');

    // Renamed Achievements
    overall.change('achievements.crafting--gathering.all-disciplines', 'minor-miracle', 'phase-ii-minor-miracle');
    overall.change('achievements.crafting--gathering.all-disciplines', 'divine-ascension', 'phase-ii-divine-ascension');

    // Removed Practice Materials
    overall.delete('crafting-log.carpenter.master-recipes.master-recipes-8', 'rank-viii-artisans-fragile-practice-material');
    overall.delete('crafting-log.carpenter.master-recipes.master-recipes-8', 'rank-viii-artisans-durable-practice-material');
    overall.delete('crafting-log.blacksmith.master-recipes.master-recipes-8', 'rank-viii-artisans-fragile-practice-materials');
    overall.delete('crafting-log.blacksmith.master-recipes.master-recipes-8', 'rank-viii-artisans-durable-practice-materials');
    overall.delete('crafting-log.armorer.master-recipes.master-recipes-8', 'rank-viii-artisans-fragile-practice-materials');
    overall.delete('crafting-log.armorer.master-recipes.master-recipes-8', 'rank-viii-artisans-durable-practice-materials');
    overall.delete('crafting-log.goldsmith.master-recipes.master-recipes-8', 'rank-viii-artisans-fragile-practice-material');
    overall.delete('crafting-log.goldsmith.master-recipes.master-recipes-8', 'rank-viii-artisans-durable-practice-material');
    overall.delete('crafting-log.leatherworker.master-recipes.master-recipes-8', 'rank-viii-artisans-fragile-practice-materials');
    overall.delete('crafting-log.leatherworker.master-recipes.master-recipes-8', 'rank-viii-artisans-durable-practice-materials');
    overall.delete('crafting-log.weaver.master-recipes.master-recipes-8', 'rank-viii-artisans-fragile-practice-materials');
    overall.delete('crafting-log.weaver.master-recipes.master-recipes-8', 'rank-viii-artisans-durable-practice-materials');
    overall.delete('crafting-log.alchemist.master-recipes.master-recipes-8', 'rank-viii-artisans-fragile-practice-materials');
    overall.delete('crafting-log.alchemist.master-recipes.master-recipes-8', 'rank-viii-artisans-durable-practice-materials');
    overall.delete('crafting-log.culinarian.master-recipes.master-recipes-8', 'rank-viii-artisans-durable-practice-materials');

    // Removed "Wolf" crafts
    overall.delete('crafting-log.carpenter', 'others');
    overall.delete('crafting-log.blacksmith', 'others');
    overall.delete('crafting-log.armorer', 'others');
    overall.delete('crafting-log.goldsmith', 'others');
    overall.delete('crafting-log.leatherworker', 'others');
    overall.delete('crafting-log.weaver', 'others');
    overall.delete('crafting-log.alchemist', 'others');
    overall.delete('crafting-log.culinarian', 'others');

    // Moved ALC corsages
    const ORNAMENTS = 'crafting-log.alchemist.ornaments';
    overall.create('crafting-log.alchemist', 'ornaments');

    const HW_FLOWERS = 'crafting-log.alchemist.level-based.51-55';
    overall.move(HW_FLOWERS, ORNAMENTS, 'dried-red-oldrose');
    overall.move(HW_FLOWERS, ORNAMENTS, 'dried-blue-oldrose');
    overall.move(HW_FLOWERS, ORNAMENTS, 'dried-yellow-oldrose');
    overall.move(HW_FLOWERS, ORNAMENTS, 'dried-green-oldrose');
    overall.move(HW_FLOWERS, ORNAMENTS, 'dried-orange-oldrose');
    overall.move(HW_FLOWERS, ORNAMENTS, 'dried-purple-oldrose');
    overall.move(HW_FLOWERS, ORNAMENTS, 'dried-white-oldrose');
    overall.move(HW_FLOWERS, ORNAMENTS, 'dried-black-oldrose');
    overall.move(HW_FLOWERS, ORNAMENTS, 'oldrose-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'red-viola-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'blue-viola-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'yellow-viola-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'green-viola-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'orange-viola-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'purple-viola-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'white-viola-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'black-viola-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'rainbow-viola-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'red-cherry-blossom-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'blue-cherry-blossom-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'yellow-cherry-blossom-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'green-cherry-blossom-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'orange-cherry-blossom-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'purple-cherry-blossom-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'white-cherry-blossom-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'black-cherry-blossom-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'pink-cherry-blossom-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'red-daisy-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'blue-daisy-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'yellow-daisy-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'green-daisy-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'orange-daisy-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'purple-daisy-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'white-daisy-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'black-daisy-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'rainbow-daisy-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'red-brightlily-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'blue-brightlily-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'yellow-brightlily-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'green-brightlily-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'orange-brightlily-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'purple-brightlily-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'white-brightlily-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'black-brightlily-corsage');
    overall.move(HW_FLOWERS, ORNAMENTS, 'rainbow-brightlily-corsage');

    const SB_FLOWERS = 'crafting-log.alchemist.level-based.66-70';
    overall.move(SB_FLOWERS, ORNAMENTS, 'red-dahlia-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'blue-dahlia-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'yellow-dahlia-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'green-dahlia-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'orange-dahlia-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'purple-dahlia-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'white-dahlia-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'black-dahlia-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'rainbow-dahlia-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'red-arum-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'blue-arum-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'yellow-arum-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'green-arum-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'orange-arum-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'purple-arum-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'white-arum-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'black-arum-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'rainbow-arum-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'red-lily-of-the-valley-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'blue-lily-of-the-valley-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'yellow-lily-of-the-valley-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'green-lily-of-the-valley-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'orange-lily-of-the-valley-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'purple-lily-of-the-valley-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'white-lily-of-the-valley-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'black-lily-of-the-valley-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'rainbow-lily-of-the-valley-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'red-hydrangea-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'blue-hydrangea-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'yellow-hydrangea-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'green-hydrangea-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'orange-hydrangea-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'purple-hydrangea-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'white-hydrangea-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'black-hydrangea-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'rainbow-hydrangea-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'red-campanula-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'blue-campanula-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'yellow-campanula-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'green-campanula-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'orange-campanula-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'purple-campanula-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'white-campanula-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'black-campanula-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'rainbow-campanula-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'red-tulip-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'blue-tulip-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'yellow-tulip-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'green-tulip-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'orange-tulip-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'purple-tulip-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'white-tulip-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'black-tulip-corsage');
    overall.move(SB_FLOWERS, ORNAMENTS, 'rainbow-tulip-corsage');

    // Move Parasol to Fashion Accessories / remove Parasol
    overall.create('collectables', 'fashion-accessories');
    overall.move('collectables.parasols', 'collectables.fashion-accessories', 'parasol');
    overall.move('collectables.parasols', 'collectables.fashion-accessories', 'sky-blue-parasol');
    overall.delete('collectables', 'parasols');

    // Merge PLD Sword/Shield Relics
    const ZODIAC = 'collectables.relic-gear.zodiac';
    overall.change(`${ZODIAC}.relic`, 'curtana', 'curtana--holy-shield');
    overall.delete(`${ZODIAC}.relic`, 'holy-shield');
    overall.change(`${ZODIAC}.zenith`, 'curtana-zenith', 'curtana-zenith--holy-shield-zenith');
    overall.delete(`${ZODIAC}.zenith`, 'holy-shield-zenith');
    overall.change(`${ZODIAC}.atma`, 'curtana-atma', 'curtana-atma--holy-shield-atma');
    overall.delete(`${ZODIAC}.atma`, 'holy-shield-atma');
    overall.change(`${ZODIAC}.animus`, 'curtana-animus', 'curtana-animus--holy-shield-animus');
    overall.delete(`${ZODIAC}.animus`, 'holy-shield-animus');
    overall.change(`${ZODIAC}.novus`, 'curtana-novus', 'curtana-novus--holy-shield-novus');
    overall.delete(`${ZODIAC}.novus`, 'holy-shield-novus');
    overall.change(`${ZODIAC}.nexus`, 'curtana-nexus', 'curtana-nexus--holy-shield-nexus');
    overall.delete(`${ZODIAC}.nexus`, 'holy-shield-nexus');
    overall.change(`${ZODIAC}.zodiac-braves`, 'excalibur', 'excalibur--aegis-shield');
    overall.delete(`${ZODIAC}.zodiac-braves`, 'aegis-shield');
    overall.change(`${ZODIAC}.zodiac-zeta`, 'excalibur-zeta', 'excalibur-zeta--aegis-shield-zeta');
    overall.delete(`${ZODIAC}.zodiac-zeta`, 'aegis-shield-zeta');

    const ANIMA = 'collectables.relic-gear.anima';
    overall.change(`${ANIMA}.animated`, 'animated-hauteclaire', 'animated-hauteclaire--animated-prytwen');
    overall.delete(`${ANIMA}.animated`, 'animated-prytwen');
    overall.change(`${ANIMA}.awoken`, 'hauteclaire-awoken', 'hauteclaire-awoken--prytwen-awoken');
    overall.delete(`${ANIMA}.awoken`, 'prytwen-awoken');
    overall.change(`${ANIMA}.anima`, 'almace', 'almace--ancile');
    overall.delete(`${ANIMA}.anima`, 'ancile');
    overall.change(`${ANIMA}.hyperconductive`, 'hyperconductive-almace', 'hyperconductive-almace--hyperconductive-ancile');
    overall.delete(`${ANIMA}.hyperconductive`, 'hyperconductive-ancile');
    overall.change(`${ANIMA}.reconditioned`, 'sword-of-the-twin-thegns', 'sword-of-the-twin-thegns--shield-of-the-twin-thegns');
    overall.delete(`${ANIMA}.reconditioned`, 'shield-of-the-twin-thegns');
    overall.change(`${ANIMA}.sharpened`, 'sharpened-sword-of-the-twin-thegns', 'sharpened-sword-of-the-twin-thegns--sharpened-shield-of-the-twin-thegns');
    overall.delete(`${ANIMA}.sharpened`, 'sharpened-shield-of-the-twin-thegns');
    overall.change(`${ANIMA}.complete`, 'aettir', 'aettir--priwen');
    overall.delete(`${ANIMA}.complete`, 'priwen');
    overall.change(`${ANIMA}.lux`, 'aettir-lux', 'aettir-lux--priwen-lux');
    overall.delete(`${ANIMA}.lux`, 'priwen-lux');

    const EUREKA = 'collectables.relic-gear.eureka';
    overall.change(`${EUREKA}.antiquated`, 'antiquated-galatyn', 'antiquated-galatyn--antiquated-evalach');
    overall.delete(`${EUREKA}.antiquated`, 'antiquated-evalach');
    overall.change(`${EUREKA}.anemos`, 'galatyn', 'galatyn--evalach');
    overall.delete(`${EUREKA}.anemos`, 'evalach');
    overall.change(`${EUREKA}.anemos`, 'galatyn-1', 'galatyn-1--evalach-1');
    overall.delete(`${EUREKA}.anemos`, 'evalach-1');
    overall.change(`${EUREKA}.anemos`, 'galatyn-2', 'galatyn-2--evalach-2');
    overall.delete(`${EUREKA}.anemos`, 'evalach-2');
    overall.change(`${EUREKA}.anemos`, 'anemos-galatyn', 'anemos-galatyn--anemos-evalach');
    overall.delete(`${EUREKA}.anemos`, 'anemos-evalach');

    // Removed quest fate
    overall.delete('fates.la-noscea.western', 'the-mandragoras');

    // Spelling Fixes
    overall.change('collectables.minion-guide', 'bomb-fish', 'bombfish');
    overall.change('collectables.triple-triad-card-list', 'ultima-weapon', 'the-ultima-weapon');

    overall.write();
};
