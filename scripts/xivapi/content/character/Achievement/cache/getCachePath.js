module.exports = function getCachePath(Achievement) {
    return [
        Achievement.AchievementCategory.AchievementKind.Name,
        Achievement.AchievementCategory.Name
    ];
};
