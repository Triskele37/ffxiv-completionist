------------------------------------------------------------------ Current Release ToDo
**Add**
- Settings
    - Move Starting Class logic here
    - Add other config.json settings
- Chaining
    - achievement/battle/battle hunt logs
    - quest achievement siblings
    - verify achievement chaining
- Favorites - Pin groups and tasks
- Editing of Custom Task values (maybe order)
- Trust Levels

**Change**

**Fix**
- several console logs left in, id column left in

------------------------------------------------------------------ Upcoming ToDo
**Add**
- Armoire section
- Make ID column a setting in development only

**Change**
- Move relic gear to top-level Equipment category in prep for Armoire & all glam
- Remove Total_Items from xivapi configs and create function to combine all
  existing ids in cache then compare against pulled list of ids
- Get Recipe data independent of RecipeNotebookList
  so that a fresh cache isn't necessary each update
- Move quasi-quests into the group they would be in

**Fix**
- Class quests are mixed between the deprecated and in-game actuals
- Call of the Sea usage (66210 - gridania limsa, 66209 - uldah)
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
