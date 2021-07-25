const Content = require("../../../Content");

const TripleTriadCard = new Content(__dirname);
TripleTriadCard.NAME = "TripleTriadCard";
TripleTriadCard.API_ENDPOINT = "Item";
TripleTriadCard.APP_PATH = "character/gold-saucer/triple-triad-card-list";

TripleTriadCard.MERGE_KEYS = ["id", "name"];
TripleTriadCard.COMMON_KEYS = ["number", "rarity", "patch"]

TripleTriadCard.filterParams = "AdditionalDataTarget=TripleTriadCard";
// TripleTriadCard.columnParams = "";

module.exports = TripleTriadCard;

/*
{
    "id": 0,
    "number": "001",
    "rarity": "★",
    "patch": "2.51"
},
{
    "id": 0,
    "name": "Dodo",
    "type": "None",
    "opponent": "",
    "acquiredBy": "Quest: Triple Triad Trial"
},
*/
