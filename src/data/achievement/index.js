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
		groupKeys: [
			"Battle",
			"Character",
			"PVP",
			"Item",
			"Crafting",
			"Gathering",
			"Quest",
			"Exploration",
			"GrandCompany"
		],
		// Groups
		Battle: BattleAchievements(storageKey),
		Character: CharacterAchievements(storageKey),
		PVP: PVPAchievements(storageKey),
		Item: ItemAchievements(storageKey),
		Crafting: CraftingAchievements(storageKey),
		Gathering: GatheringAchievements(storageKey),
		Quest: QuestAchievements(storageKey),
		Exploration: ExplorationAchievements(storageKey),
		GrandCompany: GrandCompanyAchievements(storageKey),
	};
};
