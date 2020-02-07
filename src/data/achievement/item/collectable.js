import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Collectable&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Items_Collectables = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Synthesize 100 collectables.",
        name: "I Made That (Worth Collecting) I",
        points: 5,
        reward: "-"
    }, {
        description: "Synthesize 300 collectables.",
        name: "I Made That (Worth Collecting) II",
        points: 5,
        reward: "-"
    }, {
        description: "Synthesize 1,000 collectables.",
        name: "I Made That (Worth Collecting) III",
        points: 10,
        reward: "Title: Molder of Masterpieces"
    }, {
        description: "Gather or catch 300 collectables.",
        name: "I Collected That I",
        points: 5,
        reward: "-"
    }, {
        description: "Gather or catch 1,000 collectables.",
        name: "I Collected That II",
        points: 5,
        reward: "-"
    }, {
        description: "Gather or catch 3,000 collectables.",
        name: "I Collected That III",
        points: 10,
        reward: "Title: Amasser of Masterpieces"
    }, {
        description: "Submit 300 collectables to Rowena's House of Splendors.",
        name: "I Traded That I",
        points: 5,
        reward: "-"
    }, {
        description: "Submit 1,000 collectables to Rowena's House of Splendors.",
        name: "I Traded That II",
        points: 5,
        reward: "-"
    }, {
        description: "Submit 3,000 collectables to Rowena's House of Splendors.",
        name: "I Traded That III",
        points: 10,
        reward: "Title: Business Associate"
    }, {
        description: "Deliver 36 collectables to Zhloe Aliapoh.",
        name: "The Customer Is Always Right: Zhloe Aliapoh I",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 48 collectables to Zhloe Aliapoh.",
        name: "The Customer Is Always Right: Zhloe Aliapoh II",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 60 collectables to Zhloe Aliapoh.",
        name: "The Customer Is Always Right: Zhloe Aliapoh III",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 90 collectables to Zhloe Aliapoh.",
        name: "The Customer Is Always Right: Zhloe Aliapoh IV",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 120 collectables to Zhloe Aliapoh.",
        name: "The Customer Is Always Right: Zhloe Aliapoh V",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 150 collectables to Zhloe Aliapoh.",
        name: "The Customer Is Always Right: Zhloe Aliapoh VI",
        points: 10,
        reward: "Title: Zhloe's Best Friend"
    }, {
        description: "Synthesize 3,000 collectables.",
        name: "I Made That (Worth Collecting) IV",
        points: 10,
        reward: "-"
    }, {
        description: "Gather or catch 5,000 collectables.",
        name: "I Collected That IV",
        points: 10,
        reward: "-"
    }, {
        description: "Deliver 36 collectables to M'naago.",
        name: "The Customer Is Always Right: M'naago I",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 48 collectables to M'naago.",
        name: "The Customer Is Always Right: M'naago II",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 60 collectables to M'naago.",
        name: "The Customer Is Always Right: M'naago III",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 90 collectables to M'naago.",
        name: "The Customer Is Always Right: M'naago IV",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 120 collectables to M'naago.",
        name: "The Customer Is Always Right: M'naago V",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 150 collectables to M'naago.",
        name: "The Customer Is Always Right: M'naago VI",
        points: 10,
        reward: "Title: Naago's Partner"
    }, {
        description: "Deliver 36 collectables to Kurenai.",
        name: "The Customer Is Always Right: Kurenai I",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 48 collectables to Kurenai.",
        name: "The Customer Is Always Right: Kurenai II",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 60 collectables to Kurenai.",
        name: "The Customer Is Always Right: Kurenai III",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 90 collectables to Kurenai.",
        name: "The Customer Is Always Right: Kurenai IV",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 120 collectables to Kurenai.",
        name: "The Customer Is Always Right: Kurenai V",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 150 collectables to Kurenai.",
        name: "The Customer Is Always Right: Kurenai VI",
        points: 10,
        reward: "Title: Kurenai's Partner"
    }, {
        description: "Deliver 36 collectables to Adkiragh.",
        name: "The Customer Is Always Right: Adkiragh I",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 48 collectables to Adkiragh.",
        name: "The Customer Is Always Right: Adkiragh II",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 60 collectables to Adkiragh.",
        name: "The Customer Is Always Right: Adkiragh III",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 90 collectables to Adkiragh.",
        name: "The Customer Is Always Right: Adkiragh IV",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 120 collectables to Adkiragh.",
        name: "The Customer Is Always Right: Adkiragh V",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 150 collectables to Adkiragh.",
        name: "The Customer Is Always Right: Adkiragh VI",
        points: 10,
        reward: "Title: Tough Customer"
    }, {
        description: "Synthesize 5,000 collectables.",
        name: "I Made That (Worth Collecting) V",
        points: 10,
        reward: "-"
    }, {
        description: "Gather or catch 8,000 collectables.",
        name: "I Collected That V",
        points: 10,
        reward: "-"
    }, {
        description: "Deliver 36 collectables to Kai-Shirr.",
        name: "The Customer Is Always Right: Kai-Shirr I",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 48 collectables to Kai-Shirr.",
        name: "The Customer Is Always Right: Kai-Shirr II",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 60 collectables to Kai-Shirr.",
        name: "The Customer Is Always Right: Kai-Shirr III",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 90 collectables to Kai-Shirr.",
        name: "The Customer Is Always Right: Kai-Shirr IV",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 120 collectables to Kai-Shirr.",
        name: "The Customer Is Always Right: Kai-Shirr V",
        points: 5,
        reward: "-"
    }, {
        description: "Deliver 150 collectables to Kai-Shirr.",
        name: "The Customer Is Always Right: Kai-Shirr VI",
        points: 10,
        reward: "Title: Honeybee"
    }
];
