import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=The%20Hunt&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const HuntBattleAchievements = {
	name: 'The Hunt',
	storageKey: "achievement.battle.the-hunt",
	columns: AchievementColumnConfig,
	tasks: [{
		description: "Slay 4 unique rank B elite marks in the Black Shroud.",
		name: "Mark of the Holt: B",
		points: 5,
		reward: "-",

	}, {
		description: "Slay 5 unique rank B elite marks in Thanalan.",
		name: "Mark of the Desert: B",
		points: 5,
		reward: "-",
	}, {
		description: "Slay 6 unique rank B elite marks in La Noscea.",
		name: "Mark of the Sea: B",
		points: 5,
		reward: "-",
	}, {
		description: "Slay 2 unique rank B elite marks in Mor Dhona or the Coerthas central highlands.",
		name: "Mark of the Lake: B",
		points: 5,
		reward: "-",
	}, {
		description: "Earn the following four achievements: Mark of the Holt: B, Mark of the Desert: B, Mark of the Sea: B, and Mark of the Lake: B.",
		name: "On Your Mark: B",
		points: 10,
		reward: "Title: Hunter for Hire"
	}, {
		description: "Slay 4 unique rank A elite marks in the Black Shroud.",
		name: "Mark of the Holt: A",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 5 unique rank A elite marks in Thanalan.",
		name: "Mark of the Desert: A",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 6 unique rank A elite marks in La Noscea.",
		name: "Mark of the Sea: A",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 2 unique rank A elite marks in Mor Dhona or the Coerthas central highlands.",
		name: "Mark of the Lake: A",
		points: 5,
		reward: "-"
	}, {
		description: "Earn the following four achievements: Mark of the Holt: A, Mark of the Desert: A, Mark of the Sea: A, and Mark of the Lake: A.",
		name: "On Your Mark: A",
		points: 10,
		reward: "Title: Seeker of Fortune"
	}, {
		description: "Slay 4 unique rank S elite marks in the Black Shroud.",
		name: "Mark of the Holt: S",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 5 unique rank S elite marks in Thanalan.",
		name: "Mark of the Desert: S",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 6 unique rank S elite marks in La Noscea.",
		name: "Mark of the Sea: S",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 2 unique rank S elite marks in Mor Dhona or the Coerthas central highlands.",
		name: "Mark of the Lake: S",
		points: 5,
		reward: "-"
	}, {
		description: "Earn the following four achievements: Mark of the Holt: S, Mark of the Desert: S, Mark of the Sea: S, and Mark of the Lake: S.",
		name: "On Your Mark: S",
		points: 10,
		reward: "Title: Seasoned Tracker"
	}, {
		description: "Slay 10 rank B elite marks.",
		name: "Bring Your B Game I",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 50 rank B elite marks.",
		name: "Bring Your B Game II",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 300 rank B elite marks.",
		name: "Bring Your B Game III",
		points: 5,
		reward: "Title: Bounty Hunter"
	}, {
		description: "Slay 1,000 rank B elite marks.",
		name: "Straight Bs",
		points: 10,
		reward: "-"
	}, {
		description: "Slay 5 rank A elite marks.",
		name: "Bring Your A Game I",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 30 rank A elite marks.",
		name: "Bring Your A Game II",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 200 rank A elite marks.",
		name: "Bring Your A Game III",
		points: 5,
		reward: "Title: Soldier of Fortune"
	}, {
		description: "Slay 500 rank A elite marks.",
		name: "Straight As",
		points: 10,
		reward: "-"
	}, {
		description: "Slay 3 rank S elite marks.",
		name: "Bring Your S Game I",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 20 rank S elite marks.",
		name: "Bring Your S Game II",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 200 rank S elite marks.",
		name: "Bring Your S Game III",
		points: 5,
		reward: "Title: Captain of the Hunt"
	}, {
		description: "Slay 500 rank S elite marks.",
		name: "Straight Ss",
		points: 10,
		reward: "-"
	}, {
		description: "Slay 6 unique rank B elite marks in the Dravanian hinterlands, the Dravanian forelands, or the Churning Mists.",
		name: "Mark of the Dragon: B",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 6 unique rank B elite marks in the Coerthas western highlands, the Sea of Clouds, or Azys Lla.",
		name: "Mark of Cloud and Ice: B",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 6 unique rank A elite marks in the Dravanian hinterlands, the Dravanian forelands, or the Churning Mists.",
		name: "Mark of the Dragon: A",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 6 unique rank A elite marks in the Coerthas western highlands, the Sea of Clouds, or Azys Lla.",
		name: "Mark of Cloud and Ice: A",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 3 unique rank S elite marks in the Dravanian hinterlands, the Dravanian forelands, or the Churning Mists.",
		name: "Mark of the Dragon: S",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 3 unique rank S elite marks in the Coerthas western highlands, the Sea of Clouds, or Azys Lla.",
		name: "Mark of Cloud and Ice: S",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 6 unique rank B elite marks in Gyr Abania.",
		name: "Mark of the Wastes: B",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 6 unique rank A elite marks in Gyr Abania.",
		name: "Mark of the Wastes: A",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 3 unique rank S elite marks in Gyr Abania.",
		name: "Mark of the Wastes: S",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 6 unique rank B elite marks in Othard.",
		name: "Mark of the East: B",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 6 unique rank A elite marks in Othard.",
		name: "Mark of the East: A",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 3 unique rank S elite marks in Othard.",
		name: "Mark of the East: S",
		points: 5,
		reward: "-"
	}, {
		description: "Slay 1,500 rank A elite marks.",
		name: "Bring Your A Game IV",
		points: 10,
		reward: "-"
	}, {
		description: "Slay 3,000 rank A elite marks.",
		name: "Bring Your A Game V",
		points: 10,
		reward: "Title: Of the Longest Hunt"
	}, {
		description: "Slay 10,000 rank A elite marks.",
		name: "Bring Your A Game VI",
		points: 10,
		reward: "Title: Of the Endless Hunt"
	}, {
		description: "Slay 1,000 rank S elite marks.",
		name: "Bring Your S Game IV",
		points: 10,
		reward: "-"
	}, {
		description: "Slay 2,000 rank S elite marks.",
		name: "Bring Your S Game V",
		points: 10,
		reward: "Title: Thrillseeker"
	}, {
		description: "Slay 5,000 rank S elite marks.",
		name: "Bring Your S Game VI",
		points: 10,
		reward: "Title: Ultimate Thrillseeker"
	}, {
		description: "Obtain the achievements “Bring Your A Game V” and “Bring Your S Game V.”",
		name: "You Got Game",
		points: 10,
		reward: "Item: Centurio Tiger Horn",
	}, {
		description: "Slay 100 rank A elite marks in Norvrandt.",
		name: "Shadowbring Your A Game I",
		points: 10,
		reward: "-"
	}, {
		description: "Slay 500 rank A elite marks in Norvrandt.",
		name: "Shadowbring Your A Game II",
		points: 10,
		reward: "-"
	}, {
		description: "Slay 2,000 rank A elite marks in Norvrandt.",
		name: "Shadowbring Your A Game III",
		points: 10,
		reward: "Title: Charming Brute"
	}, {
		description: "Slay 30 elite marks of rank S or higher in Norvrandt.",
		name: "Shadowbring Your S Game I",
		points: 10,
		reward: "-"
	}, {
		description: "Slay 300 elite marks of rank S or higher in Norvrandt.",
		name: "Shadowbring Your S Game II",
		points: 10,
		reward: "-"
	}, {
		description: "Slay 1,000 elite marks of rank S or higher in Norvrandt.",
		name: "Shadowbring Your S Game III",
		points: 10,
		reward: "Title: The Fabulously Feral"
	}, {
		description: "Obtain the achievements “Shadowbring Your A Game III” and “Shadowbring Your S Game III.”",
		name: "Nuts for Nutsy",
		points: 10,
		reward: "Item: Triceratops Horn",
	}]
};
