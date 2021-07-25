**Features**
* Editing of Custom Task order & values
* "Favorite" groups for quick nav
* Possible "Legacy Quest" section for removed quests
* Toggle between dropdown & text filter for applicable columns
* Pin tasks to top-level group i.e. Watch function
* Add xivapi CLI option to re-cache content with diffs
* Add an Armoire section
* Add the Lucis & Resplendent relics

**Defects**
* Leve Issue/Start zones, follow up with XIVAPI
* Achievement _error 683 & 685 Mapping Binding Coil IV & VI
* Quest/67635 is the only one without an NPC via XIVAPI (Tobana)
    add method to exclude certain fields in certain ids from merge

**Changes**
* Removed Total_Items from xivapi configs and create function to combine all
  existing ids in cache then compare against pulled list of ids
* Potentially remove ENpcResident from xivapi script
* Consider getting Recipe data independent of RecipeNotebookList
    so that a fresh cache isn't necessary each update
* Move relic gear to top-level Equipment category
  in prep for Armoire & all glam

**Must Do**
* Add triad cards
* Add triad opponents???
* See why these were only just added as a recipe
  Flat Cap
  Coeurl Eyeglasses
  Magic Broom
* Connect all task dependencies of next/previous
* Zadnor Aetheryte Coordinates
* Zadnor Lost Actions
