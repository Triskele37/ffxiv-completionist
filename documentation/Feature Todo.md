------------------------------------------------------------------ Current Release ToDo
**Add**
- Fill in fishing/spearfishing scaffold
- Still needs translate support
    - Landing Page
    - Nav History
    - Custom Task Overlay
    - Quick-Mark Overlay
    - Selection Actions Overlay
    - Chain Overlay
    - Table Actions Overlay
    - Row Actions
    - Statistics Tooltip
    - Table Header
        - Rows Displayed
        - All Task Button
- Chains
  - Majority of new content
  - Beast Tribe Recipes on Beast Tribe Quests (one-way)
  - Duties on Quests (one-way)
  - Duties & Achievements (two-way)
  - Mount Speed Increases on Quests (two-way)

**Change**

**Fix**
- Remove old PLD trial weapon recipes
- Starting Class needs to have short/long values for translation purposes
- Clicking the main menu in breadcrumbs, then a subGroup, does not change on first click
- the seasonal quest "Feline Fun" from Heavensturn 2022 is missing
- Scroll height issue w/ Seventh Umbral section due to subGroups and large table
- the "My First Gladius/Hora/etc." quests for each of the starting classes should be excluded for that class, as they're only available for classes other than the starting ones
  Rogue's level 1 quests names are a bit different so I'm not sure if it applies to them but I assume it does

------------------------------------------------------------------ High Priority
**Add**
- Attempt to get CSP working
- Toolset to allow translation of single words/phrases and shove those in resources
- Custom application container, specifically title bar
- api action to apply new cache pathing to existing cache without re-downloading
- Capitalize NPC names when merging into resources from API

**Change**
- "spotlight" when searching (scroll to maybe?)

**Fix**
- Triad opponents need re-verification of patch (arrtripletriad.com/en/npcs)
- new titles missing patch from api
- Scholar/Summoner levels don't tie together properly
- may have excluded the wrong Way of the Arcanist?
- double check known diffs for quests (lots of weirdness with class/job)
- weirdness going on with q69620
- Leve Issue/Start zones?
- Delivery Moogle quests after "Thwack-a-Mole" have no chain information (anywhere)

------------------------------------------------------------------ Low Priority
**Add**
- "Legacy Quest" section
- Patch column on all data
- Equipment Section
  - Armoire
  - All Glam
  - Move Relic here
- Installation
  - auto-update
  - download lang resources at time of lang change

**Change**
- emotes by in-game tabs

**Fix**
- Quest/67635 is the only one without an NPC via XIVAPI (Tobana)
  add method to exclude certain fields in certain ids from merge
- The 3 "Call of the Sea" ARR MSQs could be chained if starting class is set
