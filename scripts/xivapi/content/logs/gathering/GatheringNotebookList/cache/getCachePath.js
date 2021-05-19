module.exports = function(GatheringNotebookList) {
    const ID = GatheringNotebookList.ID;
    let subdirs = ["_error"];

    // Level-Based
         if(level_01_05.includes(ID)) subdirs = ["level-based", "level-1-5"];
    else if(level_06_10.includes(ID)) subdirs = ["level-based", "level-6-10"];
    else if(level_11_15.includes(ID)) subdirs = ["level-based", "level-11-15"];
    else if(level_16_20.includes(ID)) subdirs = ["level-based", "level-16-20"];
    else if(level_21_25.includes(ID)) subdirs = ["level-based", "level-21-25"];
    else if(level_26_30.includes(ID)) subdirs = ["level-based", "level-26-30"];
    else if(level_31_35.includes(ID)) subdirs = ["level-based", "level-31-35"];
    else if(level_36_40.includes(ID)) subdirs = ["level-based", "level-36-40"];
    else if(level_41_45.includes(ID)) subdirs = ["level-based", "level-41-45"];
    else if(level_46_50.includes(ID)) subdirs = ["level-based", "level-46-50"];
    else if(level_51_55.includes(ID)) subdirs = ["level-based", "level-51-55"];
    else if(level_56_60.includes(ID)) subdirs = ["level-based", "level-56-60"];
    else if(level_61_65.includes(ID)) subdirs = ["level-based", "level-61-65"];
    else if(level_66_70.includes(ID)) subdirs = ["level-based", "level-66-70"];
    else if(level_71_75.includes(ID)) subdirs = ["level-based", "level-71-75"];
    else if(level_76_80.includes(ID)) subdirs = ["level-based", "level-76-80"];

    // Folklore
    else if(coerthan_folklore.includes(ID)) subdirs = ["special", "coerthan-folklore"];
    else if(dravanian_folklore.includes(ID)) subdirs = ["special", "dravanian-folklore"];
    else if(abalathian_folklore.includes(ID)) subdirs = ["special", "abalathian-folklore"];
    else if(gyrAbanian_folklore.includes(ID)) subdirs = ["special", "gyr-abanian-folklore"];
    else if(othardian_folklore.includes(ID)) subdirs = ["special", "othardian-folklore"];
    else if(vrandtic_folklore.includes(ID)) subdirs = ["special", "vrandtic-folklore"];

    // Collectables
    else if(collectables_1_51_55.includes(ID)) subdirs = ["special", "collectables-1"];
    else if(collectables_1_56_60.includes(ID)) subdirs = ["special", "collectables-1"];
    else if(collectables_1_61_65.includes(ID)) subdirs = ["special", "collectables-1"];
    else if(collectables_1_66_70.includes(ID)) subdirs = ["special", "collectables-1"];
    else if(collectables_2_71_75.includes(ID)) subdirs = ["special", "collectables-2"];
    else if(collectables_2_76_80.includes(ID)) subdirs = ["special", "collectables-2"];

    // Skysteel Tools
    else if(skysteel_tools_1.includes(ID)) subdirs = ["special", "skysteel-tools"];
    else if(skysteel_tools_2.includes(ID)) subdirs = ["special", "skysteel-tools"];
    else if(skysteel_tools_3.includes(ID)) subdirs = ["special", "skysteel-tools"];

    // Diadem
    else if(ishgard_restoration_4.includes(ID)) subdirs = ["special", "ishgard-restoration"];

    // Job
    const jobs = ["mining", "quarrying", "logging", "harvesting"];
    let job = "_error";
    if(ID < 2000) job = jobs[Math.floor(ID / 40)];
    else job = jobs[ID % jobs.length];

    return [job, ...subdirs];
};

//----------------------------------------------------------------------------- Fuck It
const level_01_05 = [0, 40, 80, 120];
const level_06_10 = [1, 41, 81, 121];
const level_11_15 = [2, 42, 82, 122];
const level_16_20 = [3, 43, 83, 123];
const level_21_25 = [4, 44, 84, 124];
const level_26_30 = [5, 45, 85, 125];
const level_31_35 = [6, 46, 86, 126];
const level_36_40 = [7, 47, 87, 127];
const level_41_45 = [8, 48, 88, 128];
const level_46_50 = [9, 49, 89, 129];
const level_51_55 = [10, 50, 90, 130];
const level_56_60 = [11, 51, 91, 131];
const level_61_65 = [12, 52, 92, 132];
const level_66_70 = [13, 53, 93, 133];
const level_71_75 = [14, 54, 94, 134];
const level_76_80 = [15, 55, 95, 135];

const coerthan_folklore = [2000, 2001, null, 2003];
const dravanian_folklore = [2004, 2005, 2006, 2007];
const abalathian_folklore = [2008, 2009, 2010, 2011];
const gyrAbanian_folklore = [2012, null, 2014, 2015];
const othardian_folklore = [2016, null, null, 2019];
const vrandtic_folklore = [2020, 2021, 2022, null];

// const ishgard_restoration_1 = [2200, 2201, 2202, 2203]; // G1 removed
// const ishgard_restoration_2 = [2204, 2205, 2206, 2207]; // G2 removed
// const ishgard_restoration_3 = [2212, 2213, 2214, 2215]; // G3 removed
const ishgard_restoration_4 = [2248, 2249, 2250, 2251]; // G4

const skysteel_tools_1 = [2208, 2209, 2210, 2211]; // Step 1
const skysteel_tools_2 = [2216, 2217, 2218, 2219]; // Step 2
const skysteel_tools_3 = [2252, 2253, 2254, 2255]; // Step 3

const collectables_1_51_55 = [2220, 2221, 2222, 2223];
const collectables_1_56_60 = [2224, 2225, 2226, 2227];
const collectables_1_61_65 = [2228, 2229, 2230, 2231];
const collectables_1_66_70 = [2232, 2233, 2234, 2235];
const collectables_2_71_75 = [2236, 2237, 2238, 2239];
const collectables_2_76_80 = [2240, 2241, 2242, 2243];

//2244-2247 errored
