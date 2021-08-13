------------------------------------------------------------------ Current Release ToDo
**Add**
- Chaining
    - Run through every section and test
- Favorites - Pin groups and tasks

**Change**

**Fix**
fr shb trials has duplicate headers

------------------------------------------------------------------ Upcoming ToDo
**Add**
- Armoire section
- Mac Support (dependent on angular-electron upgrade)
- Toolset to allow translation of single words/phrases and shove those in resources
- notification bubbles to any unread instructions (use config store)

**Change**
- Searching UX
- remove group level chain prop
- electron-vue to angular-electron
- PrimeNG for UI components and app theme
- Move language change into settings page
- Move relic gear to top-level Equipment category in prep for Armoire & all glam
- Remove Total_Items from xivapi configs and create function to combine all
  existing ids in cache then compare against pulled list of ids
- Get Recipe data independent of RecipeNotebookList
  so that a fresh cache isn't necessary each update
- Move quasi-quests into the group they would be in
- Rename "Overall" to "FFXIV Completionist" regarding crumbs
- detach lang specific resources to a download after installation

**Fix**
- Class quests are mixed between the deprecated and in-game actuals
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
