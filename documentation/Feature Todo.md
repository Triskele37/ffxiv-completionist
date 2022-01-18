------------------------------------------------------------------ Current Release ToDo
**Add**
- bookmark groups
- Attempt to get CSP working

----- Chains
Oh, Beehive Yourself should grant Satisfaction Guaranteed-Shirr I
all other first quests for custom deliveries too
Lighting the Way should grant Bio-Doma V (and Philanthropist?)
Manderville Mambo from Don't Do the Dewprism
Shadow Walk With Me should chain Tales to be Told

**Change**
gut additional package.json dependencies if possible
- Searching UX
- Remove native toolbar
  - New/Load & Lang to settings

**Fix**
- Go through all files & verify stuff
- Disable sorting on all task view
- add nav to group in all task view
- Build pathing issue to resources "../resources/resources/common/./index.json"
- Build does not produce an .exe and misses including resources
- Clean up injection spaghetti from electron main process change
- Save automatically puts "N" for every item, making defaultCompletion not work
- Scholar/Summoner levels don't tie together properly
- Achievement _error 683 & 685 Mapping Binding Coil IV & VI
- Leve Issue/Start zones, follow up with XIVAPI
- Large-scale performance enhancement (ram & cpu)
- Mac Support
fr shb trials has duplicate headers
bug with quick-mark (use emotes, X > N, N > Y, undo. chaining marks 3 as still completed)

----- Check
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

------------------------------------------------------------------ Upcoming ToDo
**Add**
- Armoire section
- Toolset to allow translation of single words/phrases and shove those in resources
- notification bubbles to any unread instructions (use config store)
- Custom application container, specifically title bar

**Change**
- Move relic gear to top-level Equipment category in prep for Armoire & all glam
- Remove Total_Items from xivapi configs and create function to combine all
  existing ids in cache then compare against pulled list of ids
- Get Recipe data independent of RecipeNotebookList
  so that a fresh cache isn't necessary each update
- Move quasi-quests into the group they would be in
- detach lang specific resources to a download after installation

**Fix**
- Quest/67635 is the only one without an NPC via XIVAPI (Tobana)
  add method to exclude certain fields in certain ids from merge

------------------------------------------------------------------ Future ToDo
**Add**
- "Legacy Quest" section for removed quests
- xivapi CLI option to re-cache only content with app/cache diffs
- "MERGE_WHEN_NEW" set of keys for xivapi content

**Change**
- Remove ENpcResident from xivapi script

**Fix**
