import { DataGroup } from "../DataGroup";
import { AchievementColumnConfig } from "./columnConfigs";

import { Achievements_Battle } from "./battle";
import { Achievements_PvP } from "./pvp";
import { Achievements_Character } from "./character";
import { Achievements_Items } from "./item";
import { Achievements_Crafting } from "./crafting";
import { Achievements_Gathering } from "./gathering";
import { Achievements_Quests } from "./quest";
import { Achievements_Exploration } from "./exploration";
import { Achievements_Grand_Company } from "./grandcompany";
import { Achievements_Legacy } from "./legacy";

export const Achievements = function(parent) {
	const data = new DataGroup("Achievements", parent);
	data.columnConfig = AchievementColumnConfig;

	data.initializeSubGroups([
		Achievements_Battle,
		Achievements_PvP,
		Achievements_Character,
		Achievements_Items,
		Achievements_Crafting,
		Achievements_Gathering,
		Achievements_Quests,
		Achievements_Exploration,
		Achievements_Grand_Company,
		Achievements_Legacy,
	]);

	return data;
};
