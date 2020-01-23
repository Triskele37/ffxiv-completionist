import { AchievementColumnConfig } from "../columnConfigs";

// https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=The%20Wolves%27%20Den&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const WolvesDenPVPAchievements = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.the-wolves-den`;

    return {
		name: "The Wolves' Den",
		storageKey,
		columns: AchievementColumnConfig,
		tasks: [{
			description: "Participate in your first match in the Feast or the Fold.",
			name: "Hungry Like a Wolf I",
			points: 5,
			reward: "-"
		}, {
			description: "Participate in 50 matches in the Feast or the Fold.",
			name: "Hungry Like a Wolf II",
			points: 5,
			reward: "-"
		}, {
			description: "Participate in 100 matches in the Feast or the Fold.",
			name: "Hungry Like a Wolf III",
			points: 5,
			reward: "-"
		}, {
			description: "Participate in 500 matches in the Feast or the Fold.",
			name: "Hungry Like a Wolf IV",
			points: 5,
			reward: "-"
		}, {
			description: "Participate in 1,000 matches in the Feast or the Fold.",
			name: "Hungry Like a Wolf V",
			points: 10,
			reward: "-"
		}, {
			description: "Participate in 5,000 matches in the Feast or the Fold.",
			name: "Wolfing It Down",
			points: 20,
			reward: "Title: The Ravenous Wolf"
		}, {
			description: "Triumph for the first time in the Feast or the Fold.",
			name: "Pack Mentality I",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 50 matches in the Feast or the Fold.",
			name: "Pack Mentality II",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 100 matches in the Feast or the Fold.",
			name: "Pack Mentality III",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 500 matches in the Feast or the Fold.",
			name: "Pack Mentality IV",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 1,000 matches in the Feast or the Fold.",
			name: "Pack Mentality V",
			points: 10,
			reward: "-"
		}, {
			description: "Triumph in 5,000 matches in the Feast or the Fold.",
			name: "Leader of the Pack",
			points: 20,
			reward: "Title: The Alpha Wolf"
		}, {
			description: "Participate in your first match in the Feast.",
			name: "Look Who's Coming to Dinner I",
			points: 5,
			reward: "-"
		}, {
			description: "Participate in 50 matches at the Feast.",
			name: "Look Who's Coming to Dinner II",
			points: 5,
			reward: "-"
		}, {
			description: "Participate in 100 matches at the Feast.",
			name: "Look Who's Coming to Dinner III",
			points: 5,
			reward: "-"
		}, {
			description: "Participate in 200 matches at the Feast.",
			name: "Look Who's Coming to Dinner IV",
			points: 5,
			reward: "-"
		}, {
			description: "Participate in 500 matches at the Feast.",
			name: "Look Who's Coming to Dinner V",
			points: 10,
			reward: "-"
		}, {
			description: "Participate in 1,000 matches at the Feast.",
			name: "A Clean Plate",
			points: 20,
			reward: "Title: Hungry Wolf"
		}, {
			description: "Triumph for the first time at the Feast.",
			name: "You Are What You Eat I",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 50 matches at the Feast.",
			name: "You Are What You Eat II",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 100 matches at the Feast.",
			name: "You Are What You Eat III",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 200 matches at the Feast.",
			reward: "Item: Gloria Ignition Key",
			name: "You Are What You Eat IV",
			points: 5,
		}, {
			description: "Triumph in 500 matches at the Feast.",
			name: "You Are What You Eat V",
			points: 10,
			reward: "-"
		}, {
			description: "Triumph in 1,000 matches at the Feast.",
			name: "Breaking Fast with Champions",
			points: 20,
			reward: "Title: The Devourer"
		}, {
			description: "Triumph in 10 matches at the Feast while taking on the role of tank.",
			name: "A Wolf in Plate Armor I",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 50 matches at the Feast while taking on the role of tank.",
			name: "A Wolf in Plate Armor II",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 100 matches at the Feast while taking on the role of tank.",
			name: "A Wolf in Plate Armor III",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 500 matches at the Feast while taking on the role of tank.",
			name: "A Wolf in Plate Armor IV",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 1,000 matches at the Feast while taking on the role of tank.",
			name: "A Stalwart to Remember",
			points: 10,
			reward: "Title: The Unmoving"
		}, {
			description: "Triumph in 10 matches at the Feast while taking on the role of melee DPS.",
			name: "A Wolf in Spiked Subligar I",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 50 matches at the Feast while taking on the role of melee DPS.",
			name: "A Wolf in Spiked Subligar II",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 100 matches at the Feast while taking on the role of melee DPS.",
			name: "A Wolf in Spiked Subligar III",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 500 matches at the Feast while taking on the role of melee DPS.",
			name: "A Wolf in Spiked Subligar IV",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 1,000 matches at the Feast while taking on the role of melee DPS.",
			name: "A Slayer to Remember",
			points: 10,
			reward: "Title: The Unrelenting"
		}, {
			description: "Triumph in 10 matches at the Feast while taking on the role of ranged physical DPS.",
			name: "A Wolf in Green Tights I",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 50 matches at the Feast while taking on the role of ranged physical DPS.",
			name: "A Wolf in Green Tights II",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 100 matches at the Feast while taking on the role of ranged physical DPS.",
			name: "A Wolf in Green Tights III",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 500 matches at the Feast while taking on the role of ranged physical DPS.",
			name: "A Wolf in Green Tights IV",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 1,000 matches at the Feast while taking on the role of ranged physical DPS.",
			name: "A Sniper to Remember",
			points: 10,
			reward: "Title: The Unseen"
		}, {
			description: "Triumph in 10 matches at the Feast while taking on the role of ranged magical DPS.",
			name: "A Wolf in Dark Robes I",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 50 matches at the Feast while taking on the role of ranged magical DPS.",
			name: "A Wolf in Dark Robes II",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 100 matches at the Feast while taking on the role of ranged magical DPS.",
			name: "A Wolf in Dark Robes III",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 500 matches at the Feast while taking on the role of ranged magical DPS.",
			name: "A Wolf in Dark Robes IV",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 1,000 matches at the Feast while taking on the role of ranged magical DPS.",
			name: "A Spellcaster to Remember",
			points: 10,
			reward: "Title: The Unleashed"
		}, {
			description: "Triumph in 10 matches at the Feast while taking on the role of healer.",
			name: "A Wolf in White Robes I",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 50 matches at the Feast while taking on the role of healer.",
			name: "A Wolf in White Robes II",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 100 matches at the Feast while taking on the role of healer.",
			name: "A Wolf in White Robes III",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 500 matches at the Feast while taking on the role of healer.",
			name: "A Wolf in White Robes IV",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 1,000 matches at the Feast while taking on the role of healer.",
			name: "A Sawbones to Remember",
			points: 10,
			reward: "Title: The Undamaged"
		}, {
			description: "Record your first KO in the Feast.",
			name: "Mama Said Knock You Out I",
			points: 5,
			reward: "-"
		}, {
			description: "Record 100 KOs in the Feast.",
			name: "Mama Said Knock You Out II",
			points: 5,
			reward: "Title: Mortal Fist"
		}, {
			description: "Record 300 KOs in the Feast.",
			reward: "Item: Hellpup",
			name: "Mama Said Knock You Out III",
			points: 5,
		}, {
			description: "Record 1,000 KOs in the Feast.",
			name: "Mama Said Knock You Out IV",
			points: 10,
			reward: "-"
		}, {
			description: "Record 5,000 KOs in the Feast.",
			name: "Mama Said Knock You Out V",
			points: 20,
			reward: "Title: Rhalgr's Right Fist"
		}, {
			description: "Record your first assist in the Feast.",
			name: "How Can I Help I",
			points: 5,
			reward: "-"
		}, {
			description: "Record 100 assists in the Feast.",
			name: "How Can I Help II",
			points: 5,
			reward: "Title: Tablesetter"
		}, {
			description: "Record 300 assists in the Feast.",
			reward: "Item: Faepup",
			name: "How Can I Help III",
			points: 5,
		}, {
			description: "Record 1,000 assists in the Feast.",
			name: "How Can I Help IV",
			points: 10,
			reward: "-"
		}, {
			description: "Record 5,000 assists in the Feast.",
			name: "How Can I Help V",
			points: 20,
			reward: "Title: Halone's Cup Bearer"
		}, {
			description: "Emerge victorious with your PvP team in a match at the Feast.",
			name: "Pack Man I",
			points: 5,
			reward: "-"
		}, {
			description: "Triumph in 10 matches with your PvP team at the Feast.",
			reward: "Item: Eversharp Choker",
			name: "Pack Man II",
			points: 5,
		}, {
			description: "Triumph in 50 matches with your PvP team at the Feast.",
			reward: "Item: Eversharp Earring",
			name: "Pack Man III",
			points: 5,
		}, {
			description: "Triumph in 100 matches with your PvP team at the Feast.",
			reward: "Item: Eversharp Ring",
			name: "Pack Man IV",
			points: 10,
		}, {
			description: "Triumph in 200 matches with your PvP team at the Feast.",
			reward: "Item: Eversharp Wristbands",
			name: "Pack Man V",
			points: 10,
		}, {
			description: "Triumph in 500 matches with your PvP team at the Feast.",
			name: "Stay Sharp",
			points: 20,
			reward: "Title: Eversharp"
		}, {
			description: "Emerge victorious in the 2018 Feast Regional Championship (Japan).",
			name: "Rhyme & Region 2018",
			points: 0,
			reward: "Title: FRC 2018 Champion"
		}, {
			description: "Emerge victorious in the 2018 Feast Regional Championship (North America).",
			name: "Rhyme & Region 2018",
			points: 0,
			reward: "Title: FRC 2018 Champion"
		}, {
			description: "Emerge victorious in the 2018 Feast Regional Championship (Europe).",
			name: "Rhyme & Region 2018",
			points: 0,
			reward: "Title: FRC 2018 Champion"
		}, {
			description: "Reach the finals in the 2018 Feast Regional Championship.",
			name: "Rhyme & Region 2018 - Finalist",
			points: 0,
			reward: "Title: FRC 2018 Finalist"
		}, {
			description: "Place between 1st and 10th in the 2018 Feast Regional Championship preliminaries.",
			name: "Rhyme & Region 2018 - Placed",
			points: 0,
			reward: "Title: FRC 2018 Ranker"
		}]
	};
};
