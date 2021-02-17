import { DataGroup } from "../../DataGroup";
import { AchievementColumnConfig } from "./columnConfigs";

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
	const data = new DataGroup("Achievements", parent);
	data.name_fr = "Hauts Faits";

	data.columnConfig = AchievementColumnConfig;

	data.initializeSubGroups([
		Character_Achievements_Battle,
		Character_Achievements_PvP,
		Character_Achievements_Character,
		Character_Achievements_Items,
		Character_Achievements_Crafting_and_Gathering,
		Character_Achievements_Quests,
		Character_Achievements_Exploration,
		Character_Achievements_Grand_Company,
		Character_Achievements_Legacy,
	]);

	return data;
};
