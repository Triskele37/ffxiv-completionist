**Features**
* Editing of Custom Task order & values
* "Favorite" groups for quick nav
* Possible "Legacy Quest" section for removed quests
* Toggle between dropdown & text filter for applicable columns
* Pin tasks to top-level group i.e. Watch function
* Add xivapi CLI option to re-cache content with diffs

**Defects**
* Leve Issue/Start zones, follow up with XIVAPI
* Re-run quest cache comparison for quest levels
    see ClassJobLevel0 + QuestLevelOffset

**Changes**
* Removed Total_Items from xivapi configs and create function to combine all
  existing ids in cache then compare against pulled list of ids
