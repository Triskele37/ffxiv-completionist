import { ChangeStore } from "./utils";

export const migrate_5_25_to_5_3 = () => {
    const overall = new ChangeStore('0.5.3');

    overall.change('achievements.crafting--gathering.all-disciplines', 'minor-miracle', 'phase-ii-minor-miracle');
    overall.change('achievements.crafting--gathering.all-disciplines', 'divine-ascension', 'phase-ii-divine-ascension');

    overall.change('collectables.minion-guide', 'bomb-fish', 'bombfish');
    overall.change('collectables.triple-triad-card-list', 'ultima-weapon', 'the-ultima-weapon');

    overall.write();
};
