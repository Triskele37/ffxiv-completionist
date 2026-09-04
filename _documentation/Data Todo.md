**Add**
* "Legacy Quest" section

**Missing**
* Delivery Moogle quests after "Thwack-a-Mole" have no chain information (anywhere)
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
  * cUnlock & cUnlocks helps with this
* V&C Achievements to duties
* Relic weapon to quests?

**Localization**

**Architecture**
* Finish omitting FATEs
* Add DataGroup.tasksById Map<string, Task> for lookup
* Re-add DataGroup.subGroups DataGroup[] for iteration
	* rename current Map<string, DataGroup> to subGroupsByKey for lookup
* Tech-debt
  * Pull shared logic up to a /common for shared ipcMain/ipcRenderer types/logic
  * Unit tests
