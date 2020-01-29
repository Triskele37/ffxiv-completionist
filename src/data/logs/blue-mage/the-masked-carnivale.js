import { DataGroup } from "../../DataGroup";

export const General_Logs_Blue_Mage_The_Masked_Carnivale = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks, [
        { header: "Level", key: "level", styles: { centered: true } },
        { header: "Name", key: "name" },
        { header: "Standard Time", key: "standardTime" },
        { header: "Ideal Time", key: "idealTime" },
    ]);
};

const tasks = [
    {
        level: "1",
        name: "All's Well That Starts Well",
        standardTime: "0:30",
        idealTime: "0:20"
    }, {
        level: "2",
        name: "Much Ado About Pudding",
        standardTime: "3:30",
        idealTime: "2:30"
    }, {
        level: "3",
        name: "Waiting For Golem",
        standardTime: "3:45",
        idealTime: "2:45"
    }, {
        level: "4",
        name: "Gentlemen Prefer Swords",
        standardTime: "3:30",
        idealTime: "2:35"
    }, {
        level: "5",
        name: "The Threepenny Turtles",
        standardTime: "1:20",
        idealTime: "0:45"
    }, {
        level: "6",
        name: "Eye Society",
        standardTime: "3:20",
        idealTime: "2:25"
    }, {
        level: "7",
        name: "A Chorus Slime",
        standardTime: "3:30",
        idealTime: "2:40"
    }, {
        level: "8",
        name: "The Bomb-edy of Errors",
        standardTime: "3:45",
        idealTime: "2:45"
    }, {
        level: "9",
        name: "To Kill a Mockingslime",
        standardTime: "4:45",
        idealTime: "3:30"
    }, {
        level: "10",
        name: "A Little Knight Music",
        standardTime: "4:30",
        idealTime: "3:10"
    }, {
        level: "11",
        name: "Some Like It Excrutiatingly Hot",
        standardTime: "3:30",
        idealTime: "2:30"
    }, {
        level: "12",
        name: "The Plant-om of the Opera",
        standardTime: "4:30",
        idealTime: "3:10"
    }, {
        level: "13",
        name: "Beauty and a Beast",
        standardTime: "4:30",
        idealTime: "3:30"
    }, {
        level: "14",
        name: "Blobs in the Woods",
        standardTime: "3:00",
        idealTime: "2:30"
    }, {
        level: "15",
        name: "The Me Nobody Nodes",
        standardTime: "4:45",
        idealTime: "3:45"
    }, {
        level: "16",
        name: "Sunset Bull-evard",
        standardTime: "4:30",
        idealTime: "3:30"
    }, {
        level: "17",
        name: "The Sword of Music",
        standardTime: "5:30",
        idealTime: "4:15"
    }, {
        level: "18",
        name: "Midsummer Night's Explotion",
        standardTime: "6:00",
        idealTime: "4:20"
    }, {
        level: "19",
        name: "On a Clear Day You Can Smell Forever",
        standardTime: "5:00",
        idealTime: "4:00"
    }, {
        level: "20",
        name: "Miss Typhon",
        standardTime: "6:00",
        idealTime: "5:10"
    }, {
        level: "21",
        name: "Chimera on a Hot Tin Roof",
        standardTime: "4:15",
        idealTime: "3:15"
    }, {
        level: "22",
        name: "Here Comes the Boom",
        standardTime: "5:00",
        idealTime: "4:00"
    }, {
        level: "23",
        name: "Behemoths and Broomsticks",
        standardTime: "5:00",
        idealTime: "3:45"
    }, {
        level: "24",
        name: "Amazing Technicolor Pit Fiends",
        standardTime: "6:45",
        idealTime: "5:40"
    }, {
        level: "25",
        name: "Dirty Rotten Azulmagia",
        standardTime: "8:45",
        idealTime: "7:15"
    }, {
        level: "26",
        name: "Papa Mia",
        standardTime: "5:00",
        idealTime: "4:00"
    }, {
        level: "27",
        name: "Lock Up Your Snorters",
        standardTime: "4:00",
        idealTime: "2:20"
    }, {
        level: "28",
        name: "Dangerous When Dead",
        standardTime: "6:00",
        idealTime: "5:00"
    }, {
        level: "29",
        name: "Red, Fraught, and Blue",
        standardTime: "8:00",
        idealTime: "7:00"
    }, {
        level: "30",
        name: "The Catch of Siegfried",
        standardTime: "7:30",
        idealTime: "6:30"
    }
];
