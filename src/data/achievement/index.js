import { DataGroup } from "../DataGroup";
import { AchievementColumnConfig } from "./columnConfigs";

import { Achievements_Battle } from "./battle";
import { Achievements_PvP } from "./pvp";
import { Achievements_Character } from "./character";
import { Achievements_Items } from "./items";
import { Achievements_Crafting_and_Gathering } from "./crafting-and-gathering";
import { Achievements_Quests } from "./quests";
import { Achievements_Exploration } from "./exploration";
import { Achievements_Grand_Company } from "./grand-company";
import { Achievements_Legacy } from "./legacy";

export const Achievements = function(parent) {
	const data = new DataGroup("Achievements", parent);
	data.columnConfig = AchievementColumnConfig;

	data.initializeSubGroups([
		Achievements_Battle,
		Achievements_PvP,
		Achievements_Character,
		Achievements_Items,
		Achievements_Crafting_and_Gathering,
		Achievements_Quests,
		Achievements_Exploration,
		Achievements_Grand_Company,
		Achievements_Legacy,
	]);

	return data;
};
