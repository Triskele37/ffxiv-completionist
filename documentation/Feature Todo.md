------------------------------------------------------------------ Current Release ToDo
**Add**
- beast tribe quest recipe chaining
- chain duties to quests & achievements requiring them
- much of new content needs manual verification of chains

**Change**

**Fix**
- new titles missing patch
- Gathering "view all" issue
- Build pathing issue to resources "../resources/resources/common/./index.json"
- Build does not produce an .exe and misses including resources
- Save automatically puts "N" for every item, making defaultCompletion not work
- Leve Issue/Start zones
- Mac Support
- bug with quick-mark (use emotes, X > N, N > Y, undo. chaining marks 3 as still completed)
- Remove old PLD trial weapon recipes

----- Check
White Oak Branch moved from logging 70 to logging 75 log

------------------------------------------------------------------ High Priority
**Add**
- Attempt to get CSP working
- Toolset to allow translation of single words/phrases and shove those in resources
- Custom application container, specifically title bar
- api action to apply new cache pathing to existing cache without re-downloading

**Change**
- auto-updater
- "spotlight" when searching (scroll to maybe?)
- detach lang specific resources to a download after installation

**Fix**
- Scholar/Summoner levels don't tie together properly
- may have excluded the wrong Way of the Arcanist?
- double check known diffs for quests (lots of weirdness with class/job)
- weirdness going on with q69620

------------------------------------------------------------------ Low Priority
**Add**
- "Legacy Quest" section for removed quests
- patch column everywhere
- Armoire section

**Change**
- Move relic gear to top-level Equipment category in prep for Armoire & all glam
- Get Recipe data independent of RecipeNotebookList
  so that a fresh cache isn't necessary each update
- emotes by in-game tabs

**Fix**
- Quest/67635 is the only one without an NPC via XIVAPI (Tobana)
  add method to exclude certain fields in certain ids from merge
