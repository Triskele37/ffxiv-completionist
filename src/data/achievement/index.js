import { BattleAchievements } from "./battle";
import { CharacterAchievements } from "./character";
import { PVPAchievements } from "./pvp";
import { ItemAchievements } from "./item";
import { CraftingAchievements } from "./crafting";
import { GatheringAchievements } from "./gathering";
import { QuestAchievements } from "./quest";
import { ExplorationAchievements } from "./exploration";
import { GrandCompanyAchievements } from "./grandcompany";

export const Achievements = {
	name: 'Achievement',
	subGroups: [
		BattleAchievements,
		CharacterAchievements,
		PVPAchievements,
		ItemAchievements,
		CraftingAchievements,
		GatheringAchievements,
		QuestAchievements,
		ExplorationAchievements,
		GrandCompanyAchievements,
	]
};
