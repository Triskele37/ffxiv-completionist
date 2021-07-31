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
* Class quests are mixed between the deprecated and in-game actuals
* Call of the Sea usage (66210 - gridania limsa, 66209 - uldah)

**Changes**
* Remove Total_Items from xivapi configs and create function to combine all
  existing ids in cache then compare against pulled list of ids
* Potentially remove ENpcResident from xivapi script
* Consider getting Recipe data independent of RecipeNotebookList
    so that a fresh cache isn't necessary each update
* Move relic gear to top-level Equipment category
  in prep for Armoire & all glam
* Add a "MERGE_WHEN_NEW" set of keys for xivapi content
* Move quasi-quests into the group they would be in

**Must Do**
* Fix ToDos
    - achievement/exploration/duty contains diadem achievements
    - several console logs left in, id column left in

* Tables in groups with sub groups overflows page

* Connect all task dependencies of next/previous
    Companion Skills
    Hall of the Novice
    Mounts
    Minions
    Orchestrion
    Emotes
    Fashion Accessories
    Triple Triad Cards
    Title

* Chain Features
    - Notification Window
    - Undo for last chain
    - Toggle feature on/off?

* Chain ToDos
    - achievement/battle/battle hunt logs
    - beast tribe quest achievement siblings (quests & rep based quests)
    - quest achievement siblings
    - how to handle all resplendent achievement between each crafter
