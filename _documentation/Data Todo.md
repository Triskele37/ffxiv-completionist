------------------------------------------------------------------ Current Release
**Add**
- missing endwalker savage unlock quasi quest
- DSR Unlock Quasi

**Change**
- Convert DataGroup.tasks to Map<string, Task>
- flatten Duty/Raid Finder group

**Fix**
- Order all groups to in-game order
  - Achievement
  - Title
  - Crafting Log
- Changing starting class resets completion on tasks outside of the starting city MSQ and content directly related to them
- Move Forged Anew resistance sidequest into quasi-quests

------------------------------------------------------------------ Prioritize
**Add**
- Discord FAQ Page
- chain unsellable/tradable collectables to source? (one-way)
  - mounts/minions/cards/fate achievements
- chain duties to the quests requiring them (one-way)
- Add all Unlock values to Unlock type quests

**Change**
- save starting class in player save
- overhaul orchestrion log

**Fix**
- Missing Unlock
    - 66999 - Marvelously Mutable Materia
    - All job stones chained from quests unlocked by Sylph-management
    - All beast tribe quests chained from quests unlocked by In Puruit of the Past
    - Aetheryte unlocks in msq
- "Close to Home"s are based on starting class, so 8 different ones
- Triad opponents need re-verification of patch (arrtripletriad.com/en/npcs)
- Delivery Moogle quests after "Thwack-a-Mole" have no chain information (anywhere)

------------------------------------------------------------------ Future
**Add**
- detail each set of chains in a doc list for easier updates
- "Legacy Quest" section
- Patch column on all data
- Equipment Section
  - Armoire
  - All Glam
  - Move Relic here

**Change**
- Rename long keys to reduce link string lengths
  - Priority: eureka, bozja

**Fix**
- "Just Deserts" unlocks "Guild Leves"
- The 3 "Call of the Sea" ARR MSQs could be chained if starting class is set
