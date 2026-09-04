**General**
> Files under `resources` and in `desktop/renderer/assets/i18n` have content to be localized  
> Only the right side of any value should be translated  

**Translate Helper App**
> Run `npm run start` in the `/translate` directory to use the translate helper app  
> The app searches all data for "untranslated" values, which are just values that are the same as the english string  
> It helps either write a translated value directly to data, or add a "ignore reason"/s if the value does not need translation  

**Automated Sections**
> The following sections require *groupName* and *column* translations only  
> * Achievements
> * Barding
> * Crafting Log
> * Emote
> * Fate
> * Levequests
> * Quests
> * Title

**Additional Translations**
> Quests  
> This section also requires translation of the "Unlock" field
