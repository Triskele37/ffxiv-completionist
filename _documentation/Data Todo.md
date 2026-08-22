**Add**
* "Legacy Quest" section

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
  * All beast tribe quests chained from quests unlocked by In Pursuit of the Past
  * Aetheryte unlocks in msq

**Placement**

**Verify**
* "Close to Home"s are based on starting class, so 8 different ones

**Chaining**
* unsellable/tradable collectables to source? (one-way)
  * mounts/minions/cards/fate achievements
  * i.e. an achievement doesn't chain the mount, but the mount chains the achievement
* V&C Achievements to duties
* Relic weapon to quests?

**Localization**

**Architecture**
* Finish omitting FATEs
* Convert DataGroup.tasks to Map<string, Task>
* Implement "build" step for resources so release doesn't transform resources when read
* Follow up on Model rewrite
  * Hoist into root so model can be shared between ipcMain/ipcRenderer
  * Unit tests
  * Find and pull out more model logic from within components
