import { DataGroup } from "../../DataGroup";

export const Achievements_PVP_General = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    //----------------------------------------------------------------------------- Maelstrom
    {
        name: "Cutting Your Wolf Loose: Maelstrom I",
        points: "5",
        description: "Achieve PvP rank 1 with the Maelstrom.",
        reward: "Title: Storm Puppy"
    }, {
        name: "Cutting Your Wolf Loose: Maelstrom II",
        points: "5",
        description: "Achieve PvP rank 10 with the Maelstrom.",
        reward: "Title: Storm Howler"
    }, {
        name: "Cutting Your Wolf Loose: Maelstrom III",
        points: "5",
        description: "Achieve PvP rank 20 with the Maelstrom.",
        reward: "Title: Storm Growler"
    }, {
        name: "Cutting Your Wolf Loose: Maelstrom IV",
        points: "5",
        description: "Achieve PvP rank 30 with the Maelstrom.",
        reward: "Title: Storm Hound"
    }, {
        name: "Cutting Your Wolf Loose: Maelstrom V",
        points: "5",
        description: "Achieve PvP rank 40 with the Maelstrom.",
        reward: "Title: Storm Stalker"
    }, {
        name: "Cutting Your Wolf Loose: Maelstrom VI",
        points: "5",
        description: "Achieve PvP rank 50 with the Maelstrom.",
        reward: "Title: Storm Chaser"
    },
    //----------------------------------------------------------------------------- Adder
    {
        name: "Cutting Your Wolf Loose: Twin Adder I",
        points: "5",
        description: "Achieve PvP rank 1 with the Twin Adder.",
        reward: "Title: Serpent Puppy"
    }, {
        name: "Cutting Your Wolf Loose: Twin Adder II",
        points: "5",
        description: "Achieve PvP rank 10 with the Twin Adder.",
        reward: "Title: Serpent Howler"
    }, {
        name: "Cutting Your Wolf Loose: Twin Adder III",
        points: "5",
        description: "Achieve PvP rank 20 with the Twin Adder.",
        reward: "Title: Serpent Growler"
    }, {
        name: "Cutting Your Wolf Loose: Twin Adder IV",
        points: "5",
        description: "Achieve PvP rank 30 with the Twin Adder.",
        reward: "Title: Serpent Hound"
    }, {
        name: "Cutting Your Wolf Loose: Twin Adder V",
        points: "5",
        description: "Achieve PvP rank 40 with the Twin Adder.",
        reward: "Title: Serpent Stalker"
    }, {
        name: "Cutting Your Wolf Loose: Twin Adder VI",
        points: "5",
        description: "Achieve PvP rank 50 with the Twin Adder.",
        reward: "Title: Serpent Chaser"
    },
    //----------------------------------------------------------------------------- Flames
    {
        name: "Cutting Your Wolf Loose: Immortal Flames I",
        points: "5",
        description: "Achieve PvP rank 1 with the Immortal Flames.",
        reward: "Title: Flame Puppy"
    }, {
        name: "Cutting Your Wolf Loose: Immortal Flames II",
        points: "5",
        description: "Achieve PvP rank 10 with the Immortal Flames.",
        reward: "Title: Flame Howler"
    }, {
        name: "Cutting Your Wolf Loose: Immortal Flames III",
        points: "5",
        description: "Achieve PvP rank 20 with the Immortal Flames.",
        reward: "Title: Flame Growler"
    }, {
        name: "Cutting Your Wolf Loose: Immortal Flames IV",
        points: "5",
        description: "Achieve PvP rank 30 with the Immortal Flames.",
        reward: "Title: Flame Hound"
    }, {
        name: "Cutting Your Wolf Loose: Immortal Flames V",
        points: "5",
        description: "Achieve PvP rank 40 with the Immortal Flames.",
        reward: "Title: Flame Stalker"
    }, {
        name: "Cutting Your Wolf Loose: Immortal Flames VI",
        points: "5",
        description: "Achieve PvP rank 50 with the Immortal Flames.",
        reward: "Title: Flame Chaser"
    },
    //----------------------------------------------------------------------------- Legacy
    {
        name: "Fatal Feast",
        points: "10",
        description: "Emerge victorious in 30 Feast matches while using a title received from the disreputable priest. ",
        reward: "Goten Pipe"
    }, {
        name: "Frontline Fury",
        points: "10",
        description: "Emerge victorious in 10 Frontline or Rival Wings campaigns while using a title received from the disreputable priest.",
        reward: "Ginga Pipe"
    }, {
        name: "Furious Fatalities",
        points: "20",
        description: "Emerge victorious in 60 Frontline or Rival Wings campaigns or Feast matches while using a title received from the disreputable priest.",
        reward: "Raigo Pipe"
    },
];
