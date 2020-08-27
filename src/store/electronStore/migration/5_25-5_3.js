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

    // Move Parasol to Fashion Accessories / remove Parasol
    overall.create('collectables', 'fashion-accessories');
    overall.move('collectables.parasols', 'collectables.fashion-accessories', 'parasol');
    overall.move('collectables.parasols', 'collectables.fashion-accessories', 'sky-blue-parasol');
    overall.delete('collectables', 'parasols');

    // Removed quest fate
    overall.delete('fates.la-noscea.western', 'the-mandragoras');

    // Spelling Fixes
    overall.change('collectables.minion-guide', 'bomb-fish', 'bombfish');
    overall.change('collectables.triple-triad-card-list', 'ultima-weapon', 'the-ultima-weapon');

    overall.write();
};
