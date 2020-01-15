import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&filters=AchievementCategory.ID=2&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380
// There are two AchievementCategories named Dungeons, will need to use IDs for these

export const DungeonBattleAchievements = {
	name: 'Dungeons',
	columns: AchievementColumnConfig,
	tasks: [{
		description: "Successfully complete 5 unique instanced dungeon raids or trials.",
		name: "To the Dungeons I",
		points: 5,
		reward: "-"
	}, {
		description: "Successfully complete 10 unique instanced dungeon raids or trials.",
		name: "To the Dungeons II",
		points: 10,
		reward: "-"
	}, {
		description: "Successfully complete 20 unique instanced dungeon raids or trials.",
		name: "To the Dungeons III",
		points: 20,
		reward: "-"
	}, {
		description: "Complete 10 instanced dungeon raids or trials.",
		name: "Dungeon Siege I",
		points: 5,
		reward: "-"
	}, {
		description: "Complete 30 instanced dungeon raids or trials.",
		name: "Dungeon Siege II",
		points: 5,
		reward: "-"
	}, {
		description: "Complete 100 instanced dungeon raids or trials.",
		name: "Dungeon Siege III",
		points: 5,
		reward: "-"
	}, {
		description: "Complete 300 instanced dungeon raids or trials.",
		name: "Dungeon Siege IV",
		points: 10,
		reward: "Title: Dungeon Master"
	}, {
		description: "Complete 1,000 instanced dungeon raids or trials.",
		name: "Dungeon Master",
		points: 20,
		reward: "-"
	}, {
		description: "Successfully complete 30 unique instanced dungeon raids or trials.",
		name: "To the Dungeons IV",
		points: 20,
		reward: "-"
	}, {
		description: "Successfully complete 40 unique instanced dungeon raids or trials.",
		name: "To the Dungeons V",
		points: 20,
		reward: "-"
	}, {
		description: "Successfully complete 50 unique instanced dungeon raids or trials.",
		name: "To the Dungeons VI",
		points: 20,
		reward: "-"
	}, {
		description: "Successfully complete 2,000 instanced dungeon raids or trials.",
		name: "Lifer I",
		points: 20,
		reward: "-"
	}, {
		description: "Successfully complete 5,000 instanced dungeon raids or trials.",
		name: "Lifer II",
		points: 20,
		reward: "-"
	}, {
		description: "Successfully complete 10,000 instanced dungeon raids or trials.",
		name: "Lifer III",
		points: 20,
		reward: "-"
	}, {
		description: "Clear the 10th floor of the Palace of the Dead.",
		name: "In Too Deep I",
		points: 5,
		reward: "-"
	}, {
		description: "Clear the 20th floor of the Palace of the Dead.",
		name: "In Too Deep II",
		points: 5,
		reward: "-"
	}, {
		description: "Clear the 30th floor of the Palace of the Dead.",
		name: "In Too Deep III",
		points: 5,
		reward: "-"
	}, {
		description: "Clear the 40th floor of the Palace of the Dead.",
		name: "In Too Deep IV",
		points: 5,
		reward: "-"
	}, {
		description: "Clear the 50th floor of the Palace of the Dead.",
		name: "In Too Deep V",
		points: 10,
		reward: "-"
	}, {
		description: "Clear the 100th floor of the Palace of the Dead.",
		name: "In Too Deep VI",
		points: 10,
		reward: "Title: Hero of Gelmorra"
	}, {
		description: "Clear the 150th floor of the Palace of the Dead.",
		name: "In Too Deep VII",
		points: 10,
		reward: "-"
	}, {
		description: "Clear the 200th floor of the Palace of the Dead.",
		name: "In Too Deep VIII",
		points: 20,
		reward: "-"
	}, {
		description: "Clear the 1st through the 50th floors of the Palace of the Dead solo and record a score on floor 51 or below.",
		name: "Pal-less Palace I",
		points: 10,
		reward: "-"
	}, {
		description: "Clear the 1st through the 100th floors of the Palace of the Dead solo and record a score on floor 101 or below.",
		name: "Pal-less Palace II",
		points: 10,
		reward: "Title: Lonely Explorer"
	}, {
		description: "Discover a piece of the Accursed Hoard.",
		name: "For the Hoard I",
		points: 5,
		reward: "-"
	}, {
		description: "Discover 100 pieces of the Accursed Hoard.",
		name: "For the Hoard II",
		points: 5,
		reward: "-"
	}, {
		description: "Discover 1,000 pieces of the Accursed Hoard.",
		name: "For the Hoard III",
		points: 10,
		reward: "Title: The Lucky"
	}, {
		description: "Discover 5,000 pieces of the Accursed Hoard.",
		name: "For the Hoard IV",
		points: 20,
		reward: "-"
	}, {
		description: "Discover a piece of the Accursed Hoard without using a pomander of intuition.",
		name: "The Trouble with Buried I",
		points: 10,
		reward: "-"
	}, {
		description: "Discover 100 pieces of the Accursed Hoard without using a pomander of intuition.",
		name: "The Trouble with Buried II",
		points: 20,
		reward: "Title: Of the Sixth Sense"
	}, {
		description: "Clear the 1st through the 200th floors of the Palace of the Dead solo.",
		name: "Pal-less Palace III",
		points: 20,
		reward: "Title: The Necromancer"
	}, {
		description: "Clear the 10th floor of Heaven–on–High.",
		name: "She's So High I",
		points: 5,
		reward: "-"
	}, {
		description: "Clear the 20th floor of Heaven–on–High.",
		name: "She's So High II",
		points: 5,
		reward: "-"
	}, {
		description: "Clear the 30th floor of Heaven–on–High.",
		name: "She's So High III",
		points: 5,
		reward: "Title: Hiruko Hunter"
	}, {
		description: "Clear the 50th floor of Heaven–on–High.",
		name: "She's So High IV",
		points: 10,
		reward: "-"
	}, {
		description: "Clear the 100th floor of Heaven–on–High.",
		name: "She's So High V",
		points: 10,
		reward: "Title: Heavenly Gate Crasher"
	}, {
		description: "Clear the 1st through the 50th floors of Heaven–on–High solo and record a score on floor 51 or below.",
		name: "Heaven is a Lonely Place I",
		points: 10,
		reward: "-"
	}, {
		description: "Clear the 1st through the 100th floors of Heaven–on–High solo.",
		name: "Heaven is a Lonely Place II",
		points: 10,
		reward: "Title: Lone Hero"
	}, {
		description: "Discover 10,000 pieces of the Accursed Hoard.",
		name: "For the Hoard V",
		points: 20,
		reward: "Title: Hoarder"
	}, {
		description: "Complete a single stage at the Masked Carnivale.",
		name: "Smokin' I",
		points: 5,
		reward: "-"
	}, {
		description: "Complete 5 stages at the Masked Carnivale.",
		name: "Smokin' II",
		points: 5,
		reward: "-"
	}, {
		description: "Complete 10 stages at the Masked Carnivale.",
		name: "Smokin' III",
		points: 5,
		reward: "-"
	}, {
		description: "Complete 15 stages at the Masked Carnivale.",
		name: "Smokin' IV",
		points: 5,
		reward: "-"
	}, {
		description: "Complete 20 stages at the Masked Carnivale.",
		name: "Smokin' V",
		points: 5,
		reward: "-"
	}, {
		description: "Complete 25 stages at the Masked Carnivale.",
		name: "Smokin' VI",
		points: 5,
		reward: "Title: Mask of the Blue"
	}, {
		description: "Achieve the “Giant Slayer” feat at the Masked Carnivale.",
		name: "The Harder They Fall",
		points: 10,
		reward: "-"
	}, {
		description: "Achieve the “Trouble with Tentacles” feat at the Masked Carnivale.",
		name: "Octopath Traveler",
		points: 10,
		reward: "-"
	}, {
		description: "Achieve the “Perfect Blue” feat at the Masked Carnivale.",
		name: "Something Borrowed",
		points: 10,
		reward: "Title: Perfect Blue"
	}, {
		description: "Clear the Baldesion Arsenal.",
		reward: "Item: Demi-Ozma",
		name: "We're on Your Side I",
		points: 5
	}, {
		description: "Clear the Baldesion Arsenal 5 times.",
		name: "We're on Your Side II",
		points: 5,
		reward: "-"
	}, {
		description: "Clear the Baldesion Arsenal 10 times.",
		name: "We're on Your Side III",
		points: 5,
		reward: "-"
	}, {
		description: "Complete 30 stages at the Masked Carnivale.",
		name: "Smokin' VII",
		points: 5,
		reward: "-"
	}, {
		description: "Achieve the “The Celestium's Finest” feat at the Masked Carnivale.",
		name: "None More Blue",
		points: 10,
		reward: "Title: Champion of the Blue"
	}]
};
