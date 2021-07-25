**Features**
* Editing of Custom Task order & values
* "Favorite" groups for quick nav
* Possible "Legacy Quest" section for removed quests
* Toggle between dropdown & text filter for applicable columns
* Pin tasks to top-level group i.e. Watch function
* Add xivapi CLI option to re-cache content with diffs
* Add an Armoire section
* Add the Lucis relics

**Defects**
* Leve Issue/Start zones, follow up with XIVAPI
* Re-run quest cache comparison for quest levels
    see ClassJobLevel0 + QuestLevelOffset
* Achievement _error 683 & 685 Mapping Binding Coil IV & VI
* Quest/67635 is the only one without an NPC via XIVAPI (Tobana)
    add method to exclude certain fields in certain ids from merge

**Changes**
* Removed Total_Items from xivapi configs and create function to combine all
  existing ids in cache then compare against pulled list of ids
* Potentially remove ENpcResident from xivapi script
* Consider getting Recipe data independent of RecipeNotebookList
    so that a fresh cache isn't necessary each update

**Must Do**
* Add Resplendent Relics
* See why these was only just added as a recipe
  Flat Cap
  Coeurl Eyeglasses
  Magic Broom
