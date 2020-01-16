import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Currency&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const CurrencyItemAchievements = {
    name: 'Currency',
	storageKey: "achievement.item.currency",
    columns: AchievementColumnConfig,
    tasks: [{
        description: "Earn a cumulative total of 100 gil from levequests.",
        name: "On the Payroll I",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 1,000 gil from levequests.",
        name: "On the Payroll II",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 10,000 gil from levequests.",
        name: "On the Payroll III",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 100,000 gil from levequests.",
        name: "On the Payroll IV",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 1,000,000 gil from levequests.",
        name: "On the Payroll V",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 10,000,000 gil from levequests.",
        name: "Who Wants to Be a Gillionaire?",
        points: 10,
        reward: "Title: Honest Gillionaire"
    }, {
        description: "Earn a cumulative total of 1,000 gil from defeating enemies.",
        name: "You Can't Take It with You I",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 10,000 gil from defeating enemies.",
        name: "You Can't Take It with You II",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 100,000 gil from defeating enemies.",
        name: "You Can't Take It with You III",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 1,000,000 gil from defeating enemies.",
        name: "You Can't Take It with You IV",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 10,000,000 gil from defeating enemies.",
        name: "You Can't Take It with You V",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 100,000,000 gil from defeating enemies.",
        name: "Never Met a Corpse I Couldn't Rifle",
        points: 10,
        reward: "Title: Ruthless Gillionaire"
    }, {
        description: "Earn a cumulative total of 20,000,000 gil from levequests.",
        name: "On the Payroll VI",
        points: 20,
        reward: "-"
    }]
}
