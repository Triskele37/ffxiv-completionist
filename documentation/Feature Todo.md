------------------------------------------------------------------ Current Release ToDo
**Add**
- beast tribe quest recipe chaining
- chain duties to quests & achievements requiring them
- much of new content needs manual verification of chains
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

**Change**

**Fix**
- Remove old PLD trial weapon recipes
- Starting Class needs to have short/long values for translation purposes
- Clicking the main menu in breadcrumbs, then a subGroup, does not change on first click

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
