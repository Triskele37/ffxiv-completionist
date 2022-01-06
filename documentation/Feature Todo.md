------------------------------------------------------------------ Current Release ToDo
**NOTES**
Removed additionalColumnConfig when adding fromDefinition
removed strict dependency on resource structure to xivapi

need to completely re-implement electron-store
    don't use conf either

possible required polyfills
    path
    fs
    util
    crypto
    assert
    os

gut additional package.json dependencies if possible

**Add**

**Change**

**Fix**
fr shb trials has duplicate headers

------------------------------------------------------------------ Upcoming ToDo
**Add**
- Favorites - Pin groups and tasks
- Armoire section
- Mac Support
- Toolset to allow translation of single words/phrases and shove those in resources
- notification bubbles to any unread instructions (use config store)
- Custom application container, specifically title bar

**Change**
- Searching UX
- electron-vue to angular-electron
- PrimeNG for UI components and app theme
- Remove native toolbar
  - New/Load & Lang to settings
- Move relic gear to top-level Equipment category in prep for Armoire & all glam
- Remove Total_Items from xivapi configs and create function to combine all
  existing ids in cache then compare against pulled list of ids
- Get Recipe data independent of RecipeNotebookList
  so that a fresh cache isn't necessary each update
- Move quasi-quests into the group they would be in
- Rename "Overall" to "FFXIV Completionist" regarding crumbs
- detach lang specific resources to a download after installation

**Fix**
- Save automatically puts "N" for every item, making defaultCompletion not work
- Scholar/Summoner levels don't tie together properly
- Achievement _error 683 & 685 Mapping Binding Coil IV & VI
- Leve Issue/Start zones, follow up with XIVAPI
- Quest/67635 is the only one without an NPC via XIVAPI (Tobana)
  add method to exclude certain fields in certain ids from merge
- Large-scale performance enhancement (ram & cpu)
  Target DataGroup & Task to make smaller
  Aim at removing imports as much as possible

------------------------------------------------------------------ Future ToDo
**Add**
- "Legacy Quest" section for removed quests
- xivapi CLI option to re-cache only content with app/cache diffs
- "MERGE_WHEN_NEW" set of keys for xivapi content

**Change**
- Remove ENpcResident from xivapi script

**Fix**

------------------------------------------------------------------ Chains
Oh, Beehive Yourself should grant Satisfaction Guaranteed-Shirr I
    all other first quests for custom deliveries too
Lighting the Way should grant Bio-Doma V (and Philanthropist?)
Manderville Mambo from Don't Do the Dewprism
Shadow Walk With Me should chain Tales to be Told

------------------------------------------------------------------ Check
Double check Amalj'aa "The Gland That Feeds You" is Recognized (46)
Double check app opens at exact size closed through config
Clear completion of Vintage Bow in carpenter log, add note to changelog
Clear completion of Astrolabe in goldsmith log, add note to changelog
Clear completion of Felt Coif of Gathering in weaver log, add note to changelog
Double check Leve locations, update Leve names
Lend Me Your Ears Already (removed quest, did the app keep legacy quests?)
White Oak Branch moved from logging 70 to logging 75 log
Triple Triad Opponents layout is jacked
guildhest missing ilvl
