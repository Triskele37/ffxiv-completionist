import { DataGroup } from "../../DataGroup";

import { Character_Achievements_Battle } from "./battle";
import { Character_Achievements_PvP } from "./pvp";
import { Character_Achievements_Character } from "./character";
import { Character_Achievements_Items } from "./items";
import { Character_Achievements_Crafting_and_Gathering } from "./crafting-and-gathering";
import { Character_Achievements_Quests } from "./quests";
import { Character_Achievements_Exploration } from "./exploration";
import { Character_Achievements_Grand_Company } from "./grand-company";
import { Character_Achievements_Legacy } from "./legacy";

export const Character_Achievements = function(parent) {
    const data = DataGroup.fromJSON(parent, "./character/achievement/index", {
        Points: { filterable: true, filterType: "number", centered: true }
    });

	data.subGroups = [
		Character_Achievements_Battle(data),
		Character_Achievements_PvP(data),
		Character_Achievements_Character(data),
		Character_Achievements_Items(data),
		Character_Achievements_Crafting_and_Gathering(data),
		Character_Achievements_Quests(data),
		Character_Achievements_Exploration(data),
		Character_Achievements_Grand_Company(data),
		Character_Achievements_Legacy(data),
	];

	return data;
};
