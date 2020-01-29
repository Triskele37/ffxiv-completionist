import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Raids&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Battle_Raids = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Complete the Binding Coil of Bahamut.",
        name: "The Binds that Tie I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the Binding Coil of Bahamut 5 times.",
        name: "The Binds that Tie II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete the Binding Coil of Bahamut 10 times.",
        name: "The Binds that Tie III",
        points: 20,
        reward: "-"
    }, {
        description: "Complete the Labyrinth of the Ancients.",
        name: "You Call That a Labyrinth",
        points: 10,
        reward: "-"
    }, {
        description: "Complete the Second Coil of Bahamut.",
        name: "In Another Bind I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the Second Coil of Bahamut 5 times.",
        name: "In Another Bind II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete the Second Coil of Bahamut 10 times.",
        name: "In Another Bind III",
        points: 20,
        reward: "-"
    }, {
        description: "Complete Syrcus Tower.",
        name: "Life is a Syrcus",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat the rafflesia within the first turn of the Second Coil of Bahamut (Savage).",
        name: "A Flower by Any Other Name",
        points: 10,
        reward: "Title: Rafflesia Reaper"
    }, {
        description: "Defeat Melusine within the second turn of the Second Coil of Bahamut (Savage).",
        name: "Seconds",
        points: 10,
        reward: "Title: Melusine Mauler"
    }, {
        description: "Defeat the Avatar within the third turn of the Second Coil of Bahamut (Savage).",
        name: "Obtanium",
        points: 10,
        reward: "Title: The Avatar"
    }, {
        description: "Defeat Nael deus Darnus within the fourth turn of the Second Coil of Bahamut (Savage).",
        name: "Scent of a Woman",
        points: 10,
        reward: "Title: Domitor"
    }, {
        description: "Complete the Final Coil of Bahamut.",
        name: "Out of a Bind I",
        points: 5,
        reward: "Item: Wind-Up Louisoix",
    }, {
        description: "Complete the Final Coil of Bahamut 5 times.",
        name: "Out of a Bind II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete the Final Coil of Bahamut 10 times.",
        name: "Out of a Bind III",
        points: 20,
        reward: "-"
    }, {
        description: "Clear the World of Darkness.",
        name: "Let the Sun Shine In",
        points: 20,
        reward: "-"
    }, {
        description: "Complete Alexander: Gordias.",
        name: "Sins of the Father I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete Alexander: Gordias 5 times.",
        name: "Sins of the Father II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete Alexander: Gordias 10 times.",
        name: "Sins of the Father III",
        points: 20,
        reward: "-"
    }, {
        description: "Complete Alexander: Gordias (Savage).",
        name: "Sins of the Savage Father I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete Alexander: Gordias (Savage) 5 times.",
        name: "Sins of the Savage Father II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete Alexander: Gordias (Savage) 10 times.",
        name: "Sins of the Savage Father III",
        points: 20,
        reward: "-"
    }, {
        description: "Complete the Void Ark.",
        name: "Touching the Void",
        points: 10,
        reward: "-"
    }, {
        description: "Complete Alexander: Midas.",
        name: "Sins of the Son I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete Alexander: Midas 5 times.",
        name: "Sins of the Son II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete Alexander: Midas 10 times.",
        name: "Sins of the Son III",
        points: 20,
        reward: "-"
    }, {
        description: "Complete Alexander: Midas (Savage).",
        name: "Sins of the Savage Son I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete Alexander: Midas (Savage) 5 times.",
        name: "Sins of the Savage Son II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete Alexander: Midas (Savage) 10 times.",
        name: "Sins of the Savage Son III",
        points: 20,
        reward: "-"
    }, {
        description: "Complete the Weeping City of Mhach.",
        name: "Ex Mhachina",
        points: 10,
        reward: "-"
    }, {
        description: "Complete Alexander.",
        name: "Sins of the Creator I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete Alexander 5 times.",
        name: "Sins of the Creator II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete Alexander 10 times.",
        name: "Sins of the Creator III",
        points: 20,
        reward: "-"
    }, {
        description: "Complete Alexander (Savage).",
        name: "Sins of the Savage Creator I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete Alexander (Savage) 5 times.",
        name: "Sins of the Savage Creator II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete Alexander (Savage) 10 times.",
        name: "Sins of the Savage Creator III",
        points: 20,
        reward: "-"
    }, {
        description: "Complete Dun Scaith.",
        name: "What's Dun Is Done",
        points: 10,
        reward: "-"
    }, {
        description: "Complete Omega: Deltascape.",
        name: "I Am the Delta, I Am the Omega I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete Omega: Deltascape 5 times.",
        name: "I Am the Delta, I Am the Omega II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete Omega: Deltascape 10 times.",
        name: "I Am the Delta, I Am the Omega III",
        points: 20,
        reward: "-"
    }, {
        description: "Complete Omega: Deltascape (Savage).",
        name: "I Am the Savage Delta, I Am the Savage Omega I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete Omega: Deltascape (Savage) 5 times.",
        name: "I Am the Savage Delta, I Am the Savage Omega II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete Omega: Deltascape (Savage) 10 times.",
        name: "I Am the Savage Delta, I Am the Savage Omega III",
        points: 20,
        reward: "-"
    }, {
        description: "Complete the Royal City of Rabanastre.",
        name: "Zodiac Thriller",
        points: 5,
        reward: "-"
    }, {
        description: "Defeat Bahamut Prime in the Unending Coil of Bahamut (Ultimate).",
        name: "Resistance Is Futile",
        points: 10,
        reward: "Title: The Legend"
    }, {
        description: "Complete Omega: Sigmascape.",
        name: "I Am the Sigma, I Am the Omega I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete Omega: Sigmascape 5 times.",
        name: "I Am the Sigma, I Am the Omega II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete Omega: Sigmascape 10 times.",
        name: "I Am the Sigma, I Am the Omega III",
        points: 20,
        reward: "-"
    }, {
        description: "Complete Omega: Sigmascape (Savage).",
        name: "I Am the Savage Sigma, I Am the Savage Omega I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete Omega: Sigmascape (Savage) 5 times.",
        name: "I Am the Savage Sigma, I Am the Savage Omega II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete Omega: Sigmascape (Savage) 10 times.",
        name: "I Am the Savage Sigma, I Am the Savage Omega III",
        points: 20,
        reward: "-"
    }, {
        description: "Complete the Ridorana Lighthouse.",
        name: "Didn't Stop, Made It Pop",
        points: 5,
        reward: "-"
    }, {
        description: "Defeat the Ultima Weapon in the Weapon's Refrain (Ultimate).",
        name: "Ultimatum",
        points: 10,
        reward: "Title: The Ultimate Legend"
    }, {
        description: "Complete Omega: Alphascape.",
        name: "I Am the Alpha, I Am the Omega I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete Omega: Alphascape 5 times.",
        name: "I Am the Alpha, I Am the Omega II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete Omega: Alphascape 10 times.",
        name: "I Am the Alpha, I Am the Omega III",
        points: 20,
        reward: "-"
    }, {
        description: "Complete Omega: Alphascape (Savage).",
        name: "I Am the Savage Alpha, I Am the Savage Omega I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete Omega: Alphascape (Savage) 5 times.",
        name: "I Am the Savage Alpha, I Am the Savage Omega II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete Omega: Alphascape (Savage) 10 times.",
        name: "I Am the Savage Alpha, I Am the Savage Omega III",
        points: 20,
        reward: "-"
    }, {
        description: "Complete the Orbonne Monastery.",
        name: "Orbonne to Pick",
        points: 5,
        reward: "-"
    }, {
        description: "Complete Eden's Gate.",
        name: "Paradise Found I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete Eden's Gate 5 times.",
        name: "Paradise Found II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete Eden's Gate 10 times.",
        name: "Paradise Found III",
        points: 20,
        reward: "-"
    }, {
        description: "Complete Eden's Gate (Savage).",
        name: "Savage Paradise Found I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete Eden's Gate (Savage) 5 times.",
        name: "Savage Paradise Found II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete Eden's Gate (Savage) 10 times.",
        name: "Savage Paradise Found III",
        points: 20,
        reward: "-"
    }, {
        description: "Complete the Copied Factory.",
        name: "The First Law",
        points: 5,
        reward: "-"
    }, {
        description: "Defeat Perfect Alexander in the Epic of Alexander (Ultimate).",
        name: "When I Ruled the World",
        points: 10,
        reward: "Title: The Perfect Legend"
    }
];

