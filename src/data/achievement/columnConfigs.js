export const AchievementColumnConfig = [
    { header: "Name", key: "name", },
    { header: "Description", key: "description" },
    {
        header: "Points",
        key: "points",
        filterable: true,
        filterType: "number",
        styles: {
            centered: true
        }
    },
    { header: "Reward", key: "reward" }
];
