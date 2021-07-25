module.exports = {
    "Character": {
        "Character": {
            "Title": require("./character/character/Title")
        },
        "Companion": {
            "Barding": require("./character/companion/BuddyEquip")
        },
        "Gold Saucer": {
            "TripleTriadCard": require("./character/gold-saucer/TripleTriadCard")
        },
        "Achievement": require("./character/Achievement")
    },
    "Duty": {
        "Quest": {
            "Levequest": require("./duty/quest/Leve"),
            "Quest": require("./duty/quest/Quest")
        }
    },
    "Logs": {
        "Crafting": require("./logs/crafting/RecipeNotebookList"),
        "Gathering": {
            "Fish": require("./logs/gathering/FishParameter"),
            "Spot": require("./logs/gathering/FishingSpot"),
            "Spearfish": require("./logs/gathering/SpearfishingItem"),
        }
    },
    "Emote": require("./social/Emote"),
    "Other": {
        "NPC": require("./_other/ENpcResident"),
    }
};
