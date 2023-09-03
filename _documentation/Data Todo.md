------------------------------------------------------------------
**Add**
- DSR Unlock Quasi
- missing endwalker asphodelos savage unlock quasi quest (Recount tales of Asphodelos?)
- missing endwalker abyssos savage unlock quasi quest
- Toy Chest? (Cheap Dungeon has 5 levels)
- Chain NPC only triad cards to their npc?
- Currencies to i18n, move values from local to cmn

**Change**
- Convert DataGroup.tasks to Map<string, Task>
- Flatten Duty/Raid Finder group
- Flatten gathering section into logs

**Fix**
- Move Forged Anew resistance sidequest into quasi-quests
- Reverify craft/gather log

------------------------------------------------------------------ Prioritize
**Add**
- chain unsellable/tradable collectables to source? (one-way)
  - mounts/minions/cards/fate achievements
- chain duties to the quests requiring them (one-way)
- Add all Unlock values to Unlock type quests

**Change**
- save starting class in player save

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
- "Legacy Quest" section
- Patch column on all data
- Equipment Section
  - Armoire
  - All Glam
  - Move Relic here

**Change**
- Rename long keys to reduce link string lengths
  - Priority: eureka, bozja
- Implement "build" step for resources so release doesn't transform resources when read in

**Fix**
- "Just Deserts" unlocks "Guild Leves"
- The 3 "Call of the Sea" ARR MSQs could be chained if starting class is set
