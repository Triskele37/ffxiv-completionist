------------------------------------------------------------------ Data
**Add**
* "Legacy Quest" section
* Chocobo Training & Racing Courses?

**Missing**
* Delivery Moogle quests after "Thwack-a-Mole" have no chain information (anywhere)
* DSR Unlock Quasi
* asphodelos savage unlock quasi quest (Recount tales of Asphodelos?)
* abyssos savage unlock quasi quest
* Unlocks
  * various quests
  * "Just Deserts" unlocks "Guild Leves"
  * 66999 - Marvelously Mutable Materia
  * All job stones chained from quests unlocked by Sylph-management
  * All beast tribe quests chained from quests unlocked by In Puruit of the Past
  * Aetheryte unlocks in msq

**Placement**
* Move Forged Anew resistance sidequest into quasi-quests

**Verify**
* "Close to Home"s are based on starting class, so 8 different ones
* Triad opponents need re-verification of patch (arrtripletriad.com/en/npcs)
* Title achievement links
  * "of the golden" crafter/gatherer
  * Charlemend's Angel
  * Skirmisher
  * Storm Growler
  * Storm Hound
  * Serpent Puppy
  * Serpent Howler
  * Serpent Growler
  * Serpent Hound
* Title Order
  * Starts going out of wack at or under "Master of the Sea"
  * Titles below "Risensung X" and above "Saint x" might belong there
* Some Titles may be seasonal events and un'X'd

------------------------------------------------------------------ Chaining
* The 3 "Call of the Sea" ARR MSQs could be chained if starting class is set
* unsellable/tradable collectables to source? (one-way)
  * mounts/minions/cards/fate achievements
  * i.e. an achievement doesn't chain the mount, but the mount chains the achievement
* V&C Achievements to duties
* Relic weapon to quests?

------------------------------------------------------------------ Localization
* Currencies to i18n, move values from local to cmn

------------------------------------------------------------------ Architecture
* Convert DataGroup.tasks to Map<string, Task>
* save starting class in player save
* Rename long keys to reduce link string lengths
  * Priority: eureka, bozja
* Implement "build" step for resources so release doesn't transform resources when read
* Follow up on Model rewrite
  * Hoist into root so model can be shared between ipcMain/ipcRenderer
  * Unit tests
  * Find and pull out more model logic from within components
* Remove "Definition" pattern
  * Define child groups directly in resource json
  * (just duplicate guildhests, its the only reason definitions exist)
  * Strictly match against lowercase and dashes when loading
    * ensures no shenanigans with fs loading a path partial within a file outside the app
    * change any keys that do not match this pattern
