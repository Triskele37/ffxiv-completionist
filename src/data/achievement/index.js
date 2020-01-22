import { BattleAchievements } from "./battle";
import { CharacterAchievements } from "./character";
import { PVPAchievements } from "./pvp";
import { ItemAchievements } from "./item";
import { CraftingAchievements } from "./crafting";
import { GatheringAchievements } from "./gathering";
import { QuestAchievements } from "./quest";
import { ExplorationAchievements } from "./exploration";
import { GrandCompanyAchievements } from "./grandcompany";

export const Achievements = function(parentStorageKey) {
	const storageKey = `${parentStorageKey}.achievements`;
	
	return {
		name: 'Achievement',
		storageKey,
		subGroups: [
			BattleAchievements(storageKey),
			CharacterAchievements(storageKey),
			PVPAchievements(storageKey),
			ItemAchievements(storageKey),
			CraftingAchievements(storageKey),
			GatheringAchievements(storageKey),
			QuestAchievements(storageKey),
			ExplorationAchievements(storageKey),
			GrandCompanyAchievements(storageKey),
		]
	};
};
