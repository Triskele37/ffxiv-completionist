import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&filters=AchievementCategory.ID=2&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Character_Gold_Saucer = function(parent) {
    return new DataGroup("Gold Saucer", parent).initializeTasks(tasks);
};

const tasks = [
    //----------------------------------------------------------------------------- Earn MGP
    {
        description: "Earn 1,000 MGP at Gold Saucer attractions.",
        name: "What Happens in the Saucer I",
        points: 5,
        reward: "Title: Gambler"
    }, {
        description: "Earn 10,000 MGP at Gold Saucer attractions.",
        name: "What Happens in the Saucer II",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 100,000 MGP at Gold Saucer attractions.",
        name: "What Happens in the Saucer III",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 1,000,000 MGP at Gold Saucer attractions.",
        name: "What Happens in the Saucer IV",
        points: 10,
        reward: "-"
    }, {
        description: "Earn 10,000,000 MGP at Gold Saucer attractions.",
        name: "What Happens in the Saucer V",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Cumulative
    {
        description: "Earn the following seven achievements: Winningest Jockey, Always Bet on Me, Bracket Breaker, Enemy at the GATE III, WTFungah III, Work Smarter, Not Harder, and Mountains out of Gil-hills.",
        name: "How I Learned to Stop Worrying and Love the Saucer",
        points: 20,
        reward: "Title: High Roller"
    },
    //----------------------------------------------------------------------------- Chocobo Racing
    {
        description: "Obtain a new chocobo through covering.",
        name: "Go Forth and Multiply",
        points: 5,
        reward: "Title: Chocobo Breeder"
    }, {
        description: "Obtain a new chocobo with a pedigree level of 9 or higher.",
        name: "Pedigree Champ",
        points: 5,
        reward: "Item: Racing Chocobo Mask",
    }, {
        description: "Train your chocobo to a rating of 285.",
        name: "Training Day",
        points: 5,
        reward: "Title: Chocobo Trainer"
    }, {
        description: "Participate in a sanctioned chocobo race.",
        name: "Off to the Races I",
        points: 5,
        reward: "Title: Bug Boy"
    }, {
        description: "Participate in 100 sanctioned chocobo races.",
        name: "Off to the Races II",
        points: 5,
        reward: "-"
    }, {
        description: "Participate in 300 sanctioned chocobo races.",
        name: "Off to the Races III",
        points: 5,
        reward: "Title: Senior Jockey"
    }, {
        description: "Participate in 3,000 sanctioned chocobo races.",
        name: "Off to the Races IV",
        points: 10,
        reward: "Title: Veteran Jockey"
    }, {
        description: "Place first in a sanctioned chocobo race.",
        name: "Breaking the Maiden",
        points: 5,
        reward: "-"
    }, {
        description: "Place first in 10 sanctioned chocobo races.",
        name: "Winning Jockey I",
        points: 5,
        reward: "-"
    }, {
        description: "Place first in 50 sanctioned chocobo races.",
        name: "Winning Jockey II",
        points: 5,
        reward: "-"
    }, {
        description: "Place first in 500 sanctioned chocobo races.",
        name: "Winningest Jockey",
        points: 10,
        reward: "Title: The First Across"
    }, {
        name: "Ride to the Challenge I",
        points: "10",
        task: "Complete the first 15 Chocobo Challenge races.",
        reward: "Race Barding"
    },
    //----------------------------------------------------------------------------- Triple Triad - Collect
    {
        description: "Obtain a Triple Triad card.",
        name: "Triple-decker I",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain 30 unique Triple Triad cards.",
        name: "Triple-decker II",
        points: 5,
        reward: "Title: Deck Holder"
    }, {
        description: "Obtain 60 unique Triple Triad cards.",
        name: "Triple-decker III",
        points: 10,
        reward: "Title: Deck Hoarder"
    }, {
        description: "Obtain 90 unique Triple Triad cards.",
        name: "Triple-decker IV",
        points: 10,
        reward: "Midgardsormr Card"
    }, {
        description: "Obtain 120 unique Triple Triad cards.",
        name: "Triple-decker V",
        points: 10,
        reward: "Vidofnir Card"
    }, {
        description: "Obtain 150 unique Triple Triad cards.",
        name: "Triple-decker VI",
        points: 10,
        reward: "Heavensward Thancred Card"
    }, {
        description: "Obtain 190 unique Triple Triad cards.",
        name: "Triple-decker VII",
        points: 10,
        reward: "Krile Card"
    }, {
        description: "Obtain 220 unique Triple Triad cards.",
        name: "Triple-decker VIII",
        points: 10,
        reward: "Gosetsu Card"
    }, {
        description: "Obtain 270 unique Triple Triad cards.",
        name: "Triple-decker IX",
        points: 10,
        reward: "Shadowbringers Urianger Card"
    },
    //----------------------------------------------------------------------------- Triple Triad - Opponent
    {
        description: "Defeat an NPC at Triple Triad.",
        name: "Triple Team I",
        points: 5,
        reward: "-"
    }, {
        description: "Defeat 30 unique NPCs at Triple Triad.",
        name: "Triple Team II",
        points: 10,
        reward: "Squall Leonhart Card",
    }, {
        description: "Defeat 41 unique NPCs at Triple Triad.",
        name: "Triple Team III",
        points: 10,
        reward: "Haurchefant Card",
    }, {
        description: "Defeat 50 unique NPCs at Triple Triad.",
        name: "Triple Team IV",
        points: 10,
        reward: "Item: Squall Leonhart Card",
    }, {
        description: "Defeat 60 unique NPCs at Triple Triad.",
        name: "Triple Team V",
        points: 10,
        reward: "Heavensward Y'shtola Card",
    }, {
        description: "Defeat 70 unique NPCs at Triple Triad.",
        name: "Triple Team VI",
        points: 10,
        reward: "Lyse Card",
    }, {
        description: "Defeat 92 unique NPCs at Triple Triad.",
        name: "Triple Team VII",
        points: 10,
        reward: "Ardbert Card",
    },
    //----------------------------------------------------------------------------- Triple Triad - Roulette
    {
        description: "Win a Triple Triad roulette match.",
        name: "Wheel of Fortune I",
        points: 5,
        reward: "-"
    }, {
        description: "Win 10 Triple Triad roulette matches.",
        name: "Wheel of Fortune II",
        points: 5,
        reward: "-"
    }, {
        description: "Win 30 Triple Triad roulette matches.",
        name: "Wheel of Fortune III",
        points: 5,
        reward: "-"
    }, {
        description: "Win 100 Triple Triad roulette matches.",
        name: "Wheel of Fortune IV",
        points: 5,
        reward: "-"
    }, {
        description: "Win 300 Triple Triad roulette matches.",
        name: "Wheel of Fortune V",
        points: 5,
        reward: "Item: Vaan Card",
    }, {
        description: "Win 1,000 Triple Triad roulette matches.",
        name: "Always Bet on Me",
        points: 10,
        reward: "Title: The Trinity"
    },
    //----------------------------------------------------------------------------- Triple Triad - Tournament
    {
        description: "Win a Triple Triad tournament match.",
        name: "Kumite",
        points: 5,
        reward: "-"
    }, {
        description: "Win 10 Triple Triad tournament matches.",
        name: "Kumite Kumite",
        points: 5,
        reward: "-"
    }, {
        description: "Win 30 Triple Triad tournament matches.",
        name: "Kumite Kumite Kumite",
        points: 5,
        reward: "Item: Shantotto Card",
    }, {
        description: "Win 100 Triple Triad tournament matches.",
        name: "Bracket Breaker",
        points: 10,
        reward: "Title: Duelist"
    },
    //----------------------------------------------------------------------------- GATEs
    {
        description: "Successfully complete a GATE.",
        name: "Enemy at the GATE I",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully complete 30 GATEs.",
        name: "Enemy at the GATE II",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully complete 100 GATEs.",
        name: "Enemy at the GATE III",
        points: 10,
        reward: "Title: Keymaster"
    },
    //----------------------------------------------------------------------------- Fungah
    {
        description: "Successfully complete the GATE “Any Way the Wind Blows.”",
        name: "WTFungah I",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully complete the GATE “Any Way the Wind Blows” 5 times.",
        name: "WTFungah II",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully complete the GATE “Any Way the Wind Blows” 10 times.",
        name: "WTFungah III",
        points: 10,
        reward: "Title: The Fungah"
    },
    //----------------------------------------------------------------------------- Jumbo Cactpot
    {
        description: "Win MGP from the Jumbo Cactpot.",
        name: "You Could Already Be a Winner I",
        points: 5,
        reward: "-"
    }, {
        description: "Win a cumulative total of 10,000 MGP from the Jumbo Cactpot.",
        name: "You Could Already Be a Winner II",
        points: 5,
        reward: "-"
    }, {
        description: "Win a cumulative total of 500,000 MGP from the Jumbo Cactpot.",
        name: "You Could Already Be a Winner III",
        points: 5,
        reward: "-"
    }, {
        description: "Win a cumulative total of 1,000,000 MGP from the Jumbo Cactpot.",
        name: "Work Smarter, Not Harder",
        points: 10,
        reward: "Title: Moneybags"
    },
    //----------------------------------------------------------------------------- Mini Cactpot
    {
        description: "Win MGP from the Mini Cactpot.",
        name: "Dream Small I",
        points: 5,
        reward: "-"
    }, {
        description: "Win a cumulative total of 10,000 MGP from the Mini Cactpot.",
        name: "Dream Small II",
        points: 5,
        reward: "-"
    }, {
        description: "Win a cumulative total of 500,000 MGP from the Mini Cactpot.",
        name: "Dream Small III",
        points: 5,
        reward: "-"
    }, {
        name: "Mountains out of Gil-hills",
        points: "10",
        description: "Win a cumulative total of 1,000,000 MGP from the Mini Cactpot.",
        reward: "Title: Raiser of Mountains"
    },
    //----------------------------------------------------------------------------- Verminion
    {
        name: "Challenge Accepted",
        point: "10",
        description: "Complete the first 24 Verminion Challenges.",
        reward: "Clockwork Twintania Minion"
    },
    {
        name: "A Load of Verminion I",
        points: "5",
        description: "Win a Lord of Verminion player battle (RP) match.",
        reward: ""
    }, {
        name: "A Load of Verminion II",
        points: "5",
        description: "Win 50 Lord of Verminion player battle (RP) matches.",
        reward: "Shalloweye Minion"
    }, {
        name: "A Load of Verminion III",
        points: "5",
        description: "Win 100 Lord of Verminion player battle (RP) matches.",
        reward: "Title: Prince/Princess of Verminion"
    }, {
        name: "A Load of Verminion IV",
        points: "10",
        description: "Win 300 Lord of Verminion player battle (RP) matches.",
        reward: "Title: Lord/Lady of Verminion"
    }, {
        name: "The Road of Verminion I",
        points: "10",
        description: "Complete 4 different Lord of Verminion tournaments with double digit victories.",
        reward: "Penguin Prince Minion"
    },
    //----------------------------------------------------------------------------- Leap of Faith
    {
        name: "One Small Leap",
        points: "5",
        description: "Obtain a gilded cactuar in the GATE \"Leap of Faith.\"",
        reward: ""
    }, {
        name: "Ten Small Leaps",
        points: "5",
        description: "Obtain a total of 10 gilded cactuars from the GATE \"Leap of Faith.\"",
        reward: ""
    }, {
        name: "Twenty Small Leaps",
        points: "10",
        description: "Obtain a total of 20 gilded cactuars from the GATE \"Leap of Faith.\"",
        reward: ""
    },
    //----------------------------------------------------------------------------- Air Force One
    {
        name: "Air Force Won I",
        points: "5",
        description: "Record a perfect score in the GATE \"Air Force One.\"",
        reward: ""
    }, {
        name: "Air Force Won II",
        points: "5",
        description: "Record a perfect score in the GATE \"Air Force One\" 10 times",
        reward: ""
    }, {
        name: "Air Force Won III",
        points: "10",
        description: "Record a perfect score in the GATE \"Air Force One\" 20 times",
        reward: ""
    },
    //----------------------------------------------------------------------------- The Slice Is Right
    {
        name: "Right on the Money I",
        points: "5",
        description: "Successfully complete the GATE \"The Slice Is Right.\"",
        reward: ""
    }, {
        name: "Right on the Money II",
        points: "5",
        description: "Successfully complete the GATE \"The Slice Is Right\" 5 times.",
        reward: ""
    }, {
        name: "Right on the Money III",
        points: "10",
        description: "Successfully complete the GATE \"The Slice Is Right\" 10 times.",
        reward: "Title: Kindred Sword"
    },
    //----------------------------------------------------------------------------- Mahjong
    {
        name: "Tile and Error I",
        points: "5",
        description: "Achieve a mahjong rating of more than 1600.",
        reward: "Doman Distractions Orchestrion Roll"
    }, {
        name: "Tile and Error II",
        points: "5",
        description: "Achieve a mahjong rating of more than 1800.",
        reward: "Title: Mahjong Enthusiast "
    }, {
        name: "Tile and Error III",
        points: "10",
        description: "Achieve a mahjong rating of more than 2000.",
        reward: "Title: Mahjong Master"
    },
];
